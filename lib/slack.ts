import type { LeadInsert } from './supabase'

export async function notifySlack(lead: LeadInsert & { created_at?: string }) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) return // silently skip if not configured

  const text =
    `*New lead — Pochi* 🛍️\n` +
    `*Name:* ${lead.name ?? '—'}\n` +
    `*Store:* ${lead.store_url ?? '—'}\n` +
    `*Email:* ${lead.email}\n` +
    `*Plan:* ${lead.pricing_tier ?? '—'}\n` +
    `*Pain point:* ${lead.pain_point ?? '—'}\n` +
    `*Source:* ${lead.utm_source ?? '—'} / ${lead.utm_medium ?? '—'} / ${lead.utm_campaign ?? '—'}`

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
}
