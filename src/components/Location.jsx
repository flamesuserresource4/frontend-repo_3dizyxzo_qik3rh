import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-emerald-300" />
        <h2 className="text-2xl font-bold">Find Us</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="font-semibold">Never Settle – Family Fitness Studio</h3>
          <p className="mt-2 text-slate-300">Bengaluru, Karnataka</p>
          <p className="text-slate-300">Open: 6:00 AM – 9:00 PM</p>
          <a className="mt-4 inline-block rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-400" href="#lead-form">Book Free Trial</a>
        </div>
        <iframe
          title="Never Settle Location"
          className="h-72 w-full rounded-2xl border border-white/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.096109920086!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjciTiA3N8KwMzUnNDALjJF!5e0!3m2!1sen!2sin!4v1680000000000"
          allowFullScreen
        />
      </div>
    </section>
  );
}
