import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import { AppRoutes } from './App'
import { CANONICAL_DOMAIN, seoRoutes } from './seo/seoRoutes'

export { CANONICAL_DOMAIN, seoRoutes }

export interface RenderResult {
  head: string
  html: string
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  )

  const helmet = helmetContext.helmet
  const head = [
    helmet?.title.toString() ?? '',
    helmet?.meta.toString() ?? '',
    helmet?.link.toString() ?? '',
    helmet?.script.toString() ?? '',
  ].join('')

  return { head, html }
}
