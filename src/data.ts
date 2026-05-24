import { ServicePillar } from "./types";

export const servicesData: ServicePillar[] = [
  {
    id: "gestion",
    title: "Sistemas de Gestión Web",
    shortDescription: "Aplicaciones y plataformas web a la medida diseñadas para simplificar sus procesos internos, optimizar flujos de trabajo e integrar sistemas administrativos modernos.",
    detailedDescription: "Creamos herramientas de software que adaptan la tecnología al ritmo de su organización, no al revés. Centralizamos sus bases de datos, eliminamos procesos manuales y diseñamos paneles visuales interactivos para que lidere su negocio u oficina gubernamental con decisiones respaldadas por información real y en tiempo real. Máxima seguridad, facilidad de uso e integraciones limpias de extremo a extremo.",
    benefits: [
      "Automatización inteligente de flujos internos con un impacto inmediato en la productividad diaria.",
      "Digitalización y trazabilidad integral para flujos rápidos de aprobación documental.",
      "Sistemas seguros y auditables bajo esquemas de firmas digitales y control granular de accesos.",
      "Arquitecturas modernas preparadas para conectarse con servicios del Estado u otras API del sector empresarial."
    ],
    techStack: ["React & TypeScript", "Angular", "PHP", "Node.js (Express)", "Java", "PostgreSQL", "MySQL", "Docker", "RESTful APIs", "Workflow Automation"],
    targetAudience: "both",
    iconName: "FileText"
  },
  {
    id: "software",
    title: "Ciencia de Datos & Software a Medida",
    shortDescription: "Traducimos datos complejos en decisiones sencillas a través de modelos predictivos avanzados, análisis de datos interactivo y software inteligente.",
    detailedDescription: "Cada negocio se rige bajo reglas únicas. Por ello, diseñamos e implementamos modelos analíticos personalizados y soluciones de software hechas a la medida, apoyadas en el rigor matemático de la ciencia de la computación. Transformamos algoritmos sofisticados en herramientas prácticas de negocio que le permitirán anticipar escenarios y automatizar análisis de alta complejidad.",
    benefits: [
      "Modelado estadístico y predictivo diseñado para optimizar el rendimiento y detectar oportunidades clave.",
      "Visualizaciones de datos fluidas e interactivas usando librerías líderes como D3.js y Recharts.",
      "Código fuente limpio, estructurado de manera modular y completamente preparado para escalar a largo plazo.",
      "Soluciones confiables basadas en metodologías de investigación que garantizan la precisión del procesamiento de datos."
    ],
    techStack: ["Python (Pandas/Scikit-Learn)", "React & TypeScript", "D3 / Recharts", "SQL / NoSQL Databases", "Cloud Platforms (AWS/GCP)"],
    targetAudience: "private",
    iconName: "Code"
  },
  {
    id: "seguridad",
    title: "Infraestructura de Redes & Cloud",
    shortDescription: "Diseño e implementación de redes unificadas Ubiquiti para alto tráfico y servidores locales o virtuales de alta disponibilidad.",
    detailedDescription: "Diseñamos y desplegamos infraestructuras de comunicación estables y seguras preparadas para el crecimiento constante. Con tecnología Ubiquiti UniFi, logramos cobertura inalámbrica integral, establecemos canales seguros de comunicación encriptada (VPN) entre sedes físicas o nubes de almacenamiento, y optimizamos la virtualización de servidores Linux usando contenedores Docker estables y de bajo consumo.",
    benefits: [
      "Planificación y despliegue de redes corporativas fluidas y de gran cobertura con equipos Ubiquiti.",
      "Enlaces encriptados seguros para interconectar oficinas comerciales o sedes gubernamentales de forma confidencial.",
      "Configuración y administración de entornos sobre sistemas operativos robustos tipo Debian y Ubuntu.",
      "Seguimiento y auditoría de tráfico para predecir saturaciones y mantener la continuidad del servicio las 24 horas."
    ],
    techStack: ["Ubiquiti UniFi", "Docker Containers", "Debian/Ubuntu Server", "IPSec VPNs", "Network Automation", "Cloud Deployment"],
    targetAudience: "public",
    iconName: "Shield"
  }
];

export const valueProps = [
  {
    title: "Fundamentos Científicos Sólidos",
    description: "Abordamos la ingeniería de software como una ciencia exacta, no como un proceso de improvisación. Gracias a una formación focalizada sobre ciencias de la computación avanzadas, estructuramos sistemas bajo estándares y metodologías de investigación internacionales.",
    scientificRigor: "No dejamos el rendimiento al azar. Cada base de datos, componente o modelo predictivo se somete a evaluaciones algorítmicas de eficiencia temporal y espacial, asegurando un funcionamiento rápido ante escenarios reales de alta concurrencia tecnológica."
  },
  {
    title: "Optimización Inteligente por Algoritmos",
    description: "A través de nuestra línea de investigación orientada al desarrollo de algoritmos de optimización (incluyendo Computación Evolutiva y Algoritmos Genéticos), resolvemos problemas logísticos, de distribución de recursos y asignación de tareas con alta eficiencia computacional.",
    scientificRigor: "Diseñamos y simulamos modelos que permiten hallar alternativas óptimas ante rutas de transporte complejas, programaciones de horarios u otras necesidades empresariales críticas donde los métodos ordinarios de programación demorarían horas en hallar soluciones."
  },
  {
    title: "Calidad de Entregables y Transparencia Gremial",
    description: "Creemos firmemente en soluciones informáticas claras, libres de dependencias y de propiedad directa del cliente. Entregamos arquitecturas de software legibles, modulares, debidamente certificadas y acompañadas por el respaldo ético que distingue a un Ingeniero de Sistemas e Informática Colegiado.",
    scientificRigor: "Diseñamos separando responsabilidades lógicas e implementando patrones de código sencillos de auditar, lo cual minimiza los costos de soporte preventivo y facilita la evolución del sistema a manos de cualquier equipo técnico."
  }
];

export const projectDiagnostics = [
  {
    id: "muni",
    title: "Enfoque para Gestión Pública e Instituciones",
    subtitle: "Soluciones de transparencia administrativa, simplificación de atención al usuario e interconexión de sedes físicas.",
    recommendation: "Se propone el desarrollo de un Sistema de Administración Web a la medida con módulos para la toma de decisiones, complementado con la centralización de infraestructura Ubiquiti para unificar el enlace inalámbrico de las sedes externas.",
    accent: "Portales de Gestión y Redes Críticas",
    benefits: ["Transparencia y control", "Interconexión inalámbrica robusta", "Trazabilidad de flujos de trabajo"]
  },
  {
    id: "pyme",
    title: "Enfoque Corporativo, Ciencia de Datos o Infraestructura",
    subtitle: "Desarrollo de software centrado en alta concurrencia transaccional, automatización comercial y tableros interactivos de datos.",
    recommendation: "Es recomendable desplegar una plataforma robusta React-TypeScript conectada con arquitecturas de nube eficientes (como contenedores dockerizados sobre Linux), vinculando tableros analíticos en tiempo real para un control minucioso de sus operaciones comerciales.",
    accent: "Ciencia de Datos y Plataformas Escalables",
    benefits: ["Auditoría continua de procesos", "Decisiones guiadas por analítica", "Escalabilidad de bases de datos"]
  }
];
