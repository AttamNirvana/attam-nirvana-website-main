import type { Metadata } from 'next'
import Link from 'next/link'
import EventHero from '@/components/sections/event/EventHero'
import EventForYou from '@/components/sections/event/EventForYou'
import EventExperience from '@/components/sections/event/EventExperience'
import EventSchedule from '@/components/sections/event/EventSchedule'
import { EVENT_REGISTER_PATH, EVENT_TIME_LABEL } from '@/lib/eventConfig'

export const metadata: Metadata = {
  title: 'A Journey Home to Self | Free 3-Day Live Event',
  description:
    'A free 3-day immersion for women ready to come back to themselves. 18-20 September 2026, 7:30-10:00 PM UK, live on Zoom with Rupi Dhillon.',
  openGraph: {
    title: 'A Journey Home to Self | Free 3-Day Live Event',
    description:
      'A free 3-day immersion for women ready to come back to themselves. 18-20 September 2026, live on Zoom.',
    url: '/journey-home-to-self',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A Journey Home to Self - Aattam Nirvana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Journey Home to Self | Free 3-Day Live Event',
    description: 'A free 3-day immersion for women ready to come back to themselves. Live on Zoom, 18-20 September 2026.',
    images: ['/og-image.jpg'],
  },
}

export default function JourneyHomeToSelfPage() {
  return (
    <>
      <div className="relative bg-primary-700">
        <EventHero />
        <EventForYou />
        <EventExperience />
        <EventSchedule />

        {/* Closing summary + CTA */}
        <section className="relative py-16 sm:py-24">
          <div className="container-main relative z-10">
            <div className="max-w-md mx-auto text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 border border-white/10">
              <h2 className="font-poppins font-bold text-2xl text-white mb-2">A Journey Home to Self</h2>
              <p className="text-white/75 text-sm mb-1">18–20 September 2026</p>
              <p className="text-white/75 text-sm mb-1">{EVENT_TIME_LABEL}</p>
              <p className="text-white/75 text-sm mb-6">Live on Zoom</p>
              <Link
                href={EVENT_REGISTER_PATH}
                className="btn-primary w-full justify-center btn-shine bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d] text-white font-semibold shadow-lg"
              >
                Reserve My Free Spot
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
