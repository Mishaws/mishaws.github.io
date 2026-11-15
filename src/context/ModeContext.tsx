import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type PortfolioMode = "research" | "industry";

interface ModeContextValue {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggle: () => void;
}

const STORAGE_KEY = "michael.portfolio.mode";

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "research" || saved === "industry") return saved;
    } catch {
      // Ignore storage access errors in restricted environments
    }
    return "research";
  });

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore storage access errors
    }
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "research" ? "industry" : "research"));
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return ctx;
}
