'use client'

import { useEffect, useState } from 'react'
import { EVENT_START } from '@/lib/eventConfig'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, EVENT_START.getTime() - Date.now())
  const seconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  }
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hrs' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
]

export default function EventCountdownTimer({
  compact = false,
  className = '',
}: {
  compact?: boolean
  className?: string
}) {
  // Reserve layout space with a zeroed value on the server so there is no
  // shift once the client tick kicks in (CLS).
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (mounted && EVENT_START.getTime() - Date.now() <= 0) {
    return null
  }

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`} aria-live="off">
      {UNITS.map(({ key, label }) => (
        <div key={key} className="flex flex-col items-center">
          <span
            className={`font-poppins font-bold tabular-nums leading-none ${
              compact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-4xl'
            }`}
          >
            {String(timeLeft[key]).padStart(2, '0')}
          </span>
          <span className={`uppercase tracking-wider text-white/80 ${compact ? 'text-[9px]' : 'text-[10px] sm:text-xs mt-1'}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
