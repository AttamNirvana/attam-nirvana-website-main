'use client'

import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import LightRays from '@/components/effects/LightRays'

// Animation variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(10px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">

      <div className="container-main relative z-20 w-full py-12 sm:py-24">
        {/* Content - Centered */}
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="text-center">
            {/* Headline with staggered animation */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-poppins leading-[1.1] mb-8 sm:mb-10"
            >
              {/* Line 1 */}
              <motion.span 
                variants={lineVariants}
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3"
              >
                <span className="bg-gradient-to-r from-[#ffd966] via-[#ffecb3] to-[#ffd966] bg-clip-text text-transparent animate-shimmer" style={{backgroundSize: '200% auto'}}>Reclaim Your Inner Strength</span>
              </motion.span>
              
              {/* Line 2 */}
              <motion.span 
                variants={lineVariants}
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-[#ffd966] via-[#ffecb3] to-[#ffd966] bg-clip-text text-transparent animate-shimmer" style={{backgroundSize: '200% auto'}}>& Find Your True Self</span>
              </motion.span>
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent mx-auto mb-8 sm:mb-10"
            />

            {/* Subheadline */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg text-white/85 leading-relaxed mb-10 sm:mb-14 max-w-2xl mx-auto font-light"
            >
              A transformative journey designed to help women break free from trauma, 
              cultural conditioning, and self-doubt. Discover your power with 
              personalized guidance from <span className="text-[#ffd966] font-semibold">Rupi Dhillon</span>.
            </motion.p>

            {/* CTAs with enhanced styling */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: [
                    '0 10px 30px rgba(184, 134, 11, 0.3)',
                    '0 15px 40px rgba(184, 134, 11, 0.5)',
                    '0 10px 30px rgba(184, 134, 11, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button 
                  href="/about" 
                  size="lg" 
                  variant="primary" 
                  className="group w-full sm:w-auto btn-shine bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d] text-white font-semibold shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    <span>Explore the Journey</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <Button 
                  href="/book-session" 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-[#b8860b] text-white bg-[#b8860b]/10 hover:bg-[#b8860b]/20 hover:border-[#c99a1d] backdrop-blur-sm transition-all duration-300 font-semibold shadow-lg shadow-[#b8860b]/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">Book a Session</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
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
