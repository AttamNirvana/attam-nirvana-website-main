'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'

const testimonials = [
  {
    quote: "Rupi's guidance has been nothing short of life-changing. After years of feeling lost and broken, I finally found my voice and the strength to start living authentically.",
    author: 'Priya Sharma',
    title: 'Program Graduate',
    rating: 5,
    featured: true,
  },
  {
    quote: "The Aattam program gave me the tools to understand my patterns and break free from them. Rupi's compassion and wisdom made me feel safe throughout my healing journey.",
    author: 'Sarah Mitchell',
    title: 'Trauma Healing Client',
    rating: 5,
  },
  {
    quote: "I came to Rupi feeling worthless after years of emotional abuse. Today, I run my own business and help other women. She showed me my power was never lost.",
    author: 'Anita Patel',
    title: 'Workshop Attendee',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Mobile Optimized */}
        <FadeInUp>
          <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
            <p className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight mb-5">
              Stories of Transformation
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              Real women sharing their journeys of healing, growth, and reclaiming their power.
            </p>
          </div>
        </FadeInUp>

        {/* Masonry-style Layout - Mobile Responsive */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8">
          {/* Large Featured Testimonial - Left */}
          <StaggerContainer className="lg:col-span-7" staggerDelay={0.1}>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <div className="bg-primary-800 
                              rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white h-full shadow-xl relative overflow-hidden">

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge - Mobile Responsive */}
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 
                                  px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ffd966] fill-current" />
                      <span className="text-[10px] sm:text-xs font-semibold">Featured Story</span>
                    </div>

                    {/* Quote - Mobile Responsive */}
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent-purple/50 mb-3 sm:mb-4 md:mb-5" />
                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-medium leading-relaxed mb-4 sm:mb-5 md:mb-6">
                      "{testimonials[0].quote}"
                    </blockquote>

                    {/* Rating - Mobile Responsive */}
                    <div className="flex gap-0.5 mb-3 sm:mb-4 md:mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd966] fill-current" />
                      ))}
                    </div>

                    {/* Author - Mobile Responsive */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-poppins font-bold text-white">
                          {testimonials[0].author}
                        </p>
                        <p className="text-xs sm:text-sm text-accent-purple font-medium">
                          {testimonials[0].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Stacked Testimonials - Right - Mobile Responsive */}
          <StaggerContainer className="lg:col-span-5 space-y-5 sm:space-y-6 md:space-y-8" staggerDelay={0.15}>
            {[testimonials[1], testimonials[2]].map((testimonial, index) => (
              <StaggerItem key={testimonial.author}>
                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary-900 border border-primary-700 rounded-xl p-4 sm:p-5 md:p-6 shadow-purple-sm hover:shadow-purple-md 
                           transition-shadow"
                >
                  {/* Rating - Mobile Responsive */}
                  <div className="flex gap-0.5 mb-2.5 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffd966] fill-current" />
                    ))}
                  </div>

                  {/* Quote - Mobile Responsive */}
                  <blockquote className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-5">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author - Mobile Responsive */}
                  <div className="flex items-center gap-2 pt-2.5 sm:pt-3 border-t border-primary-700">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold font-poppins text-sm sm:text-base">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-poppins font-bold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-accent-purple">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Stats Bar */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '5.0', label: 'Average Rating', icon: Star },
              { value: '500+', label: 'Happy Clients', icon: Heart },
              { value: '98%', label: 'Success Rate', icon: null },
              { value: '100%', label: 'Confidential', icon: null },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="text-center p-4 bg-primary-900/30 rounded-xl border border-primary-700"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  {stat.icon && <stat.icon className="w-4 h-4 text-[#ffd966] fill-current" />}
                  <p className="text-2xl md:text-3xl font-bold text-white font-poppins">
                    {stat.value}
                  </p>
                </div>
                <p className="text-xs text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}