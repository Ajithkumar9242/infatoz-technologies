/**
 * Centralized Technical SEO & Site Configuration
 * 
 * Single source of truth for canonical base URL, metadata defaults,
 * contact coordinates, and structured data across all routes.
 * 
 * DOMAIN SAFETY:
 * The default canonical domain is set to https://infatoz.com (the official
 * corporate production domain). To override for a staging or Netlify environment,
 * set the NEXT_PUBLIC_SITE_URL environment variable (e.g. https://infatoz.netlify.app).
 */

export const siteConfig = {
  name: "Infatoz Technologies",
  legalName: "Infatoz Technologies",
  slogan: "Idea to Impact",
  tagline: "Driving Business Growth Through Technology",
  description:
    "Infatoz Technologies delivers secure, scalable, and future-ready digital engineering solutions — custom web & mobile applications, ERP automation, cloud infrastructure, and AI systems.",
  // Isolate the base URL in one easy-to-update configuration location
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://infatoz.com",
  locale: "en_US",
  logoUrl: "/images/infatoz-logo.svg",
  iconUrl: "/images/infatoz.png",
  contact: {
    email: "info@infatoz.com",
    phone: "+91 7019058591",
    phoneDisplay: "+91 7019058591",
  },
  addresses: {
    bengaluru: {
      name: "Bengaluru Delivery Center",
      streetAddress: "102, Pms Residency, Kothnoor Dinne, Poornima Nagar, Arekere",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560076",
      addressCountry: "IN",
    },
    kundapura: {
      name: "Kundapura Registered Office",
      streetAddress: "1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Udupi",
      addressLocality: "Kundapura",
      addressRegion: "Karnataka",
      postalCode: "576219",
      addressCountry: "IN",
    },
  },
};
