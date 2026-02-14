'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParallaxMotionValue } from '@/lib/useParallax';

interface AboutHeroSectionProps {
  tagline: string;
  headline: string;
  sub_headline: string;
  description: string;
}

const lineVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(10px)',
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

/**
 * AboutHeroSection Component
 * Full-screen hero matching homepage aesthetic with gold gradient text
 */
export function AboutHeroSection({
  tagline,
  headline,
  sub_headline,
  description,
}: AboutHeroSectionProps) {
  const parallaxY = useParallaxMotionValue(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <motion.div
        className="relative z-10 container-main mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-sm sm:text-base tracking-widest text-[#ffd966] uppercase font-poppins font-500 letter-spacing">
            {tagline}
          </p>
        </motion.div>

        {/* Main Headline with Shimmer and Parallax */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-poppins leading-[1.1] mb-8 text-center"
        >
          <motion.span 
            variants={lineVariants}
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2"
          >
            <span className="bg-gradient-to-r from-[#ffd966] via-[#ffecb3] to-[#ffd966] bg-clip-text text-transparent animate-shimmer bg-size-200">
              {headline}
            </span>
          </motion.span>
        </motion.h1>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent mx-auto mb-8" role="presentation" aria-hidden="true" />

        {/* Sub-headline */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-inter font-300 leading-relaxed">
            {sub_headline}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm sm:text-base md:text-lg text-white/80 font-inter leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#ffd966]/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#ffd966] rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutHeroSection;
