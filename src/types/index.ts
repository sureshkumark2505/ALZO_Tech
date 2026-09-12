export interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  items: string[];
  deliverables: string[];
  gradient: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  link?: string;
  accentGradient: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  timeline: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  keyTakeaway: string;
}

export interface WhyPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
