'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { LogoType } from '@/components/ui/LogoType'
import { siteConfig } from '@/config/site'

export const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
    <Container className="flex h-[72px] items-center justify-between gap-6">
      <Link href="/" className="shrink-0">
        <LogoType size="lg" />
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex items-center gap-1.5 rounded-[--radius] px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-2 hover:text-fg"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Button href={siteConfig.cta.primaryHref} size="sm">
        {siteConfig.cta.primary}
      </Button>
    </Container>
  </header>
)
