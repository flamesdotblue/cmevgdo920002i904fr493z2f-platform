import { useEffect } from 'react';
import BackgroundSpline from './components/BackgroundSpline';
import HeaderNav from './components/HeaderNav';
import HeroContent from './components/HeroContent';
import SocialLinks from './components/SocialLinks';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-zinc-200 antialiased">
      {/* 3D Background */}
      <BackgroundSpline />

      {/* Subtle cyber glows above 3D but below content */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,133,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,180,255,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0) 0, rgba(0,0,0,0) calc(100% - 120px), rgba(0,0,0,0.7) 100%)' }} />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'>\
          <path d=\'M0 31h32v1H0zM31 0v32h1V0z\' fill=\'#00ff88\' fill-opacity=\'0.3\'/>\
        </svg>\
      ")' }} />

      <HeaderNav />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HeroContent />
      </main>

      <SocialLinks />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
