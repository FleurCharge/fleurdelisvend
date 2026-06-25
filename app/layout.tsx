import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fleur Charge | Premium Phone Charging Kiosk Rental',
  description: 'Generate passive revenue with premium phone charging kiosks. Perfect for gyms, colleges, casinos, and hospitality venues.',
  keywords: 'phone charging kiosk, rental revenue, venue charging station, passive income',
  openGraph: {
    title: 'Fleur Charge | Premium Phone Charging Kiosk Rental',
    description: 'Generate passive revenue with premium phone charging kiosks for your venue.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
