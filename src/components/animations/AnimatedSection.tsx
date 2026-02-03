'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * FadeIn - Simple opacity fade animation
 * Premium minimalist approach using only opacity transitions
 */
export function FadeIn({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * ScaleIn - Subtle scale with fade animation
 * Premium feel with minimal movement
 */
export function ScaleIn({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

/**
 * StaggerContainer - Container for staggered child animations
 * Used for lists and grids
 */
export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem - Individual item for stagger animations
 * Simple opacity and scale only
 */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Legacy exports for backwards compatibility - all use simplified animations now
export const FadeInUp = FadeIn;
export const SlideInLeft = FadeIn;
export const SlideInRight = FadeIn;
