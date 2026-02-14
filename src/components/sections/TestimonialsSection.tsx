'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from '@/components/ui/TestimonialCard'
import FAQItem from '@/components/ui/FAQItem'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion, AnimatePresence } from 'framer-motion'
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

const faqs = [
  {
    question: "I've spent years trying to \"fix\" myself. Is this another form of self-improvement work?",
    answer: "No. This work is not about fixing you — it's about freeing you.\n\nYou are not broken. What you're carrying may not even be yours — inherited beliefs, emotional imprints, survival patterns that once kept you safe. For decades, I lived in silence and self-suppression, believing endurance was strength. At 51, I chose something different — not because it was easy, but because staying the same was no longer possible.\n\nThis work begins from that understanding."
  },
  {
    question: "What makes your approach different from traditional therapy or coaching?",
    answer: "I don't offer surface change. I guide identity-level transformation.\n\nI trained across trauma-informed modalities — NLP, hypnotherapy, EFT, timeline therapy, belief recoding, somatic integration — not to collect techniques, but to understand why insight alone doesn't create freedom.\n\nReal transformation happens when the body feels safe enough to release what the mind has been carrying for years. That is the level at which we work."
  },
  {
    question: "Do I have to keep \"healing\" forever? I feel exhausted by it.",
    answer: "No. This is not about endless healing.\n\nIt's about becoming who you were always meant to be.\n\nI support women who are capable and deeply self-aware — yet still feel held back by patterns they cannot think their way out of. Together, we release what no longer serves you, reclaim your voice and authority, and step into a version of you that no longer abandons herself."
  },
  {
    question: "How will I know if this work is right for me?",
    answer: "Many approaches help you cope. This work helps you become.\n\nIt is trauma-informed, culturally aware, and deeply integrative — designed for women who are ready for real change, not just understanding.\n\nIf you're here, something in you already knows. And when you're ready, I'm here to walk with you — honestly, safely, and with purpose."
  },
  {
    question: "What is the six-week \"Begin Choosing Yourself\" journey about?",
    answer: "This six-week initiation is for women ready to return to their voice, boundaries, and inner truth.\n\nIt's for those who learned to stay quiet, agreeable, or invisible — and are now ready to live with self-respect and emotional safety. With care, precision, and deep attunement, we begin releasing self-abandonment and reconnecting with your inner authority.\n\nNo fixing. No forcing. Just an honest beginning."
  },
  {
    question: "What is Aattam, and how is it different from shorter programs?",
    answer: "Aattam is a six-month embodied journey into liberation, identity, and self-leadership.\n\nIt is for women who know surface-level healing is no longer enough. This is long-term integration — where healing moves beyond insight and becomes lived, grounded, and embodied. Through intentional guidance and sustained support, you step into clarity, sovereignty, and self-trust.\n\nNot a programme to consume. A return to who you are."
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Change testimonial every 6 seconds

    return () => clearInterval(interval)
  }, [isPaused])

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
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 md:gap-7 max-w-6xl mx-auto">
          {/* Large Featured Testimonial - Left */}
          <div 
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => 
                index === currentIndex ? (
                  <motion.div
                    key={testimonial.author}
                    layoutId={`testimonial-${testimonial.author}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="relative h-full"
                  >
                    <div className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900
                                  rounded-2xl p-6 sm:p-7 md:p-8 h-full shadow-2xl relative overflow-hidden border border-primary-600">
                      
                      {/* Decorative Background */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c99a1d]/20 to-transparent rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-full blur-3xl" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Badge - Mobile Responsive */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c99a1d] to-[#e0b84d]
                                      px-4 py-2 rounded-full mb-5 shadow-lg">
                          <Star className="w-3.5 h-3.5 text-white fill-current" />
                          <span className="text-xs font-bold text-white uppercase tracking-wider">Featured Story</span>
                        </div>

                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="w-10 h-10 text-accent-purple/40" />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-base sm:text-lg md:text-xl font-poppins font-medium leading-relaxed mb-6 text-white">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#c99a1d] fill-current" />
                          ))}
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3 pt-4 border-t border-primary-600">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c99a1d] to-[#e0b84d] flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Heart className="w-5 h-5 text-white fill-current" />
                          </div>
                          <div>
                            <p className="text-base font-poppins font-bold text-white">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-accent-purple font-semibold">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Smaller Testimonials - Right */}
          <div 
            className="lg:col-span-5 space-y-4 sm:space-y-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, index) => 
              index !== currentIndex ? (
                <motion.div
                  key={testimonial.author}
                  layoutId={`testimonial-${testimonial.author}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 
                           rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden border border-primary-700"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Mini Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c99a1d]/90 to-[#e0b84d]/90
                                  px-3 py-1.5 rounded-full mb-4">
                      <Star className="w-3 h-3 text-white fill-current" />
                      <span className="text-xs font-semibold text-white">Verified</span>
                    </div>

                    {/* Reduced Quote */}
                    <blockquote className="text-sm font-poppins font-medium mb-4 text-white/90 line-clamp-4">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#c99a1d] fill-current" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-primary-700">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c99a1d] to-[#e0b84d] flex items-center justify-center flex-shrink-0">
                        <Heart className="w-3.5 h-3.5 text-white fill-current" />
                      </div>
                      <div>
                        <p className="font-poppins font-bold text-white text-xs">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-accent-purple/90">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <FadeInUp delay={0.6}>
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="max-w-2xl mb-10">
              <p className="text-white/90 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                FAQs
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight">
                Questions You Might Have
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                  delay={0.1}
                />
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}