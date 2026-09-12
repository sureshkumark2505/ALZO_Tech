import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Globe, 
  CheckCircle, 
  Eye, 
  Target 
} from 'lucide-react';

export const VisibilitySection: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleQueries = [
    'top enterprise web engineering & automation partner',
    'bilingual inventory pos system for retail store',
    'automated whatsapp lead qualification system',
    'high performance headless digital commerce'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQueryIndex((prev) => (prev + 1) % sampleQueries.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [sampleQueries.length]);

  return (
    <section className="relative py-24 md:py-32 bg-white border-t border-slate-200/80 overflow-hidden">
      
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
            <Eye className="w-3.5 h-3.5 text-indigo-600" />
            Organic Search & Maps Dominance
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
            BE SEEN BY THE PEOPLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              LOOKING FOR YOU.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            High-intent buyers search with specific commercial queries every single hour. We position your platforms directly in their path with optimized technical SEO and hyper-local discovery.
          </p>
        </div>

        {/* Abstract Search & Discovery Radar Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Simulated Google Search & Maps Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#f8faff] border border-slate-200/90 p-6 sm:p-8 shadow-xl">
            
            {/* Search Bar Visual */}
            <div className="relative mb-6">
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-blue-300 shadow-sm">
                <Search className="w-5 h-5 text-blue-600 animate-pulse" />
                <div className="text-xs sm:text-sm font-mono text-slate-900 font-semibold flex-1 truncate">
                  {sampleQueries[activeQueryIndex]}
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-bold">
                  SEARCH
                </span>
              </div>
            </div>

            {/* Ranking Results Architecture */}
            <div className="space-y-4">
              
              {/* Result 1: Google Maps Local 3-Pack Highlight */}
              <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-bold">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>GOOGLE MAPS LOCAL 3-PACK • #1 POSITION</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    VERIFIED AUTHORITY
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  ALZO Tech Client Partner Flagship
                </h4>
                <div className="text-xs text-amber-600 flex items-center gap-2 mt-1 font-semibold">
                  <span>★★★★★ 5.0 Rating</span>
                  <span className="text-slate-500 font-normal">• High Click-Through Authority</span>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Fully verified Google Business Profile with structured schema, hyper-local geotags, and automated customer review generation.
                </p>
              </div>

              {/* Result 2: Organic Search Ranking */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-[10px] font-mono text-slate-500 mb-1 font-semibold">ORGANIC RESULT #1 • SUB-SECOND SPEED</div>
                <div className="text-sm font-bold text-blue-600 font-display">
                  https://partner-brand.com/solutions
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Engineered with semantic HTML5, fast server-side rendering, and high-relevance keyword architecture.
                </div>
              </div>

            </div>

          </div>

          {/* Right: 4 Discovery Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 text-blue-700 font-bold font-display text-sm mb-1">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Hyper-Local SEO Strategy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capturing commercial queries in specific physical geographies, driving calls and foot traffic directly into your store or office.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-indigo-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 text-indigo-700 font-bold font-display text-sm mb-1">
                <Globe className="w-4 h-4 text-indigo-600" />
                <span>Google Business Profile Optimization</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete profile audits, accurate category mapping, keyword-dense service catalogues, and continuous photo updates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-violet-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 text-violet-700 font-bold font-display text-sm mb-1">
                <CheckCircle className="w-4 h-4 text-violet-600" />
                <span>Technical Schema & Indexing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean JSON-LD breadcrumbs, Organization schema, FAQ markup, and zero-warning index coverage in Google Search Console.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
