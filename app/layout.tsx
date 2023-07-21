import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Bg Remover',
  description: 'Modern Image Bg Remover',
  manifest: 'manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "p-4 lg:max-w-5xl mx-auto")}>{children}</body>
    </html>
  )
}
