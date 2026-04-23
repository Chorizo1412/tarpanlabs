export const siteConfig = {
  name: 'Tarpan Labs',
  tagline: 'Agencia de Inteligencia Artificial para PyMEs en LATAM',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dominio.com',
  description:
    'Agencia especializada en IA para empresas latinoamericanas. Chatbots, automatizaciones y tecnología que funciona desde la primera semana.',
  social: {
    linkedin: 'https://linkedin.com/company/[slug]',
    instagram: 'https://instagram.com/[handle]',
  },
  countries: ['AR', 'MX', 'CO', 'CL', 'UY', 'PE'] as const,
  nav: [
    { label: 'Servicios', href: '/servicios/chatbots-inteligencia-artificial/' },
    { label: 'Recursos', href: '/recursos/' },
    { label: 'Casos de éxito', href: '/casos-de-exito/' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  cta: {
    primary: 'Contanos qué querés automatizar',
    primaryHref: '/contacto/',
    secondary: 'Ver casos de éxito',
    secondaryHref: '/casos-de-exito/',
  },
} as const
