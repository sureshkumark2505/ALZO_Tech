import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Bot, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  MessageSquare, 
  MapPin, 
  BarChart3, 
  CheckCircle 
} from 'lucide-react';

export const InteractiveJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const stages = [
    {
      id: 'build',
      number: '01',
      title: 'BUILD',
      headline: 'The Digital Foundation',
      subhead: 'Architecture Engineered for Speed & Conversion',
      description: 'Before you can automate or scale, you need a resilient digital hub. We engineer modern, accessible, mobile-first web platforms with sub-second speeds that position your brand at the pinnacle of your market.',
      icon: Layers,
      gradient: 'from-sky-500 to-blue-600',
      badge: 'SPEED • SECURITY • CRAFT',
    },
    {
      id: 'automate',
      number: '02',
      title: 'AUTOMATE',
      headline: 'The Autonomous Engine',
      subhead: 'Eliminating Operational Waste via AI',
      description: 'Your business should not run on manual copy-pasting and delayed replies. We deploy customized WhatsApp workflows, AI chatbots, and automated CRM pipelines that capture and nurture leads 24 hours a day.',
      icon: Bot,
      gradient: 'from-blue-500 to-indigo-600',
      badge: '24/7 ACTIVE QUALIFICATION',
    },
    {
      id: 'get-found',
      number: '03',
      title: 'GET FOUND',
      headline: 'Search & Discovery Radar',
      subhead: 'Owning the Highest-Intent Buyer Traffic',
      description: 'A great platform is useless if buyers cannot find you. We optimize your technical search hierarchy, dominate Google Business Profile local search, and construct authoritative keyword visibility.',
      icon: Search,
      gradient: 'from-indigo-500 to-violet-600',
      badge: 'TOP-3 LOCAL MAPS DOMINANCE',
    },
    {
      id: 'grow',
      number: '04',
      title: 'GROW',
      headline: 'Compounding Revenue Scale',
      subhead: 'Turning Engagement into Predictable Cash Flow',
      description: 'With a rock-solid foundation, automated follow-ups, and organic discovery in place, we scale paid acquisition, run conversion experiments, and maximize lifetime customer value.',
      icon: TrendingUp,
      gradient: 'from-violet-500 to-fuchsia-600',
      badge: 'PROVEN COMMERCIAL VELOCITY',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, stages.length]);

  return (
    <section id="journey" className="relative py-28 md:py-36 bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Signature Continuous Glowing Thread SVG in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <path 
            d="M -100 400 C 300 200, 600 600, 1000 300 C 1200 150, 1400 450, 1600 350" 
            stroke="url(#continuousThreadGradLight)" 
            strokeWidth="3.5" 
            strokeDasharray="8 8"
            className="animated-glow-line"
          />
          <defs>
            <linearGradient id="continuousThreadGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="33%" stopColor="#2563eb" />
              <stop offset="66%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-mono text-xs uppercase tracking-widest mb-4 font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            The Signature ALZO Growth Progression
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display">
            HOW WE MOVE BUSINESSES FORWARD
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every resilient business scales through four disciplined phases. Click each stage to see how the system operates in practice.
          </p>
        </div>

        {/* 4-Stage Horizontal Progress Switcher */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {stages.map((stg, index) => {
            const Icon = stg.icon;
            const isCurrent = activeStage === index;
            return (
              <button
                key={stg.id}
                onClick={() => {
                  setActiveStage(index);
                  setAutoPlay(false);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden ${
                  isCurrent
                    ? 'bg-white border-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.15)] scale-[1.02]'
                    : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Active Top Glow Line */}
                {isCurrent && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stg.gradient}`} />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-500">
                    STAGE {stg.number}
                  </span>
                  <div className={`p-2 rounded-xl ${isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-200/70 text-slate-600'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {stg.title}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-1 truncate font-medium">
                  {stg.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage Display Canvas */}
        <div className="rounded-3xl bg-[#f8faff] border border-slate-200/90 p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (5 cols) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200 text-blue-900 font-mono text-xs uppercase tracking-wider mb-4 font-bold">
                Phase {stages[activeStage].number} Architecture
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display mb-3">
                {stages[activeStage].headline}
              </h3>
              <div className="text-sm font-mono text-blue-700 font-bold mb-4">
                {stages[activeStage].subhead}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {stages[activeStage].description}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setActiveStage((prev) => (prev + 1) % stages.length);
                    setAutoPlay(false);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md transition-all"
                >
                  <span>Next: {stages[(activeStage + 1) % stages.length].title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  Step {activeStage + 1} of 4
                </span>
              </div>
            </div>

            {/* Right Interactive Mockup Visualizer (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xl relative overflow-hidden">
                
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 bg-slate-50 px-3 py-0.5 rounded-md border border-slate-200/60 font-medium">
                    alzo-system://stage/{stages[activeStage].id}
                  </div>
                  <div className="text-[10px] font-mono text-blue-600 font-bold">
                    2026 ENGINE
                  </div>
                </div>

                {/* Stage 1 Visual: Modern Digital Build */}
                {activeStage === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2.5">
                        <Code2 className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-mono font-bold text-slate-800">Core Web Vitals Audit</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-600">100 / 100 PERFORMANCE</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-mono text-slate-500 font-semibold">LCP LOAD</div>
                        <div className="text-sm font-extrabold text-blue-600 mt-1">420 ms</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-mono text-slate-500 font-semibold">INP LATENCY</div>
                        <div className="text-sm font-extrabold text-indigo-600 mt-1">16 ms</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-mono text-slate-500 font-semibold">CLS SHIFT</div>
                        <div className="text-sm font-extrabold text-emerald-600 mt-1">0.000</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 font-mono text-xs text-slate-200 leading-relaxed shadow-sm">
                      <span className="text-purple-300">export const</span> <span className="text-blue-300">DigitalFoundation</span> = &#123;<br />
                      &nbsp;&nbsp;architecture: <span className="text-emerald-300">'Next.js + Edge Cache'</span>,<br />
                      &nbsp;&nbsp;uxFramework: <span className="text-emerald-300">'Bespoke Modern Luxury'</span>,<br />
                      &nbsp;&nbsp;conversionOptimized: <span className="text-cyan-300">true</span><br />
                      &#125;;
                    </div>
                  </div>
                )}

                {/* Stage 2 Visual: Autonomous AI & Workflow Engine */}
                {activeStage === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-mono font-bold text-emerald-950">Inbound WhatsApp Query</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Triage: 0.8s
                      </span>
                    </div>

                    {/* Simulated Automated Chat Bubble */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                      <div className="text-slate-500 font-mono text-[10px] font-semibold">Lead (9:42 AM):</div>
                      <div className="text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
                        "Hi ALZO Tech, do you build custom inventory automation for multi-location stores?"
                      </div>
                      <div className="text-blue-700 font-mono text-[10px] font-semibold">ALZO Autonomous Agent (9:42 AM):</div>
                      <div className="text-blue-950 bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 shadow-sm">
                        "Yes! We architect bilingual inventory and WhatsApp-integrated billing systems. May I share our retail case study or schedule a 15-minute scoping call?"
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-1 font-semibold">
                      <span className="flex items-center gap-1.5 text-blue-600">
                        <CheckCircle className="w-3.5 h-3.5" /> Synchronized with CRM
                      </span>
                      <span className="text-emerald-600">Lead Qualified</span>
                    </div>
                  </div>
                )}

                {/* Stage 3 Visual: Search & Discovery Radar */}
                {activeStage === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs font-mono">
                      <Search className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-800 font-medium">google.com/search?q="best digital growth partner"</span>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-white border border-blue-200">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-blue-700 font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>GOOGLE MAPS LOCAL 3-PACK • #1 POSITION</span>
                      </div>
                      <div className="text-sm font-bold text-slate-950 font-display">
                        ALZO Tech — Growth Systems & Web Engineering
                      </div>
                      <div className="text-xs text-amber-600 flex items-center gap-1.5 mt-1 font-semibold">
                        <span>★ 5.0 Rating</span>
                        <span className="text-slate-500 font-normal">• High-Intent Local Searches</span>
                      </div>
                      <div className="text-xs text-slate-600 mt-2">
                        Dominant organic footprints capturing ready-to-buy prospective clients.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="text-slate-500 text-[10px] font-semibold">ORGANIC IMPRESSIONS</span>
                        <div className="text-slate-900 font-bold mt-0.5">+340%</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="text-slate-500 text-[10px] font-semibold">CLICK-TO-CALL RATIO</span>
                        <div className="text-emerald-600 font-bold mt-0.5">Top Tier</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stage 4 Visual: Compounding Revenue Scale */}
                {activeStage === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-violet-600" />
                        <span className="text-xs font-mono text-slate-800 font-bold">Executive Revenue Telemetry</span>
                      </div>
                      <span className="text-xs font-mono text-violet-700 font-bold">Q1-Q4 TRAJECTORY</span>
                    </div>

                    {/* Interactive Animated SVG Growth Graph */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="h-28 w-full flex items-end justify-between gap-2 pt-2">
                        {[
                          { month: 'M1', val: 30, h: '30%' },
                          { month: 'M2', val: 45, h: '45%' },
                          { month: 'M3', val: 55, h: '55%' },
                          { month: 'M4', val: 70, h: '70%' },
                          { month: 'M5', val: 90, h: '90%' },
                          { month: 'M6', val: 120, h: '100%' },
                        ].map((bar) => (
                          <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                            <div 
                              className="w-full rounded-t bg-gradient-to-t from-blue-600 via-indigo-600 to-violet-600 shadow-sm transition-all duration-500"
                              style={{ height: bar.h }}
                            />
                            <span className="text-[10px] font-mono text-slate-500 font-medium">{bar.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-violet-50 border border-violet-200 text-xs text-slate-800 flex items-center justify-between">
                      <span className="font-mono text-violet-900 font-semibold">Customer Acquisition Cost (CAC)</span>
                      <span className="font-mono font-bold text-emerald-600">-42% Reduction</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
