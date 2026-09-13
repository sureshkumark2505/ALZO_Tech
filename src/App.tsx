import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhyAlzo } from './components/WhyAlzo';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';

export function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Website & Brand Digital');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    scrollToContact();
  };

  const handleCaseStudyInquiry = (projectTitle: string) => {
    setSelectedServiceForInquiry(`Bespoke Solution inspired by ${projectTitle}`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#fafbfe] text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* Magnetic Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Experience Flow */}
      <main>
        {/* 01. Hero Section */}
        <Hero 
          onStartProject={scrollToContact} 
          onExploreSolutions={scrollToServices} 
        />

        {/* 02. Trust & Growth Pillar Strip */}
        <TrustStrip />

        {/* 03. About: Digital Growth, Built Around Your Business */}
        <About onExploreServices={scrollToServices} />

        {/* 04. Four Growth Systems (Services) */}
        <Services onSelectService={handleSelectService} />

        {/* 05. Work & Case Studies (FormMind AI, MSME Platform, Nexus Commerce, Indhu Bridal Studio) */}
        <Portfolio 
          onOpenCaseStudy={(cs) => setSelectedCaseStudy(cs)} 
          onInquire={handleCaseStudyInquiry}
        />

        {/* 06. Why ALZO Tech (4 Core Principles) */}
        <WhyAlzo />

        {/* 07. Dramatic Closing Call-to-Action */}
        <CTASection 
          onStartProject={scrollToContact} 
          onTalkToUs={scrollToContact} 
        />

        {/* 14. Interactive Project Enquiry Form */}
        <ContactSection initialService={selectedServiceForInquiry} />
      </main>

      {/* 15. Luxury Minimal Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal 
        caseStudy={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        onInquire={handleCaseStudyInquiry}
      />
    </div>
  );
}

export default App;
