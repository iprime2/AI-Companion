import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'
import ToastProvider from '@/components/ToastProvider'
import { ProModal } from '@/components/ui/ProModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Companion',
  description: 'Generated your own AI companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={cn('bg-secondary', inter.className)}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ToastProvider />
            <ProModal />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
