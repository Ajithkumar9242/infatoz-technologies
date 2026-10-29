import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}${siteConfig.iconUrl}`,
          caption: siteConfig.name,
        },
        image: `${siteConfig.url}${siteConfig.iconUrl}`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: siteConfig.addresses.bengaluru.streetAddress,
            addressLocality: siteConfig.addresses.bengaluru.addressLocality,
            addressRegion: siteConfig.addresses.bengaluru.addressRegion,
            postalCode: siteConfig.addresses.bengaluru.postalCode,
            addressCountry: siteConfig.addresses.bengaluru.addressCountry,
          },
          {
            "@type": "PostalAddress",
            streetAddress: siteConfig.addresses.kundapura.streetAddress,
            addressLocality: siteConfig.addresses.kundapura.addressLocality,
            addressRegion: siteConfig.addresses.kundapura.addressRegion,
            postalCode: siteConfig.addresses.kundapura.postalCode,
            addressCountry: siteConfig.addresses.kundapura.addressCountry,
          },
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "AdministrativeArea",
            name: "Worldwide",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          contactType: "customer service",
          email: siteConfig.contact.email,
          availableLanguage: ["English", "Kannada", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
