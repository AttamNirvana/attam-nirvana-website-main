'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { EVENT_CONFIRMED_PATH, JOTFORM_EMBED_URL, JOTFORM_FORM_ID } from '@/lib/eventConfig'

const IFRAME_ID = `JotFormIFrame-${JOTFORM_FORM_ID}`

/**
 * Embeds the registration Jotform inline (never a redirect to jotform.com).
 *
 * Jotform posts an unofficial `{action: 'submission-completed'}` message to
 * the parent window on successful submit - we listen for it to advance the
 * visitor to the confirmation page without leaving this site. That message
 * isn't part of Jotform's public API and can change without notice, so a
 * visible fallback link covers the case where it never arrives.
 */
export default function RegistrationEmbed() {
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(900)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    script.onload = () => {
      const handler = (window as any).jotformEmbedHandler
      if (typeof handler === 'function' && iframeRef.current) {
        handler(`iframe[id='${IFRAME_ID}']`, 'https://form.jotform.com/')
      }
    }
    document.body.appendChild(script)

    const onMessage = (event: MessageEvent) => {
      if (!event.origin.includes('jotform.com')) return
      const data = event.data
      if (data && typeof data === 'object' && data.action === 'submission-completed') {
        router.push(EVENT_CONFIRMED_PATH)
        return
      }
      // Jotform's resize messages arrive as "setHeight:<id>:<px>" strings.
      if (typeof data === 'string' && data.startsWith('setHeight:')) {
        const px = parseInt(data.split(':')[2] ?? '', 10)
        if (!Number.isNaN(px) && px > 0) setHeight(px)
      }
    }
    window.addEventListener('message', onMessage)

    return () => {
      window.removeEventListener('message', onMessage)
      script.remove()
    }
  }, [router])

  return (
    <div className="w-full">
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
        <iframe
          ref={iframeRef}
          id={IFRAME_ID}
          title="A Journey Home to Self - Registration"
          src={JOTFORM_EMBED_URL}
          style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
        />
      </div>
      <button
        onClick={() => router.push(EVENT_CONFIRMED_PATH)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white underline underline-offset-2 transition-colors"
      >
        Already submitted the form? Continue
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
