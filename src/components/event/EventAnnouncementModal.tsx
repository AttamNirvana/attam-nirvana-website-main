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
 * First-visit announcement, centered on screen - but with no full-screen
 * dark backdrop: the outer wrapper is pointer-events-none so the rest of
 * the page stays fully clickable underneath it, and only the card itself
 * (pointer-events-auto) is interactive. A permanent, much smaller version
 * of this same link also lives in SocialSidebar for ongoing quick access.
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pointer-events-auto relative w-full max-w-md rounded-3xl bg-primary-800 border border-white/10 shadow-2xl overflow-hidden"
            role="dialog"
            aria-labelledby="event-modal-title"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="px-6 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-9 text-center">
              <div className="mx-auto mb-5 w-12 h-12 rounded-full bg-[#ffd966]/15 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#ffd966]" />
              </div>
              <p className="section-overline !text-[#ffd966] !mb-2">A free 3-day live event</p>
              <h2 id="event-modal-title" className="text-2xl sm:text-3xl font-poppins font-bold text-white leading-tight mb-3">
                {EVENT_NAME}
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                18–20 September 2026 &middot; {EVENT_TIME_LABEL} &middot; Live on Zoom.
                A free immersion for women ready to come back to themselves.
              </p>
              <Link
                href={EVENT_PATH}
                onClick={dismiss}
                className="btn-primary w-full justify-center bg-[#ffd966] !text-primary-950 hover:!bg-[#ffe089]"
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
        </div>
      )}
    </AnimatePresence>
  )
}
