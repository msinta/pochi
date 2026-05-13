'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

function IconRedirect() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#FFF1F1" />
      <rect x="11" y="17" width="14" height="18" rx="3" fill="#06C755" />
      <rect x="13" y="20" width="10" height="2" rx="1" fill="white" />
      <rect x="13" y="24" width="7" height="2" rx="1" fill="white" />
      <path d="M28 26H38M34 22L38 26L34 30" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="40" y="20" width="2" height="12" fill="#FF6B6B" />
      <circle cx="34" cy="36" r="3" fill="#FF6B6B" />
      <path d="M32.5 36L34 37.5L36 35" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconNoInstall() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#F0FDF4" />
      <rect x="16" y="14" width="20" height="26" rx="4" fill="white" stroke="#06C755" strokeWidth="2" />
      <rect x="20" y="20" width="12" height="12" rx="2" fill="#06C755" />
      <path d="M22 26L25 29L31 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="14" r="5" fill="#FF6B6B" />
      <path d="M35 14L41 14M38 11L38 17" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconMessageOnly() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect width="52" height="52" rx="12" fill="#FFF7ED" />
      <path d="M14 18C14 16.34 15.34 15 17 15H31C32.66 15 34 16.34 34 18V28C34 29.66 32.66 31 31 31H22L17 35V31C15.34 31 14 29.66 14 28V18Z" fill="#06C755" />
      <rect x="18" y="20" width="9" height="1.5" rx="0.7" fill="white" />
      <rect x="18" y="24" width="6" height="1.5" rx="0.7" fill="white" />
      <circle cx="36" cy="30" r="8" fill="#EA580C" />
      <path d="M33 30L35 32L39 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 18V14M40 18L42 16M32 18L30 16" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const icons = [<IconRedirect key="r" />, <IconNoInstall key="i" />, <IconMessageOnly key="m" />]

export default function PainPoints() {
  const t = useT()

  return (
    <section className="py-24 px-5" style={{ backgroundColor: '#FFF5F5' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-14 tracking-tight">
          {t(content.painPoints.sectionTitle)}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {content.painPoints.items.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white"
              style={{ border: '1.5px solid #1e293b' }}
            >
              <div className="mb-5">{icons[i]}</div>
              <h3 className="font-black text-slate-900 mb-3 text-base leading-snug">
                {t(item.headline)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
