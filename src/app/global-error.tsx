'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#6e1fd2',
          padding: '1rem'
        }}>
          <div style={{
            maxWidth: '32rem',
            width: '100%',
            background: '#4a1495',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <AlertTriangle style={{ width: '2rem', height: '2rem', color: '#f87171' }} />
            </div>
            
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Application Error
            </h2>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              A critical error occurred. Please refresh the page.
            </p>
            
            <button
              onClick={reset}
              style={{
                width: '100%',
                padding: '0.75rem 1.5rem',
                background: '#a366ea',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
