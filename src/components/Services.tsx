import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Layout, 
  Cpu, 
  Search, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { trackServiceInterest, trackCTAClick } from '../lib/analytics';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('build');

  const iconMap: Record<string, React.ElementType> = {
    Layout,
    Cpu,
    Search,
    TrendingUp,
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#f8faff] border-t border-slate-200/80">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Comprehensive Digital Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
              ONE DIGITAL PARTNER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                FOUR GROWTH SYSTEMS.
              </span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            From the core frontend architecture to autonomous AI operations and continuous organic discovery, we deliver an integrated growth machine.
          </p>
        </div>

        {/* Editorial Horizontal Panels Layout */}
        <div className="space-y-4">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Layout;
            const isOpen = activeTab === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`group cursor-pointer rounded-2xl transition-all duration-500 overflow-hidden border ${
                  isOpen
                    ? 'bg-white border-blue-500/50 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.12)]'
                    : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                {/* Main Panel Banner */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono tracking-widest text-blue-600 font-bold uppercase">
                          {service.tag}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-mono text-slate-500">
                          {service.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-display mt-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        trackServiceInterest(service.title);
                        trackCTAClick(`Inquire System: ${service.tag}`, 'services_panel');
                        onSelectService(service.title);
                      }}
                      className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-blue-600 hover:text-white border border-slate-200 transition-colors"
                    >
                      <span>Inquire This System</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-transform duration-300 ${isOpen ? 'rotate-90 text-blue-600 border-blue-400' : ''}`}>
                      →
                    </div>
                  </div>

                </div>

                {/* Expanded Drawer Content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 animate-in fade-in duration-300">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                      {service.summary}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-slate-100">
                      
                      {/* Left: What We Deliver (7 cols) */}
                      <div className="lg:col-span-7">
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2 font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>Specialized Services Included</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.items.map((item) => (
                            <div 
                              key={item}
                              className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-sm text-slate-800 flex items-center gap-2.5 hover:bg-white hover:border-slate-300 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Engineered Deliverables (5 cols) */}
                      <div className="lg:col-span-5 bg-blue-50/40 p-5 rounded-2xl border border-blue-100 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold mb-3">
                            Engineered Standards
                          </div>
                          <ul className="space-y-2.5">
                            {service.deliverables.map((del) => (
                              <li key={del} className="flex items-start gap-2.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="font-medium">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-500 font-medium">Custom Scope & Timeline</span>
                          <button
                            onClick={() => {
                              trackServiceInterest(service.title);
                              trackCTAClick(`Start Project With ${service.tag}`, 'services_drawer');
                              onSelectService(service.title);
                            }}
                            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800"
                          >
                            <span>Start Project With {service.tag} →</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
