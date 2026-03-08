export const site = {
  name: 'E-Appliance Recycling Corp',
  shortName: 'E-Appliance',
  tagline: 'Dealer-only appliance loads from customer returns and scratch-and-dent inventory',
  yearsInBusiness: 15,
  hubs: ['Texas', 'New Jersey'],

  contact: {
    phone: '+1 (555) 000-0000', // PLACEHOLDER - replace before launch
    phoneDisplay: '(555) 000-0000', // PLACEHOLDER - replace before launch
    email: 'info@eappliancerecycling.com', // PLACEHOLDER - replace before launch
    smsBody: 'Hi, I am interested in current appliance load availability.',
  },

  trustPoints: [
    {
      heading: 'Dealer-only wholesale',
      body: 'We sell by the load to resellers and bulk buyers. No single-unit retail sales.',
    },
    {
      heading: 'As-is, terms first',
      body: 'Loads are sold as-is under wholesale terms. Confirm details before committing.',
    },
    {
      heading: 'Condition visibility',
      body: 'You receive category and condition details, and a walkthrough video when available.',
    },
    {
      heading: 'Operational support',
      body: 'Two hubs, straightforward pickup coordination, and direct communication by phone or text.',
    },
  ],

  inventoryCategories: [
    'Refrigerators & Freezers',
    'Washers & Dryers',
    'Dishwashers',
    'Ranges & Ovens',
    'Microwaves',
    'Small Appliances',
  ],

  process: [
    {
      step: '1',
      label: 'Tell us what you buy',
      detail: 'Share categories, load size, and preferred hub.',
    },
    {
      step: '2',
      label: 'Review current inventory',
      detail: 'We outline available loads and condition profile for each.',
    },
    {
      step: '3',
      label: 'Confirm terms',
      detail: 'Finalize pricing, payment timing, and pickup window.',
    },
    {
      step: '4',
      label: 'Pickup and resell',
      detail: 'Coordinate carrier or pickup and move inventory through your channel.',
    },
  ],

  legal: {
    asIsNotice:
      'All loads are sold as-is to qualified wholesale buyers. Availability, mix, and condition vary by load. Terms are confirmed before purchase.',
    conditionExpectations: [
      'Loads may include customer returns, scratch-and-dent, and mixed-grade units.',
      'Cosmetic condition varies by unit and category.',
      'Video and notes are used to represent current load condition when available.',
      'Counts are provided at load level and can vary with final staging.',
    ],
    saleTerms: [
      'Dealer-only wholesale transactions.',
      'As-is sale structure under agreed terms.',
      'Final pricing, pickup window, and payment timing confirmed before release.',
      'Pickup from Texas or New Jersey hub, or buyer-arranged freight.',
    ],
    buyerQualification: [
      'Appliance retailers and outlet stores',
      'Liquidation and discount resellers',
      'Regional distributors and bulk buyers',
      'Property management procurement teams buying in volume',
    ],
    notFor: [
      'End-consumer single-unit purchases',
      'Showroom-perfect retail presentation requirements',
      'Small one-off buys that are below load minimums',
    ],
    inquiryChecklist: [
      'Business name and resale channel',
      'Preferred categories and load size',
      'Preferred hub: Texas or New Jersey',
      'Pickup method: own truck or freight carrier',
      'Target purchase timing and monthly volume',
    ],
  },
} as const
