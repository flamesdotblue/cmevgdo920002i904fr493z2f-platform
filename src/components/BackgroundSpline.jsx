import { useEffect, useRef, useState } from 'react';

const SPLINE_VIEWER_URL = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
const SCENE_URL = 'https://prod.spline.design/cahE4Z4BpuLzyNXs/scene.splinecode';

export default function BackgroundSpline() {
  const [ready, setReady] = useState(false);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Inject Spline Viewer script once
    if (!customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = SPLINE_VIEWER_URL;
      script.type = 'module';
      script.async = true;
      script.onload = () => setReady(true);
      script.onerror = () => setReady(false);
      document.head.appendChild(script);
      scriptRef.current = script;
    } else {
      setReady(true);
    }

    return () => {
      // Keep script for performance if navigating; do not remove
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {ready ? (
        <spline-viewer
          url={SCENE_URL}
          class="h-full w-full"
          style={{ width: '100%', height: '100%', opacity: 0.9 }}
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(0,180,255,0.12),transparent_55%)]" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}
