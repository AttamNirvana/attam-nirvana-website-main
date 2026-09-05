import type { Metadata } from 'next'
import { CalendarPlus, Video } from 'lucide-react'
import {
  EVENT_EVENINGS,
  EVENT_TIME_LABEL,
  ZOOM_JOIN_URL,
  ZOOM_MEETING_ID,
  ZOOM_PASSCODE,
  googleCalendarUrl,
} from '@/lib/eventConfig'

export const metadata: Metadata = {
  title: "You're In | A Journey Home to Self",
  description: 'Your place is reserved for A Journey Home to Self.',
  robots: { index: false, follow: false },
}

export default function ConfirmedPage() {
  return (
    <div className="relative min-h-screen bg-primary-700 pt-24 pb-16">
      <div className="container-main relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="section-overline !text-[#ffd966]">You&rsquo;re in 💛</p>
          <h1 className="section-title text-white mb-4">Welcome to A Journey Home to Self</h1>
          <p className="text-white/80 leading-relaxed mb-10">
            You have just made a decision that is entirely about you.
          </p>

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 border border-white/10 text-left mb-8">
            <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Your place is reserved for</p>
            <p className="text-white font-poppins font-semibold mb-1">18–20 September 2026</p>
            <p className="text-white/80 text-sm mb-1">{EVENT_TIME_LABEL}</p>
            <p className="text-white/80 text-sm flex items-center gap-1.5 mb-6">
              <Video className="w-4 h-4 text-[#ffd966]" aria-hidden="true" />
              Live on Zoom
            </p>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Zoom access details</p>
              <a
                href={ZOOM_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#ffd966] font-semibold break-all hover:underline mb-2"
              >
                {ZOOM_JOIN_URL}
              </a>
              <p className="text-white/80 text-sm">Meeting ID: {ZOOM_MEETING_ID}</p>
              <p className="text-white/80 text-sm mb-1">Passcode: {ZOOM_PASSCODE}</p>
              <p className="text-white/50 text-xs">Same link for all three evenings.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {EVENT_EVENINGS.map((evening) => (
              <a
                key={evening.date}
                href={googleCalendarUrl(evening.date)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10 text-sm gap-1.5"
              >
                <CalendarPlus className="w-4 h-4" aria-hidden="true" />
                Add {evening.label}
              </a>
            ))}
          </div>

          <div className="text-white/70 text-sm leading-relaxed space-y-2 text-left max-w-md mx-auto">
            <p>Don&rsquo;t try to prepare. Don&rsquo;t try to arrive with the right answers.</p>
            <p>Notice yourself. What are you feeling? What are you longing for?</p>
            <p>What are you ready to leave behind?</p>
            <p className="text-white/90 font-medium">We begin there.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
