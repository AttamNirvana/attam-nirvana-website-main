'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import profileImg from '@/assets/profile.jpg'
import { 
  FadeInUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem
} from '@/components/animations'
import { 
  Heart, 
  Sparkles, 
  Star, 
  Shield, 
  Users, 
  Award,
  Quote,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const journeyMilestones = [
  {
    year: '27 Years',
    title: 'The Silent Struggle',
    description: 'Endured domestic violence and emotional, verbal, and psychological abuse while wearing a mask of contentment.',
  },
  {
    year: 'Age 51',
    title: 'The Turning Point',
    description: 'With unwavering support from a mentor and compassionate network, embarked on a transformative journey of healing.',
  },
  {
    year: 'Discovery',
    title: 'Safe Space for Healing',
    description: 'Realized the vital importance of having a safe space to heal, grow, and understand life patterns.',
  },
  {
    year: 'Today',
    title: 'Rising Like a Phoenix',
    description: 'Transformed pain into strength, now empowering women worldwide to break free and reclaim their power.',
  },
]

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Every healing journey is unique. I meet you where you are with understanding and empathy.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Creating a confidential, judgment-free space where you can be vulnerable and authentic.',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'Guiding you to turn your pain into power and discover your true eternal self.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building connections with women on similar journeys, because healing is stronger together.',
  },
]

const achievements = [
  { number: '500+', label: 'Women Empowered' },
  { number: '27+', label: 'Years of Insight' },
  { number: '12', label: 'Week Program' },
  { number: '100%', label: 'Confidential' },
]

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section - Editorial Style - Mobile Responsive */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-primary-700 overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24">

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content - 7 columns - Mobile Optimized */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 
                          px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-purple" />
                <span className="text-accent-purple text-xs sm:text-sm font-semibold tracking-wide">
                  My Story of Transformation
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins font-bold text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-2.5 md:mb-3">
                  From
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text 
                             bg-gradient-to-r from-accent-purple via-primary-400 to-accent-cyan mb-2 sm:mb-2.5 md:mb-3">
                  Survivor
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90">
                  to Advocate
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-light-text leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8"
              >
                A journey of <span className="text-white font-semibold">27 years</span> of darkness 
                transformed into a beacon of hope for women seeking freedom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start text-white/70"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold" />
                  <span className="text-xs sm:text-sm">Certified Coach</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan" />
                  <span className="text-xs sm:text-sm">500+ Lives Changed</span>
                </div>
              </motion.div>
            </div>

            {/* Image - 5 columns - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:ml-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-hero border-2 sm:border-4 border-white/20">
                <Image
                  src={profileImg}
                  alt="Rupi Dhillon - Rupi"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-4 border-2 border-dashed border-accent-purple/30 rounded-2xl sm:rounded-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-200/30 rounded-full -z-20" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-purple/20 rounded-full -z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Bento Style - Mobile Responsive */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
            {/* Left - Text Content - Mobile Optimized */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <div className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-primary-900/50 border border-primary-700 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mb-4 sm:mb-5 md:mb-6">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />
                    <div>
                      <p className="text-base sm:text-lg md:text-xl font-poppins font-bold text-white">Rupi Dhillon</p>
                      <p className="text-sm text-accent-purple font-medium">fondly known as Rupi</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="space-y-6 text-white/80">
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-white">
                    For over <span className="font-bold text-accent-purple">27 years</span>, I endured 
                    the harrowing trials of domestic violence and emotional, verbal, and psychological abuse.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    Despite the dark times and the constant undermining of my worth and intelligence, 
                    I wore a <span className="italic font-semibold text-accent-purple">mask of contentment</span> and 
                    became a people pleaser, sacrificing my dreams and living life on others' terms.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed">
                    At the age of <span className="font-bold text-accent-purple">51</span>, with the 
                    unwavering support of a mentor and a network of compassionate individuals, I embarked 
                    on a <span className="font-semibold text-accent-purple">transformative journey of healing 
                    and self-discovery</span>.
                  </p>

                  <div className="relative pl-8 py-6 border-l-4 border-accent-purple bg-primary-900/50 rounded-r-2xl mt-8">
                    <Heart className="absolute -left-4 top-6 w-8 h-8 text-accent-purple fill-current bg-primary-900 rounded-full p-1" />
                    <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed">
                      My pain and trauma became my greatest sources of strength, leading me to a place of 
                      confidence, worthiness, and alignment with my true self.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right - Stats & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <FadeInUp delay={0.2}>
                <div className="bg-primary-600 rounded-3xl p-8 text-white shadow-purple-lg">
                  <Sparkles className="w-10 h-10 text-accent-purple mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-3">The Turning Point</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Age 51 marked the beginning of my transformation—from victim to survivor to advocate.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-3xl font-bold">27</p>
                      <p className="text-sm text-white/80">Years of Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-sm text-white/80">Lives Transformed</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="bg-white border border-primary-100 rounded-2xl p-6 shadow-purple-sm">
                  <h4 className="font-poppins font-bold text-lg mb-4 text-dark-text">Core Values</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Heart, label: 'Compassion', color: 'text-red-500' },
                      { icon: Shield, label: 'Safety', color: 'text-primary-600' },
                      { icon: Sparkles, label: 'Transformation', color: 'text-accent-cyan' },
                    ].map((value) => (
                      <div key={value.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <value.icon className={`w-5 h-5 ${value.color}`} />
                        </div>
                        <span className="font-medium text-gray-700">{value.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Creative Layout */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-16 bg-accent-purple" />
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-[0.3em]">
                  The Journey
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
                My Path to{' '}
                <span className="text-accent-purple">
                  Healing & Freedom
                </span>
              </h2>
            </div>
          </FadeInUp>

          <div className="max-w-5xl mx-auto">
            {/* Vertical Timeline with Cards */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-accent-purple/30 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {journeyMilestones.map((milestone, index) => (
                  <FadeInUp key={milestone.title} delay={index * 0.12}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-20 md:pl-28"
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-9 top-8 w-7 h-7 bg-accent-purple 
                                    rounded-full ring-4 ring-primary-900 shadow-lg z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>

                      {/* Card */}
                      <div className="bg-primary-900 border border-primary-700 rounded-2xl p-6 md:p-8 shadow-purple-sm 
                                    hover:shadow-purple-md transition-all group">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-4 py-2 bg-accent-purple text-white 
                                       text-sm font-bold rounded-full shadow-sm">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-poppins font-bold text-white 
                                       group-hover:text-accent-purple transition-colors">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-800/40 to-primary-900/60" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-block text-accent-purple text-sm font-semibold uppercase tracking-widest mb-4">
                My Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-8 leading-tight">
                Empowering Women to{' '}
                <span className="text-accent-purple">
                  Break Free
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Now, I am on a mission to empower women to break free from the chains of cultural conditioning, 
                self-doubt, and domestic abuse. Through my <span className="text-accent-purple font-semibold">12-week 
                program, Aattam</span>, which means <span className="italic">&ldquo;Soul, Your True Eternal 
                Self&rdquo;</span>, I provide personalised guidance tailored for trauma healing, helping women 
                reclaim their voices and rediscover their inner strength.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
                <Quote className="w-10 h-10 text-accent-purple mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-white font-poppins italic leading-relaxed">
                  &ldquo;From the ashes of my past, I have risen like a phoenix, ready to soar. 
                  My journey is proof that healing is possible and that freedom awaits.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Message to Women - Asymmetric Layout */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <SlideInRight>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-accent-purple fill-current" />
                  <p className="text-accent-purple font-semibold text-sm uppercase tracking-[0.3em]">
                    A Message For You
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight mb-8">
                  Your Power Is Waiting to Be{' '}
                  <span className="text-accent-purple">
                    Reclaimed
                  </span>
                </h2>
                
                <div className="space-y-6 text-white/80 mb-8">
                  <p className="text-lg md:text-xl leading-relaxed">
                    To every woman who has been told she is not enough, who has silenced her voice:
                  </p>
                  
                  <div className="relative pl-6 py-4 border-l-4 border-accent-purple bg-primary-900/50 backdrop-blur-sm rounded-r-xl">
                    <p className="text-xl md:text-2xl font-semibold text-accent-purple leading-relaxed">
                      Your power is not lost; it is waiting to be reclaimed.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    I am here to guide and walk beside you as you break free from the chains that bind you. 
                    Together, we will uncover the strength that has always been within you.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Heart, text: 'Personalized healing guidance' },
                    { icon: Shield, text: 'Safe and confidential space' },
                    { icon: Sparkles, text: '12-week transformation program' },
                    { icon: Users, text: 'Ongoing support & community' }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-4 bg-primary-900 rounded-xl border border-primary-700">
                      <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent-purple" />
                      </div>
                      <span className="text-sm font-medium text-white">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" size="lg" className="group">
                  START YOUR HEALING JOURNEY
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-accent-purple" />
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-[0.3em]">
                  Core Values
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                What Guides My Work
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-primary-900 rounded-2xl p-8 border border-primary-700 shadow-purple-sm hover:shadow-purple-md 
                            h-full group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className={`w-16 h-16 bg-accent-purple rounded-2xl flex items-center justify-center mb-6 shadow-lg 
                  group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-accent-purple transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Creative Stats Bar */}
      <section className="py-10 sm:py-12 md:py-14 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        
        <div className="container-main relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-8 bg-primary-900 rounded-2xl border border-primary-700 shadow-purple-sm 
                             hover:shadow-purple-md transition-all group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent-purple flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{stat.number.charAt(0)}</span>
                    </div>
                    <p className="text-4xl md:text-5xl font-poppins font-bold text-accent-purple mb-2 
                               group-hover:text-white transition-colors">
                      {stat.number}
                    </p>
                    <p className="text-white/80 font-medium">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced Design */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary-700 relative overflow-hidden">

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 
                              px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-accent-gold" />
                  <span className="text-white/90 text-sm font-semibold">Begin Your Transformation</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
                  Ready to Reclaim Your{' '}
                  <span className="text-accent-purple">
                    True Self
                  </span>?
                </h2>
                
                <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Your healing journey starts with a single step. Let's take it together.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  href="/contact" 
                  size="lg" 
                  className="bg-accent-purple hover:bg-accent-purple/80 text-white group text-lg px-10"
                >
                  BOOK A FREE DISCOVERY CALL
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="text-lg px-10">
                  GET IN TOUCH
                </Button>
              </div>
            </FadeInUp>

            {/* Trust Indicators */}
            <FadeInUp delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
                {[
                  { icon: Heart, value: 'Free', label: 'Discovery Call' },
                  { icon: Shield, value: '100%', label: 'Confidential' },
                  { icon: Users, value: '500+', label: 'Women Helped' },
                  { icon: Sparkles, value: '12', label: 'Week Journey' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <item.icon className="w-8 h-8 text-accent-purple mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-sm text-white/70">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  )
}
