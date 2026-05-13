import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy singleton — only created when first used at runtime, not at build time
let _client: SupabaseClient | null = null

function getClient() {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) throw new Error('Missing Supabase env vars')
    _client = createClient(url, key)
  }
  return _client
}

export interface LeadInsert {
  product: string
  name?: string
  store_url?: string
  email: string
  pricing_tier?: string
  pain_point?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export async function insertLead(lead: LeadInsert) {
  const { data, error } = await getClient().from('leads').insert(lead).select().single()
  if (error) throw error
  return data
}
