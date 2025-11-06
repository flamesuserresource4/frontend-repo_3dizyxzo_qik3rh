import { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const item = (
    <ul className="flex flex-col gap-2 p-4 text-sm sm:flex-row sm:items-center sm:gap-6 sm:p-0">
      <li><a href="#pricing" className="text-white/90 hover:text-white">Pricing</a></li>
      <li><a href="#schedule" className="text-white/90 hover:text-white">Schedule</a></li>
      <li><a href="#testimonials" className="text-white/90 hover:text-white">Stories</a></li>
      <li><a href="#faq" className="text-white/90 hover:text-white">FAQ</a></li>
      <li><a href="#location" className="text-white/90 hover:text-white">Location</a></li>
      <li>
        <a href="#lead-form" className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 shadow-emerald-500/30 hover:bg-emerald-400">
          Book Free Trial
        </a>
      </li>
    </ul>
  );

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur transition ${scrolled ? 'bg-slate-950/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#" className="flex items-center gap-2 font-bold">
          <Dumbbell className="h-5 w-5 text-emerald-300" /> Never Settle
        </a>
        <div className="hidden sm:block">{item}</div>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="sm:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-slate-950/90">{item}</div>
      )}
    </header>
  );
}
