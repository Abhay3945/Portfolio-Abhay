import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Abhay Tambe - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Python, and modern web technologies. Building innovative solutions with clean, efficient code.',
  keywords: 'Full Stack Developer, React, Next.js, Python, FastAPI, JavaScript, TypeScript, Web Development',
  authors: [{ name: 'Abhay Tambe' }],
  openGraph: {
    title: 'Abhay Tambe - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Python, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Tambe - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Python, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
