import type { ProjectVisualType } from "../data/portfolio";

interface ProjectVisualProps {
  type: ProjectVisualType;
  label: string;
}

export function ProjectVisual({ type, label }: ProjectVisualProps) {
  return (
    <div className="embed-visual flex items-center justify-center bg-[#f4f1ea] p-4">
      {type === "sber-ai" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <text x="24" y="34" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b7382">
            CV + 3D MESH PIPELINE
          </text>
          <rect x="24" y="48" width="56" height="36" rx="5" fill="#e3f0f7" stroke="#1e6f9c" />
          <text x="52" y="69" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#1e6f9c">
            5-Fold CV
          </text>
          <path d="M84 66 H102" stroke="#1e2530" strokeWidth="1.5" />
          <rect x="104" y="48" width="66" height="36" rx="5" fill="#f7e6d4" stroke="#c1600f" />
          <text x="137" y="69" textAnchor="middle" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            EffNet-V2-S
          </text>
          <path d="M174 66 H190" stroke="#1e2530" strokeWidth="1.5" />
          <rect x="192" y="48" width="44" height="36" rx="5" fill="#e6f2ea" stroke="#2f7a48" />
          <text x="214" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            0.9477
          </text>
          <text x="214" y="76" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            Macro F1
          </text>
          <text x="24" y="114" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#1e2530">
            Qualification: #5 · Main: #12
          </text>
        </svg>
      )}

      {type === "vhdl-fsm" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <text x="24" y="34" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b7382">
            XILINX VIVADO · FSM RTL
          </text>
          <circle cx="58" cy="78" r="21" fill="#e3f0f7" stroke="#1e6f9c" strokeWidth="1.5" />
          <text x="58" y="81" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#1e6f9c">
            IDLE
          </text>
          <path d="M81 74 Q105 56 126 70" fill="none" stroke="#1e2530" strokeWidth="1.4" />
          <circle cx="146" cy="78" r="22" fill="#f7e6d4" stroke="#c1600f" strokeWidth="1.5" />
          <text x="146" y="76" textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            PIN_CHK
          </text>
          <text x="146" y="86" textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            16-bit
          </text>
          <path d="M170 74 Q192 56 206 70" fill="none" stroke="#1e2530" strokeWidth="1.4" />
          <circle cx="216" cy="78" r="20" fill="#e6f2ea" stroke="#2f7a48" strokeWidth="1.5" />
          <text x="216" y="81" textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            ACTIVE
          </text>
          <path d="M24 118 H50 V109 H78 V118 H108 V109 H138 V118 H168" fill="none" stroke="#1e6f9c" strokeWidth="1.5" />
          <text x="176" y="117" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            0 defects
          </text>
        </svg>
      )}

      {type === "enterprise-net" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <text x="24" y="34" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b7382">
            CCNA TOPOLOGY · VLAN / DHCP
          </text>
          <rect x="104" y="42" width="52" height="24" rx="4" fill="#e3f0f7" stroke="#1e6f9c" />
          <text x="130" y="57" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#1e6f9c">
            Core Rtr
          </text>
          <path d="M118 66 L68 88 M142 66 L192 88" stroke="#4b5361" strokeWidth="1.5" />
          <rect x="36" y="88" width="64" height="26" rx="4" fill="#f7e6d4" stroke="#c1600f" />
          <text x="68" y="104" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            VLAN 10 · SW
          </text>
          <rect x="160" y="88" width="64" height="26" rx="4" fill="#e6f2ea" stroke="#2f7a48" />
          <text x="192" y="104" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            VLAN 20 · SW
          </text>
        </svg>
      )}

      {type === "fkg-portal" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <rect x="12" y="14" width="236" height="20" rx="8" fill="#efebe2" />
          <circle cx="24" cy="24" r="3" fill="#c1600f" />
          <circle cx="34" cy="24" r="3" fill="#1e6f9c" />
          <circle cx="44" cy="24" r="3" fill="#2f7a48" />
          <text x="60" y="27" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#4b5361">
            fkg.ui.ac.id // portal
          </text>
          <rect x="24" y="44" width="128" height="44" rx="5" fill="#e3f0f7" stroke="#1e6f9c" />
          <text x="34" y="63" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#1e6f9c">
            React + Tailwind UI
          </text>
          <text x="34" y="77" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#4b5361">
            Responsive Announcements
          </text>
          <rect x="162" y="44" width="74" height="78" rx="5" fill="#f7e6d4" stroke="#c1600f" />
          <text x="199" y="72" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            Node.js
          </text>
          <text x="199" y="86" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            REST API
          </text>
          <text x="199" y="100" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            PostgreSQL
          </text>
          <rect x="24" y="96" width="128" height="26" rx="5" fill="#f7f5f0" stroke="#dcd6c9" />
          <text x="34" y="112" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fill="#2f7a48">
            GET /api/events · 200 OK
          </text>
        </svg>
      )}

      {type === "ugm-net" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <text x="24" y="34" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b7382">
            UGM NNC 4.0 · 9-HR POC
          </text>
          <rect x="24" y="48" width="212" height="44" rx="6" fill="#e6f2ea" stroke="#2f7a48" />
          <text x="130" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Space Grotesk, sans-serif" fill="#2f7a48">
            Top 10 Teams Nationally
          </text>
          <text x="130" y="83" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#4b5361">
            Team Leader · Cisco Packet Tracer
          </text>
          <text x="24" y="116" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fill="#1e6f9c">
            Routing · Switching · Troubleshooting
          </text>
        </svg>
      )}

      {type === "game-oop" && (
        <svg viewBox="0 0 260 150" className="h-full w-full" aria-label={label}>
          <rect x="12" y="14" width="236" height="122" rx="8" fill="#ffffff" stroke="#dcd6c9" />
          <text x="24" y="34" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b7382">
            JAVA OOP · TURN-BASED ENGINE
          </text>
          <rect x="24" y="46" width="212" height="50" rx="6" fill="#f7e6d4" stroke="#c1600f" />
          <text x="130" y="68" textAnchor="middle" fontSize="15" fontStyle="italic" fontFamily="Instrument Serif, serif" fill="#1e2530">
            Fate / Emerald Abyss
          </text>
          <text x="130" y="84" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#c1600f">
            State Loop · Progression · Itch.io
          </text>
          <text x="24" y="118" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#4b5361">
            Core Engine &amp; Visual Assets
          </text>
        </svg>
      )}
    </div>
  );
}
