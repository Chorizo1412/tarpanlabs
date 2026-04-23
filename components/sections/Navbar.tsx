import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
    <Container className="flex h-16 items-center justify-between">
      <Link href="/" className="text-xl font-bold text-brand-800">
        {siteConfig.name}
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Button href={siteConfig.cta.primaryHref} size="sm">
        Contacto
      </Button>
    </Container>
  </header>
)
