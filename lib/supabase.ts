// SERVER-ONLY. Uses the Supabase service-role key, which bypasses RLS.
// Never import this from a client component or any code that ends up in the
// browser bundle. SUPABASE_SERVICE_ROLE_KEY has no NEXT_PUBLIC_ prefix so it
// won't be exposed even if accidentally imported, but treat it as sensitive.
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

function getClient() {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL')
    if (!key) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY')
    _client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }
  return _client
}

export interface LeadInsert {
  product: string
  name?: string | null
  store_url?: string | null
  email: string
  pricing_tier?: string | null
  pain_point?: string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
}

export async function insertLead(lead: LeadInsert) {
  const { data, error } = await getClient().from('leads').insert(lead).select().single()
  if (error) throw error
  return data
}
