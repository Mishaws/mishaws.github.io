export type ProjectCategory = "all" | "networking" | "ai-systems" | "software";

export type ProjectVisualType =
  | "sber-ai"
  | "vhdl-fsm"
  | "enterprise-net"
  | "fkg-portal"
  | "ugm-net"
  | "game-oop";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  year: string;
  roleType: string;
  kicker: string;
  category: Exclude<ProjectCategory, "all">;
  visual: ProjectVisualType;
  hoverCaption: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
}

export interface TimelineEntry {
  organization: string;
  period: string;
  title: string;
  summary: string;
  bullets?: string[];
  tag: string;
}

export const PROFILE = {
  brand: "michael.",
  fullName: "Michael Christian",
  headlineRole: "Computer Engineering Undergraduate",
  university: "Universitas Indonesia",
  location: "Jakarta, Indonesia",
  gpa: "3.58 / 4.00",
  focus: "Network Infrastructure · Applied AI & LLMs · Full-Stack Systems",
  languages: "English & Bahasa Indonesia",
  email: "chirstianmichael023@gmail.com",
  github: "https://github.com/Mishaws",
  linkedin: "https://www.linkedin.com/in/michael-christian-98037a309",
  cvPath: "/cv/CV_Michael_2026.pdf",
};

export const HIGHLIGHTS = [
  {
    eyebrow: "AI Challenge",
    value: "5th & 12th",
    label: "SBER International AI Challenge (0.9477 Macro F1)",
  },
  {
    eyebrow: "Scholarship",
    value: "SPbPU Russia",
    label: "Winter University Turing Track — Fully Funded",
  },
  {
    eyebrow: "Networking",
    value: "CCNA · Top 10",
    label: "Cisco Certified & UGM National Networking 4.0",
  },
];

export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    organization: "Faculty of Dentistry, Universitas Indonesia",
    period: "Aug 2026 – Present",
    title: "Website Development Intern",
    tag: "Work Experience",
    summary:
      "Full-stack development for the faculty's official portal, bridging responsive interfaces with database-backed APIs.",
    bullets: [
      "Developed responsive web interfaces with React.js and Tailwind CSS, improving cross-device usability.",
      "Built RESTful APIs and backend services using Node.js and PostgreSQL for announcements, event registrations, and administrative workflows.",
    ],
  },
  {
    organization: "SPbPU — Peter the Great Saint Petersburg Polytechnic Univ.",
    period: "Nov – Dec 2026",
    title: "Winter University of Engineering Sciences — Turing Track",
    tag: "Fully Funded Awardee",
    summary:
      "Selected via competitive full scholarship for a 2-week international engineering program in Russia.",
    bullets: [
      "Focused on project-based applied Artificial Intelligence, data analytics, and cyber-physical systems in international teams.",
    ],
  },
  {
    organization: "Southeast Asia Immersion Leadership Programme",
    period: "Sep 2026",
    title: "Buddy / Participant (with Ngee Ann Polytechnic, Singapore)",
    tag: "International Sprint",
    summary:
      "Collaborated with Singaporean students in an intensive 5-day sprint designing an AI-based waste collection & recycling system for Jakarta.",
  },
  {
    organization: "Faculty of Engineering, Universitas Indonesia",
    period: "Sep – Dec 2025",
    title: "Student Assistant — Introduction to Engineering Design",
    tag: "Teaching",
    summary:
      "Mentored undergraduate teams on engineering design principles and coordinated final project exhibition layout and scheduling.",
  },
];

export const EDUCATION_TIMELINE: TimelineEntry[] = [
  {
    organization: "Universitas Indonesia",
    period: "Aug 2024 – Present",
    title: "Undergraduate Computer Engineering",
    tag: "GPA 3.58 / 4.00",
    summary:
      "Relevant coursework: Computer Networks, Cybersecurity, Operating Systems, Database, and AI/LLMs.",
  },
  {
    organization: "SMKN 44 Jakarta",
    period: "Jul 2021 – Jul 2024",
    title: "Computer and Network Engineering",
    tag: "Final Score: 90",
    summary:
      "Vocational grounding in router/switch deployment, WLAN infrastructure, and network administration.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "SBER International AI Challenge for Youth",
    year: "2026",
    roleType: "Applied AI & Computer Vision",
    kicker: "Qualification 5th Place (0.9477 Macro F1) · Main Stage 12th Place",
    category: "ai-systems",
    visual: "sber-ai",
    hoverCaption: "PyTorch · EfficientNet-V2-S · 5-Fold CV & 3D Mesh QC",
    bullets: [
      "Engineered a computer vision pipeline for the 'Noisy Weather Outside' task classifying extreme rain, fog, and snow from distorted autonomous driving imagery.",
      "Achieved 0.9477 Average Macro F1-score using EfficientNet-V2-S with 5-Fold Cross-Validation, TrivialAugmentWide, RandomErasing, and TTA ensembling.",
      "Main Stage: Built ML defect-detection models for '3D Mesh Quality Control' targeting topological noise, low polygon counts, and mesh intersections.",
    ],
    stack: ["PyTorch", "EfficientNet-V2-S", "5-Fold CV + TTA", "3D ML"],
  },
  {
    title: "Enterprise Network Architecture (CCNA 1–3)",
    year: "2025–2026",
    roleType: "Computer Networks Project",
    kicker: "Enterprise VLAN, Inter-VLAN Routing & DHCP Design",
    category: "networking",
    visual: "enterprise-net",
    hoverCaption: "Open Technical Architecture Reports (Google Drive)",
    bullets: [
      "Designed and configured real-world network topologies aligned with CCNA 1, 2, and 3 standards.",
      "Implemented VLAN segmentation, inter-VLAN routing, spanning tree, and automated DHCP addressing across enterprise-scale segments.",
    ],
    stack: ["Cisco", "VLAN", "DHCP", "OSPF", "Network Security"],
    links: [
      {
        label: "Report AF_12 ↗",
        href: "https://drive.google.com/file/d/1n1Lf9VCfLMh0i9zIZyy6mFue3J-k3M4b/view?usp=sharing",
      },
      {
        label: "Report PA-DMJ ↗",
        href: "https://drive.google.com/file/d/10CST7qI41o7xKNAAGSWTTYzuP7-zNu7A/view?usp=drive_link",
      },
    ],
  },
  {
    title: "VHDL Hotel Management System",
    year: "2025",
    roleType: "Digital System Design (RTL)",
    kicker: "Parameterized Finite State Machine in Xilinx Vivado",
    category: "ai-systems",
    visual: "vhdl-fsm",
    hoverCaption: "Inspect VHDL Source & Testbench on GitHub",
    bullets: [
      "Co-developed a parameterized FSM hardware architecture in VHDL supporting scalable floor and room generics.",
      "Implemented 16-bit reversed-ID PIN validation, emergency global lock-all, Night Mode auto-lock, and automated Wed/Sat morning housekeeping scheduling.",
      "Verified functional correctness and timing behavior via RTL synthesis and comprehensive testbench simulation with zero logical defects.",
    ],
    stack: ["VHDL", "Xilinx Vivado", "FSM", "RTL Synthesis"],
    links: [
      {
        label: "GitHub Repo ↗",
        href: "https://github.com/alwahibrr/Finpro-PSD-Kelompok-23",
      },
    ],
  },
  {
    title: "Faculty of Dentistry UI — Official Portal",
    year: "2026",
    roleType: "Full-Stack Web Engineering",
    kicker: "React.js Frontend & Node.js / PostgreSQL REST Services",
    category: "software",
    visual: "fkg-portal",
    hoverCaption: "React · Tailwind CSS · Node.js · PostgreSQL",
    bullets: [
      "Developed and optimized responsive web interfaces for the faculty's official portal to improve cross-device usability.",
      "Built backend services and RESTful APIs managing faculty announcements, event registrations, and administrative workflows.",
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    title: "National Networking Competition 4.0 UGM",
    year: "2026",
    roleType: "National Competition",
    kicker: "Team Leader — Top 10 Teams Nationally",
    category: "networking",
    visual: "ugm-net",
    hoverCaption: "9-Hour Cisco Packet Tracer Proof-of-Concept",
    bullets: [
      "Led team architecture strategy and hands-on network configuration & troubleshooting in Cisco Packet Tracer during an intensive 9-hour Proof of Concept (PoC) round.",
    ],
    stack: ["Cisco Packet Tracer", "Routing & Switching", "Troubleshooting"],
  },
  {
    title: "Fate / Emerald Abyss",
    year: "2025",
    roleType: "Object-Oriented Programming",
    kicker: "Turn-Based Java Game Engine & State Progression",
    category: "software",
    visual: "game-oop",
    hoverCaption: "Play Build on itch.io",
    bullets: [
      "Co-developed a turn-based Java game implementing core game state management, story progression, settings logic, and visual assets.",
    ],
    stack: ["Java", "OOP", "State Management"],
    links: [
      {
        label: "Play on itch.io ↗",
        href: "https://novanest.itch.io/fate-emerald-abyss",
      },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco · May 2026",
    detail:
      "Verified proficiency in VLANs, inter-VLAN routing, spanning tree, DHCP, and wireless networking essentials (WLAN configuration & security).",
    href: "https://www.credly.com/badges/1ad573d7-2ec1-4149-aa2c-cb758c7dfb30/linked_in_profile",
  },
  {
    title: "Junior Network Administrator (BNSP)",
    issuer: "KKNI Level II · Jul 2024 – Jul 2027",
    detail:
      "Certified competent in network configuration, routing protocols, and troubleshooting based on SKKNI standards.",
  },
];

export const SKILLS = [
  {
    group: "Networking",
    items: ["Cisco", "MikroTik", "WLAN (TP-Link)", "OSPF", "VLAN", "DHCP", "TCP/IP", "Network Security"],
  },
  {
    group: "Programming & Hardware",
    items: ["Python", "C", "C++", "Java", "VHDL (Xilinx Vivado)", "HTML / CSS", "SQL (PostgreSQL)"],
  },
  {
    group: "AI, Software & Tools",
    items: ["PyTorch / EfficientNet", "LLMs (Prompt & API)", "React.js", "Tailwind CSS", "Node.js", "Git", "Figma"],
  },
];
