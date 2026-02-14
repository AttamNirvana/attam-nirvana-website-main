'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Offering } from '@/lib/aboutData';
import { ArrowRight } from 'lucide-react';

interface OfferingsSectionProps {
  offerings: Offering[];
}

/**
 * OfferingsSectionNew Component
 * Updated offerings cards with purple glow hover effect and glass morphism
 */
export function OfferingsSectionNew({ offerings }: OfferingsSectionProps) {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="mb-10 sm:mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
            Programs & Offerings
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Choose the path that resonates with your readiness for transformation
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              variants={itemVariants}
              className="group h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`
                  relative h-full p-6 sm:p-8 rounded-2xl
                  backdrop-blur-md bg-[#6e1fd2]/20 border border-[#6e1fd2]/60
                  hover:border-[#6e1fd2]/80 hover:bg-[#6e1fd2]/30
                  transition-all duration-500
                  overflow-hidden
                `}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                    bg-gradient-to-br from-[#ffd966]/20 via-transparent to-transparent
                  `}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-[#ffd966] uppercase tracking-widest font-poppins font-600 mb-2">
                      {offering.duration}
                    </p>
                    <h3 className="font-poppins text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                      {offering.title}
                    </h3>
                    <p className="text-base sm:text-lg text-white/80 font-poppins font-300">
                      {offering.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-inter">
                    {offering.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {offering.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd966] flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-400 font-inter">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`
                      inline-flex items-center gap-2
                      px-4 py-2 sm:px-6 sm:py-3
                      rounded-lg
                      bg-gradient-to-r from-[#b8860b] via-[#c99a1d] to-[#b8860b]
                      hover:from-[#c99a1d] hover:via-[#b8860b] hover:to-[#c99a1d]
                      text-white text-sm sm:text-base font-poppins font-600
                      transition-all duration-300
                      group/btn
                    `}
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OfferingsSectionNew;
