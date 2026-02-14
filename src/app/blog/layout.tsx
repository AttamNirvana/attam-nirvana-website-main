import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Trauma Healing Insights & Stories | Aattam Nirvana',
  description: 'Coming Soon: Trauma healing techniques, transformation stories, cultural conditioning insights, and mindfulness practices. Q&A with Rupi Dhillon. Launching Q2 2026.',
  keywords: [
    'trauma healing blog',
    'women empowerment stories',
    'healing techniques',
    'transformation stories',
    'cultural conditioning',
    'mindfulness practices',
    'Rupi Dhillon blog'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Trauma Healing Insights | Aattam Nirvana',
    description: 'Coming Soon: Trauma healing insights, transformation stories, and practical techniques. Launching Q2 2026.',
    url: '/blog',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
