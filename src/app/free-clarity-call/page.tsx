'use client'

import { BreathingBackground } from '@/components/effects/BreathingBackground'
import CalendlyWidget from '@/components/CalendlyWidget'

export default function FreeClarityCallPage() {
  return (
    <div className="relative min-h-screen bg-primary-700 pt-24 pb-12">
      {/* Breathing background with Light Rays */}
      <BreathingBackground />
      
      <div className="container-main relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Free 30-Minute Clarity Call
            </h1>
            <p className="text-xl text-white/80">
              Book your complimentary clarity call to discuss your healing journey
            </p>
          </div>

          {/* Calendly embedded iframe */}
          <CalendlyWidget 
            url="https://calendly.com/rupika2020-aattamnirvana/claritycall"
            iframeSrc="https://calendly.com/rupika2020-aattamnirvana/claritycall?embed_domain=localhost&embed_type=Inline"
          />
        </div>
      </div>
    </div>
  )
}
