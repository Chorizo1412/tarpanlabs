import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-900 py-12 text-slate-400">
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <p className="mb-2 text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="text-sm">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Servicios</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/servicios/chatbots-inteligencia-artificial/" className="hover:text-white">Chatbots con IA</Link></li>
            <li><Link href="/servicios/automatizacion-de-procesos/" className="hover:text-white">Automatización</Link></li>
            <li><Link href="/servicios/desarrollo-web/" className="hover:text-white">Desarrollo Web</Link></li>
            <li><Link href="/servicios/auditoria-seo/" className="hover:text-white">Auditoría SEO</Link></li>
            <li><Link href="/servicios/auditoria-publicidad-digital/" className="hover:text-white">Auditoría de Ads</Link></li>
            <li><Link href="/servicios/desarrollo-saas/" className="hover:text-white">Desarrollo SaaS</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Empresa</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros/" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/casos-de-exito/" className="hover:text-white">Casos de éxito</Link></li>
            <li><Link href="/recursos/" className="hover:text-white">Recursos</Link></li>
            <li><Link href="/contacto/" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-700 pt-8 text-center text-xs">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
        <p className="mt-1">Operamos en Argentina, México, Colombia, Chile, Uruguay y Perú.</p>
      </div>
    </Container>
  </footer>
)
