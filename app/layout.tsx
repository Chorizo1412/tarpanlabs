import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildOrganizationSchema } from '@/lib/utils/schema'
import { siteConfig } from '@/config/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Agencia de IA para Empresas en LATAM`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_419',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
