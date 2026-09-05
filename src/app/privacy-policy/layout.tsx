import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aattam Nirvana',
  description: 'Privacy Policy for Aattam Nirvana coaching services. Learn how we collect, use, and protect your personal data in compliance with UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | Aattam Nirvana',
    description: 'Privacy Policy for Aattam Nirvana coaching services and data protection practices.',
    url: '/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
