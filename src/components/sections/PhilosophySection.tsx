'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhilosophySection as IPhilosophySection } from '@/lib/aboutData';

interface PhilosophySectionProps extends IPhilosophySection {}

/**
 * PhilosophySection Component
 * Centered, large typography with glass cards for key points
 * Features mirror/blur effect that clears as user scrolls
 */
export function PhilosophySection({
  headline,
  sub_headline,
  intro_text,
  key_points,
  closing_statement,
}: PhilosophySectionProps) {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-transparent">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent"
          >
            {headline}
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="font-poppins text-xl sm:text-2xl lg:text-3xl font-300 text-purple-300 mb-8"
          >
            {sub_headline}
          </motion.p>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent" />
          </motion.div>

          {/* Intro text */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-12 font-inter"
          >
            {intro_text}
          </motion.p>
        </motion.div>

        {/* Key Points Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {key_points.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full p-6 sm:p-8 rounded-xl backdrop-blur-md bg-[#6e1fd2]/20 border border-[#6e1fd2]/60 hover:border-[#6e1fd2]/80 transition-all duration-300 hover:bg-[#6e1fd2]/30">
                <p className="text-base sm:text-lg text-white font-poppins font-500 leading-relaxed">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-inter">
            {closing_statement}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PhilosophySection;
