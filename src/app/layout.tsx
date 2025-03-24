import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Masterpiece Figures',
  description:
    'Elevamos seus sonhos e ambientes com peças exclusivas e impactantes.',
  icons: ['/favicon.png'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} relative antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
