import { SiteShell } from "../components/SiteShell";
import { PROFILE } from "../data/portfolio";

const CONTACT_ITEMS = [
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "✉" },
  { label: "GitHub", href: PROFILE.github, icon: "</>" },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: "in" },
];

export function ContactPage() {
  return (
    <SiteShell>
      <section className="py-12 md:py-16">
        <div className="sticker rounded-3xl bg-card p-10 md:p-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            05 / contact
          </p>
          <h1 className="mt-2 font-serif text-5xl md:text-7xl">
            Let&apos;s <span className="italic text-[var(--color-pop)]">connect</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Open to research internships, network/AI collaborations, and software engineering
            opportunities. Reach out in English or Bahasa Indonesia.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {CONTACT_ITEMS.map((item) => {
              const isMail = item.href.startsWith("mailto:");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="sticker rounded-full bg-background px-6 py-3 font-medium transition-all hover:-translate-y-0.5 hover:bg-[var(--color-pop)] hover:text-[var(--color-background)]"
                >
                  <span className="mr-2 font-mono" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
