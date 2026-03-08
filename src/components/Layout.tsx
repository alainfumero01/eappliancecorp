import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyCTA from './StickyCTA'
import { site } from '../content/siteContent'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${CANONICAL_DOMAIN}/#organization`,
  name: site.name,
  url: CANONICAL_DOMAIN,
  logo: {
    '@type': 'ImageObject',
    url: `${CANONICAL_DOMAIN}/images/logo.png`,
    width: 200,
    height: 60,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: site.contact.phone,
    email: site.contact.email,
    availableLanguage: 'English',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'State', name: 'New Jersey' },
  ],
}

export default function Layout() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
