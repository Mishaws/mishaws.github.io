import { useEffect, useState, type ReactNode } from "react";
import { BlueprintBackdrop } from "./components/BlueprintBackdrop";
import { CertificateCarousel } from "./components/CertificateCarousel";
import { NetworkTelemetryCard } from "./components/NetworkTelemetryCard";
import { Preloader } from "./components/Preloader";
import {
  IconAiChip,
  IconAward,
  IconGlobe,
  IconNetwork,
  IconRadio,
  IconTerminal,
} from "./components/TechIcons";
import {
  EDUCATION_TIMELINE,
  EXPERIENCE_TIMELINE,
  PROFILE,
  PROJECTS,
  SKILLS,
  type ProjectCategory,
} from "./data/portfolio";

const NAV_ITEMS = [
  { href: "#about", label: "about" },
  { href: "#resume", label: "resume" },
  { href: "#projects", label: "projects" },
  { href: "#credentials", label: "credentials" },
  { href: "#cv", label: "cv" },
  { href: "#contact", label: "contact" },
];

const PROJECT_FILTERS: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "networking", label: "Networks" },
  { key: "ai-systems", label: "AI & Hardware" },
  { key: "software", label: "Software & Web" },
];

const PROTOCOL_STRIP = [
  "NETWORK INFRASTRUCTURE",
  "//",
  "CISCO CCNA · OSPF · VLAN · DHCP",
  "//",
  "TELECOMMUNICATION SYSTEMS",
  "//",
  "PYTORCH · EFFICIENTNET · LLMS",
  "//",
  "VHDL · XILINX VIVADO",
  "//",
  "REACT · NODE.JS · POSTGRESQL",
  "//",
];

function getProjectIcon(badge: string) {
  switch (badge) {
    case "Networks":
      return <IconNetwork className="h-3.5 w-3.5" />;
    case "Competition":
      return <IconRadio className="h-3.5 w-3.5" />;
    case "AI & ML":
    case "Hardware":
      return <IconAiChip className="h-3.5 w-3.5" />;
    case "Industry":
      return <IconGlobe className="h-3.5 w-3.5" />;
    default:
      return <IconTerminal className="h-3.5 w-3.5" />;
  }
}

function getSkillIcon(group: string) {
  if (group === "Networking") return <IconNetwork className="h-4 w-4 text-[var(--navy)]" />;
  if (group.includes("Hardware")) return <IconAiChip className="h-4 w-4 text-[var(--navy)]" />;
  return <IconTerminal className="h-4 w-4 text-[var(--navy)]" />;
}

function RevealBlock({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

export function App() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const visibleProjects = PROJECTS.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

  const stripItems = [...PROTOCOL_STRIP, ...PROTOCOL_STRIP];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Preloader />

      {/* Minimalist sticky header */}
      <header className="sticky top-0 z-40 border-b-2 border-[var(--ink)] bg-[#f6f4ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-2xl font-extrabold uppercase tracking-tight text-[var(--ink)]"
          >
            michael<span className="text-[var(--blue-name)]">.</span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink-dim)]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--blue-name)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="paper-grid">
        {/* 01 // About & Hero with CAD/RF Blueprint Backdrop & Live Telemetry Node Card */}
        <section
          id="about"
          className="relative overflow-hidden border-b-2 border-[var(--ink)]"
        >
          <BlueprintBackdrop />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="grid items-start gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight md:text-7xl">
                  Hi, I&apos;m{" "}
                  <span className="text-[var(--blue-name)]">{PROFILE.fullName}</span>.
                </h1>
                <p className="mt-4 font-display text-xl font-bold tracking-tight text-[var(--ink-dim)] md:text-2xl">
                  Interested in artificial intelligence and network infrastructure.
                </p>

                <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-[var(--ink-dim)] md:text-lg">
                  I&apos;m a Computer Engineering student at Universitas Indonesia who genuinely
                  enjoys learning how things stay connected behind the scenes—and how software can
                  make them smarter. Most of my curiosity sits at the intersection of{" "}
                  <strong className="font-bold text-[var(--ink)]">artificial intelligence</strong>{" "}
                  and{" "}
                  <strong className="font-bold text-[var(--ink)]">network infrastructure</strong>,
                  because I love seeing how real systems communicate, scale, and adapt. Outside of
                  coursework, I spend my time joining engineering competitions, going on
                  international learning sprints, shipping side projects with friends, and picking up
                  new ideas wherever curiosity takes me.
                </p>

                <div className="mt-9 flex flex-wrap gap-3.5">
                  <a
                    href="#projects"
                    className="brutal-btn bg-[var(--navy)] px-5 py-3 text-xs uppercase tracking-wider text-white hover:bg-[var(--navy-hover)]"
                  >
                    Explore Projects ↓
                  </a>
                  <a
                    href="#resume"
                    className="brutal-btn bg-white px-5 py-3 text-xs uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--navy-soft)]"
                  >
                    View Resume
                  </a>
                  <a
                    href={PROFILE.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-[var(--bg-alt)] px-5 py-3 text-xs uppercase tracking-wider text-[var(--ink)] hover:bg-white"
                  >
                    CV PDF ↗
                  </a>
                </div>
              </div>

              <aside className="md:col-span-4">
                <NetworkTelemetryCard />
              </aside>
            </div>
          </div>
        </section>

        {/* Crisp Engineering Protocol Ticker Strip */}
        <div className="overflow-hidden border-b-2 border-[var(--ink)] bg-[var(--navy)] py-3 text-white">
          <div className="marquee-strip flex w-max gap-6 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.18em]">
            {stripItems.map((item, i) => (
              <span key={i} className={item === "//" ? "text-[#7dd3fc]" : ""}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 02 // Resume Timeline */}
        <RevealBlock
          id="resume"
          className="mx-auto max-w-5xl border-b-2 border-[var(--ink)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">02 // resume</div>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Experience &amp; <span className="text-[var(--blue-name)]">Education</span>
            </h2>
            <p className="max-w-md text-sm font-medium text-[var(--ink-dim)]">
              Academic journey, engineering internships, and international programs.
            </p>
          </div>

          <div className="brutal-box mt-10 p-6 md:p-10">
            <h3 className="mb-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
              <IconRadio className="h-4 w-4" />
              Experience &amp; International Programs
            </h3>
            <div className="resume-timeline">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div key={`${item.organization}-${item.title}`} className="timeline-row group">
                  <div className="timeline-left">
                    <p className="font-display text-sm font-bold leading-snug text-[var(--ink)]">
                      {item.organization}
                    </p>
                    <p className="mt-1 font-mono text-xs font-semibold text-[var(--blue-name)]">
                      {item.period}
                    </p>
                  </div>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-right">
                    <h4 className="font-display text-lg font-bold text-[var(--ink)]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {item.summary}
                    </p>
                    {item.bullets && (
                      <ul className="mt-2.5 space-y-1.5 text-sm text-[var(--ink-dim)]">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--navy)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="brutal-box mt-6 p-6 md:p-10">
            <h3 className="mb-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--navy)]">
              <IconAward className="h-4 w-4" />
              Education
            </h3>
            <div className="resume-timeline">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.organization} className="timeline-row group">
                  <div className="timeline-left">
                    <p className="font-display text-sm font-bold leading-snug text-[var(--ink)]">
                      {edu.organization}
                    </p>
                    <p className="mt-1 font-mono text-xs font-semibold text-[var(--blue-name)]">
                      {edu.period}
                    </p>
                  </div>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-right">
                    <h4 className="font-display text-lg font-bold text-[var(--ink)]">{edu.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {edu.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* 03 // Projects */}
        <RevealBlock
          id="projects"
          className="mx-auto max-w-5xl border-b-2 border-[var(--ink)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">03 // projects</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Selected <span className="text-[var(--blue-name)]">Work</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm font-medium text-[var(--ink-dim)]">
                Competitions, hardware/AI builds, network topologies, and software systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {PROJECT_FILTERS.map((f) => {
                const active = filter === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFilter(f.key)}
                    className={`brutal-btn cursor-pointer px-3.5 py-2 text-xs uppercase tracking-wider ${
                      active
                        ? "bg-[var(--navy)] text-white"
                        : "bg-white text-[var(--ink)] hover:bg-[var(--navy-soft)]"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project, idx) => (
              <article
                key={project.title}
                className="brutal-box brutal-box-hover flex h-full flex-col justify-between p-7"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--ink-faint)]">
                      0{idx + 1} // {project.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 border-2 border-[var(--ink)] bg-[var(--navy)] px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                      {getProjectIcon(project.badge)}
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-snug tracking-tight text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[var(--ink)] bg-[var(--bg)] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--ink)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="embed-action mt-5 flex flex-wrap gap-2.5 border-t-2 border-[var(--line-soft)] pt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutal-btn bg-white px-3 py-1.5 text-xs text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </RevealBlock>

        {/* 04 // Sliding Certificates Carousel & Technical Toolkit */}
        <RevealBlock
          id="credentials"
          className="mx-auto max-w-5xl border-b-2 border-[var(--ink)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">04 // credentials &amp; toolkit</div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Certificates &amp; <span className="text-[var(--blue-name)]">Skills</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm font-medium text-[var(--ink-dim)]">
            Verified networking credentials and core technical stack.
          </p>

          <CertificateCarousel />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SKILLS.map((group) => (
              <div key={group.group} className="brutal-box p-5">
                <p className="flex items-center gap-2 border-b-2 border-[var(--ink)] pb-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--navy)]">
                  {getSkillIcon(group.group)}
                  {group.group}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--ink)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>

        {/* 05 // Curriculum Vitae */}
        <RevealBlock
          id="cv"
          className="mx-auto max-w-5xl border-b-2 border-[var(--ink)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">05 // curriculum vitae</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                Full <span className="text-[var(--blue-name)]">CV</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-[var(--ink-dim)]">
                Preview or download my latest PDF CV directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PROFILE.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-white px-4 py-2 text-xs uppercase text-[var(--ink)] hover:bg-[var(--navy-soft)]"
              >
                Open in New Tab ↗
              </a>
              <a
                href={PROFILE.cvPath}
                download="CV_Michael_Christian_2026.pdf"
                className="brutal-btn bg-[var(--navy)] px-4 py-2 text-xs uppercase text-white hover:bg-[var(--navy-hover)]"
              >
                Download PDF ↓
              </a>
            </div>
          </div>

          <div className="brutal-box mt-6 overflow-hidden">
            <object
              data={PROFILE.cvPath}
              type="application/pdf"
              className="block h-[72vh] w-full"
              aria-label="Michael Christian CV PDF"
            >
              <div className="p-8 text-center">
                <p className="text-sm text-[var(--ink-dim)]">
                  Inline PDF preview is unavailable on this browser.
                </p>
                <a
                  href={PROFILE.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn mt-4 bg-[var(--navy)] px-5 py-2 text-xs uppercase text-white"
                >
                  Open CV PDF ↗
                </a>
              </div>
            </object>
          </div>
        </RevealBlock>

        {/* 06 // Contact */}
        <RevealBlock id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="brutal-box p-8 md:p-12">
            <div className="section-tag">06 // contact</div>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Let&apos;s <span className="text-[var(--blue-name)]">Connect</span>.
            </h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-[var(--ink-dim)] md:text-base">
              Open to research internships, AI or networking collaborations, and software
              engineering opportunities. Feel free to reach out in English or Bahasa Indonesia.
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="brutal-btn bg-[var(--navy)] px-5 py-3 text-xs text-white hover:bg-[var(--navy-hover)]"
              >
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-white px-5 py-3 text-xs uppercase text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white"
              >
                GitHub / Mishaws ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-white px-5 py-3 text-xs uppercase text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </RevealBlock>
      </main>

      <footer className="border-t-2 border-[var(--ink)] bg-[var(--bg)] py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs font-medium text-[var(--ink-faint)]">
          <p>© {new Date().getFullYear()} {PROFILE.fullName}</p>
          <p>NET · TELECOM · APPLIED AI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
