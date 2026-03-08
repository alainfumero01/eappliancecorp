import type { AnalyticsEvent, OrganicLandingEvent, PageviewAttributionEvent, TrafficChannel } from './contracts'

const ORGANIC_HOST_MARKERS = ['google.', 'bing.', 'duckduckgo.', 'search.yahoo.', 'yandex.']
const SOCIAL_HOST_MARKERS = ['facebook.', 'instagram.', 'linkedin.', 't.co', 'x.com']

function getHostname(urlString: string): string {
  if (!urlString) return ''

  try {
    return new URL(urlString).hostname.toLowerCase()
  } catch {
    return ''
  }
}

export function inferTrafficChannel(referrer: string, url: URL): TrafficChannel {
  const utmMedium = (url.searchParams.get('utm_medium') ?? '').toLowerCase()

  if (utmMedium.includes('organic')) return 'organic'
  if (['cpc', 'ppc', 'paid', 'display', 'affiliate'].some((token) => utmMedium.includes(token))) {
    return 'paid'
  }

  const referrerHost = getHostname(referrer)

  if (!referrerHost) return 'direct'
  if (ORGANIC_HOST_MARKERS.some((host) => referrerHost.includes(host))) return 'organic'
  if (SOCIAL_HOST_MARKERS.some((host) => referrerHost.includes(host))) return 'social'
  return 'referral'
}

export function createPageviewEvent(
  path: string,
  title: string,
  referrer: string,
  channel: TrafficChannel,
  isLandingPage: boolean,
): PageviewAttributionEvent {
  return {
    event: 'page_view_attributed',
    path,
    title,
    referrer,
    channel,
    isLandingPage,
    timestamp: new Date().toISOString(),
  }
}

export function createOrganicLandingEvent(path: string, title: string, url: URL, referrer: string): OrganicLandingEvent {
  return {
    event: 'organic_landing',
    path,
    title,
    queryParamUtmSource: url.searchParams.get('utm_source'),
    queryParamUtmMedium: url.searchParams.get('utm_medium'),
    referrer,
    timestamp: new Date().toISOString(),
  }
}

export function dispatchAnalyticsEvent(payload: AnalyticsEvent): void {
  if (typeof window === 'undefined') return

  const win = window as Window & {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }

  win.dataLayer = win.dataLayer ?? []
  win.dataLayer.push(payload)

  if (typeof win.gtag === 'function') {
    win.gtag('event', payload.event, payload)
  }
}
