import type { Metadata } from 'next'
import RegistrationEmbed from '@/components/event/RegistrationEmbed'
import { EVENT_TIME_LABEL } from '@/lib/eventConfig'

export const metadata: Metadata = {
  title: 'Reserve Your Free Spot | A Journey Home to Self',
  description: 'Register for the free 3-day live event, A Journey Home to Self, 18-20 September 2026 on Zoom.',
}

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-primary-700 pt-24 pb-16">
      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="section-overline !text-[#ffd966]">Registration</p>
          <h1 className="section-title text-white">Your Place is Waiting</h1>
          <p className="text-white/80 mt-4 leading-relaxed">
            A Journey Home to Self &middot; 18–20 September 2026 &middot; {EVENT_TIME_LABEL} &middot; Live on Zoom
          </p>
          <p className="text-white/70 mt-6 leading-relaxed max-w-xl mx-auto">
            Before we meet, take a few moments to tell us a little about yourself. There are no right or wrong
            answers. You don&rsquo;t need to have it all figured out — answer from where you are today.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <RegistrationEmbed />
        </div>
      </div>
    </div>
  )
}
