/**
 * Subtle architectural CAD / RF-signal vector geometry behind the Hero section.
 * Pure low-opacity technical linework—no clutter, no AI-generated raster art.
 */
export function BlueprintBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -right-24 -top-16 h-[540px] w-[540px] text-[#162d50] opacity-[0.06]"
        viewBox="0 0 500 500"
        fill="none"
      >
        {/* Concentric RF / Signal propagation arcs */}
        <circle cx="380" cy="120" r="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
        <circle cx="380" cy="120" r="165" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="380" cy="120" r="245" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 8" />
        <circle cx="380" cy="120" r="330" stroke="currentColor" strokeWidth="1" />

        {/* Orthogonal circuit / packet traces */}
        <path d="M20 420 H180 V260 H380" stroke="currentColor" strokeWidth="1.5" />
        <path d="M60 460 H220 V300 H380" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <path d="M380 120 L250 250 L110 250" stroke="currentColor" strokeWidth="1.2" />

        {/* Crosshair nodes */}
        <rect x="374" y="114" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
        <rect x="175" y="255" width="10" height="10" fill="currentColor" />
        <rect x="245" y="245" width="10" height="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
