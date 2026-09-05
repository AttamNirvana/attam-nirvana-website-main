import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free 30-Minute Clarity Call | Discover Your Path | Aattam Nirvana',
  description: 'Book a complimentary 30-minute clarity call with Rupi Dhillon. Explore your healing journey, discuss your challenges, and discover how we can work together. No obligations.',
  openGraph: {
    title: 'Free 30-Minute Clarity Call | Rupi Dhillon',
    description: 'Book your complimentary clarity call. Explore your healing path with no pressure or obligations.',
    url: '/free-clarity-call',
    type: 'website',
  },
}

export default function FreeClarityCallLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
