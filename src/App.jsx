import { useRef } from 'react';
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import Calculators from './components/Calculators';
import Schedule from './components/Schedule';
import CTASection from './components/CTASection';
import LeadForm from './components/LeadForm';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

export default function App() {
  const formRef = useRef(null);

  const handleCTAClick = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <SEOHead />
      <Hero onCTAClick={handleCTAClick} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_200px_at_50%_-50%,rgba(16,185,129,0.2),transparent),radial-gradient(400px_200px_at_80%_0%,rgba(34,211,238,0.15),transparent)]" />
        <div className="relative">
          <CTASection />
          <Pricing />
          <Schedule />
          <Testimonials />
          <Calculators />
          <LeadForm ref={formRef} />
        </div>
      </div>
      <footer className="mx-auto max-w-7xl px-6 pb-16 pt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Never Settle – Family Fitness Studio, Bengaluru. All rights reserved.
      </footer>
    </div>
  );
}
