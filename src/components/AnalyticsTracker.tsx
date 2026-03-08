import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  createOrganicLandingEvent,
  createPageviewEvent,
  dispatchAnalyticsEvent,
  inferTrafficChannel,
} from '../analytics/tracking'

export default function AnalyticsTracker() {
  const location = useLocation()
  const hasTrackedInitial = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const currentUrl = new URL(window.location.href)
    const path = `${location.pathname}${location.search}`
    const title = document.title
    const referrer = document.referrer
    const isLandingPage = !hasTrackedInitial.current
    const channel = inferTrafficChannel(referrer, currentUrl)

    dispatchAnalyticsEvent(
      createPageviewEvent(path, title, referrer, channel, isLandingPage),
    )

    if (channel === 'organic' && isLandingPage) {
      dispatchAnalyticsEvent(
        createOrganicLandingEvent(path, title, currentUrl, referrer),
      )
    }

    hasTrackedInitial.current = true
  }, [location.pathname, location.search])

  return null
}
