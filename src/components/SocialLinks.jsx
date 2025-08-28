import { Github, Linkedin, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="pointer-events-auto fixed bottom-6 left-6 z-20 hidden flex-col items-center gap-3 sm:flex">
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="group rounded-md border border-emerald-400/30 bg-black/60 p-2 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
      >
        <Github size={18} />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="group rounded-md border border-emerald-400/30 bg-black/60 p-2 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
      >
        <Twitter size={18} />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="group rounded-md border border-emerald-400/30 bg-black/60 p-2 text-zinc-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
      >
        <Linkedin size={18} />
      </a>
      <div className="mt-2 h-8 w-px bg-gradient-to-b from-emerald-400/50 to-transparent" />
    </div>
  );
}
