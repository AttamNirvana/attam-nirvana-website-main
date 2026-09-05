'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Sparkles } from 'lucide-react'
import { EVENT_PATH, isEventPromotable } from '@/lib/eventConfig'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rupinder.aattamnirvana?igsi=enQ1YWI0YWV5NGVp',
    Icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rupi-dhillon-traumaliberator-transformationinterventionist-heart-ledfacilitator/',
    Icon: Linkedin,
  },
]

export default function SocialSidebar() {
  // Starts false on both server and first client render (no hydration
  // mismatch), flips on after mount if the event is still promotable - so
  // the icon disappears on its own once it ends, with no redeploy needed.
  const [showEvent, setShowEvent] = useState(false)
  useEffect(() => {
    setShowEvent(isEventPromotable())
  }, [])

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-4 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-[#ffd966] font-poppins font-semibold mb-3">
          Social
        </div>
        <div className="flex flex-col gap-3">
          {showEvent && (
            <Link
              href={EVENT_PATH}
              aria-label="A Journey Home to Self - free live event"
              title="A Journey Home to Self - free live event"
              className="w-10 h-10 rounded-xl bg-[#ffd966]/10 border border-[#ffd966]/40 flex items-center justify-center transition-all duration-300 hover:border-[#ffd966] hover:bg-[#ffd966]/20 hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-[#ffd966]" />
            </Link>
          )}
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl bg-white/5 border border-[#ffd966]/20 flex items-center justify-center transition-all duration-300 hover:border-[#ffd966]/60 hover:bg-[#ffd966]/10 hover:-translate-y-0.5"
            >
              <Icon className="w-5 h-5 text-[#ffd966]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
