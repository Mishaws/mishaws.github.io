import { useEffect, useState, type ReactNode } from "react";
import { CertificateCarousel } from "./components/CertificateCarousel";
import { Preloader } from "./components/Preloader";
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

const CARD_TILTS = ["-rotate-[0.6deg]", "rotate-[0.6deg]"];

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

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <Preloader />

      {/* Minimalist sticky header */}
      <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[#f7f5f0]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-2xl italic tracking-tight text-[var(--ink)]">
            {PROFILE.brand}
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--ink-dim)]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--navy)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="paper-grid">
        {/* 01 // About & Hero (clean, conversational, no highlights block below) */}
        <section
          id="about"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-24"
        >
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3.5 py-1 font-mono text-xs text-[var(--ink-dim)]">
                <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
                Computer Engineering @ Universitas Indonesia
              </div>

              <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Hi, I&apos;m {PROFILE.fullName}
                <span className="text-[var(--navy)]">.</span>
              </h1>
              <p className="mt-3 font-serif text-2xl italic text-[var(--ink-dim)] md:text-3xl">
                Exploring artificial intelligence and network infrastructure.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-dim)] md:text-lg">
                I&apos;m an undergraduate student who genuinely enjoys learning how things stay
                connected behind the scenes—and how software can make them smarter. Most of my
                curiosity sits at the intersection of{" "}
                <strong className="font-semibold text-[var(--ink)]">artificial intelligence</strong>{" "}
                and{" "}
                <strong className="font-semibold text-[var(--ink)]">network infrastructure</strong>,
                because I love seeing how real systems communicate, scale, and adapt. Outside of
                coursework, I spend my time joining engineering competitions, going on
                international learning sprints, shipping side projects with friends, and picking up
                new ideas wherever curiosity takes me.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--navy-hover)]"
                >
                  Explore Projects ↓
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:text-[var(--navy)]"
                >
                  View Resume
                </a>
                <a
                  href={PROFILE.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg-alt)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:text-[var(--navy)]"
                >
                  CV PDF ↗
                </a>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="rounded-xl border border-[var(--line)] bg-white p-6 shadow-xs">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--navy)]">
                  currently
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="border-b border-[var(--line-soft)] pb-2.5">
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">University</dt>
                    <dd className="mt-0.5 font-medium">Universitas Indonesia · GPA {PROFILE.gpa}</dd>
                  </div>
                  <div className="border-b border-[var(--line-soft)] pb-2.5">
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">Main Interests</dt>
                    <dd className="mt-0.5 font-medium">{PROFILE.interests}</dd>
                  </div>
                  <div className="border-b border-[var(--line-soft)] pb-2.5">
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">Location</dt>
                    <dd className="mt-0.5 font-medium">{PROFILE.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">Languages</dt>
                    <dd className="mt-0.5 font-medium">{PROFILE.languages}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        {/* 02 // Resume Timeline (clean timeline without unnecessary blue/orange pills) */}
        <RevealBlock
          id="resume"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">02 // resume</div>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Experience &amp; <span className="italic text-[var(--navy)]">Education</span>
            </h2>
            <p className="max-w-md text-sm text-[var(--ink-dim)]">
              Academic journey, engineering internships, and international programs.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--line)] bg-white p-6 md:p-10">
            <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--navy)]">
              Experience &amp; International Programs
            </h3>
            <div className="resume-timeline">
              {EXPERIENCE_TIMELINE.map((item) => (
                <div key={`${item.organization}-${item.title}`} className="timeline-row group">
                  <div className="timeline-left">
                    <p className="text-sm font-semibold leading-snug text-[var(--ink)]">
                      {item.organization}
                    </p>
                    <p className="mt-1 font-mono text-xs text-[var(--accent)]">{item.period}</p>
                  </div>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-right">
                    <h4 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {item.summary}
                    </p>
                    {item.bullets && (
                      <ul className="mt-2.5 space-y-1.5 text-sm text-[var(--ink-dim)]">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--navy)]" />
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

          <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-6 md:p-10">
            <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--navy)]">
              Education
            </h3>
            <div className="resume-timeline">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.organization} className="timeline-row group">
                  <div className="timeline-left">
                    <p className="text-sm font-semibold leading-snug text-[var(--ink)]">
                      {edu.organization}
                    </p>
                    <p className="mt-1 font-mono text-xs text-[var(--accent)]">{edu.period}</p>
                  </div>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-right">
                    <h4 className="text-lg font-semibold text-[var(--ink)]">{edu.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {edu.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* 03 // Projects (Framed cards, Navy secondary badge, no emojis) */}
        <RevealBlock
          id="projects"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">03 // projects</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Selected <span className="italic text-[var(--navy)]">Work</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--ink-dim)]">
                Competitions, hardware/AI builds, network topologies, and software systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {PROJECT_FILTERS.map((f) => {
                const active = filter === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFilter(f.key)}
                    className={`cursor-pointer rounded-md border px-3 py-1.5 font-mono text-xs transition-all ${
                      active
                        ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                        : "border-[var(--line)] bg-white text-[var(--ink-dim)] hover:border-[var(--navy)] hover:text-[var(--navy)]"
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
                className={`embed-card flex h-full flex-col justify-between p-7 ${
                  CARD_TILTS[idx % CARD_TILTS.length]
                }`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-medium text-[var(--ink-faint)]">
                      {project.year}
                    </span>
                    <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--navy)] px-3 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-white">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl leading-tight text-[var(--ink)]">
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
                        className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--ink-dim)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="embed-action mt-5 flex flex-wrap gap-3 border-t border-[var(--line-soft)] pt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--navy)] hover:underline"
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
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">04 // credentials &amp; toolkit</div>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
            Certificates &amp; <span className="italic text-[var(--navy)]">Skills</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[var(--ink-dim)]">
            Verified networking credentials and core technical stack.
          </p>

          <CertificateCarousel />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SKILLS.map((group) => (
              <div
                key={group.group}
                className="rounded-xl border border-[var(--line)] bg-white p-5"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--navy)]">
                  {group.group}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[var(--line-soft)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-dim)]"
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
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">05 // curriculum vitae</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Full <span className="italic text-[var(--navy)]">CV</span>
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-dim)]">
                Preview or download my latest PDF CV directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={PROFILE.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--line)] bg-white px-4 py-2 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:text-[var(--navy)]"
              >
                Open in New Tab ↗
              </a>
              <a
                href={PROFILE.cvPath}
                download="CV_Michael_Christian_2026.pdf"
                className="rounded-lg bg-[var(--navy)] px-4 py-2 font-mono text-xs font-medium text-white transition-colors hover:bg-[var(--navy-hover)]"
              >
                Download PDF ↓
              </a>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-white">
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
                  className="mt-4 inline-block rounded-lg bg-[var(--navy)] px-5 py-2 font-mono text-xs text-white"
                >
                  Open CV PDF ↗
                </a>
              </div>
            </object>
          </div>
        </RevealBlock>

        {/* 06 // Contact */}
        <RevealBlock id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-8 md:p-12">
            <div className="section-tag">06 // contact</div>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
              Let&apos;s <span className="italic text-[var(--navy)]">connect</span>.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-dim)] md:text-base">
              Open to research internships, AI or networking collaborations, and software
              engineering opportunities. Feel free to reach out in English or Bahasa Indonesia.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--navy-hover)]"
              >
                Email: {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:text-[var(--navy)]"
              >
                GitHub / Mishaws ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:text-[var(--navy)]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </RevealBlock>
      </main>

      <footer className="border-t border-[var(--line-soft)] bg-[var(--bg)] py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-[var(--ink-faint)]">
          <p>© {new Date().getFullYear()} {PROFILE.fullName}</p>
          <p className="font-mono">built with React · Vite · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
