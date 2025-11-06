import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('I\'m interested in a free trial!');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // In a full app, send to backend/CRM. For now, simulate success.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 text-white">
        <div className="rounded-3xl border border-emerald-400/30 bg-white/5 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-bold">You\'re all set!</h3>
          <p className="mt-2 text-slate-300">Our team will reach out shortly to schedule your free trial session.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">Book Your Free Trial</h3>
          <p className="mt-2 text-slate-300">Drop your details and we\'ll call you back with the best slot. No spam.</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Walk-ins welcome between 6 AM – 9 PM</li>
            <li>Located in Bengaluru with easy parking</li>
            <li>Kids and senior-friendly programs</li>
          </ul>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <label className="block text-sm">
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
          </label>
          <label className="mt-4 block text-sm">
            Phone
            <input value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" placeholder="10-digit number" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
          </label>
          <label className="mt-4 block text-sm">
            Message (optional)
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
          </label>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
            <Send className="h-4 w-4" /> Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
