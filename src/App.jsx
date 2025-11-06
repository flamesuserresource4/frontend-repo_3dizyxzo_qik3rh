import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';

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

      {/* Simple content wrapper to ensure visible sections even if 3D is loading */}
      <main className="relative mx-auto max-w-7xl px-6 py-16 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_200px_at_50%_-50%,rgba(16,185,129,0.18),transparent),radial-gradient(400px_200px_at_80%_0%,rgba(34,211,238,0.12),transparent)]" />
        <div className="relative">
          <section className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold">Why Never Settle?</h2>
            <p className="text-slate-300">Family-first fitness in Bengaluru. Group classes, personal coaching, and kids/senior friendly programs in a welcoming community.</p>
          </section>
        </div>
      </main>

      <LeadForm />
    </div>
  );
}
