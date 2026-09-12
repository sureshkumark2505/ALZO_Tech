import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { 
  ArrowUpRight, 
  Sparkles, 
  Bot, 
  Layers, 
  ShoppingBag, 
  CheckCircle2, 
  Terminal, 
  Eye 
} from 'lucide-react';

interface PortfolioProps {
  onOpenCaseStudy: (cs: CaseStudy) => void;
  onInquire: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenCaseStudy, onInquire }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'automation' | 'web'>('all');

  const filteredProjects = portfolioData.filter((p) => {
    if (filter === 'ai') return p.category.toLowerCase().includes('ai');
    if (filter === 'automation') return p.category.toLowerCase().includes('automation') || p.category.toLowerCase().includes('operating');
    if (filter === 'web') return p.category.toLowerCase().includes('commerce') || p.category.toLowerCase().includes('web');
    return true;
  });

  return (
    <section id="work" className="relative py-28 md:py-36 bg-white border-t border-slate-200/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              Verified Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
              WORK THAT MOVES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                BUSINESSES FORWARD.
              </span>
            </h2>
          </div>
          
          {/* Category Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI Intelligence' },
              { id: 'automation', label: 'Automation & OS' },
              { id: 'web', label: 'Web & E-Commerce' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all border ${
                  filter === f.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-slate-100/80 text-slate-700 border-slate-200 hover:bg-slate-200/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {filteredProjects.map((project) => {
            const isLarge = project.featured;

            return (
              <div
                key={project.id}
                data-cursor="view"
                onClick={() => onOpenCaseStudy(project)}
                className={`group cursor-pointer rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 sm:p-8 relative ${
                  isLarge ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{project.year}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      Client: {project.client}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
                    {project.description}
                  </p>

                  {/* FormMind AI Special Showcase Dashboard Preview */}
                  {project.id === 'formmind-ai' && (
                    <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3 text-slate-600">
                        <div className="flex items-center gap-2 text-blue-700 font-bold">
                          <Bot className="w-4 h-4" />
                          <span>AI Grounded Semantic Chat Session</span>
                        </div>
                        <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                          CONNECTED • GOOGLE FORMS OAUTH
                        </span>
                      </div>
                      <div className="space-y-2.5 text-slate-700">
                        <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                          <span className="text-slate-500 font-bold">Query:</span> "What was the most recurring bottleneck reported by enterprise respondents this week?"
                        </div>
                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-950 font-medium shadow-sm">
                          <span className="text-blue-700 font-bold">FormMind AI:</span> "Based on 342 parsed responses, 64% cited 'manual reconciliation between Google Sheets and accounting software' as the primary bottleneck."
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MSME Platform Special Preview */}
                  {project.id === 'msme-platform' && (
                    <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3 text-slate-600">
                        <div className="flex items-center gap-2 text-blue-700 font-bold">
                          <Terminal className="w-4 h-4" />
                          <span>Dual-Language Retail POS & Instant WhatsApp Invoice</span>
                        </div>
                        <span className="text-[10px] text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-200 font-bold">
                          TAMIL / ENGLISH
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                        <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                          Invoice: <span className="text-slate-900 font-bold">INV-000015</span> (₹4,243.50)
                        </div>
                        <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm text-emerald-700 font-bold">
                          WhatsApp Status: Delivered Instant
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metric Chips */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                        <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">{metric.label}</div>
                        <div className="text-sm sm:text-base font-extrabold font-mono text-blue-600 mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Action Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200/80 font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-400 font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
