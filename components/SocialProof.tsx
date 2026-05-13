'use client'

import { useT } from '@/context/LanguageContext'
import content from '@/content'

export default function SocialProof({ count = 200 }: { count?: number }) {
  const t = useT()
  const text = t(content.socialProof.text).replace('{count}', String(count) + "+")

  return (
    <div className="bg-brand-600 py-3 px-5">
      <p className="text-center text-sm text-white font-medium flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-line" />
        </span>
        {text}
      </p>
    </div>
  )
}
