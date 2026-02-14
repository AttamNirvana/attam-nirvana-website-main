import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, LenisProvider } from '@/components/layout'
import CustomScrollbar from '@/components/layout/CustomScrollbar'
import SocialSidebar from '@/components/layout/SocialSidebar'
import CookieConsent from '@/components/layout/CookieConsent'
import Analytics from '@/components/Analytics'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.attamnirvana.com'),
  title: {
    default: 'Aattam Nirvana | Rupi Dhillon - Trauma Healing & Empowerment',
    template: '%s | Aattam Nirvana'
  },
  description: 'Transform your life with Rupi Dhillon. A 12-week program to break free from trauma, domestic abuse, and cultural conditioning. Reclaim your voice and inner strength.',
  keywords: ['trauma healing', 'domestic abuse recovery', 'women empowerment', 'life coaching', 'Rupi Dhillon', 'Aattam Nirvana'],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Rupi Dhillon' }],
  creator: 'Rupi Dhillon',
  publisher: 'Aattam Nirvana',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Aattam Nirvana | Soul Transformation Journey',
    description: 'Break free from trauma and reclaim your authentic self with personalized guidance.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.attamnirvana.com',
    siteName: 'Aattam Nirvana',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aattam Nirvana - Rupi Dhillon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aattam Nirvana | Soul Transformation Journey',
    description: 'Break free from trauma and reclaim your authentic self with personalized guidance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter">
        <Analytics />
        <LenisProvider>
          <CustomScrollbar />
          <SocialSidebar />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  )
}
