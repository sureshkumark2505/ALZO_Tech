import { CaseStudy } from '../types';

export const portfolioData: CaseStudy[] = [
  {
    id: 'formmind-ai',
    title: 'FormMind AI',
    client: 'Proprietary Intelligence Platform',
    category: 'AI Application & Data Intelligence',
    badge: 'FLAGSHIP AI PRODUCT',
    year: '2026',
    description: 'Transforming static form submissions into actionable conversational intelligence with automated response synthesis and natural language data querying.',
    challenge: 'Enterprises and organizations collect thousands of form responses that languish in flat spreadsheets. Teams waste hundreds of hours manually categorizing feedback, analyzing sentiments, and extracting strategic patterns.',
    solution: 'Engineered FormMind AI — an intelligent analysis engine with direct Google Forms and Microsoft Forms OAuth integration. The platform automatically cleans incoming submissions, clusters responses into structured themes, and equips administrators with a grounded AI chat interface to interrogate their survey data intuitively.',
    results: [
      'Grounded conversational queries directly over surveyed response data',
      'Automated semantic sentiment scoring and thematic categorization',
      'Instant executive PDF report generation with clean data visualizations',
      'End-to-end OAuth security with scoped read-only authorization'
    ],
    technologies: ['FastAPI', 'Python', 'Google OAuth 2.0', 'React', 'TypeScript', 'Vector Search', 'Tailwind CSS'],
    metrics: [
      { label: 'Query Latency', value: '< 650ms' },
      { label: 'Synthesis Accuracy', value: '99.4%' },
      { label: 'Manual Effort Saved', value: '85%' }
    ],
    featured: true,
    accentGradient: 'from-blue-500 via-indigo-500 to-violet-600'
  },
  {
    id: 'msme-platform',
    title: 'Divs Mart / MSME Platform',
    client: 'SME Retail Operations',
    category: 'Business Automation & Operating System',
    badge: 'OPERATIONS OS',
    year: '2026',
    description: 'A unified bilingual intelligent commerce platform empowering small businesses with instant WhatsApp receipts, voice data entry, and proactive anomaly detection.',
    challenge: 'Retail business owners and store managers face daily operational friction: slow manual billing, cumbersome Tamil/English language switching, untracked inventory depletion, and delayed customer communications.',
    solution: 'Architected a lightweight retail operating system featuring voice-activated sales logging, instant WhatsApp invoice distribution, thermal receipt generation, and an automated health algorithm that flags anomalous overhead before profit margins erode.',
    results: [
      'Zero-delay customer invoice delivery directly to WhatsApp',
      'Native dual-language interface supporting English and Tamil seamlessly',
      'Intelligent inventory alert system preventing stockout lost sales',
      'Offline-first capability resilient against intermittent connectivity'
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Web Speech API', 'Lucide'],
    metrics: [
      { label: 'Invoice Delivery', value: 'Instant' },
      { label: 'Language Support', value: 'Bilingual' },
      { label: 'Entry Speedup', value: '3.4x Faster' }
    ],
    featured: true,
    accentGradient: 'from-cyan-500 via-blue-600 to-indigo-600'
  },
  {
    id: 'nexus-commerce',
    title: 'Nexus Modern Flagship',
    client: 'Luxury Lifestyle Brand',
    category: 'High-Performance E-Commerce',
    badge: 'COMMERCE ENGINE',
    year: '2026',
    description: 'A bespoke direct-to-consumer digital flagship built for sub-second page transitions, tactile micro-interactions, and conversion-optimized checkout.',
    challenge: 'The client’s previous platform suffered from heavy script bloat, poor mobile Core Web Vitals, high checkout drop-offs, and an uninspired visual layout that failed to convey premium brand value.',
    solution: 'Designed and deployed an ultra-modern headless digital storefront with a custom geometric design system, instant edge-cached navigation, dynamic slide-over bag interactions, and frictionless one-click payment flows.',
    results: [
      'Perfect 100/100 Google Lighthouse performance score on desktop',
      'Sub-500ms initial server response via edge caching architecture',
      'Enhanced mobile checkout conversion with minimal cognitive load',
      'Dynamic inventory synchronization with real-time stock feedback'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Edge CDN', 'Framer Motion', 'Stripe'],
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Average Page Load', value: '420ms' },
      { label: 'Mobile Conversion', value: '+38%' }
    ],
    featured: false,
    accentGradient: 'from-violet-500 via-purple-500 to-pink-500'
  }
];
