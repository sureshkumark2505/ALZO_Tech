import React from 'react';
import { Globe, Cpu, Search, TrendingUp, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      title: 'WEB & E-COMMERCE',
      desc: 'High-Performance Flagships',
      icon: Globe,
      color: 'text-sky-600 bg-sky-50 border-sky-100',
      border: 'hover:border-sky-300',
    },
    {
      title: 'AUTOMATION & AI',
      desc: 'Zero-Friction Workflows',
      icon: Cpu,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      border: 'hover:border-blue-300',
    },
    {
      title: 'SEO & VISIBILITY',
      desc: 'Dominant Local Footprint',
      icon: Search,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      border: 'hover:border-indigo-300',
    },
    {
      title: 'ADS & GROWTH',
      desc: 'Predictable Revenue Pipelines',
      icon: TrendingUp,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
      border: 'hover:border-violet-300',
    },
    {
      title: 'SUPPORT & CONSULTING',
      desc: 'Direct Advisory & Maintenance',
      icon: Headphones,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
      border: 'hover:border-purple-300',
    },
  ];

  return (
    <div className="relative border-y border-slate-200/80 bg-white/70 backdrop-blur-md py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile scroll indicator note */}
        <div className="md:hidden text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 text-center font-semibold">
          ← Swipe to explore growth pillars →
        </div>

        {/* Horizontal Flex / Grid */}
        <div className="flex md:grid md:grid-cols-5 items-center gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0 scroll-smooth snap-x snap-mandatory">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`flex-shrink-0 w-[240px] md:w-auto p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60 ${pillar.border} hover:bg-white hover:shadow-sm transition-all duration-300 flex items-center gap-3.5 snap-start group`}
              >
                <div className={`p-2.5 rounded-lg border ${pillar.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-slate-900 tracking-wider font-display truncate">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-500 truncate">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
