'use client'

import Link from 'next/link'
import { FadeInUp } from '@/components/animations'
import { EVENT_REGISTER_PATH } from '@/lib/eventConfig'

export default function EventCTA({ title, body }: { title: string; body: string }) {
  return (
    <FadeInUp>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="section-title text-white mb-4">{title}</h2>
        <p className="text-white/80 leading-relaxed mb-8">{body}</p>
        <Link
          href={EVENT_REGISTER_PATH}
          className="btn-primary btn-shine bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d] text-white font-semibold shadow-lg"
        >
          Reserve My Free Spot
        </Link>
      </div>
    </FadeInUp>
  )
}
