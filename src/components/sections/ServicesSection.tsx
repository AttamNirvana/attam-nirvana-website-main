'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Heart, Star } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80',
    title: 'Trauma Healing Sessions',
    description: 'One-on-one personalized sessions to help you process and heal from past trauma with compassionate guidance.',
    duration: '60 mins',
    rating: 5,
    href: '/services#trauma-healing',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    title: 'Aattam 12-Week Program',
    description: 'A comprehensive transformative journey to reclaim your voice, rediscover inner strength, and embrace your true self.',
    duration: '12 weeks',
    rating: 5,
    href: '/services#aattam-program',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    title: 'Group Workshops',
    description: 'Connect with a supportive community of women on similar healing journeys through facilitated group sessions.',
    duration: '2 hours',
    rating: 4.9,
    href: '/services#workshops',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Editorial Style - Mobile Optimized */}
        <FadeInUp>
          <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
            <p className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight mb-5">
              Tailored Programs for Your Healing Journey
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              Compassionate, personalized guidance designed to help you break free and reclaim your authentic self.
            </p>
          </div>
        </FadeInUp>

        {/* Uniform Card Grid - Mobile Responsive */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-primary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                         border border-primary-600 h-full flex flex-col"
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent-gold to-yellow-500 
                                text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    FEATURED
                  </div>
                )}

                {/* Image - Mobile Responsive */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/40" />
                </div>

                {/* Content - Mobile Responsive */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-poppins font-bold text-white mb-2 
                               transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Rating and Duration - Mobile Responsive */}
                  <div className="flex items-center justify-between mb-4 pt-3 border-t border-primary-600">
                    <span className="text-sm text-white/70">{service.duration}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${
                          i < service.rating ? 'text-white fill-current' : 'text-primary-600'
                        }`} />
                      ))}
                    </div>
                  </div>

                  {/* CTA - Mobile Responsive */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 text-sm text-primary-700 font-semibold 
                             bg-white hover:scale-[1.02] px-4 py-2.5 rounded-lg transition-all duration-300 group/link min-h-[44px]">
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Card - Mobile Responsive */}
        <FadeInUp delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-primary-800 rounded-3xl p-8 md:p-10 
                     shadow-xl text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="text-center md:text-left">
                <p className="text-white/90 text-xs font-semibold mb-1.5">Not sure which is right for you?</p>
                <h3 className="text-xl md:text-2xl font-poppins font-bold mb-1.5">
                  Book a Free Discovery Call
                </h3>
                <p className="text-sm text-white/80">Let's discuss your healing journey and find the perfect fit together.</p>
              </div>
              <Link
                href="/free-clarity-call"
                className="px-6 py-3 bg-white text-primary-700 rounded-lg 
                         text-sm font-semibold w-full md:w-auto
                         hover:scale-[1.02] transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap min-h-[44px]"
              >
                SCHEDULE NOW
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  )
}