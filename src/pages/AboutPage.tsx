import { SiteShell } from "../components/SiteShell";
import { useMode } from "../context/ModeContext";
import { CERTIFICATIONS, EDUCATION, PROGRAMS, SKILLS } from "../data/portfolio";

export function AboutPage() {
  const { mode } = useMode();

  return (
    <SiteShell>
      <section className="py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          03 / about
        </p>
        <h1 className="mt-2 font-serif text-5xl md:text-7xl">
          Two pillars, <span className="italic text-[var(--color-pop)]">one engineer</span>.
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className={`sticker rounded-2xl bg-card p-8 transition-transform ${
              mode === "research" ? "-rotate-1 scale-[1.02]" : "rotate-0 opacity-75"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-pop)]">
              🔬 research focus
            </p>
            <p className="mt-4 font-serif text-2xl italic">Networks meet intelligent control.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· Computer &amp; Telecommunication Networks</li>
              <li>· Applied AI, Computer Vision &amp; LLM Workflows</li>
              <li>· Network Security &amp; Architecture</li>
              <li>· Digital Systems &amp; Hardware Description (VHDL)</li>
            </ul>
          </div>

          <div
            className={`sticker rounded-2xl bg-card p-8 transition-transform ${
              mode === "industry" ? "rotate-1 scale-[1.02]" : "rotate-0 opacity-75"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-pop)]">
              ⚡ engineering focus
            </p>
            <p className="mt-4 font-serif text-2xl italic">Build cleanly, ship reliably.</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· Full-Stack Web Development (React, Node.js, PostgreSQL)</li>
              <li>· Routing, Switching &amp; WLAN Administration (Cisco, MikroTik)</li>
              <li>· Teaching &amp; Mentoring (Engineering Design Lab Assistant)</li>
              <li>· Cross-disciplinary International Teamwork</li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="sticker rounded-2xl bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              education
            </p>
            <div className="mt-4 space-y-5">
              {EDUCATION.map((edu) => (
                <div key={edu.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-serif text-2xl">{edu.school}</h2>
                    <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-pop)]">{edu.program}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sticker rounded-2xl bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              licenses &amp; certifications
            </p>
            <div className="mt-4 space-y-5">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-serif text-2xl leading-snug">{cert.title}</h2>
                  </div>
                  <p className="font-mono text-xs text-[var(--color-pop)]">{cert.issuer}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.summary}</p>
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-mono text-xs text-[var(--color-pop)] hover:underline"
                    >
                      Verify on Credly ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International Programs & Core Skills */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="sticker rounded-2xl bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              international programs
            </p>
            <div className="mt-4 space-y-5">
              {PROGRAMS.map((prog) => (
                <div key={prog.title}>
                  <h2 className="font-serif text-2xl leading-snug">{prog.title}</h2>
                  <p className="font-mono text-xs text-[var(--color-pop)]">{prog.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{prog.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sticker rounded-2xl bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              technical toolkit
            </p>
            <div className="mt-4 space-y-4">
              {SKILLS.map((skill) => (
                <div key={skill.group}>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-pop)]">
                    {skill.group}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
