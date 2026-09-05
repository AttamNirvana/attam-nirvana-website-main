'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { EVENT_PATH, isEventPromotable } from '@/lib/eventConfig'

/** Renders nothing until mounted (avoids a hydration mismatch), then only
 *  while the event is still promotable - so it disappears on its own. */
export default function EventFooterLink() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(isEventPromotable())
  }, [])

  if (!show) return null

  return (
    <li>
      <Link
        href={EVENT_PATH}
        className="text-white/90 text-xs sm:text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
      >
        Free Event
      </Link>
    </li>
  )
}
