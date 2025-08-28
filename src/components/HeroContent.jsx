import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400/90">Initializing secure connection...</span>
        <div className="mt-4 text-balance font-mono text-4xl leading-tight text-zinc-100 sm:text-5xl md:text-6xl">
          <GlitchText text="HACK THE FUTURE" />
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-zinc-300/90 md:text-lg">
          Offensive security, reverse engineering, and creative coding. I build resilient systems and break brittle ones.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 font-mono text-xs uppercase tracking-widest text-emerald-300 transition hover:bg-emerald-500/20">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition group-hover:translate-x-full" />
            <span className="relative">View Projects</span>
          </a>
          <a href="#resume" className="inline-flex items-center gap-2 rounded-md border border-zinc-700/80 bg-black/60 px-5 py-3 font-mono text-xs uppercase tracking-widest text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-900/70">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {[
          'Binary Exploitation',
          'Web Security',
          'Reverse Engineering',
          'Malware Analysis',
        ].map((tag) => (
          <div key={tag} className="rounded border border-emerald-400/20 bg-black/40 px-3 py-2 text-center font-mono text-[11px] uppercase tracking-widest text-emerald-300/90">
            {tag}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function GlitchText({ text }) {
  return (
    <span className="relative inline-block select-none">
      <span className="relative z-10 block bg-clip-text text-transparent [background-image:linear-gradient(180deg,#e5fff5,rgba(229,255,245,0.6))]">
        {text}
      </span>
      <span aria-hidden className="pointer-events-none absolute inset-0 block translate-x-[2px] translate-y-[-1px] text-emerald-400/50 blur-[0.5px] mix-blend-screen">
        {text}
      </span>
      <span aria-hidden className="pointer-events-none absolute inset-0 block -translate-x-[2px] translate-y-[1px] text-cyan-400/60 blur-[0.5px] mix-blend-screen">
        {text}
      </span>
      <span aria-hidden className="pointer-events-none absolute -inset-x-2 -bottom-1 top-1 block animate-scanline bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.5)_3px)] opacity-20 mix-blend-overlay" />
      <Caret />
    </span>
  );
}

function Caret() {
  return (
    <span className="ml-2 inline-block h-[1em] w-[10px] translate-y-[4px] animate-caret rounded-sm bg-emerald-400/80 align-middle [box-shadow:0_0_12px_rgba(16,185,129,0.7)]" />
  );
}

// Add keyframes via injected style tag once
if (typeof document !== 'undefined' && !document.getElementById('hero-keyframes')) {
  const style = document.createElement('style');
  style.id = 'hero-keyframes';
  style.innerHTML = `
    @keyframes caret {
      0%, 45% { opacity: 1 }
      46%, 100% { opacity: 0 }
    }
    .animate-caret { animation: caret 1.2s steps(1, end) infinite }
  `;
  document.head.appendChild(style);
}
