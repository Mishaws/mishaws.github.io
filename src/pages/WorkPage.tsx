import { Link, useSearch } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { useMode } from "../context/ModeContext";
import { PROJECTS, type ProjectItem, type WorkMode } from "../data/portfolio";

export type WorkFilter = "all" | WorkMode;

const FILTERS: { key: WorkFilter; label: string; icon: string }[] = [
  { key: "all", label: "all", icon: "✦" },
  { key: "research", label: "research", icon: "🔬" },
  { key: "industry", label: "industry", icon: "⚡" },
  { key: "both", label: "both", icon: "⇋" },
];

const MODE_BADGE: Record<WorkMode, { label: string; icon: string }> = {
  research: { label: "research", icon: "🔬" },
  industry: { label: "industry", icon: "⚡" },
  both: { label: "both", icon: "⇋" },
};

const ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"];

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const badge = MODE_BADGE[project.mode];
  const tilt = ROTATIONS[index % ROTATIONS.length];

  return (
    <article
      className={`sticker group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-0 ${tilt}`}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">
              {project.emoji}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">{project.period}</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border-2 border-[var(--color-ink)] bg-[var(--color-pop)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-background)]">
            <span aria-hidden="true">{badge.icon}</span>
            {badge.label}
          </span>
        </div>

        <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{project.blurb}</p>
      </div>

      <div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--color-pop)] underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function WorkPage() {
  const { mode } = useMode();
  const search = useSearch({ from: "/work" });
  const filter: WorkFilter = search.filter ?? "all";

  const filtered = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.mode === filter;
  });

  return (
    <SiteShell>
      <section className="py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          02 / work
        </p>
        <h1 className="mt-2 font-serif text-5xl md:text-7xl">
          The <span className="italic text-[var(--color-pop)]">{mode}</span> shelf
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selected technical projects, national competitions, and production engineering work.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <Link
                key={f.key}
                to="/work"
                search={{ filter: f.key }}
                className={`sticker inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all hover:-translate-y-0.5 ${
                  active
                    ? "bg-[var(--color-pop)] text-[var(--color-background)]"
                    : "bg-card text-foreground"
                }`}
              >
                <span aria-hidden="true">{f.icon}</span>
                <span className="font-mono text-xs uppercase tracking-widest">{f.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
