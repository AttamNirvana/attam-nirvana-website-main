import type { Metadata } from 'next'
import { Suspense } from 'react'
import AboutPageContent from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About Rupi Dhillon | The Trauma Liberator | Aattam Nirvana',
  description: 'From silence to self-liberation. Rupi Dhillon&apos;s journey of healing, transformation, and becoming a Trauma Liberator for women seeking freedom from generational patterns.',
  openGraph: {
    title: 'About Rupi Dhillon | The Trauma Liberator',
    description: 'From silence to self-liberation. Rupi Dhillon&apos;s journey of healing, transformation, and becoming a Trauma Liberator.',
    url: '/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <>
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
