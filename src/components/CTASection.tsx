import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
  onTalkToUs: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  onStartProject, 
  onTalkToUs 
}) => {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 border-t border-slate-200/90 overflow-hidden">
      
      {/* Central Dramatic Radial Glow Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-violet-400/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 font-mono text-xs uppercase tracking-widest mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Zero-Obligation Growth Architecture
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.05] mb-6">
            READY TO BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              WHAT’S NEXT?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            Let’s create a digital system that works harder for your business — built for speed, automated for scale, and engineered to get found.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              data-cursor="cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.5)] transition-all duration-300 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onTalkToUs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-sm transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Talk to ALZO Tech</span>
            </button>
          </div>

          {/* Small Trust Note */}
          <div className="mt-10 text-xs font-mono text-slate-500">
            Direct response within 24 business hours • Confidential strategic scoping
          </div>
        </div>

      </div>
    </section>
  );
};
