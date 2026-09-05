'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import { FadeInUp } from '@/components/animations'
import EventCountdownTimer from '@/components/event/EventCountdownTimer'
import { EVENT_PATH, EVENT_TIME_LABEL, isEventPromotable } from '@/lib/eventConfig'

/** Homepage banner for the live event. Self-gated the same way as the nav
 *  link/footer link - starts hidden, only shows once mounted and only while
 *  the event is still promotable, so it disappears on its own afterwards. */
export default function EventTeaser() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(isEventPromotable())
  }, [])

  if (!show) return null

  return (
    <section className="relative py-10 sm:py-14">
      <div className="container-main relative z-10">
        <FadeInUp>
          <Link
            href={EVENT_PATH}
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#b8860b] via-[#c99a1d] to-[#b8860b] border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                Free live event &middot; 18–20 September
              </p>
              <p className="text-white font-poppins font-semibold text-lg sm:text-xl">
                A Journey Home to Self &middot; {EVENT_TIME_LABEL} &middot; Live on Zoom
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <EventCountdownTimer compact className="text-white" />
            </div>
            <span className="inline-flex items-center gap-1.5 text-white font-semibold shrink-0 whitespace-nowrap group-hover:gap-2.5 transition-all">
              Reserve my spot
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}
