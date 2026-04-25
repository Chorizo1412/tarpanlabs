export const siteConfig = {
  name: 'Tarpan Labs',
  tagline: 'Inteligencia Artificial para empresas en LATAM.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tarpanlabs.com',
  description:
    'Tarpan Labs implementa soluciones de IA que eliminan el trabajo manual, mejoran la atención al cliente y generan resultados desde la primera semana.',
  social: {
    linkedin: 'https://linkedin.com/company/tarpan-labs',
    instagram: 'https://instagram.com/tarpanlabs',
  },
  countries: ['AR', 'MX', 'CO', 'CL', 'UY', 'PE'] as const,
  nav: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Casos de Éxito', href: '/#casos' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  cta: {
    primary: 'Hablar con el equipo',
    primaryHref: '/contacto/',
    secondary: 'Ver casos de éxito',
    secondaryHref: '/#casos',
  },
} as const
