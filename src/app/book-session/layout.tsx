import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Coaching Session | Schedule with Rupi Dhillon | Aattam Nirvana',
  description: 'Book a 1-on-1 intensive coaching session with Rupi Dhillon. 90-minute transformative sessions focused on trauma healing and women empowerment. Online via Zoom.',
  keywords: [
    'book coaching session',
    'schedule life coach',
    'trauma healing appointment',
    '1-on-1 coaching',
    'intensive coaching session',
    'Rupi Dhillon booking'
  ],
  alternates: {
    canonical: '/book-session',
  },
  openGraph: {
    title: 'Book Your Coaching Session | Rupi Dhillon',
    description: 'Schedule your 90-minute intensive coaching session for trauma healing and empowerment.',
    url: '/book-session',
    type: 'website',
  },
}

export default function BookSessionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
