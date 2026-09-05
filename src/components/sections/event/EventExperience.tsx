'use client'

import { Eye, Zap, Waves, ListChecks, HeartHandshake, LucideIcon } from 'lucide-react'
import { FadeInUp } from '@/components/animations'

const ITEMS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Eye,
    title: 'Deeper Self-Awareness',
    body: 'Begin recognising the patterns beneath your reactions, decisions, relationships and recurring experiences — not simply understanding them intellectually, but beginning to see and experience them differently.',
  },
  {
    icon: Zap,
    title: 'Real-Time Inner Shifts',
    body: 'Through guided transformational processes, experience what happens when something shifts in the moment — moving from "I understand" to "I can feel something changing."',
  },
  {
    icon: Waves,
    title: 'Embodied Clarity',
    body: 'Sometimes clarity doesn’t come from thinking harder. It comes when the body settles enough for you to hear what has been there all along.',
  },
  {
    icon: ListChecks,
    title: 'Practical Integration',
    body: "Transformation is what you begin to do differently afterwards. You'll explore simple ways to bring greater awareness and choice into your relationships, conversations, work and everyday life.",
  },
  {
    icon: HeartHandshake,
    title: "A Space Where You Don't Have to Perform",
    body: "You don't have to impress. You don't have to have the answers. You don't have to arrive with everything figured out. You have to arrive as yourself.",
  },
]

export default function EventExperience() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-main relative z-10">
        <FadeInUp>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="section-overline !text-[#ffd966]">What you will experience</p>
            <h2 className="section-title text-white">Three evenings of deep exploration</h2>
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {ITEMS.map((item, i) => (
            <FadeInUp
              key={item.title}
              delay={i * 0.08}
              className={item.title.startsWith('A Space') ? 'sm:col-span-2' : ''}
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 border border-white/10">
                <div className="w-11 h-11 rounded-xl bg-[#ffd966]/15 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#ffd966]" aria-hidden="true" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.body}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
