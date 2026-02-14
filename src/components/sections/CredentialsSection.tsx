'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Credential } from '@/lib/aboutData';

interface CredentialsSectionProps extends Credential {}

/**
 * CredentialsSection Component
 * Clean list layout with intro text and credentials
 * Staggered animation for credentials
 */
export function CredentialsSection({ intro, list }: CredentialsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Section intro */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Training & Expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-inter">
              {intro}
            </p>
          </motion.div>

          {/* Right: Credentials list */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {list.map((credential, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 rounded-lg backdrop-blur-sm bg-[#6e1fd2]/20 border border-[#6e1fd2]/60 hover:border-[#6e1fd2]/80 hover:bg-[#6e1fd2]/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#ffd966] mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-white font-poppins font-500">
                        {credential}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CredentialsSection;
