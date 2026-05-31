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
      "Soluciones confiables y validadas con altos estándares de precisión en el procesamiento y modelado de datos."
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
    title: "Alta Ingeniería & Maestría en CS",
    description: "Diseñamos sistemas de software robustos bajo estándares de nivel enterprise. Gracias a una formación avanzada con estudios de Maestría en Ciencias de la Computación, estructuramos arquitecturas altamente eficientes, seguras y preparadas para la escalabilidad.",
    scientificRigor: "No dejamos el rendimiento al azar. Cada base de datos y componente se somete a rigurosas evaluaciones de eficiencia de carga y rendimiento, asegurando un funcionamiento veloz ante escenarios reales de alta demanda tecnológica."
  },
  {
    title: "Optimización & Automatización Logística",
    description: "Desarrollamos algoritmos a la medida y workflows de automatización para resolver de forma inteligente problemas de distribución de recursos, control de flotas logísticas y asignación de tareas críticas.",
    scientificRigor: "Diseñamos modelos automatizados que permiten hallar soluciones eficientes ante rutas de transporte complejas y programaciones de horarios exigentes, reduciendo tiempos de procesamiento y costos operativos en tu organización."
  },
  {
    title: "Código Limpio y Propiedad del Cliente",
    description: "Creemos firmemente en soluciones de software transparentes, libres de dependencias y de propiedad directa del cliente. Entregamos arquitecturas modulares y legibles bajo el respaldo de un Ingeniero de Sistemas e Informática Colegiado.",
    scientificRigor: "Separamos responsabilidades lógicas e implementamos patrones de código sencillos de auditar, lo cual minimiza drásticamente los costos de soporte preventivo y facilita la evolución del sistema a largo plazo."
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

export const projectsData: import('./types').Project[] = [
  {
    id: "mercados",
    title: "Sistema de Gestión de Mercados",
    client: "Gobiernos Locales / Privados",
    description: "Plataforma integral para la administración financiera, control de puestos, recaudación de arbitrios/pagos y gestión de comerciantes. Permite digitalizar y transparentar el control de los mercados municipales o privados.",
    features: [
      "Control de padrón de comerciantes y puestos",
      "Emisión y seguimiento de recibos de pago",
      "Reportes de recaudación en tiempo real",
      "Gestión de deudas y notificaciones"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
    imagePlaceholder: "bg-blue-600",
    colorAccents: "text-blue-600 bg-blue-50 border-blue-200"
  },
  {
    id: "cementerios",
    title: "Sistema Integrado de Cementerios",
    client: "Beneficencias y Municipios",
    description: "Software especializado en la gestión de sepelios, ubicación de nichos, control de pagos por mantenimiento y emisión de constancias. Moderniza el registro histórico y facilita la búsqueda para los ciudadanos.",
    features: [
      "Mapa interactivo o registro de pabellones",
      "Historial clínico/actas de defunción",
      "Facturación y control de servicios funerarios",
      "Búsqueda rápida de difuntos"
    ],
    techStack: ["Angular", "PHP", "MySQL", "TailwindCSS"],
    imagePlaceholder: "bg-indigo-700",
    colorAccents: "text-indigo-700 bg-indigo-50 border-indigo-200"
  },
  {
    id: "citas_medicas",
    title: "Sistema de Citas Médicas y Clínicas",
    client: "Centros de Salud y Consultorios",
    description: "Plataforma para la gestión integral de historias clínicas, programación de citas, telemedicina y control de farmacia. Optimiza el tiempo de atención y mejora la experiencia del paciente.",
    features: [
      "Agenda médica interactiva por especialidad",
      "Historia clínica electrónica (HCE) estandarizada",
      "Recordatorios automáticos vía WhatsApp/Email",
      "Módulo de facturación y recetas médicas"
    ],
    techStack: ["React", "Node.js", "MongoDB", "WebRTC"],
    imagePlaceholder: "bg-teal-600",
    colorAccents: "text-teal-700 bg-teal-50 border-teal-200"
  },
  {
    id: "transporte",
    title: "Sistema de Gestión de Transporte",
    client: "Empresas de Logística y Transporte",
    description: "Software diseñado para el control de flotas, seguimiento de rutas, gestión de encomiendas y venta de pasajes. Permite tener trazabilidad completa de las operaciones logísticas y financieras.",
    features: [
      "Venta de pasajes con selección de asientos",
      "Seguimiento GPS y control de rutas/manifiestos",
      "Gestión de encomiendas y paquetería",
      "Mantenimiento vehicular y control de combustible"
    ],
    techStack: ["Vue.js", "Laravel", "PostgreSQL", "Google Maps API"],
    imagePlaceholder: "bg-amber-600",
    colorAccents: "text-amber-700 bg-amber-50 border-amber-200"
  },
  {
    id: "otros",
    title: "Desarrollo a Medida",
    client: "Empresas en General",
    description: "Sistemas adaptados a las reglas de negocio específicas de tu organización, asegurando alta disponibilidad, seguridad y una experiencia de usuario moderna e intuitiva.",
    features: [
      "Arquitecturas escalables y seguras",
      "Integración con APIs de terceros (Facturación, Reniec)",
      "Análisis de datos y Dashboards gerenciales",
      "Soporte continuo y mantenimiento"
    ],
    techStack: ["Python", "AWS", "Docker", "TypeScript"],
    imagePlaceholder: "bg-slate-800",
    colorAccents: "text-slate-800 bg-slate-100 border-slate-300"
  }
];
