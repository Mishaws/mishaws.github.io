import { PROFILE } from "../data/portfolio";
import { IconAiChip, IconNetwork, IconRadio } from "./TechIcons";

/**
 * Compact neo-brutalist telemetry card representing Michael's core intersection:
 * Network Infrastructure <-> Telecom / RF <-> Applied AI.
 */
export function NetworkTelemetryCard() {
  return (
    <div className="brutal-box overflow-hidden">
      {/* Navy Brutalist Title Strip */}
      <div className="flex items-center justify-between border-b-2 border-[var(--ink)] bg-[var(--navy)] px-4 py-2.5 text-white">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
          NODE // UI-COMPENG
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider">
          <span className="h-2 w-2 animate-pulse bg-[#7dd3fc]" />
          ONLINE
        </span>
      </div>

      {/* Live Packet Architecture Strip */}
      <div className="border-b-2 border-[var(--ink)] bg-[var(--bg)] px-4 py-4">
        <div className="relative flex items-center justify-between gap-2">
          {/* Connecting animated dashed bus */}
          <svg
            className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2"
            height="14"
            viewBox="0 0 220 14"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="7"
              x2="220"
              y2="7"
              stroke="#162d50"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="packet-flow"
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-1 border-2 border-[var(--ink)] bg-white px-2.5 py-2 shadow-[2px_2px_0_0_var(--ink)]">
            <IconNetwork className="h-4 w-4 text-[var(--navy)]" />
            <span className="font-mono text-[9px] font-bold uppercase text-[var(--ink)]">
              NET
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-1 border-2 border-[var(--ink)] bg-white px-2.5 py-2 shadow-[2px_2px_0_0_var(--ink)]">
            <IconRadio className="h-4 w-4 text-[var(--blue-name)]" />
            <span className="font-mono text-[9px] font-bold uppercase text-[var(--ink)]">
              TELECOM
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-1 border-2 border-[var(--ink)] bg-white px-2.5 py-2 shadow-[2px_2px_0_0_var(--ink)]">
            <IconAiChip className="h-4 w-4 text-[var(--navy)]" />
            <span className="font-mono text-[9px] font-bold uppercase text-[var(--ink)]">
              AI / ML
            </span>
          </div>
        </div>
      </div>

      {/* Metadata Table */}
      <dl className="space-y-2.5 p-5 text-sm">
        <div className="border-b border-[var(--line)] pb-2">
          <dt className="font-mono text-[10px] font-bold uppercase text-[var(--ink-faint)]">
            University
          </dt>
          <dd className="mt-0.5 font-semibold text-[var(--ink)]">
            Universitas Indonesia · GPA {PROFILE.gpa}
          </dd>
        </div>
        <div className="border-b border-[var(--line)] pb-2">
          <dt className="font-mono text-[10px] font-bold uppercase text-[var(--ink-faint)]">
            Focus
          </dt>
          <dd className="mt-0.5 font-semibold text-[var(--ink)]">{PROFILE.interests}</dd>
        </div>
        <div className="border-b border-[var(--line)] pb-2">
          <dt className="font-mono text-[10px] font-bold uppercase text-[var(--ink-faint)]">
            Location
          </dt>
          <dd className="mt-0.5 font-semibold text-[var(--ink)]">{PROFILE.location}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] font-bold uppercase text-[var(--ink-faint)]">
            Languages
          </dt>
          <dd className="mt-0.5 font-semibold text-[var(--ink)]">{PROFILE.languages}</dd>
        </div>
      </dl>
    </div>
  );
}
