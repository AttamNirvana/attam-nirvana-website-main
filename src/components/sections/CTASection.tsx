'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FadeInUp } from '@/components/animations'
import { Heart, ArrowRight, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-3xl mx-auto">
        {/* Main CTA Content - Center Aligned */}
        <div className="text-center">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] mb-5 leading-tight">
              Ready to Reclaim Your Power?
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              To every woman who has been told she is not enough: Your power is not lost;
              it is waiting to be reclaimed. I am here to guide and walk beside you.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
              <Button href="/free-clarity-call" size="md" className="bg-accent-purple hover:bg-accent-purple/80 text-white group w-full sm:w-auto">
                <span className="text-xs sm:text-sm">START YOUR JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/about" variant="outline" size="md" className="w-full sm:w-auto">
                <span className="text-xs sm:text-sm">LEARN MORE</span>
              </Button>
            </div>
          </FadeInUp>
        </div>

        {/* Trust Badges - Mobile Optimized */}
        <FadeInUp delay={0.4}>
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {[
                { icon: Heart, value: 'Free', label: 'Discovery Call' },
                { icon: Clock, value: 'Online', label: 'Sessions' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary-800 to-primary-900 rounded-xl border border-primary-700 shadow-lg"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c99a1d] mx-auto mb-2" />
                  <p className="text-base sm:text-lg font-bold text-white mb-0.5 font-poppins">{item.value}</p>
                  <p className="text-[10px] sm:text-xs text-white/70 leading-tight">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}