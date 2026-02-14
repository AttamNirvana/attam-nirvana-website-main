'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from '@/lib/aboutData';
import Link from 'next/link';

interface AboutCTASectionProps extends CallToAction {}

/**
 * AboutCTASection Component
 * Compelling CTA with breathing text animation and prominent button
 */
export function AboutCTASection({
  text,
  closing,
  button_label,
  button_href,
}: AboutCTASectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-transparent">

      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Main CTA Text */}
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent"
          >
            {text}
          </motion.h2>

          {/* Closing Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12 font-inter max-w-2xl mx-auto"
          >
            {closing}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Link href={button_href}>
              <motion.button
                className={`
                  px-8 sm:px-10 py-3 sm:py-4
                  rounded-lg
                  bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b]
                  hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d]
                  text-white text-base sm:text-lg font-poppins font-600
                  transition-all duration-300
                  shadow-lg shadow-purple-600/30
                  hover:shadow-xl hover:shadow-purple-600/40
                  backdrop-blur-sm
                `}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(110, 31, 210, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(110, 31, 210, 0.3)',
                    '0 0 30px rgba(110, 31, 210, 0.5)',
                    '0 0 20px rgba(110, 31, 210, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
              >
                {button_label}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTASection;
