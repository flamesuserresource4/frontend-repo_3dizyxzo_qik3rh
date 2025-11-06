import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Star, ArrowRight } from 'lucide-react';

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        {/* Replace the URL with a Spline scene if desired */}
        <Spline
          scene="https://prod.spline.design/4T7kqv6s0aQm5m7q/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-slate-900/80" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>Bengaluru's Most Energetic Fitness Community</span>
          </div>
          <h1 className="text-balance font-extrabold tracking-tight">
            <span className="text-4xl sm:text-5xl md:text-6xl">Never Settle</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">
              Family Fitness Studio
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base text-slate-200 sm:text-lg">
            Group classes, personal coaching, and programs for kids to seniors. Train together, grow together, and join a community that never settles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <Rocket className="h-4 w-4" />
              Book Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#schedule" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/90 transition hover:bg-white/10">
              See Class Schedule
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span>Kids • Adults • Seniors</span>
            <span>Yoga • HIIT • Strength • Mobility</span>
            <span>Certified Coaches</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
