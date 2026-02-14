import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Aattam Nirvana',
  description: 'Terms and conditions for Aattam Nirvana coaching services. Read our policies on booking, payment, confidentiality, cancellations, and refunds.',
  keywords: [
    'terms and conditions',
    'coaching terms',
    'service agreement',
    'cancellation policy',
    'refund policy',
    'Aattam Nirvana policies'
  ],
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Aattam Nirvana',
    description: 'Terms and conditions for Aattam Nirvana coaching services and policies.',
    url: '/terms-and-conditions',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
