import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free 30-Minute Clarity Call | Discover Your Path | Aattam Nirvana',
  description: 'Book a complimentary 30-minute clarity call with Rupi Dhillon. Explore your healing journey, discuss your challenges, and discover how we can work together. No obligations.',
  keywords: [
    'free clarity call',
    'complimentary consultation',
    'free coaching call',
    'discovery call',
    'trauma healing consultation',
    'free session Rupi Dhillon'
  ],
  alternates: {
    canonical: '/free-clarity-call',
  },
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
