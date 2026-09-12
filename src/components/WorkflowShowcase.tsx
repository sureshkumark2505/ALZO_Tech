import React, { useState } from 'react';
import { 
  User, 
  MessageSquare, 
  Cpu, 
  GitFork, 
  Database, 
  Send, 
  TrendingUp, 
  Play, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export const WorkflowShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const steps = [
    {
      id: 0,
      title: 'Customer',
      subtitle: 'High commercial intent',
      icon: User,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      detail: 'Prospective client arrives via Google Search or WhatsApp ad at 10:45 PM.',
    },
    {
      id: 1,
      title: 'Web / WhatsApp',
      subtitle: 'Instant ingress channel',
      icon: MessageSquare,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      detail: 'Webhook triggers sub-second greeting without human intervention.',
    },
    {
      id: 2,
      title: 'AI Intelligence',
      subtitle: 'Intent & entity parsing',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      detail: 'Language model classifies request, extracts budget, and scores urgency.',
    },
    {
      id: 3,
      title: 'Automation Engine',
      subtitle: 'Zero-touch workflow',
      icon: GitFork,
      color: 'text-violet-600 bg-violet-50 border-violet-200',
      detail: 'Synchronizes client record into CRM, alerts sales rep, and reserves slot.',
    },
    {
      id: 4,
      title: 'Lead Intelligence',
      subtitle: 'Enriched profile created',
      icon: Database,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      detail: 'Detailed qualification brief ready before team begins their workday.',
    },
    {
      id: 5,
      title: 'Auto Follow-Up',
      subtitle: 'Contextual nurture loop',
      icon: Send,
      color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200',
      detail: 'Personalized proposal checklist and calendar confirmation dispatched.',
    },
    {
      id: 6,
      title: 'Business Growth',
      subtitle: 'Converted with zero delay',
      icon: TrendingUp,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      detail: 'Deal velocity accelerated by eliminating hours of manual triage delay.',
    },
  ];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < steps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1200);
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#fafbfe] border-t border-slate-200/80 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Autonomous Operations Engine
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
              YOUR BUSINESS SHOULD NOT RUN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                ON MANUAL WORK.
              </span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-[0_4px_20px_rgba(37,99,235,0.25)] disabled:opacity-50 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Simulating Workflow...' : 'Simulate Live Inbound Inquiry'}</span>
            </button>
          </div>
        </div>

        {/* The 7-Step Interactive Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isHighlighted = activeStep === step.id;
            return (
              <div
                key={step.title}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-white border-blue-500 shadow-[0_10px_25px_rgba(37,99,235,0.18)] scale-105 z-10'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      0{step.id + 1}
                    </span>
                    <div className={`p-2 rounded-xl border ${isHighlighted ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-display">
                    {step.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1 line-clamp-2">
                    {step.subtitle}
                  </div>
                </div>

                {isHighlighted && (
                  <div className="mt-3 pt-2 border-t border-blue-200 flex items-center gap-1 text-[10px] font-mono text-blue-700 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                    Active Node
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Telemetry Callout for Active Node */}
        <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-700 uppercase tracking-widest font-bold">
                Step 0{activeStep + 1} Details • {steps[activeStep].title}
              </div>
              <div className="text-sm sm:text-base text-slate-800 mt-1 font-semibold">
                {steps[activeStep].detail}
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-500 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6 font-medium">
            Autonomous latency: <span className="text-emerald-600 font-bold">&lt; 850ms</span> • Human workload: <span className="text-blue-600 font-bold">0%</span>
          </div>
        </div>

      </div>
    </section>
  );
};
