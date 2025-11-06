import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const weekly = [
  { day: 'Mon', classes: [
    { time: '6:00 AM', name: 'HIIT', level: 'All Levels' },
    { time: '7:00 AM', name: 'Yoga Flow', level: 'Beginner' },
    { time: '6:30 PM', name: 'Strength Camp', level: 'Intermediate' },
  ]},
  { day: 'Tue', classes: [
    { time: '6:00 AM', name: 'Mobility', level: 'All Levels' },
    { time: '7:00 AM', name: 'Kids Fitness', level: 'Ages 6–12' },
    { time: '7:00 PM', name: 'Zumba', level: 'All Levels' },
  ]},
  { day: 'Wed', classes: [
    { time: '6:00 AM', name: 'HIIT', level: 'All Levels' },
    { time: '7:00 AM', name: 'Yoga Strength', level: 'All Levels' },
    { time: '6:30 PM', name: 'Strength Camp', level: 'Intermediate' },
  ]},
  { day: 'Thu', classes: [
    { time: '6:00 AM', name: 'Core Blast', level: 'All Levels' },
    { time: '7:00 AM', name: 'Kids Fitness', level: 'Ages 6–12' },
    { time: '7:00 PM', name: 'Dance Fitness', level: 'All Levels' },
  ]},
  { day: 'Fri', classes: [
    { time: '6:00 AM', name: 'HIIT', level: 'All Levels' },
    { time: '7:00 AM', name: 'Yoga Flow', level: 'Beginner' },
    { time: '6:00 PM', name: 'Mobility', level: 'All Levels' },
  ]},
  { day: 'Sat', classes: [
    { time: '7:30 AM', name: 'Community Bootcamp', level: 'All Levels' },
    { time: '9:00 AM', name: 'Family Workout', level: 'All Ages' },
  ]},
  { day: 'Sun', classes: [
    { time: '8:00 AM', name: 'Recovery Yoga', level: 'All Levels' },
  ]},
];

export default function Schedule() {
  const data = useMemo(() => weekly, []);

  return (
    <section id="schedule" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Weekly Class Schedule</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((d) => (
          <motion.div
            key={d.day}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <h3 className="mb-3 text-lg font-semibold">{d.day}</h3>
            <ul className="space-y-2">
              {d.classes.map((c, i) => (
                <li key={i} className="flex items-center justify-between rounded-lg bg-black/30 p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-300" />
                    <span className="text-slate-200">{c.time}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-slate-300">{c.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
