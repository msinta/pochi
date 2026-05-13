import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import content from '@/content'

export const metadata: Metadata = {
  title: content.meta.title.jp,
  description: content.meta.description.jp,
  robots: { index: false, follow: false }, // noindex during validation
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        {/* GA4 — next/script runs after hydration, avoiding head injection issues */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
