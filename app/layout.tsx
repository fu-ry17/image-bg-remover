import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToastProvider from '@/components/toast/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Bg Remover',
  description: 'Modern Image Bg Remover',
  manifest: 'manifest.json',
  themeColor: '#fff',
  metadataBase: new URL('https://image-bg-remover.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "p-4 lg:max-w-5xl mx-auto")}>
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}
