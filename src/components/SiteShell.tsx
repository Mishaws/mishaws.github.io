import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useMode } from "../context/ModeContext";
import { PROFILE } from "../data/portfolio";

const NAV_LINKS = [
  { to: "/", label: "home" },
  { to: "/work", label: "work" },
  { to: "/about", label: "about" },
  { to: "/cv", label: "cv" },
  { to: "/contact", label: "contact" },
] as const;

const TOGGLE_HINT_KEY = "michael.toggle.used";

function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="grain absolute inset-0 opacity-40" />
      <div
        className="blob absolute -left-32 -top-32 h-96 w-96 opacity-30"
        style={{ background: "var(--color-pop)" }}
      />
      <div
        className="blob absolute -right-40 top-1/2 h-[28rem] w-[28rem] opacity-20"
        style={{ background: "var(--color-pop-soft)", animationDelay: "-4s" }}
      />
    </div>
  );
}

function HeaderNav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link to="/" className="font-serif text-2xl italic tracking-tight">
        {PROFILE.brand}
      </Link>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "text-[var(--color-pop)] font-medium" }}
            className="transition-colors hover:text-[var(--color-pop)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function FloatingModeToggle() {
  const { mode, toggle } = useMode();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(TOGGLE_HINT_KEY) === "1") {
        setHasInteracted(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleToggle = () => {
    toggle();
    if (!hasInteracted) {
      setHasInteracted(true);
      try {
        localStorage.setItem(TOGGLE_HINT_KEY, "1");
      } catch {
        // Ignore storage access errors
      }
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex flex-col items-center gap-2 px-4">
      {!hasInteracted && (
        <div className="toggle-hint flex items-center gap-2 rounded-full bg-[var(--color-pop)] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-background)] shadow-lg">
          <span>switch view</span>
          <span aria-hidden="true">↓</span>
        </div>
      )}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={`Switch to ${mode === "research" ? "industry" : "research"} mode`}
        className={`sticker toggle-pulse group relative flex h-14 w-[22rem] max-w-[calc(100vw-2rem)] cursor-pointer items-center rounded-full bg-card p-1 text-sm font-medium ${
          hasInteracted ? "" : "toggle-bounce"
        }`}
      >
        <span
          className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-[var(--color-pop)] transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] ${
            mode === "research" ? "left-1" : "left-[calc(50%+0.125rem)]"
          }`}
        />
        <span
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 transition-all duration-300 ${
            mode === "research"
              ? "scale-105 text-[var(--color-background)]"
              : "text-foreground opacity-60 hover:opacity-100"
          }`}
        >
          <span aria-hidden="true">🔬</span>
          <span className="font-serif text-base italic">research</span>
        </span>
        <span
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 transition-all duration-300 ${
            mode === "industry"
              ? "scale-105 text-[var(--color-background)]"
              : "text-foreground opacity-60 hover:opacity-100"
          }`}
        >
          <span className="font-serif text-base italic">industry</span>
          <span aria-hidden="true">⚡</span>
        </span>
        {!hasInteracted && (
          <>
            <span
              aria-hidden="true"
              className="toggle-arrow-left pointer-events-none absolute -left-7 top-1/2 -translate-y-1/2 font-mono text-lg text-[var(--color-pop)]"
            >
              ←
            </span>
            <span
              aria-hidden="true"
              className="toggle-arrow-right pointer-events-none absolute -right-7 top-1/2 -translate-y-1/2 font-mono text-lg text-[var(--color-pop)]"
            >
              →
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { mode } = useMode();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackdrop />
      <HeaderNav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-40">{children}</main>
      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-12 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p>
            © {new Date().getFullYear()} {PROFILE.fullName}.
          </p>
          <p className="font-mono text-xs">mode = {mode}</p>
        </div>
      </footer>
      <FloatingModeToggle />
    </div>
  );
}
