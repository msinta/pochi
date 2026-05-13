'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function HowItWorks() {
  const t = useT()

  return (
    <section className="py-24 px-5 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
            {t(content.howItWorks.sectionTitle)}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {t(content.howItWorks.sectionSubtitle)}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {content.howItWorks.steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < content.howItWorks.steps.length - 1 && (
                <div className="hidden sm:block absolute top-5 left-[calc(100%_-_1rem)] w-full h-px bg-slate-200 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white text-sm font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t(step.headline)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
