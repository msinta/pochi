'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'
import { trackEvent } from '@/lib/ga4'

// Inline LINE-style mockup: customer browsing a Shopify catalog inside a LINE chat
function LineCatalogMockup() {
  return (
    <div className="rounded-[28px] overflow-hidden border-[6px] border-slate-900 shadow-2xl shadow-slate-300/60 bg-white text-left mx-auto" style={{ maxWidth: 360 }}>
      {/* LINE header */}
      <div className="bg-[#06C755] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center">
          <span className="text-[#06C755] text-base font-black">月</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-bold leading-none">月見ベーカリー</p>
          <p className="text-white/80 text-[10px] mt-1">公式アカウント · オンライン</p>
        </div>
        <div className="text-white text-xs">⋮</div>
      </div>

      {/* Chat thread */}
      <div className="bg-[#8AB4D6] px-3 py-4 space-y-3" style={{ minHeight: 180 }}>
        {/* Customer message */}
        <div className="flex justify-end">
          <div className="bg-[#06C755] text-white text-[12px] rounded-2xl rounded-br-sm px-3 py-2 max-w-[78%]">
            最近の新作ある？
          </div>
        </div>

        {/* Brand reply with product carousel */}
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <span className="text-[#06C755] text-xs font-black">月</span>
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[88%] shadow">
            <p className="text-[11px] text-slate-700 mb-2">新作3点が入荷しました 🌸</p>
            <div className="flex gap-2 -mx-1 overflow-x-auto pb-1">
              {[
                { name: '桜あんパン', price: '¥380', emoji: '🌸', bg: '#FFE4E9' },
                { name: '抹茶クロワッサン', price: '¥420', emoji: '🍵', bg: '#E7F2DD' },
                { name: 'いちごタルト', price: '¥520', emoji: '🍓', bg: '#FFE0E0' },
              ].map((p) => (
                <div key={p.name} className="flex-shrink-0 w-[100px] rounded-xl overflow-hidden border border-slate-100">
                  <div className="h-16 flex items-center justify-center text-3xl" style={{ backgroundColor: p.bg }}>
                    {p.emoji}
                  </div>
                  <div className="p-1.5">
                    <p className="text-[10px] font-bold text-slate-800 leading-tight truncate">{p.name}</p>
                    <p className="text-[10px] font-black text-brand-600 mt-0.5">{p.price}</p>
                    <button className="mt-1 w-full text-[9px] font-bold bg-[#06C755] text-white py-1 rounded-md">
                      購入する
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer follow-up */}
        <div className="flex justify-end">
          <div className="bg-[#06C755] text-white text-[12px] rounded-2xl rounded-br-sm px-3 py-2 max-w-[78%]">
            桜あんパン買う！
          </div>
        </div>

        {/* Embedded checkout pill */}
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <span className="text-[#06C755] text-xs font-black">月</span>
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow">
            <p className="text-[10px] text-slate-500 mb-1.5">LINEのまま決済</p>
            <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-1.5">
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-900 truncate">桜あんパン × 1</p>
                <p className="text-[10px] text-slate-400">送料込み ¥430</p>
              </div>
              <button className="text-[10px] font-black bg-brand-600 text-white px-3 py-1.5 rounded-lg whitespace-nowrap">
                決済 →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LINE input bar */}
      <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-slate-100">
        <span className="text-slate-300 text-base">＋</span>
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[11px] text-slate-400">
          メッセージ
        </div>
        <span className="text-slate-300 text-base">😊</span>
      </div>
    </div>
  )
}

export default function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  const t = useT()

  const handleCta = () => {
    trackEvent('cta_click', { product_name: 'pochi' })
    onCtaClick()
  }

  const headline = t(content.hero.headline)
  const lines = headline.split('\n')
  const lastLine = lines[lines.length - 1]
  const prevLines = lines.slice(0, -1)

  return (
    <section className="pt-24 pb-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        {/* Left — text */}
        <div className="w-full lg:w-[52%] shrink-0">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-100 mb-4">
            {t(content.hero.badge)}
          </span>
          <h1 className="text-[2.6rem] sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-5">
            {prevLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
            <span className="relative inline-block">
              {lastLine}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8 C50 2, 100 10, 150 6 C200 2, 250 10, 298 6"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-7 max-w-md">
            {t(content.hero.subheadline)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <button
              onClick={handleCta}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors shadow-md shadow-brand-200"
            >
              {t(content.hero.cta)}
            </button>
          </div>

          {/* Social proof row */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              {[
                { color: '#FF6B6B', initial: 'T' },
                { color: '#06C755', initial: 'S' },
                { color: '#FF8585', initial: 'Y' },
                { color: '#06C755', initial: 'K' },
                { color: '#FFB3B3', initial: 'M' },
              ].map((av, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: av.color }}>
                  {av.initial}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-800">120+</span>
              {' '}{t({ jp: '店舗が事前登録中', en: 'Japanese stores on the waitlist' })}
            </div>
          </div>
        </div>

        {/* Right — inline LINE catalog mockup */}
        <div className="w-full lg:w-[48%]">
          <LineCatalogMockup />
        </div>
      </div>
    </section>
  )
}
