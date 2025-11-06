import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aarav',
    note: 'The community vibe is amazing. Coaches are supportive and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Meera',
    note: 'My kids love the weekend sessions! Family Pack was perfect for us.',
    rating: 5,
  },
  {
    name: 'Rahul',
    note: 'Great mix of yoga and strength. Lost 6kg in 8 weeks without burnout.',
    rating: 5,
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <Star className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Member Transformations</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <Stars n={r.rating} />
            <p className="mt-3 text-slate-200">“{r.note}”</p>
            <p className="mt-4 text-sm font-semibold text-white">— {r.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
