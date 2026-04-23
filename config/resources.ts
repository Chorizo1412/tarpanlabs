import type { ResourceConfig } from '@/lib/types'

export const resourcesConfig: ResourceConfig[] = [
  {
    slug: 'como-implementar-ia-en-mi-empresa',
    title: '¿Cómo implementar IA en mi empresa? Guía para PyMEs',
    description:
      'Guía práctica para implementar inteligencia artificial en empresas latinoamericanas sin necesitar conocimientos técnicos.',
    keywords: [
      'cómo implementar IA en mi empresa',
      'inteligencia artificial para empresas pequeñas',
      'IA para PyMEs LATAM',
    ],
    relatedServiceSlug: 'automatizacion-de-procesos',
    sections: [
      {
        heading: '¿Qué significa implementar IA en una empresa?',
        content:
          'Implementar IA en una empresa significa automatizar tareas repetitivas, analizar datos para tomar mejores decisiones y mejorar la atención al cliente usando tecnología de inteligencia artificial. No requiere contratar ingenieros ni cambiar todos tus sistemas: se integra sobre lo que ya tenés.',
      },
      {
        heading: '¿Por dónde empezar?',
        content:
          'El primer paso es identificar el proceso que más tiempo consume a tu equipo. Típicamente es: responder consultas de clientes, cargar datos entre sistemas, o generar reportes manualmente. Ese proceso es el candidato ideal para automatizar primero.',
      },
      {
        heading: '¿Qué herramientas de IA existen para empresas?',
        content:
          'Las herramientas más usadas para PyMEs son: chatbots (para atención al cliente), plataformas de automatización como n8n o Make (para conectar sistemas), y APIs de IA como OpenAI (para procesar texto e imágenes). Un especialista elige la herramienta correcta según tu proceso específico.',
      },
      {
        heading: '¿Cuánto cuesta implementar IA?',
        content:
          'El costo varía según la complejidad. Automatizaciones simples pueden estar listas en 2-3 semanas con una inversión accesible. Proyectos más complejos como un asistente IA entrenado con tu información requieren mayor inversión inicial pero generan ahorro continuo.',
      },
    ],
  },
  {
    slug: 'como-hacer-un-chatbot-para-mi-negocio',
    title: 'Chatbot para tu negocio: guía completa 2026',
    description:
      'Todo lo que necesitás saber para tener un chatbot en tu empresa: qué es, cómo funciona, cuánto cuesta y cómo elegir el correcto.',
    keywords: [
      'cómo hacer un chatbot para mi negocio',
      'chatbot WhatsApp empresa',
      'chatbot para atención al cliente',
    ],
    relatedServiceSlug: 'chatbots-inteligencia-artificial',
    sections: [
      {
        heading: '¿Qué es un chatbot para negocios?',
        content:
          'Un chatbot para negocios es un programa que responde preguntas de clientes de forma automática, sin intervención humana. Funciona en WhatsApp, tu sitio web o redes sociales. Puede responder consultas, calificar leads, agendar turnos y más, las 24 horas.',
      },
      {
        heading: '¿Cuánto cuesta un chatbot para empresa?',
        content:
          'El costo depende del canal (WhatsApp, web, ambos) y la complejidad de las respuestas. Un chatbot básico de FAQ puede estar listo en 2 semanas. Un chatbot integrado a tu CRM o sistema de inventario requiere más tiempo de integración.',
      },
      {
        heading: '¿El chatbot puede reemplazar a mi equipo de atención?',
        content:
          'No reemplaza al equipo, lo potencia. El chatbot resuelve el 60-80% de las consultas repetitivas (horarios, precios, disponibilidad). Las consultas complejas o quejas se transfieren a un humano. El equipo se enfoca en lo que realmente requiere atención personalizada.',
      },
      {
        heading: '¿Qué información necesita el chatbot para funcionar?',
        content:
          'Necesita conocer tus productos o servicios, preguntas frecuentes, políticas de la empresa y cómo escalar consultas. Todo ese conocimiento se carga durante la implementación. El chatbot aprende de tu negocio, no al revés.',
      },
    ],
  },
  {
    slug: 'como-automatizar-procesos-manuales',
    title: 'Cómo automatizar procesos manuales: guía paso a paso',
    description:
      'Guía para identificar, priorizar y automatizar los procesos manuales que más tiempo consumen en tu empresa.',
    keywords: [
      'cómo automatizar procesos manuales',
      'automatización tareas repetitivas empresa',
      'automatización de procesos para PyMEs',
    ],
    relatedServiceSlug: 'automatizacion-de-procesos',
    sections: [
      {
        heading: '¿Qué procesos manuales se pueden automatizar?',
        content:
          'Se pueden automatizar todos los procesos que siguen reglas claras y se repiten regularmente: carga de datos entre planillas y sistemas, envío de notificaciones y recordatorios, generación de reportes, procesamiento de pedidos, facturación y seguimiento de leads.',
      },
      {
        heading: 'Paso 1: Identificar el proceso candidato',
        content:
          'Elegí el proceso que más tiempo consume a tu equipo cada semana. Calculá cuántas horas-persona gasta al mes. Ese número es el ahorro potencial de automatizar. Procesos que toman 10+ horas mensuales son los primeros candidatos.',
      },
      {
        heading: 'Paso 2: Mapear el proceso actual',
        content:
          'Documentá el proceso paso a paso: quién lo hace, qué datos recibe, qué sistemas usa, qué produce como resultado. Este mapa es el input que necesita el equipo técnico para construir la automatización.',
      },
      {
        heading: 'Paso 3: Implementar y medir',
        content:
          'La automatización se construye, prueba con datos reales y se ajusta antes de salir a producción. Después del lanzamiento se mide el tiempo ahorrado y los errores eliminados para calcular el ROI real.',
      },
    ],
  },
]

export const getResourceBySlug = (slug: string): ResourceConfig | undefined =>
  resourcesConfig.find((r) => r.slug === slug)
