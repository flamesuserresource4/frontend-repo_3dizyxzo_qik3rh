import { motion } from 'framer-motion';
import { PhoneCall, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-cyan-400/10 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
              Start your transformation with a Free Trial Session
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> Personalized guidance</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> Family-friendly programs</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> Flexible timings</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-300" /> No pressure to join</li>
            </ul>
          </div>
          <div className="shrink-0">
            <button onClick={scrollToForm} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
              <PhoneCall className="h-4 w-4" /> Book Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
