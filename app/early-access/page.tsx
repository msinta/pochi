'use client'

import { useEffect, useState } from 'react'
import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'
import Nav from '@/components/Nav'

function EarlyAccessForm() {
  const t = useT()
  const { lang } = useLang()

  const [utmParams, setUtmParams] = useState({ source: '', medium: '', campaign: '' })
  const [selectedTier, setSelectedTier] = useState<string>('')
  const [form, setForm] = useState({ name: '', storeUrl: '', email: '', painPoint: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    trackEvent('reveal_view', { product_name: 'pochi' })
    // Read UTM params from URL after mount — avoids useSearchParams + Suspense entirely
    const params = new URLSearchParams(window.location.search)
    setUtmParams({
      source: params.get('utm_source') || '',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
    })
  }, [])

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId)
    trackEvent('tier_selected', { product_name: 'pochi', tier: tierId })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pricingTier: selectedTier,
          utmSource: utmParams.source,
          utmMedium: utmParams.medium,
          utmCampaign: utmParams.campaign,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      trackEvent('lead_submitted', { product_name: 'pochi', tier: selectedTier })
      setSubmitted(true)
    } catch {
      setError(lang === 'jp'
        ? '送信中にエラーが発生しました。もう一度お試しください。'
        : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── Success ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5 pt-16">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
            {lang === 'jp' ? '登録完了！' : "You're on the list!"}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            {lang === 'jp'
              ? 'リリース時に最初にご連絡します。創業者価格を確保しました。'
              : "We'll reach out when we launch. Your founder pricing is locked in."}
          </p>
          <a href="/" className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
            ← {lang === 'jp' ? 'トップページに戻る' : 'Back to homepage'}
          </a>
        </div>
      </div>
    )
  }

  // ── Form ──
  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center px-5 pt-24 pb-16">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-6">
          {/* Avatar stack + count */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {[
                { color: '#FF6B6B', initial: 'T' },
                { color: '#06C755', initial: 'S' },
                { color: '#FF8585', initial: 'Y' },
                { color: '#06C755', initial: 'K' },
                { color: '#FFB3B3', initial: 'M' },
              ].map((av, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 flex items-center justify-center text-white text-[11px] font-black" style={{ backgroundColor: av.color }}>
                  {av.initial}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-line opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-line" />
              </span>
              <span className="font-bold text-slate-700">120+</span>
              {' '}{lang === 'jp' ? '店舗が登録済み' : 'stores joined'}
            </div>
          </div>

          <span className="inline-block bg-brand-50 text-brand-600 text-xs font-bold px-3 py-1 rounded-full border border-brand-100 mb-3">
            {lang === 'jp' ? 'ベータ版 · 近日公開' : 'Beta · Coming Soon'}
          </span>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1.5">
            {t(content.reveal.headline)}
          </h1>
          <p className="text-slate-500 text-sm mb-5">
            {t(content.reveal.subtext)}
          </p>

          {/* Pochi badge row */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border"
              style={{ color: '#06C755', backgroundColor: '#06C75515', borderColor: '#06C75540' }}
            >
              LINE
            </span>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border"
              style={{ color: '#FF6B6B', backgroundColor: '#FF6B6B15', borderColor: '#FF6B6B40' }}
            >
              {lang === 'jp' ? 'LIFFアプリ' : 'LIFF mini-app'}
            </span>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full border"
              style={{ color: '#166534', backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}
            >
              Shopify
            </span>
          </div>

          {/* Value props */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              {
                icon: '🛍️',
                stat: { jp: 'LINEで', en: 'In LINE' },
                label: { jp: '閲覧から決済まで', en: 'browse to checkout' },
              },
              {
                icon: '⚡',
                stat: { jp: '3分', en: '3 min' },
                label: { jp: 'セットアップ完了', en: 'to set up' },
              },
              {
                icon: '🇯🇵',
                stat: { jp: 'カタログ', en: 'Catalog' },
                label: { jp: 'Shopifyから自動同期', en: 'auto-syncs from Shopify' },
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 py-3 px-2">
                <div className="text-lg mb-0.5">{item.icon}</div>
                <div className="text-base font-black text-slate-900 leading-none mb-0.5">
                  {typeof item.stat === 'string' ? item.stat : t(item.stat as { jp: string; en: string })}
                </div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">
                  {t(item.label)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgb(15,23,42)] p-6">

          {/* Tier picker */}
          <div className="mb-5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              {t(content.reveal.tierQuestion)}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {content.pricing.tiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => handleTierSelect(tier.id)}
                  className={`py-2.5 px-2 rounded-xl border-2 text-center transition-all ${
                    selectedTier === tier.id
                      ? 'border-brand-600 bg-brand-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className={`text-base font-black leading-none mb-0.5 ${selectedTier === tier.id ? 'text-brand-600' : 'text-slate-900'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-[10px] font-semibold ${selectedTier === tier.id ? 'text-brand-500' : 'text-slate-400'}`}>
                    {t(tier.name)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {t(content.reveal.form.name)}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                placeholder={lang === 'jp' ? '山田 太郎' : 'Your name'}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {t(content.reveal.form.storeUrl)}
              </label>
              <input
                type="url"
                name="storeUrl"
                value={form.storeUrl}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                placeholder="https://yourstore.myshopify.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {t(content.reveal.form.email)} <span className="text-red-400 normal-case">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {t(content.reveal.form.painPoint)}
              </label>
              <textarea
                name="painPoint"
                value={form.painPoint}
                onChange={handleChange}
                rows={2}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
                placeholder={t(content.reveal.form.painPointPlaceholder)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs mt-3">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={submitting || !form.email}
            className="w-full mt-4 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-black py-3 rounded-full text-sm transition-colors"
          >
            {submitting
              ? (lang === 'jp' ? '送信中...' : 'Sending...')
              : t(content.reveal.form.submit)}
          </button>
          <p className="text-center text-xs text-slate-400 mt-2.5">
            {t(content.reveal.form.disclaimer)}
          </p>
        </div>

        {/* Benefits row */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {[
            { jp: '🔒 創業者価格確定', en: '🔒 Founder pricing locked' },
            { jp: '🚀 優先アクセス', en: '🚀 Priority access' },
            { jp: '💬 製品への意見反映', en: '💬 Input on product' },
          ].map((item, i) => (
            <span key={i} className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              {t(item)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function EarlyAccessPage() {
  return (
    <>
      <Nav />
      <EarlyAccessForm />
    </>
  )
}
