export type TrafficChannel =
  | 'organic'
  | 'paid'
  | 'direct'
  | 'referral'
  | 'social'
  | 'unknown'

export interface PageviewAttributionEvent {
  event: 'page_view_attributed'
  path: string
  title: string
  referrer: string
  channel: TrafficChannel
  isLandingPage: boolean
  timestamp: string
}

export interface OrganicLandingEvent {
  event: 'organic_landing'
  path: string
  title: string
  queryParamUtmSource: string | null
  queryParamUtmMedium: string | null
  referrer: string
  timestamp: string
}

export type AnalyticsEvent = PageviewAttributionEvent | OrganicLandingEvent
