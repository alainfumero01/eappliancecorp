// Canonical domain for all metadata, schema URLs, and sitemap entries.
// Update this before production deploy if the final host changes.
export const CANONICAL_DOMAIN = 'https://www.eappliancecorp.com'

export type JsonLd = Record<string, unknown>

interface RouteSeoConfig {
  path: string
  title: string
  description: string
  robots: string
  og: {
    title: string
    description: string
    type: 'website' | 'article'
    image?: string
  }
  twitter: {
    card: 'summary' | 'summary_large_image'
    title: string
    description: string
    image?: string
  }
  schema?: JsonLd | JsonLd[]
}

export interface RouteSeo extends RouteSeoConfig {
  canonical: string
}

export function canonicalUrl(path: string): string {
  return `${CANONICAL_DOMAIN}${path}`
}

function defaultSchema(path: string, title: string, description: string): JsonLd {
  if (path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: title,
      description,
      url: canonicalUrl(path),
    }
  }

  if (path === '/manifests') {
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description,
      url: canonicalUrl(path),
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl(path),
  }
}

const routeConfigs: RouteSeoConfig[] = [
  {
    path: '/',
    title: 'Wholesale Appliance Loads for Resellers | E-Appliance Recycling Corp',
    description:
      'Buy wholesale appliance loads direct from the source. Customer returns and scratch-and-dent units, 100% functional. Distribution hubs in Texas and New Jersey. 15+ years serving resellers.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Appliance Loads for Resellers | E-Appliance Recycling Corp',
      description:
        'Customer returns and scratch-and-dent appliances, 100% functional. Buy by the load from our Texas and New Jersey distribution hubs.',
      type: 'website',
      image: `${CANONICAL_DOMAIN}/images/logo.png`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Wholesale Appliance Loads for Resellers',
      description:
        'Customer returns and scratch-and-dent appliances, 100% functional. Texas and New Jersey hubs.',
    },
  },
  {
    path: '/about',
    title: 'About E-Appliance Recycling Corp | 15+ Years in Wholesale Appliances',
    description:
      'E-Appliance Recycling Corp has been supplying resellers with wholesale appliance loads since the early 2000s. Two distribution hubs in Texas and New Jersey.',
    robots: 'index,follow',
    og: {
      title: 'About E-Appliance Recycling Corp',
      description:
        '15+ years supplying wholesale appliance loads to resellers. Texas and New Jersey distribution hubs.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'About E-Appliance Recycling Corp',
      description: '15+ years supplying wholesale appliance loads to resellers.',
    },
  },
  {
    path: '/manifests',
    title: 'Appliance Load Manifests & Current Inventory | E-Appliance Recycling Corp',
    description:
      'View available wholesale appliance loads by category, quantity, and hub location. Customer returns and scratch-and-dent inventory with video walkthroughs available before purchase.',
    robots: 'index,follow',
    og: {
      title: 'Appliance Load Manifests & Current Inventory',
      description:
        'Available wholesale appliance loads by category, quantity, and hub. Video walkthroughs provided before purchase.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Appliance Load Manifests & Inventory',
      description: 'Available wholesale appliance loads with video walkthroughs.',
    },
  },
  {
    path: '/contact',
    title: 'Contact E-Appliance Recycling Corp | Wholesale Appliance Loads',
    description:
      'Call or text to inquire about wholesale appliance loads. Distribution hubs in Texas and New Jersey. We work exclusively with resellers and bulk buyers.',
    robots: 'index,follow',
    og: {
      title: 'Contact E-Appliance Recycling Corp',
      description:
        'Call or text to inquire about wholesale appliance loads. Texas and New Jersey hubs.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Contact E-Appliance Recycling Corp',
      description: 'Call or text to inquire about wholesale appliance loads.',
    },
  },
  {
    path: '/texas-wholesale-appliance-loads',
    title: 'Texas Wholesale Appliance Loads | E-Appliance Recycling Corp',
    description:
      'Wholesale appliance loads from our Texas distribution hub. Customer returns and scratch-and-dent inventory for resellers. Call to discuss current load availability and logistics.',
    robots: 'index,follow',
    og: {
      title: 'Texas Wholesale Appliance Loads',
      description:
        'Wholesale appliance loads from our Texas distribution hub. Customer returns and scratch-and-dent, 100% functional.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Texas Wholesale Appliance Loads',
      description: 'Wholesale appliance loads from our Texas distribution hub.',
    },
  },
  {
    path: '/new-jersey-wholesale-appliance-loads',
    title: 'New Jersey Wholesale Appliance Loads | E-Appliance Recycling Corp',
    description:
      'Wholesale appliance loads from our New Jersey distribution hub. Customer returns and scratch-and-dent units for East Coast resellers. Call to inquire about available inventory.',
    robots: 'index,follow',
    og: {
      title: 'New Jersey Wholesale Appliance Loads',
      description:
        'Wholesale appliance loads from our New Jersey hub. Customer returns and scratch-and-dent for East Coast resellers.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'New Jersey Wholesale Appliance Loads',
      description: 'Wholesale appliance loads from our New Jersey distribution hub.',
    },
  },
  {
    path: '/customer-returns-appliances',
    title: 'Customer Return Appliances Wholesale | E-Appliance Recycling Corp',
    description:
      'Buy customer return appliances by the load. 100% functional units with cosmetic imperfections only. Wholesale pricing for resellers from Texas and New Jersey distribution hubs.',
    robots: 'index,follow',
    og: {
      title: 'Customer Return Appliances Wholesale',
      description:
        '100% functional customer return appliances by the load. Wholesale pricing for resellers.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Customer Return Appliances Wholesale',
      description: '100% functional customer return appliances by the load.',
    },
  },
  {
    path: '/scratch-and-dent-appliances',
    title: 'Scratch-and-Dent Appliances Wholesale | E-Appliance Recycling Corp',
    description:
      'Wholesale scratch-and-dent appliance loads for resellers. Fully functional units with cosmetic damage only. High-margin inventory available from Texas and New Jersey distribution hubs.',
    robots: 'index,follow',
    og: {
      title: 'Scratch-and-Dent Appliances Wholesale',
      description:
        'Fully functional scratch-and-dent appliance loads. Cosmetic damage only, maximum margin for resellers.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Scratch-and-Dent Appliances Wholesale',
      description: 'Fully functional scratch-and-dent appliance loads for resellers.',
    },
  },
  {
    path: '/appliance-liquidation-loads',
    title: 'Appliance Liquidation Loads | Wholesale Sourcing | E-Appliance Recycling Corp',
    description:
      'Appliance liquidation loads for wholesale buyers. Mixed categories of customer returns and scratch-and-dent units available by the load from Texas and New Jersey hubs.',
    robots: 'index,follow',
    og: {
      title: 'Appliance Liquidation Loads | Wholesale Sourcing',
      description:
        'Appliance liquidation loads by the pallet or truckload. Customer returns and scratch-and-dent from TX and NJ hubs.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Appliance Liquidation Loads',
      description: 'Wholesale appliance liquidation loads from Texas and New Jersey hubs.',
    },
  },
  {
    path: '/wholesale-refrigerator-loads',
    title: 'Wholesale Refrigerator Loads | French Door, Top-Freezer & More',
    description:
      'Wholesale refrigerator loads including French door, side-by-side, and top-freezer models. Customer returns and scratch-and-dent, 100% functional. Buy by the load from TX and NJ hubs.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Refrigerator Loads',
      description:
        'French door, side-by-side, and top-freezer refrigerators by the load. 100% functional customer returns and scratch-and-dent.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Refrigerator Loads',
      description: 'Wholesale refrigerator loads - French door, top-freezer, and more.',
    },
  },
  {
    path: '/wholesale-washer-dryer-loads',
    title: 'Wholesale Washer and Dryer Loads | Pairs & Singles Available',
    description:
      'Buy wholesale washer and dryer loads. Customer returns and scratch-and-dent units, fully functional. Pairs and singles available from Texas and New Jersey distribution hubs.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Washer and Dryer Loads',
      description:
        'Customer return and scratch-and-dent washers and dryers by the load. Pairs and singles available.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Washer and Dryer Loads',
      description: 'Wholesale washer and dryer loads - pairs and singles available.',
    },
  },
  {
    path: '/wholesale-appliance-loads-for-resellers',
    title: 'Wholesale Appliance Loads for Resellers | Buy by the Load',
    description:
      'Wholesale appliance loads designed for resellers. Customer returns and scratch-and-dent inventory, 100% functional, video-verified before purchase. Texas and New Jersey distribution hubs.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Appliance Loads for Resellers',
      description:
        'Buy wholesale appliance loads by the load. Video-verified before purchase. Texas and New Jersey hubs.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Appliance Loads for Resellers',
      description: 'Video-verified wholesale appliance loads for resellers.',
    },
  },
  {
    path: '/404',
    title: 'Page Not Found | E-Appliance Recycling Corp',
    description: 'The page you were looking for could not be found.',
    robots: 'noindex,follow',
    og: {
      title: 'Page Not Found | E-Appliance Recycling Corp',
      description: 'The page you were looking for could not be found.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Page Not Found',
      description: 'The page you were looking for could not be found.',
    },
  },
]

export const seoRoutes: RouteSeo[] = routeConfigs.map((route) => ({
  ...route,
  canonical: canonicalUrl(route.path),
  schema: route.schema ?? defaultSchema(route.path, route.title, route.description),
}))

export function getRouteSeo(path: string): RouteSeo | undefined {
  return seoRoutes.find((route) => route.path === path)
}
