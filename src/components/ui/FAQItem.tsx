'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
  delay?: number
}

export default function FAQItem({ question, answer, index, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * index }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900
                   rounded-2xl p-5 sm:p-6 shadow-xl border border-primary-700
                   hover:border-primary-600 transition-all duration-300
                   group relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c99a1d]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex items-start justify-between gap-4">
          <h3 className="text-base sm:text-lg font-poppins font-bold text-white leading-tight pr-2">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-[#c99a1d]" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pt-4 pb-5">
              <p className="text-sm sm:text-base text-white/80 leading-relaxed whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
