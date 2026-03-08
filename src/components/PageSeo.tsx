import { Helmet } from 'react-helmet-async'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'

interface OgProps {
  title?: string
  description?: string
  type?: string
  image?: string
}

interface TwitterProps {
  card?: string
  title?: string
  description?: string
  image?: string
}

interface PageSeoProps {
  title: string
  description: string
  /** Path (e.g. "/about") or full URL. Defaults to CANONICAL_DOMAIN + window.location.pathname when omitted. */
  canonical?: string
  robots?: string
  og?: OgProps
  twitter?: TwitterProps
  /** One or more JSON-LD schema objects */
  schema?: object | object[]
}

export default function PageSeo({
  title,
  description,
  canonical,
  robots = 'index,follow',
  og,
  twitter,
  schema,
}: PageSeoProps) {
  const canonicalHref = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${CANONICAL_DOMAIN}${canonical}`
    : undefined

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalHref && <link rel="canonical" href={canonicalHref} />}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:site_name" content="E-Appliance Recycling Corp" />
      <meta property="og:title" content={og?.title ?? title} />
      <meta property="og:description" content={og?.description ?? description} />
      <meta property="og:type" content={og?.type ?? 'website'} />
      {canonicalHref && <meta property="og:url" content={canonicalHref} />}
      {og?.image && <meta property="og:image" content={og.image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter?.card ?? 'summary'} />
      <meta name="twitter:title" content={twitter?.title ?? title} />
      <meta name="twitter:description" content={twitter?.description ?? description} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {/* JSON-LD schemas */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
