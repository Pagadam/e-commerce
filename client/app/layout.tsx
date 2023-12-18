import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

export const revalidate = 3600

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce App Project',
  description: 'My E-commerce Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar/>
        <main className='max-w-6xl mx auto'>
        {children}
        </main>
        
      </body>
    </html>
  )
}
