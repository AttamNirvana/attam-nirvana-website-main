'use client'

import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    Icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    Icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    Icon: Youtube,
  },
]

export default function SocialSidebar() {
  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-4 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-[#ffd966] font-poppins font-semibold mb-3">
          Social
        </div>
        <div className="flex flex-col gap-3">
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
