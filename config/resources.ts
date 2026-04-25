import type { ResourceConfig } from '@/lib/types'

export const resourcesConfig: ResourceConfig[] = [
  {
    slug: 'que-es-un-agente-de-ia',
    title: '¿Qué es un agente de IA? Guía para empresas en LATAM',
    description:
      'Explicación clara de qué son los agentes de inteligencia artificial, cómo funcionan y cómo pueden aplicarse en empresas latinoamericanas.',
    keywords: [
      'qué es un agente de inteligencia artificial',
      'agentes IA para empresas',
      'automatización con agentes IA LATAM',
    ],
    relatedServiceSlug: 'chatbots-inteligencia-artificial',
    sections: [
      {
        heading: '¿Qué es un agente de IA?',
        content:
          'Un agente de IA es un sistema que puede percibir su entorno, razonar sobre él y ejecutar acciones de forma autónoma para cumplir un objetivo. A diferencia de un chatbot que responde preguntas, un agente puede buscar información, actualizar bases de datos, enviar notificaciones y coordinar múltiples pasos sin intervención humana en cada uno.',
      },
      {
        heading: '¿Cómo funciona un agente en la práctica?',
        content:
          'El agente recibe una tarea (por ejemplo: "procesar todas las solicitudes de soporte sin respuesta de las últimas 24 horas"). Luego busca la información necesaria en tus sistemas, analiza cada caso según las reglas configuradas, ejecuta la acción correspondiente (responder, escalar, cerrar) y registra lo que hizo. Todo con trazabilidad completa.',
      },
      {
        heading: '¿Qué procesos se pueden delegar a un agente?',
        content:
          'Cualquier proceso que hoy sigue reglas claras pero consume tiempo humano: calificación de leads, seguimiento de pagos vencidos, actualización de inventario, generación de reportes periódicos, atención de consultas de primer nivel y coordinación entre sistemas. Si puede documentarse como un flujo de decisiones, puede convertirse en un agente.',
      },
      {
        heading: '¿Cuánto cuesta implementar un agente de IA?',
        content:
          'El costo varía según la complejidad del proceso y los sistemas involucrados. Un agente enfocado en un único proceso con integraciones estándar (CRM, email) representa una inversión menor a un recurso humano de tiempo parcial. El ROI se mide en horas liberadas y velocidad de respuesta al cliente.',
      },
    ],
  },
  {
    slug: 'que-es-rag-y-para-que-sirve',
    title: '¿Qué es RAG en inteligencia artificial? Guía para empresas',
    description:
      'Todo lo que necesitás saber sobre RAG (Retrieval-Augmented Generation): qué es, cómo funciona y cómo puede potenciar el conocimiento interno de tu empresa.',
    keywords: [
      'qué es RAG inteligencia artificial',
      'RAG para empresas LATAM',
      'base de conocimiento con IA',
    ],
    relatedServiceSlug: 'automatizacion-de-procesos',
    sections: [
      {
        heading: '¿Qué es RAG?',
        content:
          'RAG (Retrieval-Augmented Generation) es una técnica que combina búsqueda semántica con generación de texto. En lugar de que el modelo de IA genere respuestas solo con lo que "aprendió" en su entrenamiento, primero busca información relevante en tus documentos y luego genera la respuesta basándose en lo que encontró. Resultado: respuestas precisas y verificables, no inventadas.',
      },
      {
        heading: '¿Por qué importa para tu empresa?',
        content:
          'Cada empresa tiene conocimiento interno único: manuales operativos, políticas, historiales de clientes, catálogos de productos, contratos. Ese conocimiento existe en archivos dispersos que nadie consulta rápidamente. RAG convierte esa información en un sistema consultable en lenguaje natural, disponible para tu equipo y tus sistemas en tiempo real.',
      },
      {
        heading: '¿Qué tipos de documentos puede procesar?',
        content:
          'PDFs, documentos Word y Excel, páginas web, bases de datos SQL, espacios de Notion y Confluence, Google Drive y emails. El sistema incluye sincronización automática para que la base de conocimiento refleje siempre la versión más actualizada de tus documentos.',
      },
      {
        heading: '¿Cómo evita las "alucinaciones"?',
        content:
          'Cada respuesta incluye las fuentes exactas usadas para generarla. Si el sistema no encuentra información relevante en tus documentos, responde "no encontrado" en lugar de inventar. Los umbrales de confianza son configurables según el nivel de riesgo del caso de uso.',
      },
    ],
  },
  {
    slug: 'como-escalar-ia-en-tu-empresa',
    title: 'Cómo escalar IA en tu empresa sin perder el control',
    description:
      'Guía para empresas que ya tienen proyectos de IA funcionando y necesitan pasar de prototipo a sistema productivo confiable.',
    keywords: [
      'escalar inteligencia artificial en empresa',
      'AI Ops para PyMEs LATAM',
      'infraestructura IA producción',
    ],
    relatedServiceSlug: 'automatizacion-de-procesos',
    sections: [
      {
        heading: '¿Por qué los proyectos de IA no escalan solos?',
        content:
          'Un prototipo de IA puede funcionar bien en las primeras semanas, pero escalar trae problemas que no existían: costos de API que crecen sin control, respuestas que degradan cuando cambia el contexto del negocio, falta de visibilidad sobre qué hace cada sistema y equipos técnicos que no tienen tiempo de mantener todo. Escalar requiere infraestructura, no solo código.',
      },
      {
        heading: 'Los tres pilares de AI Ops',
        content:
          'Observabilidad: saber qué hace cada sistema, cuánto cuesta y cuándo falla. Gobernanza: políticas claras sobre qué puede decidir la IA y qué requiere aprobación humana. Optimización continua: mecanismos para mejorar la calidad de respuestas con el tiempo sin reescribir el sistema. Sin estos tres pilares, la IA es una deuda técnica disfrazada de innovación.',
      },
      {
        heading: '¿Cuándo necesitás AI Ops?',
        content:
          'Si tenés más de un sistema de IA en producción, si los costos de API son difíciles de predecir, si el equipo técnico no tiene visibilidad clara de qué falla y por qué, o si necesitás cumplir con políticas de auditoría o privacidad de datos, es el momento de pensar en infraestructura. Antes de agregar más proyectos, hay que hacer que los actuales sean confiables.',
      },
      {
        heading: '¿Por dónde empezar?',
        content:
          'El primer paso es un diagnóstico del stack actual: qué sistemas están en producción, qué datos procesan, cuáles son los puntos de falla conocidos y qué gaps de observabilidad existen. Con ese mapa claro, se puede priorizar qué resolver primero sin interrumpir lo que ya funciona.',
      },
    ],
  },
]

export const getResourceBySlug = (slug: string): ResourceConfig | undefined =>
  resourcesConfig.find((r) => r.slug === slug)
