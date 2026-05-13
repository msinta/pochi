'use client'

import { useLang, useT } from '@/context/LanguageContext'
import content from '@/content'

export default function Nav({ onCtaClick }: { onCtaClick?: () => void }) {
  const { lang, toggle } = useLang()
  const t = useT()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">Pochi</span>
          {/* Shopify badge */}
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-md ml-1"
            style={{ backgroundColor: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>
            {/* Shopify shopping bag icon */}
            <svg width="10" height="11" viewBox="0 0 20 22" fill="#166534">
              <path d="M14.5 6h-1.1C13.1 3.7 11.7 2 10 2S6.9 3.7 6.6 6H5.5C4.1 6 3 7.1 3 8.5v9C3 18.9 4.1 20 5.5 20h9c1.4 0 2.5-1.1 2.5-2.5v-9C17 7.1 15.9 6 14.5 6zM10 3.5c1 0 1.8 1.1 2.1 2.5H7.9C8.2 4.6 9 3.5 10 3.5zm5.5 14c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h1.1c.1.5.1 1 .1 1.5 0 .4.3.7.7.7s.7-.3.7-.7c0-.5 0-1-.1-1.5h4c-.1.5-.1 1-.1 1.5 0 .4.3.7.7.7s.7-.3.7-.7c0-.5 0-1-.1-1.5h1.1c.6 0 1 .4 1 1v9z"/>
            </svg>
            for Shopify
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* JP / EN toggle — pill style */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center text-xs font-bold border border-slate-200 rounded-full overflow-hidden"
          >
            <span className={`px-3 py-1.5 transition-colors ${lang === 'jp' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}>
              JP
            </span>
            <span className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}>
              EN
            </span>
          </button>

          {/* CTA — on-brand indigo */}
          <button
            onClick={onCtaClick}
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-sm shadow-brand-200"
          >
            {t(content.nav.cta)}
          </button>
        </div>
      </div>
    </nav>
  )
}
