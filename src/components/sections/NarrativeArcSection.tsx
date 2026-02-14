'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NarrativeBeat } from '@/lib/aboutData';

interface NarrativeArcSectionProps {
  beats: NarrativeBeat[];
}

/**
 * NarrativeArcSection Component
 * Regular vertical layout with scroll animations for each narrative beat
 */
export function NarrativeArcSection({ beats }: NarrativeArcSectionProps) {
  // Color mapping for each beat
  const getBackgroundForBeat = (index: number) => {
    const backgrounds = [
      'from-amber-900/40 via-orange-900/30 to-transparent', // Roots: warm
      'from-slate-900/50 via-gray-900/40 to-black/30', // Silence: dark
      'from-purple-900/60 via-violet-900/40 to-transparent', // Awakening: violet
    ];
    return backgrounds[index] || backgrounds[0];
  };

  const getBeatColor = (index: number) => {
    const colors = ['#ffd966', '#6b7280', '#a855f7'];
    return colors[index] || colors[0];
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-main mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ffd966] to-transparent" />
        </motion.div>

        {/* Journey Beats */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {beats.map((beat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Text Content - alternates sides */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.h3 
                  className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {beat.title}
                </motion.h3>

                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 font-inter"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {beat.content}
                </motion.p>

                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div
                    style={{ backgroundColor: getBeatColor(index) }}
                    className="w-8 h-2 rounded-full"
                  />
                  <p className="text-sm sm:text-base text-gray-400 font-inter italic">
                    {beat.background_emotion}
                  </p>
                </motion.div>
              </div>

              {/* Visual Mood Box - alternates sides */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div 
                  className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] rounded-3xl overflow-hidden border border-[#6e1fd2]/60 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getBackgroundForBeat(index)} flex items-center justify-center backdrop-blur-sm`}
                  >
                    {/* Visual representation */}
                    <div className="text-center px-6 sm:px-8 lg:px-12 relative z-10">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1], 
                          rotate: [0, 5, -5, 0] 
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: 'easeInOut' 
                        }}
                        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-6 sm:mb-8 bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-xl"
                      >
                        <div
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full"
                          style={{
                            backgroundColor: getBeatColor(index),
                            opacity: 0.6,
                            filter: 'blur(2px)',
                          }}
                        />
                      </motion.div>
                      
                      <motion.p 
                        className="text-base sm:text-lg lg:text-xl text-white font-inter italic font-medium"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {beat.visual_mood}
                      </motion.p>

                      {/* Decorative elements */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.3, 0.6, 0.3] 
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          ease: 'easeInOut' 
                        }}
                        className="absolute top-10 right-10 w-32 h-32 rounded-full pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${getBeatColor(index)}40, transparent)`,
                          filter: 'blur(40px)',
                        }}
                      />
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1], 
                          opacity: [0.2, 0.5, 0.2] 
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: 'easeInOut', 
                          delay: 1 
                        }}
                        className="absolute bottom-10 left-10 w-40 h-40 rounded-full pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${getBeatColor(index)}30, transparent)`,
                          filter: 'blur(60px)',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NarrativeArcSection;
