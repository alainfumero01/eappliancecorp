export const site = {
  name: "E-Appliance Recycling Corp",
  shortName: "E-Appliance",
  tagline: "Wholesale appliance loads for resellers and bulk buyers",
  yearsInBusiness: 15,
  hubs: ["Texas", "New Jersey"],

  contact: {
    phone: "+1 (555) 000-0000",         // PLACEHOLDER – replace before launch
    phoneDisplay: "(555) 000-0000",      // PLACEHOLDER – replace before launch
    email: "info@eappliancerecycling.com", // PLACEHOLDER – replace before launch
    smsBody: "Hi, I'm interested in wholesale appliance loads.",
  },

  trustPoints: [
    {
      heading: "You get what's advertised",
      body: "No surprises. Every load is described honestly — condition, quantity, and category — before you commit.",
    },
    {
      heading: "Video proof before you buy",
      body: "We send video walkthroughs of every load so you can inspect inventory firsthand, from anywhere.",
    },
    {
      heading: "100% functional inventory",
      body: "Customer returns and scratch-and-dent units — cosmetic imperfections only. Everything works.",
    },
    {
      heading: "Built for wholesale",
      body: "Buy by the load, move volume, and maximize your margin. We don't sell to end consumers.",
    },
  ],

  inventoryCategories: [
    "Refrigerators & Freezers",
    "Washers & Dryers",
    "Dishwashers",
    "Ranges & Ovens",
    "Microwaves",
    "Small Appliances",
  ],

  process: [
    { step: "1", label: "Reach out", detail: "Call or text to tell us what categories or load sizes you need." },
    { step: "2", label: "Review the load", detail: "We send a video walkthrough of available inventory before any commitment." },
    { step: "3", label: "Confirm", detail: "Agree on the load, finalize pricing, and coordinate pickup from our TX or NJ hubs." },
    { step: "4", label: "Move inventory", detail: "Every unit is functional — price it, sell it, and grow your business." },
  ],
} as const
