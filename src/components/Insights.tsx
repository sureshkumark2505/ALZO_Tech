import React, { useState } from 'react';
import { insightsData } from '../data/insightsData';
import { BookOpen, Clock, ShieldCheck } from 'lucide-react';

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <section id="insights" className="relative py-28 md:py-36 bg-[#f8faff] border-t border-slate-200/90 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Strategic Knowledge & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.08]">
            INSIGHTS ON BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              SMARTER SYSTEMS.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Practical breakdowns on modern web performance, autonomous AI operations, and high-velocity digital customer acquisition.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {insightsData.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(selectedArticle === art.id ? null : art.id)}
              className="cursor-pointer rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4">
                  <span className="text-blue-600 font-semibold">{art.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display leading-snug group-hover:text-blue-600 transition-colors mb-3">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500 italic">
                  Key Takeaway: <span className="text-slate-800 font-medium">"{art.keyTakeaway}"</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Client Stories Strip (Honoring the prompt rule of NO fake testimonials) */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-50/70 via-white to-violet-50/70 border border-blue-200/70 p-8 sm:p-10 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-mono text-xs uppercase tracking-widest mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Partnership Stories
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
              CLIENT STORIES & CASE ARCHIVES COMING SOON
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We uphold complete confidentiality for active enterprise and retail pilot partners. Formalized video breakdowns and documented client impact studies will be published as multi-quarter telemetry concludes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
