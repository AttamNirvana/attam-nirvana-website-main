'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import {
  EVENT_NAME,
  EVENT_PATH,
  EVENT_TIME_LABEL,
  isEventPromotable,
} from '@/lib/eventConfig'

const DISMISS_KEY = 'event-modal-dismissed'

/**
 * Non-blocking announcement panel - slides in from the right, no full-screen
 * backdrop, so the page underneath stays visible and interactive (matches
 * the site's SocialSidebar in placement rather than a blocking dialog).
 */
export default function EventAnnouncementModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isEventPromotable()) return
    if (localStorage.getItem(DISMISS_KEY)) return

    // Fires after CookieConsent's own show-check runs (it appears at 1000ms),
    // so the two overlays never animate in on top of each other.
    const timer = setTimeout(() => setIsVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed z-[60] right-4 sm:right-6 top-24 sm:top-28 w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm rounded-3xl bg-primary-800 border border-white/10 shadow-2xl overflow-hidden"
          role="dialog"
          aria-labelledby="event-modal-title"
        >
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="px-5 pt-8 pb-6 sm:px-6 sm:pt-9 sm:pb-7 text-center">
            <div className="mx-auto mb-4 w-11 h-11 rounded-full bg-[#ffd966]/15 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#ffd966]" />
            </div>
            <p className="section-overline !text-[#ffd966] !mb-2 !text-[10px]">A free 3-day live event</p>
            <h2 id="event-modal-title" className="text-xl sm:text-2xl font-poppins font-bold text-white leading-tight mb-2">
              {EVENT_NAME}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mb-5 leading-relaxed">
              18–20 September 2026 &middot; {EVENT_TIME_LABEL} &middot; Live on Zoom.
              A free immersion for women ready to come back to themselves.
            </p>
            <Link
              href={EVENT_PATH}
              onClick={dismiss}
              className="btn-primary w-full justify-center bg-[#ffd966] !text-primary-950 hover:!bg-[#ffe089] !text-xs sm:!text-sm"
            >
              See the details
            </Link>
            <button
              onClick={dismiss}
              className="mt-3 text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
