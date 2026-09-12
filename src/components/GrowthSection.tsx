import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Activity, 
  ArrowUpRight, 
  Sparkles, 
  Zap 
} from 'lucide-react';

export const GrowthSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'traffic' | 'leads' | 'conversions' | 'revenue'>('conversions');

  const metricConfigs = {
    traffic: {
      label: 'Organic & High-Intent Traffic',
      value: '+310% Velocity',
      summary: 'Focusing on commercial search queries with immediate buying interest rather than vanity page views.',
      bars: [30, 42, 55, 68, 85, 110, 140],
      stat1: { label: 'Search Intent Match', val: '94.8%' },
      stat2: { label: 'Bounce Rate Reduction', val: '-38%' },
    },
    leads: {
      label: 'Qualified Inbound Leads',
      value: '24/7 Pipeline',
      summary: 'Autonomous qualification agents triage queries via WhatsApp and web forms within 60 seconds.',
      bars: [20, 35, 48, 62, 78, 95, 125],
      stat1: { label: 'Average Response Time', val: '< 1 min' },
      stat2: { label: 'Lead Contact Rate', val: '98.2%' },
    },
    conversions: {
      label: 'Conversion Rate Optimization',
      value: '2.4x Multiplier',
      summary: 'Eliminating checkout and inquiry friction through sub-second page loads and frictionless micro-interactions.',
      bars: [25, 38, 52, 65, 80, 105, 135],
      stat1: { label: 'Checkout Abandonment', val: '-44%' },
      stat2: { label: 'Mobile Conversion Lift', val: '+52%' },
    },
    revenue: {
      label: 'Compounding Commercial Scale',
      value: 'Predictable Growth',
      summary: 'Connecting high-performing digital platforms with automated nurture workflows to maximize customer lifetime value.',
      bars: [35, 50, 68, 84, 102, 124, 160],
      stat1: { label: 'Operational Time Saved', val: '120+ hrs/mo' },
      stat2: { label: 'Pipeline Predictability', val: 'High' },
    },
  };

  const current = metricConfigs[activeMetric];

  return (
    <section className="relative py-24 md:py-32 bg-[#f8faff] border-t border-slate-200/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-violet-600" />
            Performance & Analytics Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
            TURN DIGITAL ACTIVITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              INTO MEASURABLE GROWTH.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We don’t believe in vanity metrics or empty clicks. Every digital touchpoint is instrumented to prove tangible business velocity.
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[
            { id: 'conversions', label: 'Conversions (CRO)', icon: Target },
            { id: 'leads', label: 'Automated Leads', icon: Users },
            { id: 'traffic', label: 'Intent Traffic', icon: Activity },
            { id: 'revenue', label: 'Compounding Scale', icon: Zap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSel = activeMetric === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMetric(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all border ${
                  isSel
                    ? 'bg-blue-600 text-white border-blue-600 shadow-[0_4px_15px_rgba(37,99,235,0.3)]'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Analytics Display Board */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold mb-2">
                GROWTH SYSTEM TELEMETRY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-2">
                {current.label}
              </h3>
              <div className="text-xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
                {current.value}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {current.summary}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 font-semibold">{current.stat1.label}</div>
                  <div className="text-base font-bold text-emerald-600 font-mono mt-0.5">{current.stat1.val}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] font-mono text-slate-500 font-semibold">{current.stat2.label}</div>
                  <div className="text-base font-bold text-blue-600 font-mono mt-0.5">{current.stat2.val}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive SVG Trend Graph */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 p-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 font-semibold">
                <span>COMPOUNDING TRAJECTORY (7 PHASES)</span>
                <span className="text-emerald-600 font-bold">● ACTIVE PIPELINE</span>
              </div>

              <div className="h-44 w-full flex items-end justify-between gap-3 pt-4">
                {current.bars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{bar}%</span>
                    <div 
                      className="w-full rounded-t bg-gradient-to-t from-blue-600 via-indigo-600 to-violet-600 shadow-sm transition-all duration-500 hover:brightness-110"
                      style={{ height: `${(bar / 170) * 100}%` }}
                    />
                    <span className="text-[10px] font-mono text-slate-600 font-bold">P{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
