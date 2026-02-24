import { SITE } from "./constants";
import { TESTIMONIALS } from "./testimonials-data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InsulationContractor",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 40.4406, longitude: -79.9959 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.stats.rating,
      reviewCount: SITE.stats.reviews.replace("+", ""),
      bestRating: "5",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 40.4406, longitude: -79.9959 },
      geoRadius: "50000",
    },
    sameAs: [SITE.social.facebook, SITE.social.google],
  };
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "InsulationContractor", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "City", name: "Pittsburgh", addressRegion: "PA" },
    url: `${SITE.url}/services/${slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema() {
  return TESTIMONIALS.slice(0, 5).map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
    reviewBody: t.text,
    itemReviewed: { "@type": "InsulationContractor", name: SITE.name },
  }));
}

export function areaServiceSchema(areaName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Spray Foam Insulation in ${areaName}, PA`,
    description: `Professional spray foam insulation services for homes and businesses in ${areaName}, Pennsylvania.`,
    provider: localBusinessSchema(),
    areaServed: { "@type": "City", name: areaName, addressRegion: "PA" },
    url: `${SITE.url}/areas/${slug}`,
  };
}
