'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FadeInUp } from '@/components/animations'
import { Heart, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-5xl mx-auto">
        {/* Main CTA Content - Mobile Responsive */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content - Mobile Optimized */}
            <div className="lg:col-span-7 text-center lg:text-left">
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
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start">
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

              {/* Right - Static Feature Cards */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative h-80">
                {/* Card 1 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-0 right-0 bg-primary-900 rounded-xl p-4 shadow-2xl max-w-[165px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary-600 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Free</p>
                      <p className="text-base font-bold text-primary-600 font-poppins">Discovery</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">No pressure conversation</p>
                </motion.div>

                {/* Card 2 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-16 left-0 bg-primary-600 rounded-xl p-4 shadow-2xl max-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-medium">100%</p>
                      <p className="text-base font-bold text-white font-poppins">Private</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80">Safe space</p>
                </motion.div>

                {/* Card 3 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 right-10 bg-primary-900 rounded-xl p-4 shadow-2xl max-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Online</p>
                      <p className="text-base font-bold text-gray-900 font-poppins">Sessions</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Worldwide</p>
                </motion.div>
              </div>
            </div>
          </div>

        {/* Trust Badges - Mobile Optimized */}
        <FadeInUp delay={0.4}>
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 md:pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: Heart, value: 'Free', label: 'Discovery Call' },
                { icon: Shield, value: '100%', label: 'Confidential' },
                { icon: Clock, value: 'Online', label: 'Sessions' },
                { icon: Sparkles, value: '500+', label: 'Lives Changed' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="text-center p-2.5 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple mx-auto mb-1 sm:mb-1.5" />
                  <p className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5">{item.value}</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs text-white/70 leading-tight">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}