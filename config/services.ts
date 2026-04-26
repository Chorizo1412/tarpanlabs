import type { ServiceConfig } from '@/lib/types'

export const servicesConfig: ServiceConfig[] = [
  {
    slug: 'chatbots-inteligencia-artificial',
    name: 'Chatbots con IA',
    icon: '◉',
    shortDescription:
      'Responde como lo haría tu experto más experimentado. A cualquier hora, sin que el cliente note la diferencia.',
    fullDescription:
      'Un chatbot mal hecho suena a bot. El nuestro no. Desarrollamos asistentes conversacionales que responden como lo haría tu mejor agente de atención — con el tono, el criterio y la información de tu empresa. ' +
      'Entrenamos el chatbot con la información real de tu negocio: productos, procesos, preguntas frecuentes, políticas. El resultado es un asistente que entiende el contexto, mantiene conversaciones coherentes y escala al equipo humano solo cuando la situación lo requiere.',
    keywords: [
      'chatbot con inteligencia artificial para empresas',
      'chatbot WhatsApp para negocios LATAM',
      'asistente virtual con IA para atención al cliente',
      'chatbot entrenado con datos de mi empresa',
    ],
    faqs: [
      {
        question: '¿En qué casos tiene sentido implementar un chatbot?',
        answer:
          'Cuando el equipo pierde horas respondiendo siempre las mismas consultas, los clientes escriben fuera del horario de atención, hay leads que no se atienden a tiempo o las respuestas del equipo no son siempre consistentes. Si alguno de estos casos describe tu empresa, un chatbot puede resolverlo.',
      },
      {
        question: '¿El cliente nota que está hablando con un sistema automatizado?',
        answer:
          'No, si está bien entrenado. Entrenamos el chatbot con el tono, el vocabulario y la información específica de tu empresa. El objetivo es que responda como tu mejor agente, no como un bot genérico.',
      },
      {
        question: '¿Dónde se puede integrar el chatbot?',
        answer:
          'En WhatsApp Business, en tu sitio web, o en ambos. El entrenamiento incluye integración con tu plataforma de gestión y un panel para que el equipo vea todas las conversaciones.',
      },
      {
        question: '¿Cuánto tiempo tarda en estar listo?',
        answer:
          'En 3 a 4 semanas el chatbot está entrenado, integrado y funcionando. El proceso incluye análisis de tus consultas más frecuentes, entrenamiento con tu información y pruebas con escenarios reales antes de salir en vivo.',
      },
    ],
  },
  {
    slug: 'automatizacion-de-procesos',
    name: 'Automatizaciones',
    icon: '◈',
    shortDescription:
      'El tiempo que tu equipo gasta en tareas repetitivas es tiempo que no están dedicando a vender. Lo identificamos y lo automatizamos.',
    fullDescription:
      'Identificamos los procesos manuales que más tiempo y recursos consumen en tu empresa y los automatizamos usando inteligencia artificial e integraciones entre sistemas. ' +
      'El resultado es un equipo que trabaja menos en tareas operativas y más en hacer crecer el negocio. Trabajamos con las herramientas que ya usás: CRMs, ERPs, hojas de cálculo, plataformas de ecommerce.',
    keywords: [
      'automatización de procesos con IA para empresas',
      'automatización de tareas repetitivas LATAM',
      'integración de sistemas con inteligencia artificial',
      'n8n automatización para PyMEs',
    ],
    faqs: [
      {
        question: '¿Qué tipo de procesos se pueden automatizar?',
        answer:
          'Cualquier proceso que sigue un patrón claro: carga de datos entre plataformas, envío de emails según acciones del cliente, generación de reportes periódicos, seguimiento de leads, facturación y actualizaciones de inventario. Si alguien lo hace manualmente siguiendo reglas definidas, se puede automatizar.',
      },
      {
        question: '¿Necesito cambiar los sistemas que ya uso?',
        answer:
          'No. Trabajamos con las herramientas que ya tenés: CRMs, ERPs, hojas de cálculo, plataformas de ecommerce. La automatización conecta lo que ya usás, no lo reemplaza.',
      },
      {
        question: '¿Cómo sé si un proceso vale la pena automatizar?',
        answer:
          'Si alguien en tu empresa hace la misma tarea todos los días y esa tarea sigue siempre las mismas reglas, se puede automatizar. El criterio de negocio es simple: cuánto tiempo se pierde en esa tarea multiplicado por el costo hora de quien la hace.',
      },
      {
        question: '¿Qué pasa si algo falla en la automatización?',
        answer:
          'Configuramos alertas y monitoreamos los flujos en las primeras semanas de operación. Si algo falla, el sistema avisa y el equipo puede intervenir. Documentamos todo para que cualquier persona pueda entender qué está pasando.',
      },
    ],
  },
  {
    slug: 'desarrollo-web',
    name: 'Desarrollo Web',
    icon: '◇',
    shortDescription:
      'Sitios rápidos, optimizados para Google y preparados para aparecer en búsquedas de IA como ChatGPT o Gemini.',
    fullDescription:
      'Un sitio web que no aparece en Google, carga lento o no convierte visitas en clientes no es un activo — es un costo. Lo construimos bien desde el principio. ' +
      'Desarrollamos sitios web rápidos, técnicamente sólidos y optimizados para posicionarse en buscadores y en herramientas de IA como ChatGPT y Perplexity. Diseñados para convertir, no solo para verse bien.',
    keywords: [
      'desarrollo web profesional para empresas LATAM',
      'sitio web optimizado para Google',
      'desarrollo Next.js para empresas',
      'diseño web que convierte en Argentina',
    ],
    faqs: [
      {
        question: '¿Por qué mi sitio actual no aparece en Google?',
        answer:
          'Las razones más comunes son velocidad lenta (Google penaliza sitios que cargan más de 3 segundos), estructura técnica incorrecta, falta de contenido indexable o configuración de rastreo bloqueada. La auditoría previa al desarrollo identifica exactamente cuál es el problema.',
      },
      {
        question: '¿Puedo actualizar el contenido del sitio sin depender de un programador?',
        answer:
          'Sí. Todos los sitios que construimos incluyen un sistema de gestión de contenido para que el equipo pueda actualizar textos, imágenes y páginas sin tocar código.',
      },
      {
        question: '¿Qué diferencia un sitio bien hecho de uno mal hecho?',
        answer:
          'Velocidad de carga (Core Web Vitals aprobados), estructura semántica correcta para buscadores, código limpio que se puede escalar y diseño que guía al visitante hacia la conversión. No se trata solo de que se vea bien.',
      },
      {
        question: '¿Cuánto tiempo tarda el desarrollo?',
        answer:
          'Un sitio corporativo completo está listo en 4 a 6 semanas. El proceso incluye definición de arquitectura, diseño, desarrollo, optimización de velocidad y configuración de hosting y DNS.',
      },
    ],
  },
  {
    slug: 'auditoria-seo',
    name: 'Auditoría SEO y GEO',
    icon: '◆',
    shortDescription:
      '¿Tu producto no aparece en Google ni en herramientas de IA? Auditamos tu sitio y te entregamos pasos concretos para solucionarlo.',
    fullDescription:
      'En 2026, aparecer en los resultados de búsqueda significa aparecer tanto en Google como en las respuestas que generan herramientas de IA como ChatGPT, Perplexity o Google AI Overview. La auditoría cubre ambos frentes. ' +
      'Analizamos el estado técnico y de contenido de tu sitio e identificamos qué impide que aparezca donde tiene que aparecer. Entregamos un plan de acción priorizado — no una lista interminable de problemas sin solución.',
    keywords: [
      'auditoría SEO para empresas LATAM',
      'por qué no aparezco en Google',
      'SEO técnico para sitios web Argentina',
      'optimización para ChatGPT y Google AI',
    ],
    faqs: [
      {
        question: '¿Por qué mi sitio no aparece en Google aunque existe hace años?',
        answer:
          'Las razones son muchas y pueden estar en cualquier capa: técnica (velocidad, estructura de URLs, indexación), contenido (falta de páginas para las palabras clave correctas) o autoridad (pocos sitios de calidad enlazando al tuyo). La auditoría identifica cuál es el problema real, no los síntomas.',
      },
      {
        question: '¿Qué tiene que ver ChatGPT con el SEO de mi empresa?',
        answer:
          'Una parte creciente de las búsquedas se resuelven con herramientas de IA. Aparecer ahí requiere una optimización adicional (GEO/AEO) que la auditoría también cubre. Si tu competencia aparece en las respuestas de ChatGPT y vos no, estás perdiendo visibilidad.',
      },
      {
        question: '¿Cuánto tarda la auditoría?',
        answer:
          'El informe está listo en 5 a 7 días hábiles desde que recibimos acceso a Google Search Console y Analytics. Incluye hallazgos críticos y un plan de acción priorizado por impacto.',
      },
      {
        question: '¿La auditoría incluye recomendaciones o solo el diagnóstico?',
        answer:
          'Incluye ambos. Entregamos un informe ejecutivo con todos los hallazgos y un plan de acción con recomendaciones concretas. Para cada problema identificado, hay una solución específica.',
      },
    ],
  },
  {
    slug: 'auditoria-publicidad-digital',
    name: 'Auditoría de Anuncios',
    icon: '◑',
    shortDescription:
      '¿Inviertes en publicidad pero no lo ves reflejado en ventas? Auditamos tus campañas y te decimos exactamente dónde se está yendo el dinero y cómo solucionarlo.',
    fullDescription:
      'Auditamos las campañas activas en Google Ads, Meta Ads o ambas. Identificamos ineficiencias, segmentaciones incorrectas, creatividades que no funcionan y configuraciones que desperdician presupuesto. ' +
      'Entregamos un diagnóstico claro y recomendaciones concretas. No tocamos ni modificamos nada durante el proceso — solo analizamos con acceso de lectura.',
    keywords: [
      'auditoría de publicidad digital LATAM',
      'auditoría Google Ads y Meta Ads',
      'por qué no funcionan mis anuncios',
      'análisis de campañas digitales Argentina',
    ],
    faqs: [
      {
        question: '¿Cómo sé si mi agencia está usando bien el presupuesto?',
        answer:
          'Los síntomas más claros son: el costo por lead sigue subiendo, los reportes que recibís no tienen métricas útiles, no podés ver en detalle a qué audiencias van los anuncios, o los resultados simplemente no justifican la inversión.',
      },
      {
        question: '¿La auditoría afecta las campañas activas?',
        answer:
          'No. Solicitamos acceso de solo lectura a las cuentas. No tocamos ni modificamos nada durante el proceso de auditoría. Las campañas siguen corriendo exactamente igual.',
      },
      {
        question: '¿Qué pasa si los resultados confirman que la agencia está haciendo bien su trabajo?',
        answer:
          'Lo decimos exactamente así. No vendemos recomendaciones inventadas. Si las campañas están bien configuradas, el informe va a mostrar por qué los resultados son los que son y qué otras variables pueden estar afectando la performance.',
      },
      {
        question: '¿Cuánto tarda la auditoría?',
        answer:
          'El informe está listo en 4 a 6 días hábiles desde que recibimos acceso a las cuentas de Google Ads y/o Meta Ads.',
      },
    ],
  },
  {
    slug: 'desarrollo-saas',
    name: 'Desarrollo de Software a Medida',
    icon: '⬡',
    shortDescription:
      'Si ninguna herramienta del mercado resuelve lo que necesitas, la construimos. Soluciones a medida, en semanas.',
    fullDescription:
      'Desarrollamos aplicaciones web y plataformas diseñadas para los procesos específicos de tu negocio. Sin funcionalidades que no usás, sin adaptaciones forzadas a herramientas genéricas. ' +
      'Definimos el alcance exacto antes de escribir una línea de código. Desarrollamos en ciclos cortos con entregas funcionales para que veas el progreso real. El código fuente es tuyo.',
    keywords: [
      'desarrollo de software a medida para empresas',
      'desarrollo SaaS LATAM',
      'aplicaciones web personalizadas Argentina',
      'herramienta interna a medida para empresas',
    ],
    faqs: [
      {
        question: '¿Cuándo tiene sentido desarrollar software a medida?',
        answer:
          'Cuando las herramientas del mercado no cubren un proceso clave de tu negocio, cuando usás tres o cuatro plataformas para hacer algo que podría estar en una sola, o cuando querés convertir un proceso propio en un producto digital.',
      },
      {
        question: '¿Quedo atado a ustedes después de que el software está listo?',
        answer:
          'No. Entregamos el código fuente completo, documentación técnica y documentación de usuario. Cualquier equipo técnico puede entender, mantener y modificar el sistema sin depender de nosotros.',
      },
      {
        question: '¿Cómo funciona el proceso de desarrollo?',
        answer:
          'Primero definimos el alcance exacto: qué hace, qué no hace, con qué se integra. Después diseñamos la arquitectura antes de escribir código. Desarrollamos en ciclos cortos con entregas funcionales cada 1-2 semanas para que veas el progreso real.',
      },
      {
        question: '¿Qué tipos de aplicaciones desarrollan?',
        answer:
          'Aplicaciones web, portales internos, plataformas SaaS, herramientas de gestión, dashboards y cualquier sistema que necesite integrarse con servicios externos. Si lo podés describir, lo podemos construir.',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceConfig | undefined =>
  servicesConfig.find((s) => s.slug === slug)
