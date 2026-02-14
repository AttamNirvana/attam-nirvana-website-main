'use client'

import { CSSProperties } from 'react'

interface ShinyTextProps {
  text: string
  color?: string
  shineColor?: string
  speed?: number
  spread?: number
  className?: string
}

export default function ShinyText({
  text,
  color = '#ffffff',
  shineColor = '#e0b84d',
  speed = 3,
  spread = 90,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`
  
  const style: CSSProperties = {
    color,
    background: `linear-gradient(${spread}deg, ${color} 0%, ${shineColor} 50%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `shinyTextAnimation ${animationDuration} linear infinite`,
  }
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shinyTextAnimation {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `
      }} />
      <span className={`inline-block ${className}`} style={style}>
        {text}
      </span>
    </>
  )
}
