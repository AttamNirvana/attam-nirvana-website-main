'use client'

import { useEffect, useState } from 'react'

interface ScrollbarState {
  thumbHeight: number
  thumbTop: number
  isVisible: boolean
}

const MIN_THUMB_HEIGHT = 48

export default function CustomScrollbar() {
  const [state, setState] = useState<ScrollbarState>({
    thumbHeight: MIN_THUMB_HEIGHT,
    thumbTop: 0,
    isVisible: false,
  })

  useEffect(() => {
    const updateScrollbar = () => {
      const doc = document.documentElement
      const scrollHeight = doc.scrollHeight
      const clientHeight = doc.clientHeight
      const scrollTop = doc.scrollTop
      const trackHeight = Math.round(window.innerHeight * 0.6)

      if (scrollHeight <= clientHeight) {
        setState(prev => ({ ...prev, isVisible: false }))
        return
      }

      const thumbHeight = Math.max(
        MIN_THUMB_HEIGHT,
        Math.round((trackHeight * clientHeight) / scrollHeight)
      )
      const maxThumbTop = Math.max(0, trackHeight - thumbHeight)
      const thumbTop = Math.round(
        maxThumbTop * (scrollTop / (scrollHeight - clientHeight))
      )

      setState({ thumbHeight, thumbTop, isVisible: true })
    }

    updateScrollbar()
    window.addEventListener('scroll', updateScrollbar, { passive: true })
    window.addEventListener('resize', updateScrollbar)

    return () => {
      window.removeEventListener('scroll', updateScrollbar)
      window.removeEventListener('resize', updateScrollbar)
    }
  }, [])

  if (!state.isVisible) {
    return null
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex pointer-events-none">
      <div className="h-[60vh] w-2 rounded-full bg-white/5 backdrop-blur border border-white/10 overflow-hidden">
        <div
          className="w-full rounded-full bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-200 shadow-[0_0_12px_rgba(255,217,102,0.35)]"
          style={{
            height: state.thumbHeight,
            transform: `translateY(${state.thumbTop}px)`,
          }}
        />
      </div>
    </div>
  )
}
