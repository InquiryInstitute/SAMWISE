import type { Metadata } from 'next'
import { Crimson_Pro, DM_Sans } from 'next/font/google'
import '../src/styles/globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Sam — Your Learning Companion',
  description: 'SAMWISE: Supportive Assistant for Memory, Writing, Inquiry, Sense-making, and Exploration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
