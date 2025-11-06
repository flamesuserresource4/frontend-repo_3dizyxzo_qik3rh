import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const items = [
  { q: 'What should I bring for my first class?', a: 'Wear comfortable workout clothes, bring a water bottle and a small towel. We provide mats and basic equipment.' },
  { q: 'Do you have programs for kids and seniors?', a: 'Yes! We have dedicated kids fitness sessions and senior-friendly classes focusing on mobility and strength.' },
  { q: 'Can I pause or cancel my membership?', a: 'Absolutely. You can pause for vacations or medical reasons and cancel anytime before the next billing cycle.' },
  { q: 'Where are you located?', a: 'We are located in Bengaluru with easy parking and public transport access. See the map below.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <HelpCircle className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        {items.map((it, i) => (
          <details key={it.q} open={open === i} onClick={(e) => { e.preventDefault(); setOpen(open === i ? -1 : i); }} className="group">
            <summary className="cursor-pointer list-none p-5 text-lg font-medium hover:bg-white/5">
              {it.q}
            </summary>
            <div className="px-5 pb-5 text-slate-200">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
