import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹1,999/mo',
    highlight: false,
    features: [
      '8 group classes / month',
      'Access to Yoga & HIIT',
      'Coach check-in (monthly)',
    ],
  },
  {
    name: 'Most Popular',
    price: '₹2,999/mo',
    highlight: true,
    features: [
      'Unlimited group classes',
      'Strength & Mobility access',
      'Coach check-in (bi-weekly)',
      'Body composition tracking',
    ],
  },
  {
    name: 'Family Pack',
    price: '₹4,999/mo',
    highlight: false,
    features: [
      '2 adults + 1 kid',
      'Kids fitness program',
      'All classes included',
      'Priority booking',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <Flame className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Flexible Pricing</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${
              p.highlight ? 'ring-2 ring-emerald-400/60' : ''
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 right-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                Best Value
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-emerald-300">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-200">
                  <Check className="h-4 w-4 text-emerald-300" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
