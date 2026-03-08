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
      'Dealer-only wholesale appliance loads from customer returns and scratch-and-dent inventory. As-is terms. Texas and New Jersey hubs.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Appliance Loads for Resellers | E-Appliance Recycling Corp',
      description:
        'Dealer-only appliance loads with as-is wholesale terms, condition notes, and pickup from Texas or New Jersey.',
      type: 'website',
      image: `${CANONICAL_DOMAIN}/images/logo.png`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Wholesale Appliance Loads for Resellers',
      description: 'Dealer-only appliance loads from TX and NJ hubs under as-is wholesale terms.',
    },
  },
  {
    path: '/about',
    title: 'About E-Appliance Recycling Corp | Dealer-Only Appliance Loads',
    description:
      'Learn how E-Appliance Recycling Corp sources customer returns and scratch-and-dent inventory for wholesale buyers.',
    robots: 'index,follow',
    og: {
      title: 'About E-Appliance Recycling Corp',
      description:
        'Operational overview of our wholesale appliance load process, sourcing model, and buyer requirements.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'About E-Appliance Recycling Corp',
      description: 'How our dealer-only appliance load operation works.',
    },
  },
  {
    path: '/manifests',
    title: 'Appliance Load Manifests & Current Inventory | E-Appliance Recycling Corp',
    description:
      'Review current appliance loads by category, count, and hub. Understand as-is condition expectations before you buy.',
    robots: 'index,follow',
    og: {
      title: 'Appliance Load Manifests & Current Inventory',
      description:
        'Current dealer-only appliance loads with practical condition guidance and pickup details.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Appliance Load Manifests & Inventory',
      description: 'Current dealer-only appliance load availability from TX and NJ hubs.',
    },
  },
  {
    path: '/contact',
    title: 'Contact E-Appliance Recycling Corp | Dealer-Only Appliance Loads',
    description:
      'Contact us with your business profile, category needs, and load volume. We serve qualified wholesale buyers only.',
    robots: 'index,follow',
    og: {
      title: 'Contact E-Appliance Recycling Corp',
      description:
        'Send your dealer requirements and get current load availability from our Texas and New Jersey hubs.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Contact E-Appliance Recycling Corp',
      description: 'Dealer inquiries for wholesale appliance loads only.',
    },
  },
  {
    path: '/texas-wholesale-appliance-loads',
    title: 'Texas Wholesale Appliance Loads | E-Appliance Recycling Corp',
    description:
      'Dealer-only appliance loads available from our Texas hub. Review pickup and freight expectations for regional buyers.',
    robots: 'index,follow',
    og: {
      title: 'Texas Wholesale Appliance Loads',
      description: 'As-is wholesale appliance loads from our Texas distribution hub.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Texas Wholesale Appliance Loads',
      description: 'Dealer-only appliance load availability from our Texas hub.',
    },
  },
  {
    path: '/new-jersey-wholesale-appliance-loads',
    title: 'New Jersey Wholesale Appliance Loads | E-Appliance Recycling Corp',
    description:
      'Dealer-only appliance loads from our New Jersey hub with practical East Coast pickup and freight guidance.',
    robots: 'index,follow',
    og: {
      title: 'New Jersey Wholesale Appliance Loads',
      description: 'As-is wholesale appliance loads from our New Jersey distribution hub.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'New Jersey Wholesale Appliance Loads',
      description: 'Dealer-only appliance load availability from our New Jersey hub.',
    },
  },
  {
    path: '/customer-returns-appliances',
    title: 'Customer Return Appliances Wholesale | E-Appliance Recycling Corp',
    description:
      'Dealer-only customer return appliance loads sold as-is. Learn expected condition ranges and buying workflow.',
    robots: 'index,follow',
    og: {
      title: 'Customer Return Appliances Wholesale',
      description: 'As-is wholesale customer return appliance loads for qualified resellers.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Customer Return Appliances Wholesale',
      description: 'Dealer-only customer return appliance loads from TX and NJ hubs.',
    },
  },
  {
    path: '/scratch-and-dent-appliances',
    title: 'Scratch-and-Dent Appliances Wholesale | E-Appliance Recycling Corp',
    description:
      'Wholesale scratch-and-dent appliance loads with practical condition notes and as-is dealer terms.',
    robots: 'index,follow',
    og: {
      title: 'Scratch-and-Dent Appliances Wholesale',
      description: 'Dealer-only scratch-and-dent appliance loads sold by the load under as-is terms.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Scratch-and-Dent Appliances Wholesale',
      description: 'As-is scratch-and-dent appliance loads for wholesale buyers.',
    },
  },
  {
    path: '/appliance-liquidation-loads',
    title: 'Appliance Liquidation Loads | Wholesale Sourcing | E-Appliance Recycling Corp',
    description:
      'Mixed appliance liquidation loads for qualified buyers. Understand grading, mix variability, and as-is wholesale terms.',
    robots: 'index,follow',
    og: {
      title: 'Appliance Liquidation Loads | Wholesale Sourcing',
      description: 'Dealer-only liquidation loads from customer returns and scratch-and-dent inventory.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Appliance Liquidation Loads',
      description: 'Dealer-only liquidation appliance loads from TX and NJ hubs.',
    },
  },
  {
    path: '/wholesale-refrigerator-loads',
    title: 'Wholesale Refrigerator Loads | Dealer-Only Inventory',
    description:
      'Wholesale refrigerator loads with mixed configurations and condition ranges. Sold as-is to qualified appliance buyers.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Refrigerator Loads',
      description: 'Dealer-only refrigerator loads with practical condition and pickup guidance.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Refrigerator Loads',
      description: 'As-is wholesale refrigerator loads for qualified resellers.',
    },
  },
  {
    path: '/wholesale-washer-dryer-loads',
    title: 'Wholesale Washer and Dryer Loads | Pairs & Singles',
    description:
      'Wholesale washer and dryer loads for qualified buyers. Review pair/single mix expectations and as-is purchase terms.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Washer and Dryer Loads',
      description: 'Dealer-only washer and dryer loads with practical buying and pickup guidance.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Washer and Dryer Loads',
      description: 'As-is wholesale washer and dryer loads from TX and NJ hubs.',
    },
  },
  {
    path: '/wholesale-appliance-loads-for-resellers',
    title: 'Wholesale Appliance Loads for Resellers | Buy by the Load',
    description:
      'Operational guide for reseller-focused appliance loads: buyer fit, condition profile, and as-is wholesale workflow.',
    robots: 'index,follow',
    og: {
      title: 'Wholesale Appliance Loads for Resellers',
      description: 'Dealer-only appliance load sourcing for resellers under as-is terms.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Wholesale Appliance Loads for Resellers',
      description: 'Dealer-only appliance load sourcing process for resellers.',
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
