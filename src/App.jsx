import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Calculators from './components/Calculators';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const handleCTAClick = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <SEOHead />
      <Navbar />
      <Hero onCTAClick={handleCTAClick} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_200px_at_50%_-50%,rgba(16,185,129,0.2),transparent),radial-gradient(400px_200px_at_80%_0%,rgba(34,211,238,0.15),transparent)]" />
        <div className="relative">
          <CTASection />
          <Pricing />
          <Schedule />
          <Testimonials />
          <Calculators />
          <LeadForm />
        </div>
        <FAQ />
        <Location />
      </div>
      <Footer />
    </div>
  );
}
