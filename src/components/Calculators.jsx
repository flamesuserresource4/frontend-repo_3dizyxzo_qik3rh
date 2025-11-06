import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

function number(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

function BmiCalc() {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');

  const h = number(height) / 100;
  const bmi = h > 0 ? number(weight) / (h * h) : 0;
  const status =
    bmi === 0
      ? '—'
      : bmi < 18.5
      ? 'Underweight'
      : bmi < 24.9
      ? 'Normal'
      : bmi < 29.9
      ? 'Overweight'
      : 'Obese';

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h3 className="mb-3 font-semibold">BMI Calculator</h3>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm">
          Height (cm)
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>
        <label className="text-sm">
          Weight (kg)
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </label>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-black/30 p-3">
        <span className="text-sm text-slate-300">Your BMI</span>
        <span className="text-xl font-bold text-emerald-300">{bmi ? bmi.toFixed(1) : '—'}</span>
      </div>
      <p className="mt-2 text-xs text-slate-300">Status: {status}</p>
    </div>
  );
}

function CalorieCalc() {
  const [age, setAge] = useState('28');
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const [sex, setSex] = useState('male');
  const [activity, setActivity] = useState(1.55);

  const w = number(weight);
  const h = number(height);
  const a = number(age);

  // Mifflin-St Jeor
  const bmr = sex === 'male' ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
  const tdee = Math.round(bmr * Number(activity));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h3 className="mb-3 font-semibold">Daily Calorie Needs</h3>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm">
          Age
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
        </label>
        <label className="text-sm">
          Sex
          <select value={sex} onChange={(e) => setSex(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="text-sm">
          Height (cm)
          <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
        </label>
        <label className="text-sm">
          Weight (kg)
          <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400" />
        </label>
        <label className="col-span-2 text-sm">
          Activity Level
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-2 text-white outline-none focus:ring-2 focus:ring-emerald-400">
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Lightly Active</option>
            <option value={1.55}>Moderately Active</option>
            <option value={1.725}>Very Active</option>
            <option value={1.9}>Extra Active</option>
          </select>
        </label>
      </div>
      <div className="mt-4 rounded-lg bg-black/30 p-3 text-sm text-slate-300">
        Estimated maintenance calories: <span className="font-bold text-emerald-300">{Number.isFinite(tdee) ? tdee : '—'}</span> kcal/day
      </div>
    </div>
  );
}

export default function Calculators() {
  return (
    <section id="calculators" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <Calculator className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Interactive Calculators</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <BmiCalc />
        <CalorieCalc />
      </motion.div>
    </section>
  );
}
