import type { Metadata } from 'next'
import AboutPageContent from './AboutPageContent'

export const metadata: Metadata = {
  title: 'About Rupi Dhillon | From Survivor to Advocate | Aattam Nirvana',
  description: 'Learn about Rupi Dhillon&apos;s transformative journey from 27 years of domestic abuse to becoming a trauma healing coach. Her story of resilience inspires women worldwide.',
  keywords: ['Rupi Dhillon', 'trauma survivor', 'domestic abuse recovery', 'women empowerment', 'healing coach', 'Rupi'],
}

export default function AboutPage() {
  return <AboutPageContent />
}
