// src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import ClientBody from './ClientBody'
import Script from 'next/script'

// ✅ Use valid Google fonts
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

// ✅ Proper Next.js metadata
export const metadata: Metadata = {
  title: 'My Next App',
  description: 'A Next.js app deployed on Railway',
}

// ✅ No manual <head>, use Next.js Script inside <body>
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        {/* External script safely included here */}
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}