export type ProjectCategory = "all" | "networking" | "ai-systems" | "software";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  year: string;
  badge: string;
  category: Exclude<ProjectCategory, "all">;
  summary: string;
  tags: string[];
  links?: ProjectLink[];
}

export interface TimelineEntry {
  organization: string;
  period: string;
  title: string;
  summary: string;
  bullets?: string[];
}

export interface CertificateItem {
  title: string;
  categoryLabel: string;
  issuer: string;
  date: string;
  summary: string;
  imageSrc: string;
  documentSrc: string;
  verifyHref?: string;
}

export const PROFILE = {
  brand: "michael.",
  fullName: "Michael Christian",
  headlineRole: "Computer Engineering Undergraduate",
  university: "Universitas Indonesia",
  location: "Jakarta, Indonesia",
  gpa: "3.58 / 4.00",
  interests: "Artificial Intelligence · Network Infrastructure",
  languages: "English & Bahasa Indonesia",
  email: "chirstianmichael023@gmail.com",
  github: "https://github.com/Mishaws",
  linkedin: "https://www.linkedin.com/in/michael-christian-98037a309",
  cvPath: "/cv/CV_ATS_Michael_2026-4.pdf",
};

export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    organization: "Faculty of Dentistry, Universitas Indonesia",
    period: "Aug 2026 – Present",
    title: "Website Development Intern",
    summary:
      "Building and maintaining the faculty's official portal across responsive frontend views and database-backed REST APIs.",
    bullets: [
      "Developed and optimized responsive web interfaces using React.js and Tailwind CSS, improving cross-device usability.",
      "Built backend services and RESTful APIs using Node.js and PostgreSQL to manage announcements, event registrations, and administrative workflows.",
    ],
  },
  {
    organization: "SPbPU — Peter the Great Saint Petersburg Polytechnic Univ.",
    period: "Nov – Dec 2026",
    title: "Winter University of Engineering Sciences — Turing Track",
    summary:
      "Selected via competitive full scholarship for a 2-week international engineering program in Russia focusing on applied AI, data analytics, and cyber-physical systems.",
  },
  {
    organization: "Southeast Asia Immersion Leadership Programme",
    period: "Sep 2026",
    title: "Buddy / Participant (with Ngee Ann Polytechnic, Singapore)",
    summary:
      "Collaborated with Singaporean students in a 5-day sprint designing an AI-based waste collection and recycling concept for Jakarta.",
  },
  {
    organization: "Faculty of Engineering, Universitas Indonesia",
    period: "Sep – Dec 2025",
    title: "Student Assistant — Introduction to Engineering Design",
    summary:
      "Mentored undergraduate teams on engineering design principles and coordinated layout and scheduling for the final project exhibition.",
  },
];

export const EDUCATION_TIMELINE: TimelineEntry[] = [
  {
    organization: "Universitas Indonesia",
    period: "Aug 2024 – Present",
    title: "Undergraduate Computer Engineering",
    summary:
      "Coursework across Computer Networks, Cybersecurity, Operating Systems, Databases, and AI/LLMs.",
  },
  {
    organization: "SMKN 44 Jakarta",
    period: "Jul 2021 – Jul 2024",
    title: "Computer and Network Engineering",
    summary:
      "Vocational foundation in routing, switching, WLAN infrastructure, and network administration.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "SBER International AI Challenge for Youth",
    year: "2026",
    badge: "AI & ML",
    category: "ai-systems",
    summary:
      "Ranked 5th in Qualification ('Noisy Weather Outside', 0.9477 Macro F1 via EfficientNet-V2-S, 5-Fold CV & 10-pass TTA) and 12th in Main Stage ('3D Mesh Quality Control', 13.711/20.0 via 512×768 EfficientNetV2 on 6-view normal renders & deterministic quality rules).",
    tags: ["PyTorch", "EfficientNetV2", "5-Fold CV", "6-View 3D QC"],
    links: [
      {
        label: "GitHub Repo ↗",
        href: "https://github.com/Mishaws/sber-ai-challenge-2026",
      },
    ],
  },
  {
    title: "Premier League Multi-Site Network Infrastructure",
    year: "2026",
    badge: "Network",
    category: "networking",
    summary:
      "Architected and simulated a 6-site enterprise network (HQ, VAR Central, and 4 stadiums) in Cisco Packet Tracer with Frame Relay WAN, Hybrid EIGRP–OSPF redistribution, LACP EtherChannel, HSRP gateway redundancy, GRE tunneling, ACLs, and Syslog/SNMP/NetFlow monitoring.",
    tags: ["Packet Tracer", "Hybrid Routing", "HSRP / LACP", "GRE & ACL"],
    links: [
      {
        label: "Project Report PDF ↗",
        href: "/reports/project-jaringan.pdf",
      },
    ],
  },
  {
    title: "Enterprise Network Architecture (CCNA 1–3)",
    year: "2025–2026",
    badge: "Networks",
    category: "networking",
    summary:
      "Designed and configured enterprise-scale topologies based on CCNA 1–3 standards, implementing VLAN segmentation, inter-VLAN routing, and automated DHCP addressing.",
    tags: ["Cisco", "VLAN", "DHCP", "OSPF"],
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
    badge: "Hardware",
    category: "ai-systems",
    summary:
      "Parameterized Finite State Machine architecture in VHDL (Xilinx Vivado) with 16-bit PIN validation, Night Mode auto-lock, and automated housekeeping scheduling verified with zero defects.",
    tags: ["VHDL", "Xilinx Vivado", "FSM", "RTL"],
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
    badge: "Industry",
    category: "software",
    summary:
      "Responsive faculty web portal with React.js & Tailwind CSS frontend paired with Node.js and PostgreSQL RESTful services for announcements and event registrations.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    title: "National Networking Competition 4.0 UGM",
    year: "2026",
    badge: "Network",
    category: "networking",
    summary:
      "Team Leader finishing Top 10 Nationally after leading topology design, hands-on configuration, and troubleshooting in Cisco Packet Tracer during a 9-hour Proof of Concept round.",
    tags: ["Top 10 Nationally", "Packet Tracer", "Routing"],
  },
  {
    title: "Fate / Emerald Abyss",
    year: "2025",
    badge: "Software",
    category: "software",
    summary:
      "Co-developed a turn-based Java OOP game featuring core game state management, story progression, settings logic, and original visual assets.",
    tags: ["Java", "OOP", "Game Engine"],
    links: [
      {
        label: "Play on itch.io ↗",
        href: "https://novanest.itch.io/fate-emerald-abyss",
      },
    ],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    categoryLabel: "CERTIFICATE · CISCO NETWORKING ACADEMY",
    issuer: "Faculty of Engineering, Universitas Indonesia",
    date: "28 May 2026",
    summary:
      "Verified proficiency in VLAN segmentation, inter-VLAN routing, spanning tree protocol, DHCP, and wireless LAN configuration & security.",
    imageSrc: "/certificates/ccna-srwe.png",
    documentSrc: "/certificates/ccna-srwe.pdf",
    verifyHref: "https://www.credly.com/badges/1ad573d7-2ec1-4149-aa2c-cb758c7dfb30/linked_in_profile",
  },
  {
    title: "CCNA: Introduction to Networks",
    categoryLabel: "CERTIFICATE · CISCO NETWORKING ACADEMY",
    issuer: "Faculty of Engineering, Universitas Indonesia",
    date: "28 May 2026",
    summary:
      "Foundational networking architecture covering OSI/TCP-IP models, IPv4/IPv6 subnetting, Ethernet switching, and router configuration.",
    imageSrc: "/certificates/ccna-itn.png",
    documentSrc: "/certificates/ccna-itn.pdf",
    verifyHref: "https://www.credly.com/badges/1652220b-29c9-4d7d-999c-f2a5c499ece2/linked_in_profile",
  },
  {
    title: "Junior Network Administrator (BNSP)",
    categoryLabel: "CERTIFICATE OF COMPETENCE · KKNI LEVEL II",
    issuer: "BNSP — PPPP Central Jakarta LSP",
    date: "Jul 2024 – Jul 2027",
    summary:
      "National professional competency certification in Computer Network Engineering covering routing protocols, switching, and network troubleshooting.",
    imageSrc: "/certificates/bnsp-jna.png",
    documentSrc: "/certificates/bnsp-jna.png",
  },
];
