import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export const Footer = () => (
  <footer className="border-t border-line bg-bg">
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo-tarpan.svg"
            alt={siteConfig.name}
            width={120}
            height={28}
            className="mb-4 h-7 w-auto opacity-90"
          />
          <p className="text-sm text-fg-dim">{siteConfig.tagline}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-dim transition-colors hover:text-fg"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-dim transition-colors hover:text-fg"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>

        <div>
          <p className="overline mb-4">Servicios</p>
          <ul className="space-y-2.5 text-sm text-fg-muted">
            <li><Link href="/servicios/agentes/" className="transition-colors hover:text-fg">Agentes de IA</Link></li>
            <li><Link href="/servicios/rag-knowledge/" className="transition-colors hover:text-fg">RAG & Knowledge</Link></li>
            <li><Link href="/servicios/ai-ops/" className="transition-colors hover:text-fg">AI Ops</Link></li>
          </ul>
        </div>

        <div>
          <p className="overline mb-4">Empresa</p>
          <ul className="space-y-2.5 text-sm text-fg-muted">
            <li><Link href="/nosotros/" className="transition-colors hover:text-fg">Nosotros</Link></li>
            <li><Link href="/casos/" className="transition-colors hover:text-fg">Casos</Link></li>
            <li><Link href="/laboratorio/" className="transition-colors hover:text-fg">Laboratorio</Link></li>
            <li><Link href="/contacto/" className="transition-colors hover:text-fg">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="overline mb-4">Recursos</p>
          <ul className="space-y-2.5 text-sm text-fg-muted">
            <li><Link href="/recursos/que-es-un-agente-de-ia/" className="transition-colors hover:text-fg">¿Qué es un agente de IA?</Link></li>
            <li><Link href="/recursos/que-es-rag-y-para-que-sirve/" className="transition-colors hover:text-fg">¿Qué es RAG?</Link></li>
            <li><Link href="/recursos/como-escalar-ia-en-tu-empresa/" className="transition-colors hover:text-fg">Cómo escalar IA</Link></li>
          </ul>
        </div>
      </div>
    </Container>

    <div className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
        <p className="font-mono text-[11px] text-fg-dim">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p className="font-mono text-[11px] text-fg-dim">
          AR · MX · CO · CL · UY · PE
        </p>
      </Container>
    </div>
  </footer>
)
