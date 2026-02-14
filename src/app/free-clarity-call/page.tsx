'use client'

import Script from 'next/script'
import { BreathingBackground } from '@/components/effects/BreathingBackground'
import { AudioToggle } from '@/components/ui/AudioToggle'

export default function FreeClarityCallPage() {
  return (
    <>
      {/* Load Calendly script with lazy loading strategy */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="relative min-h-screen bg-primary-700 pt-24 pb-12">
        {/* Breathing background with Light Rays */}
        <BreathingBackground />
        
        {/* Audio toggle */}
        <AudioToggle />
        
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

            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget bg-white rounded-2xl overflow-hidden shadow-2xl" 
              data-url="https://calendly.com/rupika2020-aattamnirvana/claritycall"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
