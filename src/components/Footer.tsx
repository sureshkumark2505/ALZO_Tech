import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/analytics';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-blue-100/40 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200">

          {/* Brand Col: 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" showTagline={true} />
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed mt-4">
              Modern digital growth partner helping businesses engineer high-performance platforms, automate operations, dominate organic search, and scale compounding revenue.
            </p>
            <div className="pt-2 text-xs font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 font-bold uppercase tracking-wider">
              “We Innovate, You Elevate”
            </div>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/919342836527"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer_primary')}
                className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 font-medium transition-colors"
                aria-label="Direct WhatsApp Contact +91 9342836527"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: +91 9342836527</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation: 2 cols */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {['Home', 'About', 'Services', 'Work', 'Why', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                    {item === 'Why' ? 'Why ALZO' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Systems: 3 cols */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
              Growth Systems
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Web & E-Commerce Flagships
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  AI & WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Google Maps & SEO Visibility
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Performance Funnels & Scale
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture / Status: 2 cols */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
                Systems Status
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                All Systems Operational
              </div>
              <div className="mt-3 text-[11px] font-mono text-slate-500">
                Core Web Vitals: 100/100<br />
                Architecture: 2026 Edge
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 ALZO Tech. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-600">Next-Gen Digital Growth Partner</span>
            <span>•</span>
            <span className="text-slate-600">Zero-Compromise Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
