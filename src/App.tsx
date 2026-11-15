import { useEffect, useState, type ReactNode } from "react";
import { Preloader } from "./components/Preloader";
import { ProjectVisual } from "./components/ProjectVisual";
import {
  CERTIFICATIONS,
  EDUCATION_TIMELINE,
  EXPERIENCE_TIMELINE,
  HIGHLIGHTS,
  PROFILE,
  PROJECTS,
  SKILLS,
  type ProjectCategory,
} from "./data/portfolio";

const NAV_ITEMS = [
  { href: "#about", label: "about" },
  { href: "#resume", label: "resume" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#cv", label: "cv" },
  { href: "#contact", label: "contact" },
];

const PROJECT_FILTERS: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "networking", label: "Networks" },
  { key: "ai-systems", label: "AI & Hardware" },
  { key: "software", label: "Software & Web" },
];

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

      {/* Minimalist sticky header (Karina baseline + clean section navigation) */}
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
                className="transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="paper-grid">
        {/* 01 // Hero (Karina warm light minimalism, unique copy) */}
        <section
          id="about"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-24"
        >
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3.5 py-1 font-mono text-xs text-[var(--ink-dim)]">
                <span className="h-2 w-2 rounded-full bg-[var(--emerald)]" />
                Open to research internships &amp; engineering roles
              </div>

              <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
                {PROFILE.fullName}
                <span className="text-[var(--accent)]">.</span>
              </h1>
              <p className="mt-3 font-serif text-2xl italic text-[var(--ink-dim)] md:text-3xl">
                Building resilient networks &amp; applied AI systems.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-dim)] md:text-lg">
                Computer Engineering undergraduate at{" "}
                <strong className="font-semibold text-[var(--ink)]">Universitas Indonesia</strong>{" "}
                combining{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  Cisco/MikroTik network infrastructure
                </strong>{" "}
                with{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  PyTorch, LLM workflows, and full-stack engineering
                </strong>
                . Focused on practical, well-documented systems built for real testbeds.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
                >
                  Explore Projects ↓
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Scroll to Resume
                </a>
                <a
                  href={PROFILE.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg-alt)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--warm)] hover:text-[var(--warm)]"
                >
                  CV PDF ↗
                </a>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="rounded-xl border border-[var(--line)] bg-white p-6 shadow-xs">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--warm)]">
                  snapshot
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="border-b border-[var(--line-soft)] pb-2.5">
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">University</dt>
                    <dd className="mt-0.5 font-medium">Universitas Indonesia · GPA {PROFILE.gpa}</dd>
                  </div>
                  <div className="border-b border-[var(--line-soft)] pb-2.5">
                    <dt className="font-mono text-[11px] text-[var(--ink-faint)]">Focus Areas</dt>
                    <dd className="mt-0.5 font-medium">{PROFILE.focus}</dd>
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

          {/* Minimalist 3-stat band */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.eyebrow}
                className="rounded-xl border border-[var(--line)] bg-white/80 px-5 py-4 transition-colors hover:bg-white"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--warm)]">
                  {item.eyebrow}
                </p>
                <p className="mt-1 font-serif text-3xl text-[var(--ink)]">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--ink-dim)]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 02 // Resume Timeline (Hellobayu-inspired two-column timeline in light editorial theme) */}
        <RevealBlock
          id="resume"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">02 // resume</div>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Experience &amp; <span className="italic text-[var(--accent)]">Education</span>
            </h2>
            <p className="max-w-md text-sm text-[var(--ink-dim)]">
              Academic trajectory, engineering internships, and international research sprints.
            </p>
          </div>

          {/* Work & International Programs Timeline */}
          <div className="mt-10 rounded-2xl border border-[var(--line)] bg-white p-6 md:p-10">
            <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
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
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-semibold text-[var(--ink)]">{item.title}</h4>
                      <span className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[11px] text-[var(--accent)]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {item.summary}
                    </p>
                    {item.bullets && (
                      <ul className="mt-2.5 space-y-1.5 text-sm text-[var(--ink-dim)]">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--warm)]" />
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

          {/* Education Timeline */}
          <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-6 md:p-10">
            <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--warm)]">
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
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-semibold text-[var(--ink)]">{edu.title}</h4>
                      <span className="rounded-md bg-[var(--warm-soft)] px-2 py-0.5 font-mono text-[11px] text-[var(--warm)]">
                        {edu.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                      {edu.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* 03 // Projects (Hanifaufa row layout in light paper theme + Cheryllao animated hover embeds) */}
        <RevealBlock
          id="projects"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">03 // projects</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                Selected <span className="italic text-[var(--accent)]">Work</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--ink-dim)]">
                Competitions, hardware/AI builds, network topologies, and software systems. Hover
                each embed card to inspect details or open source artifacts.
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
                        ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                        : "border-[var(--line)] bg-white text-[var(--ink-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {visibleProjects.map((project) => {
              const primaryLink = project.links?.[0];
              return (
                <article
                  key={project.title}
                  className="project-row grid gap-6 p-6 md:grid-cols-12 md:p-7"
                >
                  {/* Left metadata + bullets (Hanifaufa structure) */}
                  <div className="flex flex-col justify-between md:col-span-8">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-mono text-lg font-bold text-[var(--accent)]">
                          {project.year}
                        </span>
                        <span className="font-mono text-xs text-[var(--ink-faint)]">
                          // {project.roleType}
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--ink)]">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-[var(--warm)]">{project.kicker}</p>

                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ink-dim)]">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line-soft)] pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[var(--line)] bg-[var(--bg)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--ink-dim)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded border border-[var(--line)] bg-white px-2.5 py-1 font-mono text-xs font-medium text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right visual embed with Cheryllao hover zoom & glass overlay */}
                  <div className="md:col-span-4">
                    <div className="embed-frame h-44 w-full md:h-full md:min-h-[180px]">
                      <ProjectVisual type={project.visual} label={project.title} />
                      <div className="embed-overlay">
                        <span className="embed-overlay-pill font-mono text-[11px] font-medium text-[var(--ink)]">
                          {project.hoverCaption}
                        </span>
                        {primaryLink ? (
                          <a
                            href={primaryLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="embed-overlay-pill mt-1 inline-flex items-center gap-1 rounded-full bg-[var(--ink)] px-3.5 py-1.5 font-mono text-xs text-white transition-colors hover:bg-[var(--accent)]"
                          >
                            {primaryLink.label}
                          </a>
                        ) : (
                          <span className="embed-overlay-pill mt-1 inline-flex rounded-full border border-[var(--line)] bg-white px-3 py-1 font-mono text-[11px] text-[var(--ink-dim)]">
                            {project.year} · {project.roleType}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealBlock>

        {/* 04 // Skills & Certifications */}
        <RevealBlock
          id="skills"
          className="mx-auto max-w-5xl border-b border-[var(--line-soft)] px-6 py-16 md:py-20"
        >
          <div className="section-tag">04 // certifications &amp; skills</div>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
            Credentials &amp; <span className="italic text-[var(--accent)]">Toolkit</span>
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl border border-[var(--line)] bg-white p-6 transition-shadow hover:shadow-sm"
              >
                <p className="font-mono text-xs text-[var(--warm)]">{cert.issuer}</p>
                <h3 className="mt-1.5 font-serif text-2xl leading-snug text-[var(--ink)]">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">{cert.detail}</p>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    Verify on Credly ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {SKILLS.map((group) => (
              <div
                key={group.group}
                className="rounded-xl border border-[var(--line)] bg-white p-5"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
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
                Full <span className="italic text-[var(--accent)]">CV</span>
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
                className="rounded-lg border border-[var(--line)] bg-white px-4 py-2 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Open in New Tab ↗
              </a>
              <a
                href={PROFILE.cvPath}
                download="CV_Michael_Christian_2026.pdf"
                className="rounded-lg bg-[var(--ink)] px-4 py-2 font-mono text-xs font-medium text-white transition-colors hover:bg-[var(--accent)]"
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
                  className="mt-4 inline-block rounded-lg bg-[var(--ink)] px-5 py-2 font-mono text-xs text-white"
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
              Let&apos;s <span className="italic text-[var(--accent)]">connect</span>.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-dim)] md:text-base">
              Open to research internships, networking or AI collaborations, and software
              engineering roles. Feel free to reach out in English or Bahasa Indonesia.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
              >
                <span className="font-mono">✉</span>
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub / Mishaws ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
