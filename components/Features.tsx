'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

// Three small inline mockups, one per feature
function CatalogSyncMockup() {
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center">
            <span className="text-emerald-700 text-[10px] font-black">S</span>
          </div>
          <span className="text-[11px] font-bold text-slate-700">Shopify</span>
        </div>
        <div className="flex-1 mx-3 border-t border-dashed border-brand-300 relative">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-brand-600 text-[10px]">⇄</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-700">LINE</span>
          <div className="w-6 h-6 rounded-md bg-[#06C755] flex items-center justify-center">
            <span className="text-white text-[10px] font-black">L</span>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { name: '桜あんパン', sku: 'BR-001', stock: 42, color: '#FFE4E9' },
          { name: '抹茶クロワッサン', sku: 'BR-002', stock: 18, color: '#E7F2DD' },
          { name: 'いちごタルト', sku: 'BR-003', stock: 7, color: '#FFE0E0' },
        ].map((p) => (
          <div key={p.sku} className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-1.5">
            <div className="w-6 h-6 rounded flex-shrink-0" style={{ backgroundColor: p.color }} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-slate-800 truncate">{p.name}</p>
              <p className="text-[9px] text-slate-400">{p.sku}</p>
            </div>
            <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">同期済</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LiffCheckoutMockup() {
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white shadow-lg overflow-hidden">
      <div className="bg-[#06C755] px-3 py-2 flex items-center gap-2">
        <span className="text-white text-[10px] font-bold">← LIFFブラウザ</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="bg-slate-50 rounded-lg p-2 flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-rose-100 flex items-center justify-center text-lg">🌸</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-slate-900 truncate">桜あんパン × 1</p>
            <p className="text-[10px] text-slate-400">¥380</p>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-2 space-y-1 text-[10px]">
          <div className="flex justify-between text-slate-500"><span>小計</span><span>¥380</span></div>
          <div className="flex justify-between text-slate-500"><span>送料</span><span>¥50</span></div>
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100"><span>合計</span><span>¥430</span></div>
        </div>
        <button className="w-full bg-brand-600 text-white text-[11px] font-black py-2 rounded-lg mt-2">
          Shopifyで決済する
        </button>
        <p className="text-[9px] text-center text-slate-400 mt-1">LINEを離れずに完了</p>
      </div>
    </div>
  )
}

function RichMenuMockup() {
  return (
    <div className="rounded-2xl border-2 border-slate-900 bg-white shadow-lg overflow-hidden">
      <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
        <span className="text-[10px] font-bold text-slate-600">📣 ブロードキャスト送信完了</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-brand-50 rounded-lg p-2 border border-brand-100">
          <p className="text-[10px] font-bold text-brand-700 mb-0.5">新作のお知らせ送信</p>
          <p className="text-[9px] text-slate-500">1,247人に配信 · 開封率 84%</p>
        </div>
        {/* Rich menu grid */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: '🛍️', label: 'ストア' },
            { icon: '🛒', label: 'カート' },
            { icon: '📦', label: '配送状況' },
            { icon: '🎁', label: '新着' },
            { icon: '💬', label: '問い合わせ' },
            { icon: '⭐', label: 'ポイント' },
          ].map((m) => (
            <div key={m.label} className="bg-slate-50 rounded-md py-2 flex flex-col items-center gap-0.5">
              <span className="text-lg">{m.icon}</span>
              <span className="text-[8px] font-semibold text-slate-600">{m.label}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-slate-400 text-center pt-1">LINEリッチメニュー</p>
      </div>
    </div>
  )
}

const mockups = [<CatalogSyncMockup key="0" />, <LiffCheckoutMockup key="1" />, <RichMenuMockup key="2" />]

export default function Features() {
  const t = useT()

  return (
    <section id="features">
      {content.features.items.map((item, i) => {
        const bgClass = i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
        const reversed = i % 2 === 1

        return (
          <div key={i} className={`py-20 ${bgClass}`}>
            <div className="max-w-5xl mx-auto px-5">
              <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}>
                {/* Text */}
                <div className="w-full lg:w-[55%]">
                  {item.tag && (
                    <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4 border border-brand-100 uppercase tracking-widest">
                      {t(item.tag)}
                    </span>
                  )}
                  <h2 className="text-3xl font-black text-slate-900 mb-4 leading-snug tracking-tight">
                    {t(item.headline)}
                  </h2>
                  <p className="text-slate-500 leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
                {/* Inline mockup */}
                <div className="w-full lg:w-[45%]">
                  {mockups[i]}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
