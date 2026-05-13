'use client'

import { useState } from 'react'
import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

function Star({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 ${filled ? 'text-brand-600' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  )
}

export default function Pricing({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()
  const { lang } = useLang()
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  const handleCta = (tierId: string) => {
    trackEvent('cta_click', { product_name: 'pochi', tier: tierId })
    onCtaClick()
  }

  const yearlyDiscount = 0.8 // 20% off yearly

  function displayPrice(price: string) {
    if (price === '$0') return '$0'
    const num = parseInt(price.replace('$', ''))
    if (billing === 'yearly') return `$${Math.round(num * yearlyDiscount)}`
    return price
  }

  return (
    <section id="pricing" className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
            {t(content.pricing.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto mb-7">
            {t(content.pricing.sectionSubtitle)}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billing === 'monthly' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500'
              }`}
            >
              {lang === 'jp' ? '月払い' : 'Monthly'}
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                billing === 'yearly' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-500'
              }`}
            >
              {lang === 'jp' ? '年払い' : 'Yearly'}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${billing === 'yearly' ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {content.pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                tier.highlighted
                  ? 'bg-brand-600 text-white ring-2 ring-brand-600 shadow-xl shadow-brand-200'
                  : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {t(tier.badge)}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                  {t(tier.name)}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-5xl font-black ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {displayPrice(tier.price)}
                  </span>
                  <span className={`text-sm pb-2 font-medium ${tier.highlighted ? 'text-brand-200' : 'text-slate-400'}`}>
                    {billing === 'yearly' ? (lang === 'jp' ? '/月（年払い）' : '/mo billed yearly') : t(tier.period)}
                  </span>
                </div>
                <p className={`text-sm ${tier.highlighted ? 'text-brand-200' : 'text-slate-500'}`}>
                  {t(tier.description)}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${tier.highlighted ? 'text-white' : 'text-slate-600'}`}>
                    <Star filled />
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(tier.id)}
                className={`w-full py-3 rounded-xl text-sm font-bold transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-brand-600 hover:bg-brand-50'
                    : 'border-2 border-slate-200 text-slate-900 hover:border-brand-600 hover:text-brand-600'
                }`}
              >
                {t(content.nav.cta)}
              </button>
            </div>
          ))}
        </div>

        {/* No credit card */}
        <p className="text-center text-slate-400 text-sm mt-6">
          {lang === 'jp' ? 'クレジットカード不要。いつでもキャンセル可能。' : 'No credit card required. Cancel anytime.'}
        </p>
      </div>
    </section>
  )
}
