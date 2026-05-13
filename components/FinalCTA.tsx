'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

export default function FinalCTA({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()

  const handleCta = () => {
    trackEvent('cta_click', { product_name: 'pochi' })
    onCtaClick()
  }

  return (
    <section className="py-28 px-5 bg-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white whitespace-pre-line mb-5 tracking-tight leading-tight">
          {t(content.finalCta.headline)}
        </h2>
        <p className="text-slate-400 mb-8 text-base max-w-md mx-auto">
          {t(content.finalCta.subtext)}
        </p>
        <button
          onClick={handleCta}
          className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-10 py-4 rounded-xl text-base transition-colors"
        >
          {t(content.finalCta.cta)}
        </button>
      </div>
    </section>
  )
}
