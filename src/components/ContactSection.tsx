import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, MessageSquare, ArrowUpRight, AlertCircle } from 'lucide-react';
import { trackLead, trackWhatsAppClick } from '../lib/analytics';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = 'Website & Brand Digital' }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: initialService || 'Website & Brand Digital',
    budget: '$3k - $8k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const budgetTiers = [
    '$1.5k - $3k',
    '$3k - $8k',
    '$8k - $15k',
    '$15k+',
  ];

  const services = [
    'Website & Brand Digital',
    'E-Commerce Platform',
    'AI & Automation Systems',
    'SEO & Local Visibility',
    'Growth & Performance Marketing',
    'Other Bespoke Solution',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    const formEl = e.currentTarget;
    const hpField = formEl.elements.namedItem('_hp') as HTMLInputElement | null;
    const hpValue = hpField ? hpField.value : '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _hp: hpValue,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        trackLead({ lead_source: 'website' });
      } else {
        setErrorMessage(data.message || 'Unable to deliver your enquiry. Please try again or message us on WhatsApp.');
      }
    } catch (err: any) {
      setErrorMessage('Network connection error. Please try again or reach out directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-white border-t border-slate-200/90 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Value Proposition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Strategic Engagement
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.08] mb-6">
              LET’S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                SOMETHING THAT
              </span> <br />
              GROWS.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Share your project vision, target timeline, or operational friction points. We’ll analyze your requirements and provide a transparent, high-impact growth architecture proposal.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                What to Expect After Inquiring
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-mono font-bold">01.</span>
                  <span>Direct review by a senior technical architect (no junior sales gatekeeping).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-mono font-bold">02.</span>
                  <span>Preliminary systems assessment & feasibility breakdown.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-mono font-bold">03.</span>
                  <span>Custom scope proposal with transparent milestones & pricing.</span>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-6 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-950 font-bold">
                    Need Instant Consultation?
                  </div>
                  <div className="text-xs text-slate-600">
                    Connect directly with ALZO Tech on WhatsApp
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/919342836527"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contact_section_primary')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-white hover:bg-emerald-100 border border-emerald-300 shadow-sm transition-colors"
                  aria-label="Chat on WhatsApp +91 9342836527"
                >
                  <span>+91 9342836527</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. Our engineering team has received your brief for <span className="text-blue-600 font-medium">{formData.service}</span> and will respond within 24 business hours.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919342836527?text=${encodeURIComponent(`Hi ALZO Tech, I just submitted an enquiry for "${formData.service}" on your website.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('success_screen')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
                    aria-label="Connect on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat with Engineer on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot anti-spam field (hidden from human visitors) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium flex items-start gap-3 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span>{errorMessage}</span>
                      <div className="mt-1 text-slate-600 font-normal">
                        You can also contact us directly on WhatsApp:{' '}
                        <a 
                          href="https://wa.me/919342836527" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('error_banner')}
                          className="text-emerald-700 font-bold underline"
                        >
                          +91 9342836527
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Row 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Divyadharshini"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                      Business / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Divs Mart / Enterprise Brand"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@yourbusiness.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 / International number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                    Primary Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                  >
                    {services.map((srv) => (
                      <option key={srv} value={srv} className="bg-white text-slate-900">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range Tier Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-medium transition-all border ${
                          formData.budget === tier
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-medium mb-2">
                    Brief Project Details & Commercial Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about what you want to build, automate, or scale..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  data-cursor="cta"
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Brief...' : 'Send Project Enquiry →'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

