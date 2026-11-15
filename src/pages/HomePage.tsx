import { Link } from "@tanstack/react-router";
import { SiteShell } from "../components/SiteShell";
import { useMode } from "../context/ModeContext";
import { HIGHLIGHTS, MARQUEE_ITEMS, PROFILE } from "../data/portfolio";

export function HomePage() {
  const { mode } = useMode();
  const marqueeLoop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative grid gap-8 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-pop)]" />
            open to{" "}
            {mode === "research"
              ? "research internships & networking labs"
              : "software & network engineering roles"}
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Hi, I&apos;m <span className="wiggle inline-block italic text-[var(--color-pop)]">Michael</span>.
            <br />
            {mode === "research" ? (
              <>
                I <span className="underline-squiggle">explore</span> networks &amp; AI.
              </>
            ) : (
              <>
                I <span className="underline-squiggle">build</span> reliable systems.
              </>
            )}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Computer Engineering undergrad at Universitas Indonesia focusing on{" "}
            <strong className="text-foreground">network infrastructure</strong>,{" "}
            <strong className="text-foreground">applied AI &amp; LLMs</strong>, and{" "}
            <strong className="text-foreground">full-stack engineering</strong>. Flip the switch
            below to view the other perspective.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/work"
              search={{ filter: "all" }}
              className="sticker rounded-full bg-[var(--color-pop)] px-6 py-3 font-medium text-[var(--color-background)] transition-transform hover:-translate-y-0.5"
            >
              See projects ↗
            </Link>
            <Link
              to="/cv"
              className="sticker rounded-full bg-card px-6 py-3 font-medium transition-transform hover:-translate-y-0.5"
            >
              Read my CV ✿
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 md:pt-8">
          <div className="sticker rotate-2 rounded-3xl bg-card p-6 transition-transform hover:rotate-0">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              currently
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>📍 {PROFILE.location}</li>
              <li>🎓 {PROFILE.degree}</li>
              <li>📊 GPA {PROFILE.gpa}</li>
              <li>🔬 {PROFILE.focus}</li>
              <li>🌐 {PROFILE.languages}</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Ticker */}
      <div className="relative -mx-6 my-4 overflow-hidden border-y-2 border-foreground bg-[var(--color-pop)] py-4 text-[var(--color-background)]">
        <div className="marquee flex w-max gap-8 whitespace-nowrap font-serif text-3xl italic">
          {marqueeLoop.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>

      {/* Dual Lane */}
      <section className="py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          pick a lane
        </p>
        <h2 className="mt-2 font-serif text-5xl md:text-6xl">
          Two pillars. <span className="italic text-[var(--color-pop)]">One engineer.</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            to="/work"
            search={{ filter: "research" }}
            className="sticker group block rounded-3xl bg-card p-8 transition-transform hover:-translate-y-1 hover:-rotate-1"
          >
            <span className="text-5xl" aria-hidden="true">
              🔬
            </span>
            <h3 className="mt-4 font-serif text-3xl italic">the researcher</h3>
            <p className="mt-3 text-muted-foreground">
              Computer &amp; wireless networks, PyTorch CV pipelines, LLM workflows, and VHDL RTL
              hardware design.
            </p>
            <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-[var(--color-pop)] group-hover:underline">
              see research work →
            </span>
          </Link>
          <Link
            to="/work"
            search={{ filter: "industry" }}
            className="sticker group block rounded-3xl bg-card p-8 transition-transform hover:-translate-y-1 hover:rotate-1"
          >
            <span className="text-5xl" aria-hidden="true">
              ⚡
            </span>
            <h3 className="mt-4 font-serif text-3xl italic">the builder</h3>
            <p className="mt-3 text-muted-foreground">
              Production web apps (React, Node.js, PostgreSQL), Cisco CCNA enterprise topologies,
              and OOP software systems.
            </p>
            <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-[var(--color-pop)] group-hover:underline">
              see industry work →
            </span>
          </Link>
        </div>
      </section>

      {/* High-signal highlights */}
      <section className="pb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          highlights
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="sticker rounded-2xl bg-card p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-pop)]">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
