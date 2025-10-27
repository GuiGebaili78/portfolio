import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guilherme Corretor | Desenvolvedor de Software',
  description: 'Portfólio de Guilherme Corretor - Desenvolvedor de Software especializado em React, Next.js, TypeScript e Node.js',
  keywords: 'desenvolvedor, software, react, nextjs, typescript, nodejs, frontend, backend',
  authors: [{ name: 'Guilherme Corretor' }],
  openGraph: {
    title: 'Guilherme Corretor | Desenvolvedor de Software',
    description: 'Portfólio de Guilherme Corretor - Desenvolvedor de Software especializado em React, Next.js, TypeScript e Node.js',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}




