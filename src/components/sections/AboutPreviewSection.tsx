'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/animations'
import { Heart, Sparkles, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImg from '@/assets/profile.jpg'

export default function AboutPreviewSection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Editorial Style - Mobile Optimized */}
        <FadeInUp className="mb-6 sm:mb-7 md:mb-8">
          <div className="max-w-2xl">
            <p className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              The Story Behind Aattam
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight">
              From Darkness to Light
            </h2>
          </div>
        </FadeInUp>

        {/* Asymmetric Bento Grid Layout - Mobile Responsive */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 items-center">
          {/* Left Column - Image + Floating Stats */}
          <SlideInLeft className="lg:col-span-4">
            <div className="relative max-w-[280px] mx-auto">
              {/* Main Photo with Creative Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hero">
                <Image
                  src={profileImg}
                  alt="Rupi Dhillon"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-900/20" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent-purple/10 rounded-full -z-10" />

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary-900 rounded-xl p-4 shadow-purple-lg border border-primary-700 max-w-[160px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white font-poppins">27+</p>
                    <p className="text-[9px] text-white/60">Years</p>
                  </div>
                </div>
                <p className="text-[9px] text-white/70">Of lived experience & deep insight</p>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right Column - Content - Mobile Optimized */}
          <SlideInRight className="lg:col-span-8">
            <div className="space-y-4 md:space-y-5">
              {/* Name Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-800 border border-primary-600 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-white" />
                <div>
                  <p className="text-base font-poppins font-bold text-white">Rupi Dhillon</p>
                  <p className="text-xs text-white/90 font-medium">fondly known as Rupi</p>
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
                <p className="text-base md:text-lg">
                  For over <span className="font-bold text-white">27 years</span>, I endured 
                  the harrowing trials of domestic violence and emotional, verbal, and psychological abuse.
                </p>
                
                <p className="text-sm md:text-base">
                  Despite the dark times and the constant undermining of my worth and intelligence, 
                  I wore a <span className="italic text-white">mask of contentment</span> and 
                  became a people pleaser, sacrificing my dreams and living life on others' terms.
                </p>

                <p className="text-sm md:text-base">
                  At the age of <span className="font-bold text-white">51</span>, with unwavering 
                  support from a mentor and compassionate network, I embarked on a 
                  <span className="font-semibold text-white"> transformative journey of healing 
                  and self-discovery</span>.
                </p>
              </div>

              {/* Pull Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-5 py-3 border-l-4 border-white bg-primary-800 rounded-r-lg"
              >
                <Heart className="absolute -left-2.5 top-3 w-5 h-5 text-white fill-current bg-primary-700 rounded-full" />
                <p className="italic text-white text-sm md:text-base font-medium leading-relaxed">
                  "From the ashes of my past, I have risen like a phoenix, ready to soar. 
                  My journey is proof that healing is possible and that freedom awaits."
                </p>
              </motion.div>

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