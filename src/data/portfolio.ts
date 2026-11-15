export type WorkMode = "research" | "industry" | "both";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  blurb: string;
  tags: string[];
  mode: WorkMode;
  emoji: string;
  links?: ProjectLink[];
}

export const PROFILE = {
  brand: "michael.",
  fullName: "Michael Christian",
  location: "Jakarta, Indonesia",
  degree: "B.Eng. Computer Engineering, Universitas Indonesia",
  gpa: "3.58 / 4.00",
  focus: "Networks · Applied AI & LLMs · Embedded Systems",
  languages: "English & Bahasa Indonesia",
  email: "chirstianmichael023@gmail.com",
  github: "https://github.com/Mishaws",
  linkedin: "https://www.linkedin.com/in/michael-christian-98037a309",
  cvPath: "/cv/CV_Michael_2026.pdf",
};

export const MARQUEE_ITEMS = [
  "networks × ai",
  "✦",
  "cisco ccna",
  "✦",
  "pytorch & llms",
  "✦",
  "full-stack systems",
  "✦",
  "vhdl hardware",
  "✦",
  "open to research",
  "✦",
];

export const HIGHLIGHTS = [
  {
    eyebrow: "AI Competition",
    title: "5th & 12th Place — SBER International AI Challenge",
    detail: "0.9477 Macro F1 (EfficientNet-V2-S, 5-Fold CV + TTA) in Qualification; ML 3D mesh defect detection in Main Stage.",
  },
  {
    eyebrow: "Scholarship Program",
    title: "SPbPU Winter University — Turing Track Awardee",
    detail: "Fully funded 2-week program in Russia on applied AI, data analytics, and cyber-physical systems (Nov – Dec 2026).",
  },
  {
    eyebrow: "Network Credentials",
    title: "Cisco CCNA & Top 10 UGM Networking",
    detail: "CCNA Switching, Routing, and Wireless Essentials (May 2026), BNSP JNA certified, and Top 10 nationally in 9-hour PoC.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "SBER International AI Challenge for Youth",
    period: "Aug – Sep 2026",
    blurb:
      "Ranked 5th in Qualification Stage ('Noisy Weather Outside', 0.9477 Average Macro F1-score using EfficientNet-V2-S, 5-Fold CV & TTA) and 12th in Main Stage ('3D Mesh Quality Control' defect-detection models).",
    tags: ["PyTorch", "EfficientNet-V2-S", "5th / 12th Place"],
    mode: "research",
    emoji: "🧠",
  },
  {
    title: "VHDL Hotel Management System (RTL / FPGA)",
    period: "Dec 2025",
    blurb:
      "Co-developed a parameterized Finite State Machine (FSM) hardware architecture in VHDL within Xilinx Vivado featuring 16-bit PIN validation, Night Mode auto-lock, and automated housekeeping scheduling verified via RTL synthesis.",
    tags: ["VHDL", "Xilinx Vivado", "FSM"],
    mode: "research",
    emoji: "🔌",
    links: [
      {
        label: "GitHub Repo ↗",
        href: "https://github.com/alwahibrr/Finpro-PSD-Kelompok-23",
      },
    ],
  },
  {
    title: "Enterprise Network Architecture (CCNA 1–3)",
    period: "Dec 2025 – May 2026",
    blurb:
      "Designed and configured enterprise-scale network topologies following CCNA 1, 2, and 3 standards, implementing VLANs, inter-VLAN routing, and DHCP for resilient multi-segment connectivity.",
    tags: ["Cisco", "VLAN", "DHCP", "Architecture"],
    mode: "both",
    emoji: "🌐",
    links: [
      {
        label: "Report I (AF_12) ↗",
        href: "https://drive.google.com/file/d/1n1Lf9VCfLMh0i9zIZyy6mFue3J-k3M4b/view?usp=sharing",
      },
      {
        label: "Report II (PA-DMJ) ↗",
        href: "https://drive.google.com/file/d/10CST7qI41o7xKNAAGSWTTYzuP7-zNu7A/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Faculty of Dentistry UI — Official Web Portal",
    period: "Aug 2026 – Present",
    blurb:
      "Website Development Intern building responsive frontend interfaces (React.js, Tailwind CSS) and RESTful backend APIs (Node.js, PostgreSQL) for faculty announcements, event registrations, and administrative workflows.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
    mode: "industry",
    emoji: "⚡",
  },
  {
    title: "National Networking Competition 4.0 UGM",
    period: "Jan 2026",
    blurb:
      "Team Leader guiding strategy, hands-on configuration, and troubleshooting in Cisco Packet Tracer during an intensive 9-hour Proof of Concept (PoC) round — finishing Top 10 Teams Nationally.",
    tags: ["Top 10 Nationally", "Cisco Packet Tracer", "PoC"],
    mode: "both",
    emoji: "🏆",
  },
  {
    title: "Fate/Emerald Abyss",
    period: "Nov – Dec 2025",
    blurb:
      "Co-developed a turn-based Java OOP game implementing core game state management, story progression, settings logic, and visual assets.",
    tags: ["Java", "OOP", "Game State"],
    mode: "industry",
    emoji: "🎮",
    links: [
      {
        label: "Play on itch.io ↗",
        href: "https://novanest.itch.io/fate-emerald-abyss",
      },
    ],
  },
];

export const EDUCATION = [
  {
    school: "Universitas Indonesia",
    program: "Undergraduate Computer Engineering",
    period: "Aug 2024 – Present",
    details:
      "Cumulative GPA: 3.58 / 4.00 · Relevant Coursework: Computer Networks, Cybersecurity, Operating Systems, Database, AI/LLMs.",
  },
  {
    school: "SMKN 44 Jakarta",
    program: "Computer and Network Engineering",
    period: "Jul 2021 – Jul 2024",
    details: "Final Score: 90 · Vocational foundation in routing, switching, and system administration.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco · May 2026",
    summary: "Verified proficiency in VLANs, inter-VLAN routing, spanning tree, DHCP, and WLAN configuration & security.",
    href: "https://www.credly.com/badges/1ad573d7-2ec1-4149-aa2c-cb758c7dfb30/linked_in_profile",
  },
  {
    title: "Junior Network Administrator (BNSP)",
    issuer: "KKNI Level II · Jul 2024 – Jul 2027",
    summary: "Certified competent in network configuration, routing protocols, and troubleshooting based on SKKNI standards.",
  },
];

export const PROGRAMS = [
  {
    title: "Winter University of Engineering Sciences — Turing Track",
    role: "Fully Funded Awardee · Nov – Dec 2026",
    detail:
      "Selected via full scholarship to Peter the Great Saint Petersburg Polytechnic University (SPbPU), Russia, focusing on project-based applied AI, data analytics, and cyber-physical systems.",
  },
  {
    title: "Southeast Asia Immersion Leadership Programme",
    role: "Buddy / Participant · Sep 2026",
    detail:
      "Collaborated with Ngee Ann Polytechnic (Singapore) students in a 5-day sprint designing an AI-based waste collection and recycling system for Jakarta.",
  },
];

export const SKILLS = [
  {
    group: "Networking",
    items: "Cisco, MikroTik, WLAN (TP-Link), OSPF, VLAN, DHCP, TCP/IP, Network Security & Architecture",
  },
  {
    group: "Programming & Hardware",
    items: "Python, C, C++, Java, VHDL (Xilinx Vivado), HTML/CSS, SQL (PostgreSQL)",
  },
  {
    group: "AI, Software & Tools",
    items: "PyTorch / EfficientNet, LLMs (Prompt Engineering, API Integration), React.js, Tailwind CSS, Node.js, Git",
  },
];
