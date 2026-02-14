/**
 * Structured Data (JSON-LD) Schema Generators
 * Provides rich snippets for search engines following schema.org specifications
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.attamnirvana.com'

/**
 * Organization Schema - Represents Aattam Nirvana as a business entity
 */
export function getOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Aattam Nirvana',
    alternateName: 'Attam Nirvana',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: '250',
      height: '60'
    },
    image: `${SITE_URL}/og-image.jpg`,
    description: 'Transform your life with trauma healing and women empowerment coaching. Break free from trauma, domestic abuse, and cultural conditioning.',
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Rupi Dhillon'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Punjabi', 'Hindi']
    },
    sameAs: [
      // Add social media profiles here when available
      // 'https://www.facebook.com/attamnirvana',
      // 'https://www.instagram.com/attamnirvana',
      // 'https://www.linkedin.com/company/attamnirvana'
    ]
  };
}

/**
 * Person Schema - Represents Rupi Dhillon as the founder and coach
 */
export function getPersonSchema() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Rupi Dhillon',
    alternateName: 'The Trauma Liberator',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/rupi-dhillon.jpg`,
    description: 'Master NLP Practitioner, Hypnotherapist, and Trauma-Informed Facilitator specializing in trauma healing and women empowerment.',
    jobTitle: 'Trauma Healing Coach & Life Transformation Specialist',
    worksFor: {
      '@id': `${SITE_URL}/#organization`
    },
    knowsAbout: [
      'Trauma Recovery',
      'NLP (Neuro-Linguistic Programming)',
      'Hypnotherapy',
      'Timeline Therapy',
      'EFT (Emotional Freedom Technique)',
      'Somatic Integration',
      'Women Empowerment',
      'Domestic Abuse Recovery',
      'Cultural Conditioning'
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'NLP Training Institute'
      },
      {
        '@type': 'Organization',
        name: 'Hypnotherapy Certification Program'
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Master NLP Practitioner'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Certified Hypnotherapist'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Timeline Therapy Practitioner'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'EFT Practitioner'
      }
    ]
  };
}

/**
 * WebSite Schema - Represents the website itself
 */
export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Aattam Nirvana',
    description: 'Transform your life with Rupi Dhillon. Trauma healing and women empowerment coaching.',
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Service Schema Generator - Creates a Service schema for each coaching program
 */
export interface ServiceData {
  name: string;
  description: string;
  price?: number;
  currency?: string;
  duration?: string;
  serviceType: string;
  url: string;
}

export function getServiceSchema(service: ServiceData) {
  const schema: any = {
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    serviceType: service.serviceType,
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: service.url,
      availableLanguage: ['English', 'Punjabi', 'Hindi']
    }
  };

  if (service.price && service.currency) {
    schema.offers = {
      '@type': 'Offer',
      price: service.price.toString(),
      priceCurrency: service.currency,
      availability: 'https://schema.org/InStock',
      url: service.url,
      validFrom: new Date().toISOString().split('T')[0]
    };
  }

  return schema;
}

/**
 * All Services - Returns array of all service schemas
 */
export function getAllServicesSchema() {
  const services: ServiceData[] = [
    {
      name: 'Aattam 12-Week Transformation Program',
      description: 'A comprehensive 12-week journey to break free from trauma, domestic abuse, and cultural conditioning. Includes weekly 1-on-1 sessions, personalized healing practices, and lifetime support.',
      price: 2997,
      currency: 'GBP',
      duration: '12 weeks',
      serviceType: 'Life Coaching',
      url: `${SITE_URL}/services#aattam`
    },
    {
      name: '1-on-1 Intensive Coaching Session',
      description: '90-minute deep-dive coaching session focused on your specific challenges. Combines NLP, hypnotherapy, and somatic integration for immediate breakthroughs.',
      price: 297,
      currency: 'GBP',
      duration: '90 minutes',
      serviceType: 'Personal Coaching',
      url: `${SITE_URL}/book-session`
    },
    {
      name: 'Free Clarity Call',
      description: '30-minute complimentary consultation to discuss your challenges and explore how Aattam Nirvana can support your journey to self-liberation.',
      price: 0,
      currency: 'GBP',
      duration: '30 minutes',
      serviceType: 'Consultation',
      url: `${SITE_URL}/free-clarity-call`
    },
    {
      name: 'Trauma Recovery Coaching',
      description: 'Specialized coaching for survivors of trauma and domestic abuse. Combines evidence-based techniques with compassionate support.',
      serviceType: 'Trauma Therapy',
      url: `${SITE_URL}/services#trauma-recovery`
    },
    {
      name: 'Women Empowerment Coaching',
      description: 'Break free from cultural conditioning and reclaim your authentic self. Designed specifically for women seeking liberation and empowerment.',
      serviceType: 'Life Coaching',
      url: `${SITE_URL}/services#women-empowerment`
    },
    {
      name: 'NLP & Hypnotherapy Sessions',
      description: 'Transform limiting beliefs and patterns at the subconscious level using Master NLP and clinical hypnotherapy techniques.',
      serviceType: 'Hypnotherapy',
      url: `${SITE_URL}/services#nlp-hypnotherapy`
    }
  ];

  return services.map(service => getServiceSchema(service));
}

/**
 * FAQ Schema - For homepage testimonials section FAQ
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Review Schema Generator
 */
export interface ReviewData {
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export function getReviewSchema(review: ReviewData) {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.text,
    datePublished: review.date || new Date().toISOString().split('T')[0],
    itemReviewed: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

/**
 * Aggregate Rating Schema - For overall testimonial ratings
 */
export function getAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5,
  worstRating: number = 1
) {
  return {
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: worstRating.toString()
  };
}

/**
 * Helper function to create JSON-LD script tag
 */
export function createJsonLd(data: any) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      ...data
    })
  };
}

/**
 * Breadcrumb Schema Generator
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
