declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type GA4EventParams = Record<string, string | number | boolean>

export function trackEvent(eventName: string, params: GA4EventParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}
