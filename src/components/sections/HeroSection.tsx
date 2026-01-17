'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Sparkles, Brain, Heart, User } from 'lucide-react'
import heroBg from '@/assets/hero-bg.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark tint overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-primary-800/60" />
      </div>
      
      {/* Background Decorative Elements with Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Cosmic glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-32 w-80 h-80 bg-accent-cyan/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-[100px]" />
        
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[15%] text-accent-cyan/40"
        >
          <Brain className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-40 right-[18%] text-accent-purple/40"
        >
          <User className="w-14 h-14 sm:w-18 sm:h-18" strokeWidth={1.5} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-24 right-[35%] text-pink-400/40"
        >
          <Heart className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="container-main relative z-20 w-full py-12 sm:py-16 md:py-20">
        {/* Asymmetric Layout with Floating Cards */}
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            {/* Headline with Editorial Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-white leading-[1.1] mb-6 sm:mb-8"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3">
                Reclaim Your Inner
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3">
                Strength{' '}
                <span className="text-white/90">&</span>{' '}
                <span className="text-accent-purple">
                  Find Your True
                </span>
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent-purple">
                Self
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-light-text leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
              A transformative journey designed to help women break free from trauma, 
              cultural conditioning, and self-doubt. Discover your power with 
              personalized guidance from <span className="text-white font-medium">Rupinder Dhillon</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12 sm:mb-16">
            >
              <Button href="/about" size="lg" variant="primary" className="group w-full sm:w-auto">
                <span className="text-sm sm:text-base">Explore the Journey</span>
              </Button>
              <Button href="/book-session" variant="outline" size="lg" className="w-full sm:w-auto">
                <span className="text-sm sm:text-base">Book a Session</span>
              </Button>
            </motion.div>

            {/* Social Proof - Hidden for cleaner design matching reference */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto">
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">500+</p>
                <p className="text-[9px] sm:text-[10px] text-light-text leading-tight">Lives Transformed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">27+</p>
                <p className="text-[9px] sm:text-[10px] text-light-text leading-tight">Years Insight</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">12</p>
                <p className="text-[9px] sm:text-[10px] text-light-text leading-tight">Week Program</p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}