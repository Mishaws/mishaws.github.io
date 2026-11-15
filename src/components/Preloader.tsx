import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 820);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="flex flex-col items-center gap-4">
        <span className="font-serif text-4xl italic tracking-tight text-[#1e2530]">
          michael<span className="text-[#1e6f9c]">.</span>
        </span>
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6b7382]">
          initializing portfolio
        </span>
      </div>
    </div>
  );
}
