import './globals.css'
import Navbar from '@/components/Navbar' 
import Footer from '@/components/Footer' 
import Analytics from '@/components/Analytics'
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
      <body className={`${inter.variable} antialiased bg-[#050505] text-white flex flex-col min-h-screen`}>
        <Analytics />
        <Navbar />
        
        {/* This is where the specific page content renders */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer sits at the bottom */}
        <Footer />
      </body>
    </html>
  )
}