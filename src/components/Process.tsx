import React, { useState } from 'react';
import { processSteps } from '../data/processData';
import { Compass, CheckCircle2, Clock } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 md:py-36 bg-[#f8faff] border-t border-slate-200/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            Disciplined Delivery Framework
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
            FROM IDEA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              TO IMPACT.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our structured 4-phase deployment methodology eliminates guesswork, ensures transparency, and delivers operational momentum from day one.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 pointer-events-none" />

          {processSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-blue-500 shadow-[0_10px_30px_rgba(37,99,235,0.12)] scale-[1.02]'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Step Icon / Circle */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm border ${
                      isCurrent
                        ? 'bg-blue-600 text-white border-blue-600 shadow-[0_4px_15px_rgba(37,99,235,0.35)]'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {step.step}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3" />
                      {step.timeline.split('•')[1] || step.timeline}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 font-bold mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Key Outcomes
                  </div>
                  {step.highlights.map((hl) => (
                    <div key={hl} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight font-medium">{hl}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
