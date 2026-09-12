import React from 'react';
import logoImg from '../assets/logo.png';
import { Lightbulb, TrendingUp, Target, Users, Sparkles } from 'lucide-react';

export const WhyAlzo: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'INNOVATE',
      tagline: 'We create smart solutions.',
      description: 'We engineer cutting-edge web architecture and custom AI automation pipelines that solve complex business bottlenecks with effortless intelligence.',
      icon: Lightbulb,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
      border: 'hover:border-violet-300',
    },
    {
      number: '02',
      title: 'ELEVATE',
      tagline: 'We help you grow beyond limits.',
      description: 'We don’t just build tools; we lift your business performance. Every platform, workflow, and search asset is built to scale compounding revenue and visibility.',
      icon: TrendingUp,
      color: 'text-sky-600 bg-sky-50 border-sky-100',
      border: 'hover:border-sky-300',
    },
    {
      number: '03',
      title: 'DRIVEN',
      tagline: 'We are passionate and result-oriented.',
      description: 'We are relentless about measurable impact. Zero vanity metrics, zero bloat—just hyper-optimized digital experiences that turn visitors into loyal customers.',
      icon: Target,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      border: 'hover:border-blue-300',
    },
    {
      number: '04',
      title: 'TRUSTED PARTNER',
      tagline: 'Your success is our mission.',
      description: 'We operate as an embedded senior technology ally. From initial strategy to post-launch scaling and continuous optimization, we stand with you long-term.',
      icon: Users,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      border: 'hover:border-indigo-300',
    },
  ];

  return (
    <section id="why" className="relative py-28 md:py-36 bg-white border-t border-slate-200/80 overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
            <img src={logoImg} alt="ALZO" className="w-3.5 h-3.5 object-contain" />
            Core Operating Values
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
            MORE THAN A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              DIGITAL SERVICE.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We are not a bloated agency that hands off tickets to junior freelancers. We are senior engineers and growth strategists committed to your operational velocity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 sm:p-8 rounded-3xl bg-[#fafbfe] border border-slate-200/80 ${item.border} transition-all duration-300 flex flex-col justify-between group hover:bg-white hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {item.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 font-bold mb-4">
                    “{item.tagline}”
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 font-semibold">
                  <span>Guaranteed Principle</span>
                  <span className="text-emerald-600">100% Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
