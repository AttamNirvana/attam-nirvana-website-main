'use client'

import { motion } from 'framer-motion'
import { FadeInUp } from '@/components/animations'
import Button from '@/components/ui/Button'
import { Heart, Sparkles, Video, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export const services = [
  {
    id: 'aattam',
    icon: Sparkles,
    title: 'Aattam 12-Week Program',
    tagline: 'Your Journey to Your True Eternal Self',
    description: 'A comprehensive transformation program designed to help you break free from trauma, cultural conditioning, and self-doubt.',
    features: [
      '12 weeks of personalized 1-on-1 coaching',
      'Weekly 90-minute deep-dive sessions',
      'Trauma healing and emotional release techniques',
      'Cultural conditioning deprogramming',
      'Self-worth and confidence building',
      'Unlimited email support between sessions',
      'Custom healing resources and exercises',
      'Post-program 3-month check-in included'
    ],
    price: 'Investment: £2,997',
    duration: '12 weeks',
    format: 'Online via Zoom',
    cta: 'Start Your Journey',
    color: 'accent-purple'
  },
  {
    id: 'intensive',
    icon: Heart,
    title: '1-on-1 Intensive Coaching',
    tagline: 'Deep Healing in Focused Sessions',
    description: 'Single or package sessions for targeted healing work on specific challenges or traumas.',
    features: [
      'Flexible scheduling to fit your life',
      '90-minute focused healing sessions',
      'Customized approach to your needs',
      'Trauma processing and release',
      'Practical tools and techniques',
      'Session notes and action plans',
      'Available as single sessions or packages'
    ],
    price: 'From £297 per session',
    duration: '90 minutes',
    format: 'Online via Zoom',
    cta: 'Book a Session',
    color: 'primary-500'
  },
  {
    id: 'discovery',
    icon: Video,
    title: 'Free Clarity Call',
    tagline: 'Explore Your Healing Path',
    description: 'A complimentary 30-minute consultation to understand your journey and how we can work together.',
    features: [
      'Share your story in a safe space',
      'Understand your healing needs',
      'Explore program options',
      'Ask questions about the process',
      'No pressure or obligations',
      'Compassionate guidance',
      'Clarity on your next steps'
    ],
    price: 'Free',
    duration: '30 minutes',
    format: 'Online via Zoom',
    cta: 'Book Your Call',
    color: 'primary-400'
  }
]

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-primary-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-accent-purple text-sm font-semibold uppercase tracking-widest mb-4">
                Healing Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-6">
                Choose Your Path to{' '}
                <span className="text-accent-purple">Healing & Freedom</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Whether you're ready for deep transformation or just starting to explore, 
                there's a path that's right for you.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-primary-800 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInUp key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-primary-900 rounded-2xl p-8 border border-primary-700 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-accent-purple rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Header */}
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent-purple font-semibold mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Details */}
                  <div className="space-y-2 mb-6 pb-6 border-t border-primary-700 pt-6">
                    <div className="flex items-center gap-2 text-white/80">
                      <Clock className="w-4 h-4 text-accent-purple" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Video className="w-4 h-4 text-accent-purple" />
                      <span className="text-sm">{service.format}</span>
                    </div>
                    <div className="text-2xl font-bold text-accent-purple mt-4">
                      {service.price}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    href="/contact"
                    className="w-full bg-accent-purple hover:bg-accent-purple/80 text-white group"
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="container-main">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
                Ready to Begin Your <span className="text-accent-purple">Healing Journey</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Book your free clarity call today and take the first step towards reclaiming your power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/free-clarity-call"
                  size="lg"
                  className="bg-accent-purple hover:bg-accent-purple/80 text-white"
                >
                  Book Free Clarity Call
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
