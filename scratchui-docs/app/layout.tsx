import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'scratchUI',
    template: '%s — scratchUI',
  },
  description: 'Minimal React components. Two modes. Zero dependencies.',
  openGraph: {
    title: 'scratchUI',
    description: 'Minimal React components. Two modes. Zero dependencies.',
    url: 'https://scratchui.dev',
    siteName: 'scratchUI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'scratchUI',
    description: 'Minimal React components. Two modes. Zero dependencies.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
