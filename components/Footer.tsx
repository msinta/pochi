'use client'

import { useLang } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="py-10 px-5 border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900">Pochi</span>
          <span className="text-slate-300 text-sm">for Shopify</span>
        </div>
        <p className="text-sm text-slate-400">
          © 2026 Pochi. {lang === 'jp' ? '全著作権所有。' : 'All rights reserved.'}
        </p>
        <div className="flex gap-5 text-sm text-slate-400">
          <a href="#" className="hover:text-slate-600 transition-colors">
            {lang === 'jp' ? 'プライバシー' : 'Privacy'}
          </a>
          <a href="#" className="hover:text-slate-600 transition-colors">
            {lang === 'jp' ? '利用規約' : 'Terms'}
          </a>
        </div>
      </div>
    </footer>
  )
}
