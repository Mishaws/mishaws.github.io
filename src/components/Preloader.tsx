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
        <span className="font-display text-4xl font-extrabold uppercase tracking-tight text-[#181d25]">
          michael<span className="text-[#1b4f96]">.</span>
        </span>
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#67707e]">
          loading portfolio
        </span>
      </div>
    </div>
  );
}
