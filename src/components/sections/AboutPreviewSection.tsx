'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ShinyText from '@/components/ui/ShinyText'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/animations'
import { Heart, Sparkles, Award, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import profileImg from '@/assets/profile.jpg'

export default function AboutPreviewSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const quotes = [
    "This is a space where your truth is welcome — because you are not broken, you are not alone, and you are not meant to live in silence.",
    "Through trauma-informed tools and heart-led guidance, healing becomes steady, embodied, and rooted in truth — not pressure.",
    "In emotional safety and deep understanding, you are seen without judgment and heard without having to prove your pain."
  ]

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000) // Change quote every 5 seconds

    return () => clearInterval(interval)
  }, [quotes.length, isPaused])

  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Editorial Style - Mobile Optimized */}
        <FadeInUp className="mb-6 sm:mb-7 md:mb-8">
          <div className="max-w-2xl">
            <p className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              The Story Behind Aattam
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight whitespace-nowrap">
              From Silence to Self‑Liberation
            </h2>
            <p className="text-white font-poppins text-sm sm:text-base md:text-lg mt-3">
              And Now, I Walk Beside You
            </p>
          </div>
        </FadeInUp>

        {/* Asymmetric Bento Grid Layout - Mobile Responsive */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 items-center">
          {/* Left Column - Image + Floating Stats */}
          <SlideInLeft className="lg:col-span-4">
            <div className="relative max-w-[320px] mx-auto">
              {/* Main Photo with Creative Frame */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c99a1d]/20"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(201, 154, 29, 0.1)'
                }}
              >
                <Image
                  src={profileImg}
                  alt="Rupi Dhillon"
                  fill
                  className="object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
                
                {/* Decorative golden corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#c99a1d]/50 rounded-tr-2xl" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#c99a1d]/50 rounded-bl-2xl" />
                </div>
              </div>

              {/* Decorative Elements - Enhanced */}
              <div className="absolute -top-5 -right-5 w-28 h-28 bg-gradient-to-br from-[#c99a1d]/20 to-[#e0b84d]/10 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-tr from-primary-600/20 to-accent-purple/10 rounded-full blur-xl -z-10" />
              
              {/* Additional golden glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#c99a1d]/0 via-[#c99a1d]/5 to-[#c99a1d]/0 -z-20 blur-2xl" />

              {/* Floating Stat Card - Redesigned */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-5 shadow-2xl border border-[#c99a1d]/30 backdrop-blur-sm max-w-[180px]"
                style={{
                  boxShadow: '0 10px 40px rgba(201, 154, 29, 0.15), 0 0 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="relative">
                  {/* Golden accent line */}
                  <div className="absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c99a1d] via-[#e0b84d] to-[#c99a1d] rounded-full" />
                  
                  {/* Number with icon */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#c99a1d] flex-shrink-0" />
                    <div>
                      <span className="text-4xl font-bold text-white font-poppins tracking-tight">27</span>
                      <span className="text-2xl font-bold text-[#c99a1d]">+</span>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">Years</p>
                  
                  {/* Description */}
                  <p className="text-[10px] leading-relaxed text-white/60 font-medium">
                    Of lived experience & transformative insights
                  </p>
                </div>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right Column - Content - Mobile Optimized */}
          <SlideInRight className="lg:col-span-8">
            <div className="space-y-4 md:space-y-5">
              {/* Name Badge */}
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#c99a1d] flex-shrink-0" />
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold">
                    <ShinyText 
                      text="Rupi Dhillon" 
                      color="#ffffff"
                      shineColor="#e0b84d"
                      speed={3.5}
                      spread={90}
                    />
                  </p>
                  <p className="text-sm sm:text-base text-white/90 font-medium">fondly known as Rupi</p>
                </div>
              </div>

              {/* Role Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary-800 text-white rounded-full text-xs font-semibold">
                  Trauma Healing Coach
                </span>
                <span className="px-3 py-1.5 bg-primary-800 text-white rounded-full text-xs font-semibold">
                  Survivor Advocate
                </span>
              </div>

              {/* Story Text */}
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p className="text-sm md:text-base">
                  <span className="font-bold text-white">My work is rooted in lived experience and deep study — in knowing what it means to lose yourself while holding everything together.</span>
                </p>
                
                <p className="text-sm md:text-base">
                  For over twenty-five years, I lived in silence shaped by cultural conditioning, physical and emotional abuse, and the belief that endurance was strength. <span className="font-bold text-white">At 51, I chose differently. I walked away from survival and returned to my truth.</span>
                </p>

                <p className="text-sm md:text-base">
                  I rebuilt from within — healing trauma, breaking generational patterns, and redefining who I was allowed to be. That journey became my mission.
                </p>

                <p className="text-sm md:text-base">
                  Today, I guide women who feel unseen, unheard, or disconnected from themselves. Women carrying guilt that was never theirs. Women who sense there is more to life than enduring it.
                </p>

                <p className="text-sm md:text-base">
                  <span className="font-bold text-white">I do not stand above you.</span><br />
                  <span className="font-bold text-white">I walk beside you — as you reclaim your voice, your worth, and your inner freedom.</span>
                </p>
              </div>

              {/* Pull Quote - Rotating */}
              <div 
                className="relative pl-5 py-3 border-l-4 border-white bg-primary-800 rounded-r-lg"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Heart className="absolute -left-2.5 top-3 w-5 h-5 text-white fill-current bg-primary-700 rounded-full" />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="italic text-white text-sm md:text-base font-medium leading-relaxed"
                  >
                    "{quotes[currentQuoteIndex]}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="pt-3">
                <Button href="/about" size="md" className="group w-full sm:w-auto">
                  <span>DISCOVER MY FULL JOURNEY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
