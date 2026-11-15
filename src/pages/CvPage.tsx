import { SiteShell } from "../components/SiteShell";
import { PROFILE } from "../data/portfolio";

export function CvPage() {
  return (
    <SiteShell>
      <section className="py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">04 / cv</p>
        <h1 className="mt-2 font-serif text-5xl md:text-7xl">
          Curriculum <span className="italic text-[var(--color-pop)]">Vitae</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Updated November 2026 — Computer Engineering @ Universitas Indonesia, focused on network
          infrastructure, applied AI, and full-stack software systems.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            document → <span className="text-[var(--color-pop)]">CV_Michael_2026.pdf</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={PROFILE.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker rounded-full bg-card px-4 py-2 text-sm transition-transform hover:-translate-y-0.5"
            >
              Open in new tab ↗
            </a>
            <a
              href={PROFILE.cvPath}
              download="CV_Michael_Christian_2026.pdf"
              className="sticker rounded-full bg-[var(--color-pop)] px-4 py-2 text-sm text-[var(--color-background)] transition-transform hover:-translate-y-0.5"
            >
              Download PDF ↓
            </a>
          </div>
        </div>

        <div className="sticker mt-6 overflow-hidden rounded-2xl bg-card">
          <object
            data={PROFILE.cvPath}
            type="application/pdf"
            className="block h-[80vh] w-full"
            aria-label="Michael Christian CV PDF"
          >
            <div className="p-8 text-center">
              <p className="text-muted-foreground">
                Inline PDF preview is unavailable on this browser.
              </p>
              <a
                href={PROFILE.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker mt-4 inline-block rounded-full bg-[var(--color-pop)] px-5 py-2.5 text-sm text-[var(--color-background)]"
              >
                Open CV PDF ↗
              </a>
            </div>
          </object>
        </div>
      </section>
    </SiteShell>
  );
}
