import type { Metadata } from 'next'
import Layout from '@/components/layout/layout'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI 聊天机器人',
  description: '🤖 基于 Next.js 开发的多功能 AI 聊天机器人，支持多个 AI 模型，内置多种应用场景。',
  keywords: ['AI 聊天机器人', 'Next.js', '多功能 AI', '聊天机器人', 'AI 模型'],
  authors: [{ name: 'LiuYuhe', url: 'https://github.com/liuyuhe666' }],
  creator: 'LiuYuhe',
  publisher: 'Vercel',
  verification: { google: '_6gkNnCmuXU34dFfANRP5lv8DAGplNNihumUucIdm7o' },
  openGraph: {
    type: 'website',
    url: 'https://ai-chatbot-beta-ten-83.vercel.app',
    title: 'AI 聊天机器人',
    description: '🤖 基于 Next.js 开发的多功能 AI 聊天机器人，支持多个 AI 模型，内置多种应用场景。',
    siteName: 'AI 聊天机器人',
    images: [{ url: '/og.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-H054VMX4XQ" />
    </html>
  )
}
