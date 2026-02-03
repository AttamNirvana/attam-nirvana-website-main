import {
  HeroSection,
  AboutPreviewSection,
  ServicesSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections'
import LightRays from '@/components/effects/LightRays'

export default function HomePage() {
  return (
    <div className="relative bg-primary-700">
      {/* Content - Base Layer */}
      <HeroSection />
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
