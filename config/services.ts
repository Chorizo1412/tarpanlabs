import type { ServiceConfig } from '@/lib/types'

export const servicesConfig: ServiceConfig[] = [
  {
    slug: 'chatbots-inteligencia-artificial',
    name: 'Chatbots con IA',
    icon: '🤖',
    shortDescription:
      'Respondé consultas, calificá leads y atendé clientes 24/7 sin contratar más personal.',
    fullDescription:
      'Construimos chatbots inteligentes integrados a WhatsApp, tu sitio web y tus sistemas internos. ' +
      'El bot aprende de tus procesos, responde en el tono de tu marca y escala sin fricción.',
    keywords: [
      'chatbot para negocios con inteligencia artificial',
      'chatbot para atención al cliente',
      'bot de WhatsApp para empresa',
      'chatbot que responde clientes automáticamente',
      'cuánto cuesta un chatbot para empresa',
    ],
    faqs: [
      {
        question: '¿En qué plataformas funciona el chatbot?',
        answer:
          'El chatbot funciona en WhatsApp Business, tu sitio web, Instagram Direct y cualquier plataforma que tenga API disponible. La integración depende de tus canales actuales.',
      },
      {
        question: '¿Cuánto tiempo tarda la implementación?',
        answer:
          'Un chatbot de atención al cliente básico está funcionando en 2 a 3 semanas. Integraciones más complejas con CRM o sistemas internos pueden requerir 4 a 6 semanas.',
      },
      {
        question: '¿El chatbot puede transferir a un humano?',
        answer:
          'Sí. Configuramos reglas claras de escalamiento: el bot transfiere al equipo cuando detecta consultas fuera de su alcance, quejas o solicitudes explícitas del usuario.',
      },
      {
        question: '¿Qué pasa si el bot comete un error?',
        answer:
          'Monitoreamos las conversaciones durante las primeras semanas y ajustamos las respuestas. El acompañamiento continuo está incluido en cada proyecto.',
      },
    ],
  },
  {
    slug: 'automatizacion-de-procesos',
    name: 'Automatización de Procesos',
    icon: '⚡',
    shortDescription:
      'Eliminá el trabajo manual. Conectamos tus sistemas para que fluyan solos.',
    fullDescription:
      'Mapeamos tus procesos manuales y los convertimos en flujos automáticos. ' +
      'Desde la carga de datos hasta la gestión de pedidos, eliminamos el trabajo repetitivo ' +
      'que frena a tu equipo.',
    keywords: [
      'automatización de procesos para empresas',
      'automatizar tareas repetitivas en mi empresa',
      'automatización para reducir costos operativos',
      'herramientas de automatización con IA',
    ],
    faqs: [
      {
        question: '¿Qué tipo de procesos pueden automatizarse?',
        answer:
          'Cualquier proceso que hoy se hace manualmente y sigue reglas claras: carga de datos entre sistemas, generación de reportes, envío de notificaciones, gestión de pedidos, facturación y seguimiento de leads.',
      },
      {
        question: '¿Necesito cambiar mis sistemas actuales?',
        answer:
          'No necesariamente. Trabajamos con tus herramientas existentes: Google Sheets, WhatsApp, CRMs, sistemas de facturación, ERPs. La automatización se construye encima de lo que ya tenés.',
      },
      {
        question: '¿Cuánto ahorro puedo esperar?',
        answer:
          'Depende del proceso. Casos típicos: reducción del 60-80% del tiempo invertido en tareas repetitivas. El ROI se mide en horas liberadas y errores eliminados.',
      },
    ],
  },
  {
    slug: 'desarrollo-web',
    name: 'Desarrollo Web',
    icon: '🌐',
    shortDescription:
      'Sitios rápidos, posicionados y diseñados para convertir visitantes en clientes.',
    fullDescription:
      'Desarrollamos sitios web con Next.js optimizados para velocidad, SEO y conversión. ' +
      'Cada proyecto incluye schema markup, Core Web Vitals verde y configuración para aparecer ' +
      'en Google y en herramientas de IA.',
    keywords: [
      'desarrollo web profesional LATAM',
      'sitio web para empresa Argentina',
      'desarrollo web con Next.js',
      'sitio web optimizado para SEO',
    ],
    faqs: [
      {
        question: '¿En qué tecnología construyen los sitios?',
        answer:
          'Usamos Next.js con React y TypeScript. Es el stack más robusto para sitios de negocios: rápido, seguro, fácil de mantener y excelente para SEO.',
      },
      {
        question: '¿Incluye el diseño gráfico?',
        answer:
          'Sí. Partimos de tu identidad de marca (colores, logo) y diseñamos la interfaz completa. Si no tenés identidad aún, también podemos ayudarte a definirla.',
      },
      {
        question: '¿Cuánto tarda el desarrollo?',
        answer:
          'Un sitio de servicios con 6 a 10 páginas está listo en 4 a 6 semanas desde la aprobación del diseño.',
      },
    ],
  },
  {
    slug: 'auditoria-seo',
    name: 'Auditoría SEO',
    icon: '🔍',
    shortDescription:
      '¿Tu sitio no aparece en Google? Te decimos por qué y cómo solucionarlo.',
    fullDescription:
      'Analizamos tu sitio en profundidad: técnica, contenido, schema markup, Core Web Vitals y optimización para herramientas de IA. ' +
      'Entregás un informe con problemas priorizados y acciones concretas.',
    keywords: [
      'auditoría SEO para empresas',
      'mi sitio web no aparece en Google',
      'cómo mejorar el posicionamiento web de mi empresa',
      'consultoría SEO LATAM',
    ],
    faqs: [
      {
        question: '¿Qué incluye la auditoría?',
        answer:
          'La auditoría cubre: indexación y rastreabilidad, velocidad (Core Web Vitals), estructura de URLs, metadatos, schema markup, contenido, backlinks y preparación para citación en herramientas de IA como Perplexity y ChatGPT.',
      },
      {
        question: '¿Implementan los cambios o solo hacen el informe?',
        answer:
          'Ofrecemos ambas opciones. Podemos entregarte el informe para que tu equipo lo ejecute, o encargarnos de la implementación completa.',
      },
      {
        question: '¿Cuánto tiempo tarda en verse resultados?',
        answer:
          'Las mejoras técnicas (velocidad, indexación) tienen efecto en semanas. Las mejoras de contenido y posicionamiento de keywords tardan entre 2 y 6 meses, dependiendo de la competencia del sector.',
      },
    ],
  },
  {
    slug: 'auditoria-publicidad-digital',
    name: 'Auditoría de Publicidad Digital',
    icon: '📊',
    shortDescription:
      '¿Tu agencia de publicidad no rinde? Auditamos tus campañas y te mostramos dónde se pierde el dinero.',
    fullDescription:
      'Revisamos tus campañas de Google Ads y Meta Ads en detalle: segmentación, creatividades, estructura de cuentas, conversiones y atribución. ' +
      'Identificamos exactamente dónde se pierde el presupuesto y qué cambiar para mejorar el ROAS.',
    keywords: [
      'auditoría de campañas Google Ads',
      'mi agencia de publicidad no da resultados',
      'cómo saber si mis anuncios de Google funcionan',
      'auditoría Facebook Ads para empresas',
      'estoy perdiendo dinero en publicidad digital',
    ],
    faqs: [
      {
        question: '¿Qué plataformas auditan?',
        answer:
          'Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook e Instagram) y TikTok Ads. Podemos auditar una o todas las plataformas donde estés invirtiendo.',
      },
      {
        question: '¿Necesito darles acceso a mis cuentas?',
        answer:
          'Sí. Necesitamos acceso de solo lectura a tus cuentas publicitarias. Es suficiente para hacer el análisis completo sin modificar nada.',
      },
      {
        question: '¿Qué pasa si mi agencia actual hace las campañas?',
        answer:
          'Hacemos la auditoría de forma independiente. Si encontramos problemas, te damos los argumentos para exigirle cambios a tu agencia o decidir si cambiarla.',
      },
    ],
  },
  {
    slug: 'desarrollo-saas',
    name: 'Desarrollo de SaaS',
    icon: '🛠️',
    shortDescription:
      'Construimos el software exacto que tu negocio necesita. Sin extras, sin promesas vacías.',
    fullDescription:
      'Desarrollamos aplicaciones SaaS a medida con Python (FastAPI) en el backend y Next.js en el frontend. ' +
      'Procesos claros: definimos el alcance, construimos por fases y entregamos software funcionando en producción.',
    keywords: [
      'desarrollo de software a medida LATAM',
      'desarrollo SaaS para empresas',
      'aplicación web personalizada',
      'software a medida para PyMEs',
    ],
    faqs: [
      {
        question: '¿Cómo es el proceso de desarrollo?',
        answer:
          'Primero definimos el alcance exacto (qué hace el software, qué no hace). Luego construimos por fases: MVP funcional en la primera fase, mejoras en fases posteriores. Sin scope creep.',
      },
      {
        question: '¿Qué pasa cuando termina el desarrollo?',
        answer:
          'Entregamos el código fuente, documentación técnica y configuración de producción. Podemos seguir manteniendo el sistema o entregarlo a tu equipo técnico.',
      },
      {
        question: '¿Cuánto cuesta un SaaS a medida?',
        answer:
          'Depende del alcance. Hacemos una estimación detallada antes de comenzar. No damos precios sin entender el problema primero.',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceConfig | undefined =>
  servicesConfig.find((s) => s.slug === slug)
