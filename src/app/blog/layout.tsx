import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Trauma Healing Insights & Stories | Aattam Nirvana',
  description: 'Coming Soon: Trauma healing techniques, transformation stories, cultural conditioning insights, and mindfulness practices. Q&A with Rupi Dhillon. Launching Q2 2026.',
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
