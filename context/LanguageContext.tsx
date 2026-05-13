'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from '@/content'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('jp')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'jp' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const toggle = () => setLang(lang === 'jp' ? 'en' : 'jp')

  // Always render with jp on server — client picks up localStorage after mount
  const effectiveLang: Lang = mounted ? lang : 'jp'

  return (
    <LanguageContext.Provider value={{ lang: effectiveLang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}

/** Resolve a bilingual Copy object to the current language string */
export function useT() {
  const { lang } = useLang()
  return (copy: { jp: string; en: string }) => copy[lang]
}
