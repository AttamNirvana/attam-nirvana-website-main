import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Rupi Dhillon | Get In Touch | Aattam Nirvana',
  description: 'Ready to start your transformation journey? Contact Rupi Dhillon for trauma healing and women empowerment coaching. Fill out the form or book a free clarity call.',
  keywords: [
    'contact Rupi Dhillon',
    'trauma coach contact',
    'life coaching inquiry',
    'get in touch',
    'coaching consultation',
    'Aattam Nirvana contact'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Rupi Dhillon | Get In Touch',
    description: 'Ready to start your transformation journey? Contact Rupi Dhillon for trauma healing and empowerment coaching.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
