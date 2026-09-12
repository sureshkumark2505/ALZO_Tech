import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Bot, 
  Search, 
  TrendingUp, 
  Zap, 
  Layers 
} from 'lucide-react';
import { trackCTAClick } from '../lib/analytics';

interface HeroProps {
  onStartProject: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreSolutions }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [highlightWordIndex, setHighlightWordIndex] = useState(3); // 0: BUILD, 1: AUTOMATE, 2: GET FOUND, 3: GROW

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightWordIndex((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const headlineWords = [
    { text: 'BUILD.', color: 'from-sky-600 via-blue-600 to-indigo-600' },
    { text: 'AUTOMATE.', color: 'from-blue-600 via-indigo-600 to-violet-600' },
    { text: 'GET FOUND.', color: 'from-indigo-600 via-violet-600 to-purple-600' },
    { text: 'GROW.', color: 'from-violet-600 via-purple-600 to-pink-600' },
  ];

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center bg-gradient-to-b from-[#fafbfe] via-[#f5f8ff] to-[#f1f5f9]"
    >
      {/* Background Creative Dot Grid & Tech Grid */}
      <div 
        className="absolute inset-0 bg-tech-grid opacity-60 bg-radial-mask pointer-events-none" 
        style={{
          transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`
        }}
      />
      
      {/* Ambient Gradient Soft Flares */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-transparent blur-[120px] pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), calc(-50% + ${mousePos.y * 25}px))`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content: 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Badge with Logo */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm backdrop-blur-md mb-8 hover:border-blue-400 transition-colors">
              <img src={logoImg} alt="ALZO Logo" className="w-5 h-5 object-contain" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-blue-900">
                ALZO TECH
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-[11px] font-mono tracking-wide text-blue-600 font-semibold">DIGITAL GROWTH PARTNER</span>
            </div>

            {/* Dynamic Kinetic Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.04] font-display mb-6">
              {headlineWords.map((item, index) => {
                const isHighlighted = highlightWordIndex === index;
                return (
                  <span 
                    key={item.text}
                    onClick={() => setHighlightWordIndex(index)}
                    className={`block cursor-pointer transition-all duration-500 ${
                      isHighlighted 
                        ? `text-transparent bg-clip-text bg-gradient-to-r ${item.color} drop-shadow-sm`
                        : 'text-slate-400/80 hover:text-slate-800'
                    }`}
                  >
                    {item.text}
                  </span>
                );
              })}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-10">
              We help businesses build a stronger digital presence, automate operations, get discovered by the right customers, and turn digital activity into measurable growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  trackCTAClick('Start Your Growth Journey', 'hero_primary');
                  onStartProject();
                }}
                data-cursor="cta"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-[0_4px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.45)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>Start Your Growth Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  trackCTAClick('Explore Our Solutions', 'hero_secondary');
                  onExploreSolutions();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-sm transition-all duration-300"
              >
                <span>Explore Our Solutions</span>
              </button>
            </div>

            {/* Bottom Pillar Micro Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-slate-600">
              <div className="flex items-center gap-2 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Modern Web Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Autonomous AI Ops</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                <span>Search Domination</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Revenue Scaling</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: 5 Columns (Abstract Digital Growth Engine) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* 3D Parallax Container */}
            <div 
              className="relative w-full max-w-[480px] aspect-[4/5] transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
              }}
            >
              {/* Central Abstract Glow Orb */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-purple-400/10 blur-2xl pointer-events-none" />

              {/* Main Floating Platform: Growth Telemetry Hub */}
              <div className="relative h-full w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] flex flex-col justify-between overflow-hidden">
                
                {/* Header of Central Visual */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
                    <span className="text-xs font-mono tracking-widest text-slate-800 font-bold uppercase">
                      ALZO GROWTH OS v2.6
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ONLINE • LIVE
                  </span>
                </div>

                {/* The 4 Stage Flow Nodes */}
                <div className="space-y-2.5 my-3">
                  
                  {/* Stage 1: Build Node */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">01 • Modern Digital Build</div>
                        <div className="text-[11px] font-mono text-slate-500">Headless React • Sub-600ms load</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-blue-600 font-bold">100/100 CWV</span>
                  </div>

                  {/* Stage 2: Automate Node */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-300 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">02 • AI & Workflow Pipeline</div>
                        <div className="text-[11px] font-mono text-slate-500">24/7 WhatsApp triage • Auto CRM</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-600 font-bold">Instant Reply</span>
                  </div>

                  {/* Stage 3: Get Found Node */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-300 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet-50 text-violet-600 border border-violet-100">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">03 • Search & Discovery Radar</div>
                        <div className="text-[11px] font-mono text-slate-500">Google Local Pack • Top Rankings</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-violet-600 font-bold">Top 3 Rank</span>
                  </div>

                  {/* Stage 4: Grow Node */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-300 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-600 border border-purple-100">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">04 • Compounding Revenue</div>
                        <div className="text-[11px] font-mono text-slate-500">Conversion funnels • Telemetry</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-purple-600 font-bold">Compounding</span>
                  </div>

                </div>

                {/* Mini Visual Growth Graph */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2 font-semibold">
                    <span>DIGITAL MOMENTUM TRAJECTORY</span>
                    <span className="text-emerald-600 font-bold">+184% EFFICIENCY</span>
                  </div>
                  <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                    {[35, 45, 42, 60, 58, 75, 70, 85, 82, 98, 92, 115].map((val, i) => (
                      <div 
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-violet-600 hover:from-blue-600 hover:to-indigo-500 transition-all duration-300"
                        style={{ height: `${(val / 120) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Orbiting Satellite Card 1 (Top Left) */}
              <div 
                className="absolute -top-5 -left-6 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.08)] backdrop-blur-md flex items-center gap-2.5 animate-float-slow"
                style={{
                  transform: `translate3d(${-mousePos.x * 15}px, ${-mousePos.y * 15}px, 0)`
                }}
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-xs font-mono font-bold text-slate-800">Zero Manual Friction</span>
              </div>

              {/* Floating Orbiting Satellite Card 2 (Bottom Right) */}
              <div 
                className="absolute -bottom-6 -right-6 px-4 py-3 rounded-xl bg-white border border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.08)] backdrop-blur-md flex items-center gap-3 animate-float-reverse"
                style={{
                  transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
                }}
              >
                <div className="p-1.5 rounded-lg bg-violet-50 text-violet-600 border border-violet-100">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 font-semibold">MEASURABLE OUTCOME</div>
                  <div className="text-xs font-bold text-slate-900">Full-Stack Digital Growth</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
