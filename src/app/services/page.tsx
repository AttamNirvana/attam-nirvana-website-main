import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'
import { getAllServicesSchema, createJsonLd } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'Life Coaching Services | Trauma Recovery Programs | Aattam Nirvana',
  description: 'Discover personalized trauma healing and empowerment programs. From 12-week transformation to intensive coaching sessions. Online services via Zoom. Free clarity call available.',
  keywords: [
    'life coaching services',
    'trauma recovery programs',
    'women empowerment coaching',
    'NLP coaching',
    'hypnotherapy sessions',
    'intensive coaching',
    'transformation program',
    '1-on-1 coaching',
    'online life coaching',
    'trauma healing services'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Life Coaching Services | Trauma Recovery Programs',
    description: '12-week transformation program, intensive coaching sessions, and free clarity calls. Online trauma healing and women empowerment services.',
    url: '/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  // Generate structured data for services
  const servicesSchemas = getAllServicesSchema()

  return (
    <>
      {/* JSON-LD Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd({
          '@context': 'https://schema.org',
          '@graph': servicesSchemas
        })}
      />
      
      <ServicesContent />
    </>
  )
}
