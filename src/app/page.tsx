import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import {
  HeroSection,
  TraumaSymptomsSection,
  AboutPreviewSection,
  ServicesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections'
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getFAQSchema,
  getAllServicesSchema,
  getReviewSchema,
  getAggregateRatingSchema,
  createJsonLd,
  type ReviewData,
} from '@/lib/structuredData'

// Lazy load LightRays component for better performance
const LightRays = dynamic(() => import('@/components/effects/LightRays'), {
  ssr: false,
  loading: () => null
})

export const metadata: Metadata = {
  title: 'Rupi Dhillon | Trauma Healing & Women Empowerment | Aattam Nirvana',
  description: 'Break free from trauma, domestic abuse, and cultural conditioning. Transform your life with Rupi Dhillon\'s 12-week program. Reclaim your inner strength and authentic self.',
  keywords: [
    'trauma healing',
    'women empowerment',
    'domestic abuse recovery',
    'cultural conditioning',
    'self-liberation',
    'Rupi Dhillon',
    'Aattam Nirvana',
    'life coaching',
    'NLP practitioner',
    'hypnotherapy',
    'trauma recovery coach'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rupi Dhillon | Trauma Healing & Women Empowerment',
    description: 'Break free from trauma and reclaim your authentic self. 12-week transformation program for women seeking liberation.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aattam Nirvana - Rupi Dhillon Trauma Healing',
      },
    ],
  },
}

// FAQ data for structured data
const faqData = [
  {
    question: "I've spent years trying to \"fix\" myself. Is this another form of self-improvement work?",
    answer: "No. This work is not about fixing you — it's about freeing you. You are not broken. What you're carrying may not even be yours — inherited beliefs, emotional imprints, survival patterns that once kept you safe. This work begins from that understanding."
  },
  {
    question: "What makes your approach different from traditional therapy or coaching?",
    answer: "I don't offer surface change. I guide identity-level transformation. I trained across trauma-informed modalities — NLP, hypnotherapy, EFT, timeline therapy, belief recoding, somatic integration — not to collect techniques, but to understand why insight alone doesn't create freedom. Real transformation happens when the body feels safe enough to release what the mind has been carrying for years."
  },
  {
    question: "Do I have to keep \"healing\" forever? I feel exhausted by it.",
    answer: "No. This is not about endless healing. It's about becoming who you were always meant to be. I support women who are capable and deeply self-aware — yet still feel held back by patterns they cannot think their way out of."
  },
  {
    question: "How will I know if this work is right for me?",
    answer: "Many approaches help you cope. This work helps you become. It is trauma-informed, culturally aware, and deeply integrative — designed for women who are ready for real change, not just understanding. If you're here, something in you already knows."
  }
]

// Testimonials data for structured data (Reviews)
const testimonialsData: ReviewData[] = [
  {
    author: 'Priya Sharma',
    rating: 5,
    text: "Rupi's guidance has been nothing short of life-changing. After years of feeling lost and broken, I finally found my voice and the strength to start living authentically.",
    date: '2025-12-15'
  },
  {
    author: 'Sarah Mitchell',
    rating: 5,
    text: "The Aattam program gave me the tools to understand my patterns and break free from them. Rupi's compassion and wisdom made me feel safe throughout my healing journey.",
    date: '2025-11-28'
  },
  {
    author: 'Anita Patel',
    rating: 5,
    text: "I came to Rupi feeling worthless after years of emotional abuse. Today, I run my own business and help other women. She showed me my power was never lost.",
    date: '2025-10-10'
  }
]

export default function HomePage() {
  // Generate structured data
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebSiteSchema()
  const faqSchema = getFAQSchema(faqData)
  const servicesSchemas = getAllServicesSchema()
  
  // Generate review schemas
  const reviewSchemas = testimonialsData.map(testimonial => getReviewSchema(testimonial))
  const aggregateRating = getAggregateRatingSchema(5, testimonialsData.length)
  
  // Create Organization with AggregateRating
  const organizationWithReviews = {
    ...organizationSchema,
    aggregateRating: aggregateRating
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(organizationWithReviews)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(websiteSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(faqSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd({
          '@context': 'https://schema.org',
          '@graph': servicesSchemas
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd({
          '@context': 'https://schema.org',
          '@graph': reviewSchemas
        })}
      />

      <div className="relative bg-primary-700">
        {/* Content - Base Layer */}
        <HeroSection />
        <TraumaSymptomsSection />
        <AboutPreviewSection />
        <ServicesSection />\n        <TestimonialsSection />
        <CTASection />
        
        {/* Global Fixed Ambient Light Layer - Blended on Top */}
        <div className="fixed inset-0 w-full h-screen z-[10] pointer-events-none mix-blend-screen opacity-75">
          <LightRays 
            raysOrigin="top-center"
            raysColor="#ffd966"
            raysSpeed={0.5}
            lightSpread={3.0}
            rayLength={5.0}
            pulsating={true}
            fadeDistance={1.5}
            saturation={1.8}
            distortion={0}
            noiseAmount={0}
          />
        </div>
      </div>
    </>
  )
}
