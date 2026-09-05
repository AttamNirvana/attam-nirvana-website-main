'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Video } from 'lucide-react'
import EventCountdownTimer from '@/components/event/EventCountdownTimer'
import { EVENT_REGISTER_PATH, EVENT_TIME_LABEL } from '@/lib/eventConfig'

export default function EventHero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      <div className="container-main relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-overline !text-[#ffd966]"
          >
            A free 3-day immersion for women ready to come back to themselves
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-[#ffd966] via-[#ffecb3] to-[#ffd966] bg-clip-text text-transparent animate-shimmer bg-size-200">
              A Journey Home to Self
            </span>
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/85 text-sm sm:text-base mb-8"
          >
            <span>18–20 September 2026</span>
            <span aria-hidden="true" className="text-white/30">•</span>
            <span>{EVENT_TIME_LABEL}</span>
            <span aria-hidden="true" className="text-white/30">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Video className="w-4 h-4 text-[#ffd966]" aria-hidden="true" />
              Live on Zoom
            </span>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            There comes a point when you realise that something within you is asking to be heard.
            This is an invitation to come home to yourself.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={EVENT_REGISTER_PATH}
              className="btn-primary btn-shine bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d] text-white font-semibold shadow-lg"
            >
              Reserve My Free Spot
            </Link>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Doors open in</span>
            <EventCountdownTimer className="text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
