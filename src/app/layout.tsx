import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import ThemeProvider from '@/components/ThemeProvider'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Hong Kim',
  description: 'Portfolio of Hong Kim',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@200,300,301,400,401,500,501,600,601,700,701,800,801&f[]=bespoke-serif@300,301,400,401,500,501,700,701&f[]=gambetta@300,301,400,401,500,501,600,601,700,701&f[]=gambarino@400&f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${inter.variable} antialiased bg-[var(--page-bg)] text-[var(--page-text)] flex flex-col min-h-screen transition-colors duration-1000 ease-in-out`}>
        <ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
          <Navbar />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}