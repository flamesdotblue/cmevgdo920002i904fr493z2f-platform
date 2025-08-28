import { useEffect, useRef, useState } from 'react';

const SPLINE_VIEWER_URL = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
const SCENE_URL = 'https://prod.spline.design/cahE4Z4BpuLzyNXs/scene.splinecode';

export default function BackgroundSpline() {
  const [ready, setReady] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!customElements.get('spline-viewer')) {
      if (!scriptLoadedRef.current) {
        const script = document.createElement('script');
        script.src = SPLINE_VIEWER_URL;
        script.type = 'module';
        script.async = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          setReady(true);
        };
        script.onerror = () => setReady(false);
        document.head.appendChild(script);
      }
    } else {
      setReady(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {ready ? (
        <spline-viewer
          url={SCENE_URL}
          class="h-full w-full block"
          style={{ width: '100%', height: '100%', opacity: 1, position: 'absolute', inset: 0 }}
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,180,255,0.12),transparent_55%)]" />
      )}
      {/* Gentle darkening so UI text is readable but 3D remains visible */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.15)_35%,rgba(0,0,0,0.35))]" />
    </div>
  );
}
