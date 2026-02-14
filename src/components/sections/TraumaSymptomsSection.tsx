'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Brain, ShieldAlert, HeartCrack, Eye, Sparkles } from 'lucide-react'

const traumaSymptoms = [
  {
    title: 'Flashbacks or intrusive memories.',
    icon: Brain,
    href: '/services#trauma-healing',
    color: 'from-[#b8860b] to-[#c99a1d]'
  },
  {
    title: 'Avoidance of triggers.',
    icon: ShieldAlert,
    href: '/services#trauma-healing',
    color: 'from-[#c99a1d] to-[#daa520]'
  },
  {
    title: 'Emotional numbness or detachment.',
    icon: HeartCrack,
    href: '/services#trauma-healing',
    color: 'from-[#daa520] to-[#b8860b]'
  },
  {
    title: 'Hypervigilance or heightened arousal.',
    icon: Eye,
    href: '/services#trauma-healing',
    color: 'from-[#b8860b] to-[#daa520]'
  },
  {
    title: 'Altered beliefs or feelings about oneself/world.',
    icon: Sparkles,
    href: '/services#trauma-healing',
    color: 'from-[#c99a1d] to-[#b8860b]'
  }
]

export default function TraumaSymptomsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-12 sm:py-14 md:py-16 overflow-hidden">
      {/* Ambient glow decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-3">
            Common signs and symptoms of{' '}
            <span className="bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#b8860b] bg-clip-text text-transparent">
              Trauma
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mt-4 shadow-lg shadow-[#b8860b]/30" />
        </motion.div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {traumaSymptoms.map((symptom, index) => (
            <motion.div
              key={symptom.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { 
                    y: -12,
                    scale: 1.03,
                  boxShadow: '0 8px 16px rgba(184, 134, 11, 0.1)'
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="relative h-full bg-primary-900/50 backdrop-blur-xl rounded-2xl p-5 border-2 border-[#b8860b]/20 
                           hover:border-[#b8860b]/60 transition-all duration-500 overflow-hidden
                           flex flex-col items-center text-center shadow-md shadow-black/20
                           hover:shadow-lg hover:shadow-[#b8860b]/20"
                >
                  {/* Radial glow effect */}
                  <div className="absolute inset-0 bg-[#b8860b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Gold Icon with lines */}
                  <div className="relative z-10 w-16 h-16 mb-4 rounded-full border-2 border-[#b8860b]
                                flex items-center justify-center group-hover:scale-110 group-hover:border-[#daa520]
                                transition-all duration-500 shadow-lg shadow-[#b8860b]/30
                                before:absolute before:inset-0 before:rounded-full before:border-2 before:border-[#b8860b]/30 before:scale-110">
                    <symptom.icon className="w-8 h-8 text-[#b8860b] group-hover:text-[#daa520] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative z-10 text-sm font-semibold text-white mb-3 
                               group-hover:text-[#daa520] transition-colors leading-relaxed">
                    {symptom.title}
                  </h3>
                  
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                ring-1 ring-inset ring-[#b8860b]/20" />
                </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Text */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-white/80 text-xs md:text-sm font-medium">
            Experiencing these symptoms? You're not alone.{' '}
            <a href="/contact" className="text-[#daa520] hover:text-[#b8860b]
                                           font-bold transition-colors underline decoration-[#daa520]/40 
                                           hover:decoration-[#daa520]/80 decoration-2 underline-offset-4">
              Get in touch
            </a>
            {' '}for personalized support.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
