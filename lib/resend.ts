import { Resend } from 'resend'
import type { LeadInsert } from './supabase'

// Lazy — avoids instantiation at build time when env vars aren't present
function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('Missing RESEND_API_KEY')
  return new Resend(key)
}

export async function sendLeadEmail(lead: LeadInsert & { created_at?: string }) {
  const subject = `New lead — Pochi`

  const text = `
Name: ${lead.name ?? '—'}
Store: ${lead.store_url ?? '—'}
Email: ${lead.email}
Plan selected: ${lead.pricing_tier ?? '—'}
Pain point: ${lead.pain_point ?? '—'}
Source: ${lead.utm_source ?? '—'} / ${lead.utm_medium ?? '—'} / ${lead.utm_campaign ?? '—'}
Time: ${lead.created_at ?? new Date().toISOString()}
`.trim()

  await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
    to: process.env.LEAD_NOTIFICATION_EMAIL!,
    subject,
    text,
  })
}
