import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, LenisProvider } from '@/components/layout'
import CookieConsent from '@/components/layout/CookieConsent'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aattam Nirvana | Rupi Dhillon - Trauma Healing & Empowerment',
  description: 'Transform your life with Rupi Dhillon. A 12-week program to break free from trauma, domestic abuse, and cultural conditioning. Reclaim your voice and inner strength.',
  keywords: ['trauma healing', 'domestic abuse recovery', 'women empowerment', 'life coaching', 'Rupi Dhillon', 'Aattam Nirvana'],
  authors: [{ name: 'Rupi Dhillon' }],
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  )
}
