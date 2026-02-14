import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import logoImg from '@/assets/favicon.png'

const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Rupi' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#healing', label: 'Trauma Healing' },
    { href: '/services#coaching', label: '1-on-1 Coaching' },
    { href: '/services#aattam', label: 'Aattam Program' },
    { href: '/services#workshops', label: 'Workshops' },
  ],
}

const socialLinks = [
  { href: 'https://www.instagram.com/aattamnirvana', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/rupi-dhillon-traumaliberator-transformationinterventionist-heart-ledfacilitator/', icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white">
      {/* Main Footer Content - Mobile Responsive */}
      <div className="container-main py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-8">
          {/* Brand Section - Mobile Optimized */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full p-1">
                <Image 
                  src={logoImg}
                  alt="Aattam Nirvana Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-poppins font-bold">
                Aattam<span className="text-white">Nirvana</span>
              </span>
            </Link>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
              Empowering women to break free from trauma, cultural conditioning, and self-doubt. 
              Your journey to healing and self-discovery starts here.
            </p>
            {/* Social Links - Mobile Optimized */}
            <div className="flex gap-2 sm:gap-2.5 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center
                           transition-all duration-300 hover:bg-white hover:text-primary-700 hover:scale-110"
                  aria-label={`Visit Aattam Nirvana on ${social.label} (opens in new tab)`}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Mobile Responsive */}
          <div>
            <h3 className="text-base sm:text-lg font-poppins font-semibold mb-4 sm:mb-5 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 text-xs sm:text-sm hover:text-white transition-colors duration-300
                             hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Mobile Responsive */}
          <div>
            <h3 className="text-base sm:text-lg font-poppins font-semibold mb-4 sm:mb-5 md:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 text-xs sm:text-sm hover:text-white transition-colors duration-300
                             hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Mobile Responsive */}
          <div>
            <h3 className="text-base sm:text-lg font-poppins font-semibold mb-4 sm:mb-5 md:mb-6">Get In Touch</h3>
            <ul className="space-y-3 sm:space-y-3.5 md:space-y-4">
              <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:connect@aattamnirvana.com"
                  className="text-white/90 text-xs sm:text-sm hover:text-white transition-colors break-all"
                >
                  connect@aattamnirvana.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-xs sm:text-sm">
                  Harrow HA3, UK<br />
                  Online Sessions Available
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Mobile Responsive */}
      <div className="border-t border-white/10">
        <div className="container-main py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-white/90 text-xs sm:text-sm text-center md:text-left">
                © {new Date().getFullYear()} Aattam Nirvana. All rights reserved.
              </p>
              <Link href="/terms-and-conditions" className="text-white/90 text-xs sm:text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
