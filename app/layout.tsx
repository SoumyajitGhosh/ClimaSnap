import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Climasnap',
  description: 'AI Weather App using ChatGPT, Next, React, Tremor, StepZen, GraphQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/climasnap.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
