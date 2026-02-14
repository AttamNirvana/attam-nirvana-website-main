'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { getBreadcrumbSchema, createJsonLd, type BreadcrumbItem } from '@/lib/structuredData'

/**
 * Breadcrumbs Component
 * Displays navigation breadcrumbs with JSON-LD structured data
 * Automatically generated based on current pathname
 */

// Map of route paths to user-friendly names
const routeNames: Record<string, string> = {
  '': 'Home',
  'about': 'About',
  'services': 'Services',
  'contact': 'Contact',
  'blog': 'Blog',
  'book-session': 'Book Session',
  'free-clarity-call': 'Free Clarity Call',
  'terms-and-conditions': 'Terms & Conditions',
}

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null

  // Split pathname into segments
  const segments = pathname.split('/').filter(Boolean)

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Home',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.attamnirvana.com',
    },
  ]

  // Add each segment to breadcrumbs
  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const name = routeNames[segment] || segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    
    breadcrumbItems.push({
      name,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.attamnirvana.com'}${currentPath}`,
    })
  })

  // Generate JSON-LD schema
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems)

  return (
    <>
      {/* JSON-LD Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(breadcrumbSchema)}
      />

      {/* Visual Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb"
        className="container-main py-4"
      >
        <ol className="flex items-center gap-2 text-sm text-white/60">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-accent-purple transition-colors"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {segments.map((segment, index) => {
            const isLast = index === segments.length - 1
            const href = `/${segments.slice(0, index + 1).join('/')}`
            const name = routeNames[segment] || segment.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')

            return (
              <li key={segment} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {isLast ? (
                  <span
                    className="text-white font-medium"
                    aria-current="page"
                  >
                    {name}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-accent-purple transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
