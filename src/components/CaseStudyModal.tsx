import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { trackCTAClick, trackPortfolioClick } from '../lib/analytics';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ 
  caseStudy, 
  onClose,
  onInquire 
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl my-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
            {caseStudy.badge}
          </span>
          <span className="text-xs font-mono text-slate-500 font-medium">
            {caseStudy.category}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs font-mono text-slate-400 font-semibold">
            {caseStudy.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display mb-3">
          {caseStudy.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          {caseStudy.description}
        </p>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          {caseStudy.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">{m.label}</div>
              <div className="text-base sm:text-xl font-extrabold font-mono text-blue-600 mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-rose-600 font-bold uppercase tracking-widest mb-2">
              The Challenge
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="text-xs font-mono text-blue-700 font-bold uppercase tracking-widest mb-2">
              The Engineered Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Verified Results */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Documented Outcomes & Features</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.results.map((res) => (
              <div key={res} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 font-bold">✔</span>
                <span className="font-medium">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-8">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2.5 font-bold">
            Technology Stack & Frameworks
          </div>
          <div className="flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 border border-slate-200 text-slate-800 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono font-medium">
            Want a system like {caseStudy.title}?
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {caseStudy.link && (
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => {
                trackCTAClick('Build A Similar Solution', 'case_study_modal');
                trackPortfolioClick(caseStudy.title);
                onInquire(caseStudy.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md"
            >
              <span>Build A Similar Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
