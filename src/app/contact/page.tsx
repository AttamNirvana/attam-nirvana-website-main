'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FadeInUp } from '@/components/animations'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'
import { BreathingBackground } from '@/components/effects/BreathingBackground'
import { AudioToggle } from '@/components/ui/AudioToggle'

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative min-h-screen bg-primary-700 pt-24 pb-12 overflow-hidden">
      {/* Breathing background with Light Rays */}
      <BreathingBackground />

      {/* Decorative floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#ffd966]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#6e1fd2]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ffd966]/5 to-[#6e1fd2]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Audio toggle */}
      <AudioToggle />

      <div className="container-main relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInUp>
            <div className="text-center mb-12">
              <motion.span 
                className="inline-block text-[#ffd966] text-sm font-semibold uppercase tracking-widest mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Get In Touch
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                Start Your Healing Journey
              </h1>
              
              {/* Decorative divider */}
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent" />
              </motion.div>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Reach out to discuss how we can support your transformation
              </p>
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <FadeInUp delay={0.1}>
              <motion.div 
                className="relative bg-primary-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#6e1fd2]/60 hover:border-[#6e1fd2]/80 transition-all duration-500 group"
                whileHover={{ y: -5 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#ffd966]/10 via-transparent to-transparent" />
                
                <h2 className="relative text-2xl font-poppins font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      aria-invalid={!!fieldErrors.name}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-[#6e1fd2]/40 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-[#ffd966]/60 focus:bg-primary-800/70
                               transition-all duration-300 hover:border-[#6e1fd2]/60"
                      placeholder="Enter your name"
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      aria-invalid={!!fieldErrors.email}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-[#6e1fd2]/40 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-[#ffd966]/60 focus:bg-primary-800/70
                               transition-all duration-300 hover:border-[#6e1fd2]/60"
                      placeholder="your.email@example.com"
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-[#6e1fd2]/40 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-[#ffd966]/60 focus:bg-primary-800/70
                               transition-all duration-300 hover:border-[#6e1fd2]/60"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      aria-invalid={!!fieldErrors.message}
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-primary-800/50 border border-[#6e1fd2]/40 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-[#ffd966]/60 focus:bg-primary-800/70
                               transition-all duration-300 hover:border-[#6e1fd2]/60 resize-none"
                      placeholder="Tell us about your healing journey..."
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div 
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                      role="alert"
                      aria-live="assertive"
                    >
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={shouldReduceMotion ? {} : undefined}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                      <p className="text-green-400 text-sm">Message sent successfully! We'll be in touch soon.</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#daa520] hover:to-[#c99a1d]
                             text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-[#ffd966]/20
                             disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </FadeInUp>

            {/* Contact Information */}
            <FadeInUp delay={0.2}>
              <div className="space-y-6">
                {/* Contact Cards */}
                <motion.div 
                  className="relative bg-primary-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#6e1fd2]/60 hover:border-[#6e1fd2]/80 transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#ffd966]/10 via-transparent to-transparent" />
                  
                  <h2 className="relative text-2xl font-poppins font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  
                  <div className="relative space-y-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-[#ffd966]/20 to-[#6e1fd2]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#ffd966]/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="w-6 h-6 text-[#ffd966]" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <a href="mailto:connect@aattamnirvana.com" 
                           className="text-white/70 hover:text-[#ffd966] transition-colors">
                          connect@aattamnirvana.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-[#ffd966]/20 to-[#6e1fd2]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#ffd966]/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MapPin className="w-6 h-6 text-[#ffd966]" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Location</h3>
                        <p className="text-white/70">
                          Harrow HA3, UK<br />
                          Online sessions available
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Links Card */}
                <motion.div 
                  className="relative bg-primary-900/80 backdrop-blur-md rounded-2xl p-8 border border-[#6e1fd2]/60 hover:border-[#6e1fd2]/80 transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#ffd966]/10 via-transparent to-transparent" />
                  
                  <h3 className="relative text-xl font-poppins font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                    Ready to Begin?
                  </h3>
                  <p className="relative text-white/70 mb-6">
                    Schedule a free clarity call to discuss your healing journey and discover how we can help.
                  </p>
                  <a
                    href="/free-clarity-call"
                    className="relative inline-flex items-center justify-center w-full px-6 py-3 
                             bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b] hover:from-[#c99a1d] hover:via-[#daa520] hover:to-[#c99a1d]
                             text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-[#ffd966]/20 group"
                  >
                    Book Free Clarity Call
                    <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  )
}
