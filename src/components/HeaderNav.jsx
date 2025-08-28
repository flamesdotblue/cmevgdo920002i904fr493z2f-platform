import { Menu, Shield, Lock } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-emerald-500/20 blur" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-black/70 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              <Shield size={18} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-mono text-sm uppercase tracking-widest text-emerald-400">root@portfolio</div>
            <div className="-mt-0.5 text-xs text-zinc-400">/var/www/h4x0r</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a className="font-mono text-xs uppercase tracking-widest text-zinc-300 transition hover:text-emerald-400" href="#projects">Projects</a>
          <a className="font-mono text-xs uppercase tracking-widest text-zinc-300 transition hover:text-emerald-400" href="#skills">Skills</a>
          <a className="font-mono text-xs uppercase tracking-widest text-zinc-300 transition hover:text-emerald-400" href="#contact">Contact</a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-black/60 px-3 py-2 font-mono text-xs uppercase tracking-widest text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-emerald-500/40 transition hover:bg-emerald-500/10 focus:outline-none focus:ring-2 md:px-4">
          <Lock size={14} />
          Access
        </button>

        <button className="md:hidden">
          <Menu className="text-zinc-300" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
    </header>
  );
}
