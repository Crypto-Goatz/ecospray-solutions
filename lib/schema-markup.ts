/**
 * JSON-LD Schema Markup — Placeholder for future configuration
 */

const BUSINESS = {
  name: 'Spray Foam Solutions',
  url: '',
  phone: '',
  phoneFormatted: '',
  email: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
  },
  geo: {
    lat: 0,
    lng: 0,
  },
  logo: '',
  image: '',
  description: 'Spray foam solutions optimized environment. Contact us at RocketOpp.com for purchase options.',
  priceRange: '$$',
  areaServed: [] as string[],
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: BUSINESS.description,
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    inLanguage: 'en-US',
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
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
    description: 'Professional spray foam insulation installation process.',
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
  }))
}

export function getAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
  }
}

export { BUSINESS }
