import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'build',
    number: '01',
    tag: 'BUILD',
    title: 'Websites & Digital Experiences',
    subtitle: 'High-Performance Foundations',
    summary: 'We engineer bespoke digital platforms that represent your brand with authority, load in milliseconds, and guide visitors toward clear business actions.',
    items: [
      'Business Websites',
      'E-Commerce Websites',
      'High-Conversion Landing Pages',
      'Custom Web Applications',
      'UI/UX Architecture & Prototyping',
      'Website Modernization & Redesign',
      'Continuous Performance Maintenance'
    ],
    deliverables: [
      'Sub-second Core Web Vitals',
      'Mobile-first responsive architecture',
      'Enterprise security & scalability',
      'Bespoke visual identity integration'
    ],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    iconName: 'Layout'
  },
  {
    id: 'automate',
    number: '02',
    tag: 'AUTOMATE',
    title: 'AI & Business Automation',
    subtitle: 'Intelligent Operations Engine',
    summary: 'Eliminate repetitive friction. We construct automated workflows and custom AI agents that respond instantly, qualify leads 24/7, and synchronize your data.',
    items: [
      'Autonomous AI Chatbots',
      'WhatsApp Business Automation',
      'Zero-Touch Lead Capture & Qualification',
      'Cross-Platform Workflow Automation',
      'Automated Customer Follow-Up Sequences',
      'Custom AI-Powered Data Solutions',
      'Internal Business Process Streamlining'
    ],
    deliverables: [
      '24/7 autonomous customer triage',
      'Zero lead leakage guarantee',
      'Instant WhatsApp CRM sync',
      'Drastic reduction in manual overhead'
    ],
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    iconName: 'Cpu'
  },
  {
    id: 'get-found',
    number: '03',
    tag: 'GET FOUND',
    title: 'Visibility & Online Presence',
    subtitle: 'Dominant Organic Discovery',
    summary: 'Put your business directly in front of buyers actively looking for what you offer. We optimize technical search architecture and hyper-local discovery.',
    items: [
      'Technical & On-Page SEO',
      'Hyper-Local SEO Dominance',
      'Google Business Profile Optimization',
      'Google Maps Ranking Enhancement',
      'Reputation & Review Authority',
      'High-Intent Keyword Architecture',
      'Comprehensive Competitor Reconnaissance'
    ],
    deliverables: [
      'Top-3 Google Maps Local Pack placement',
      'High-intent organic keyword footprint',
      'Structured schema markup verification',
      'Monthly discovery telemetry reporting'
    ],
    gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    iconName: 'Search'
  },
  {
    id: 'grow',
    number: '04',
    tag: 'GROW',
    title: 'Marketing & Growth Solutions',
    subtitle: 'Predictable Revenue Scale',
    summary: 'Turn digital momentum into compounding business revenue. We build targeted customer acquisition funnels, conversion loops, and transparent analytics.',
    items: [
      'Targeted Meta & Social Advertising',
      'High-Intent Lead Generation Campaigns',
      'Omnichannel Social Media Strategy',
      'Conversion Rate Optimization (CRO)',
      'Performance Acquisition Funnels',
      'Unified Analytics & Executive Reporting',
      'Full-Funnel Digital Growth Strategy'
    ],
    deliverables: [
      'Measurable return on advertising spend',
      'Continuous A/B split-testing framework',
      'Executive performance dashboards',
      'Compounding conversion efficiency'
    ],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    iconName: 'TrendingUp'
  }
];
