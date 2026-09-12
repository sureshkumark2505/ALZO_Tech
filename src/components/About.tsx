import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { Layers, Bot, Search, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutProps {
  onExploreServices: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreServices }) => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      number: '01',
      title: 'Digital Foundations',
      subtitle: 'Modern Web & Headless Stores',
      description: 'Engineered for sub-second response times, bulletproof mobile layouts, and seamless conversions.',
      focus: 'Next.js, React, Tailwind, Core Web Vitals',
      icon: Layers,
    },
    {
      number: '02',
      title: 'AI & Automation',
      subtitle: 'Autonomous Operations',
      description: 'Connecting WhatsApp, CRMs, and custom AI agents so your business qualifies and captures leads 24/7.',
      focus: 'Multi-agent workflows, zero manual triage, instant response',
      icon: Bot,
    },
    {
      number: '03',
      title: 'Visibility & Growth',
      subtitle: 'Search & Maps Domination',
      description: 'Ensuring your business claims top local rankings and organic discovery right when buyers search.',
      focus: 'Google Maps Local 3-Pack, technical SEO, schema markup',
      icon: Search,
    },
    {
      number: '04',
      title: 'Long-Term Support',
      subtitle: 'Continuous Evolution',
      description: 'We do not abandon you after launch. We monitor uptime, security, and conversion velocity month after month.',
      focus: 'Direct technical partner, security patches, conversion audits',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Flare */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
          <img src={logoImg} alt="ALZO" className="w-3.5 h-3.5 object-contain" />
          The ALZO Tech Philosophy
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 6 Columns - Large Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] font-display mb-8">
                DIGITAL GROWTH, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  BUILT AROUND
                </span> <br />
                YOUR BUSINESS.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                <p>
                  Most businesses don’t need another generic website template or disconnected tool. They need an interconnected digital system that works tirelessly in the background.
                </p>
                <p className="text-slate-500">
                  ALZO Tech helps businesses establish a rock-solid digital foundation, automate repetitive operational friction, command online discoverability, and convert digital activity into compounding business revenue.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-3 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Discover our Four Growth Systems</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Columns - 4 Capability Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const isActive = activeCapability === index;
              return (
                <div
                  key={cap.number}
                  onClick={() => setActiveCapability(index)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-blue-50/60 border-blue-500/40 shadow-sm'
                      : 'bg-slate-50/70 border-slate-200/70 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {cap.number}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {cap.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-xl border ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-2 text-xs font-mono text-blue-600 font-semibold">
                    {cap.subtitle}
                  </div>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                    <span className="text-slate-400">Core Focus:</span>
                    <span className="text-slate-700 font-semibold">{cap.focus}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
