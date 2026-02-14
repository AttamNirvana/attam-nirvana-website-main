'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by boundary:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-primary-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-primary-900 rounded-2xl p-8 border border-primary-700 shadow-xl text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-poppins font-bold text-white mb-3">
            Something Went Wrong
          </h2>
          
          {/* Message */}
          <p className="text-white/80 mb-2">
            We encountered an unexpected error. Don't worry, your data is safe.
          </p>
          
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-sm text-red-400 font-mono text-left break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
