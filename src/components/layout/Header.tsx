'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import logoImg from '@/assets/favicon.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/free-clarity-call', label: 'Free Clarity Call' },
  { href: '/book-session', label: 'Book a Session' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] 
                   focus:px-4 focus:py-2 focus:bg-white focus:text-primary-700 focus:rounded-lg 
                   focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
      >
        Skip to main content
      </a>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 ${
          isScrolled ? 'shadow-md' : ''
        }`}
        style={{
          background: 'rgba(116, 38, 210, 0.7)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
      <div className="container-main">
        <nav className="flex items-center justify-between">
          {/* Logo - Mobile Optimized */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full p-1 shadow-md">
              <Image 
                src={logoImg}
                alt="Aattam Nirvana Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <div className="absolute -inset-1 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col items-start">
              <span
                className="text-lg sm:text-2xl font-poppins font-extrabold tracking-tight text-white transition-colors duration-300 text-shadow-lg"
              >
                AattamNirvana
              </span>
              <span
                className="text-[10px] sm:text-xs font-bold text-white tracking-tight leading-none self-end -mt-0.5 text-shadow-sm"
              >
                Heart Led Journey
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-lg font-bold tracking-tight text-white hover:text-white/80 transition-all duration-300 text-shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary text-xs sm:text-sm bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 text-shadow-sm shadow-[0_4px_16px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>

        {/* Mobile Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
            >
              <div className="py-4 sm:py-6 space-y-2 sm:space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2.5 px-2 text-base sm:text-lg font-medium transition-colors rounded-lg min-h-[44px] flex items-center text-white hover:text-white/80 hover:bg-white/10 text-shadow-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2 sm:pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center justify-center"
                  >
                    GET IN TOUCH
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  )
}
