import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import {
  HeroSection,
  AboutPreviewSection,
  ServicesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections'
import EventTeaser from '@/components/sections/event/EventTeaser'

// Lazy load LightRays component for better performance
const LightRays = dynamic(() => import('@/components/effects/LightRays'), {
  ssr: false,
  loading: () => null
})

export const metadata: Metadata = {
  title: 'Rupi Dhillon | Trauma Healing & Women Empowerment | Aattam Nirvana',
  description: 'Break free from trauma, domestic abuse, and cultural conditioning. Transform your life with Rupi Dhillon\'s 12-week program. Reclaim your inner strength and authentic self.',
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

export default function HomePage() {
  return (
    <div className="relative bg-primary-700">
      {/* Content - Base Layer */}
      <HeroSection />
      <EventTeaser />
      <AboutPreviewSection />
      <ServicesSection />
      <TestimonialsSection />
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
  )
}
