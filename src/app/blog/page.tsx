'use client'

import { FadeInUp } from '@/components/animations'
import Button from '@/components/ui/Button'
import { BookOpen, Calendar, ArrowRight, Sparkles } from 'lucide-react'

const comingSoonContent = {
  title: 'Healing Insights & Stories',
  subtitle: 'Our blog is currently being crafted with love',
  description: "We're preparing inspiring articles on trauma healing, cultural conditioning, empowerment, and personal transformation. Check back soon for powerful insights and real stories of healing.",
  expectedLaunch: 'Coming Q2 2026',
  features: [
    'Trauma healing techniques and insights',
    'Stories of transformation and resilience',
    'Cultural conditioning and breaking free',
    'Mindfulness and self-care practices',
    'Q&A with Rupi Dhillon',
    'Guest contributions from healing experts'
  ]
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-primary-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-700">
                <BookOpen className="w-10 h-10 text-accent-purple" />
              </div>

              {/* Coming Soon Badge */}
              <span className="inline-flex items-center gap-2 bg-accent-purple/20 border border-accent-purple/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-accent-purple" />
                <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
                  Coming Soon
                </span>
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-6">
                {comingSoonContent.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white/80 mb-4">
                {comingSoonContent.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                {comingSoonContent.description}
              </p>

              {/* Expected Launch */}
              <div className="flex items-center justify-center gap-2 text-accent-purple font-semibold mb-12">
                <Calendar className="w-5 h-5" />
                <span>{comingSoonContent.expectedLaunch}</span>
              </div>
            </div>
          </FadeInUp>

          {/* Features Grid */}
          <FadeInUp delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-poppins font-bold text-white text-center mb-8">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {comingSoonContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-primary-900 rounded-xl p-6 border border-primary-700 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
                Don't Wait to Start Your <span className="text-accent-purple">Healing Journey</span>
              </h2>
              <p className="text-white/80 mb-8">
                While our blog is in progress, you can start your transformation today with our proven programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/services"
                  size="lg"
                  className="bg-accent-purple hover:bg-accent-purple/80 text-white group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href="/free-clarity-call"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Book Free Call
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
