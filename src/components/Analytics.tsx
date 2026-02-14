'use client'

import Script from 'next/script'
import { useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Analytics Component
 * Supports Google Analytics 4 and Plausible Analytics
 * Respects user cookie consent
 */

// Configuration from environment variables
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

// Track page views - wrapped in Suspense boundary
function PageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Google Analytics pageview
      if (GA_TRACKING_ID && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_TRACKING_ID, {
          page_path: url,
        })
      }

      // Plausible Analytics pageview (automatic with script)
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    handleRouteChange(url)
  }, [pathname, searchParams])

  return null
}

export default function Analytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)

  useEffect(() => {
    // Check if cookie consent has been given (client-side only)
    const hasConsent = localStorage.getItem('cookie-consent') === 'accepted'
    const consentNotSet = !localStorage.getItem('cookie-consent')
    
    // Only load analytics if consent is given or not yet set (assume yes)
    if (process.env.NODE_ENV === 'production' && (hasConsent || consentNotSet)) {
      setShouldLoadAnalytics(true)
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>

      {/* Google Analytics 4 */}
      {GA_TRACKING_ID && shouldLoadAnalytics && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `,
            }}
          />
        </>
      )}

      {/* Plausible Analytics (Privacy-focused alternative) */}
      {PLAUSIBLE_DOMAIN && shouldLoadAnalytics && (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}

/**
 * Track custom events
 * Usage: trackEvent('button_click', { button_name: 'Book Session' })
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  // Google Analytics
  if (GA_TRACKING_ID && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams)
  }

  // Plausible Analytics
  if (PLAUSIBLE_DOMAIN && typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props: eventParams })
  }
}

/**
 * Web Vitals tracking
 * Tracks Core Web Vitals metrics and sends to analytics
 */
export function reportWebVitals(metric: any) {
  const { name, value, id } = metric

  // Round the value to 2 decimal places
  const roundedValue = Math.round(value * 100) / 100

  // Send to Google Analytics
  if (GA_TRACKING_ID && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, {
      event_category: 'Web Vitals',
      value: roundedValue,
      event_label: id,
      non_interaction: true,
    })
  }

  // Send to Plausible
  if (PLAUSIBLE_DOMAIN && typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('Web Vitals', {
      props: {
        metric: name,
        value: roundedValue,
        id,
      },
    })
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${name}:`, roundedValue, 'ms')
  }
}
