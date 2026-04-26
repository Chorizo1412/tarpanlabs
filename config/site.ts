export const siteConfig = {
  name: 'tarpan labs',
  tagline: 'Implementamos. No prometemos.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tarpanlabs.com',
  description:
    'Automatizamos los procesos que consumen tiempo de tu equipo. Chatbots entrenados que responden como humanos, flujos automatizados y sistemas que funcionan desde el primer día.',
  social: {
    linkedin: 'https://linkedin.com/company/tarpan-labs',
    instagram: 'https://instagram.com/tarpanlabs',
  },
  countries: ['AR', 'MX', 'CO', 'CL', 'UY', 'PE'] as const,
  nav: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Contacto', href: '/contacto/' },
  ],
  cta: {
    primary: 'Hablar con el equipo',
    primaryHref: '/contacto/',
    secondary: 'Ver casos de éxito',
    secondaryHref: '/casos/',
  },
} as const
