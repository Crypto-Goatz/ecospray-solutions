/**
 * JSON-LD Schema Markup for SXO — Structured Data for Google & AI Search
 *
 * Implements: LocalBusiness, WebSite, BreadcrumbList, Service, Review,
 * AggregateRating, HowTo, FAQPage, Organization, Person
 */

const BUSINESS = {
  name: 'EcoSpray Solutions',
  url: 'https://ecospraysolutions.com',
  phone: '+17248192727',
  phoneFormatted: '(724) 819-2727',
  email: 'hello@ecospraysolutions.com',
  address: {
    street: 'Murrysville',
    city: 'Murrysville',
    state: 'PA',
    zip: '15668',
    country: 'US',
  },
  geo: {
    lat: 40.4287,
    lng: -79.6967,
  },
  logo: 'https://ecospraysolutions.com/images/logos/logo-full.png',
  image: 'https://ecospraysolutions.com/images/logos/banner-worker.png',
  description:
    "Pittsburgh's trusted spray foam insulation experts. Professional residential and commercial insulation services saving homeowners up to 50% on energy bills.",
  priceRange: '$$',
  areaServed: [
    'Pittsburgh', 'Murrysville', 'Monroeville', 'Export', 'Greensburg',
    'Irwin', 'North Huntingdon', 'Delmont', 'Latrobe', 'Jeannette',
    'Penn Township', 'Plum', 'Penn Hills', 'Trafford', 'Harrison City',
  ],
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    publisher: { '@id': `${BUSINESS.url}/#business` },
    inLanguage: 'en-US',
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    image: service.image,
    url: service.url,
    provider: { '@id': `${BUSINESS.url}/#business` },
    areaServed: {
      '@type': 'State',
      name: 'Pennsylvania',
    },
  }
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getHowToSchema(steps: { name: string; text: string; image?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How Spray Foam Insulation Installation Works',
    description:
      'Our 4-step process for professional spray foam insulation installation in Pittsburgh homes and businesses.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
    totalTime: 'P1D',
  }
}

export function getReviewSchema(reviews: {
  author: string
  rating: number
  text: string
  date?: string
}[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    datePublished: review.date || '2025-01-15',
    itemReviewed: { '@id': `${BUSINESS.url}/#business` },
  }))
}

export function getAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export { BUSINESS }
