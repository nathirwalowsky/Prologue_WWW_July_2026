import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist_Mono, Jost, Spectral } from 'next/font/google'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

// Jost — geometric sans for headings, UI, labels, buttons
// Explicitly load 400 + 600 (SemiBold) so font-semibold renders the real cut
const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
// Spectral — old-style serif for body copy and editorial text
const spectral = Spectral({
  variable: '--font-spectral',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Prologue Agency — Home Wireframe v2',
  description: 'Polished v2 wireframe for the Prologue Agency home page',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${jost.variable} ${spectral.variable} ${geistMono.variable} bg-background`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
