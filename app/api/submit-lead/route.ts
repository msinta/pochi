import { NextRequest, NextResponse } from 'next/server'
import { insertLead } from '@/lib/supabase'
import { sendLeadEmail } from '@/lib/resend'
import { notifySlack } from '@/lib/slack'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, storeUrl, email, pricingTier, painPoint } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Pull UTM params from the request headers (passed from client)
    const utmSource = body.utmSource ?? null
    const utmMedium = body.utmMedium ?? null
    const utmCampaign = body.utmCampaign ?? null

    const lead = {
      product: 'pochi',
      name: name ?? null,
      store_url: storeUrl ?? null,
      email,
      pricing_tier: pricingTier ?? null,
      pain_point: painPoint ?? null,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    }

    const inserted = await insertLead(lead)

    // Fire notifications in parallel — don't let either block the response
    await Promise.allSettled([
      sendLeadEmail({ ...lead, created_at: inserted?.created_at }),
      notifySlack({ ...lead, created_at: inserted?.created_at }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[submit-lead]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
