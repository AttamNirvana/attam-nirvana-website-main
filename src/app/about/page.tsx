import type { Metadata } from 'next'
import { Suspense } from 'react'
import AboutPageContent from './AboutPageContent'
import { getPersonSchema, getOrganizationSchema, createJsonLd } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'About Rupi Dhillon | The Trauma Liberator | Aattam Nirvana',
  description: 'From silence to self-liberation. Rupi Dhillon&apos;s journey of healing, transformation, and becoming a Trauma Liberator for women seeking freedom from generational patterns.',
  keywords: ['Rupi Dhillon', 'trauma recovery', 'women empowerment', 'healing coach', 'transformation', 'self-liberation', 'NLP practitioner'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Rupi Dhillon | The Trauma Liberator',
    description: 'From silence to self-liberation. Rupi Dhillon&apos;s journey of healing, transformation, and becoming a Trauma Liberator.',
    url: '/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  // Generate structured data for Rupi Dhillon (Person schema)
  const personSchema = getPersonSchema()
  const organizationSchema = getOrganizationSchema()

  return (
    <>
      {/* JSON-LD Structured Data for Person (Rupi Dhillon) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(personSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(organizationSchema)}
      />

      <Suspense
        fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-pulse text-gray-400 text-lg">Loading...</div>
          </div>
        }
      >
        <AboutPageContent />
      </Suspense>
    </>
  )
}
