'use client'

import { CheckCircle2 } from 'lucide-react'
import { FadeInUp } from '@/components/animations'

const REASONS = [
  'You are tired of surface-level answers and want to understand yourself more deeply.',
  'You carry the responsibility, expectations, or emotional weight of others, and rarely have a space to exhale.',
  "You can feel that something needs to change, even if you can't yet articulate exactly what.",
  'You are navigating a transition, emotional overwhelm, or a sense of being stuck, and want clarity that comes from within rather than more noise from the outside.',
  'You are ready to stop simply collecting insights and begin experiencing yourself differently.',
]

export default function EventForYou() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-main relative z-10">
        <FadeInUp>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="section-overline !text-[#ffd966]">Does this sound like you?</p>
            <h2 className="section-title text-white">This experience is for you if&hellip;</h2>
          </div>
        </FadeInUp>

        <div className="max-w-2xl mx-auto space-y-4">
          {REASONS.map((reason, i) => (
            <FadeInUp key={reason} delay={i * 0.08}>
              <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#ffd966] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">{reason}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <p className="text-center text-white/70 mt-10 max-w-xl mx-auto italic">
            Most of all, you are willing to meet yourself honestly.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
