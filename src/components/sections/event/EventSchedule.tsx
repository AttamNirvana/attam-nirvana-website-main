'use client'

import { Video } from 'lucide-react'
import { FadeInUp } from '@/components/animations'
import EventCTA from './EventCTA'
import { EVENT_EVENINGS, EVENT_TIME_LABEL } from '@/lib/eventConfig'

export default function EventSchedule() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-main relative z-10">
        <FadeInUp>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="section-overline !text-[#ffd966]">Three evenings. One invitation.</p>
            <h2 className="section-title text-white">Because transformation doesn&rsquo;t begin with doing more</h2>
            <p className="section-subtitle text-white/75 mx-auto">Sometimes it begins with coming home.</p>
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {EVENT_EVENINGS.map((evening, i) => (
            <FadeInUp key={evening.date} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[#ffd966] font-poppins font-bold text-xl mb-1">{evening.label}</p>
                <p className="text-white/70 text-sm">{EVENT_TIME_LABEL}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.3}>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-14">
            <Video className="w-4 h-4 text-[#ffd966]" aria-hidden="true" />
            Same Zoom link for all three evenings
          </div>
        </FadeInUp>

        <EventCTA
          title="Ready to Begin?"
          body={`If something inside you has been quietly saying, "There has to be more for me" — perhaps this is your invitation to listen. Come exactly as you are.`}
        />
      </div>
    </section>
  )
}
