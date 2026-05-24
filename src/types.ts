export interface ServicePillar {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  techStack: string[];
  targetAudience: "public" | "private" | "both";
  iconName: string;
}

export interface ValuePoint {
  title: string;
  description: string;
  scientificRigor: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  entityName?: string;
  entityType: "municipio" | "empresa" | "particular";
  serviceInterest: "gestion" | "software" | "seguridad" | "consultoria";
  message: string;
  createdAt: string;
}
