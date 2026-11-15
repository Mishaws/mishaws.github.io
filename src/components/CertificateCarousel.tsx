import { useEffect, useRef, useState } from "react";
import { CERTIFICATES, type CertificateItem } from "../data/portfolio";

export function CertificateCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const bounded = Math.max(0, Math.min(index, CERTIFICATES.length - 1));
    const child = track.children[bounded] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(bounded);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length === 0) return;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((el, idx) => {
        const dist = Math.abs(el.offsetLeft - track.scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = idx;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!previewCert) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewCert]);

  return (
    <>
      <div className="mt-8">
        {/* Carousel Controls Row */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--ink-faint)]">
            0{activeIndex + 1} / 0{CERTIFICATES.length} — slide or use arrows to inspect
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous certificate"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-white font-mono text-sm text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === CERTIFICATES.length - 1}
              aria-label="Next certificate"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-white font-mono text-sm text-[var(--ink)] transition-colors hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Snap Track */}
        <div ref={trackRef} className="cert-track">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.title}
              className="cert-card flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
            >
              <button
                type="button"
                onClick={() => setPreviewCert(cert)}
                className="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-[var(--line-soft)] bg-[#f4f1ea] p-4"
                aria-label={`Preview ${cert.title}`}
              >
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  loading="lazy"
                  className="cert-img h-full w-full object-contain drop-shadow-xs"
                />
                <span className="pointer-events-none absolute right-3 bottom-3 rounded-full border border-[var(--line)] bg-white/95 px-2.5 py-1 font-mono text-[10px] text-[var(--navy)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100">
                  Click to zoom
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="font-mono text-[11px] font-medium tracking-wider text-[var(--navy)]">
                    {cert.categoryLabel}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-[var(--ink)]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-[var(--ink-faint)]">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">
                    {cert.summary}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 border-t border-[var(--line-soft)] pt-4">
                  <a
                    href={cert.documentSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-[var(--navy)] hover:underline"
                  >
                    Open File ↗
                  </a>
                  {cert.verifyHref && (
                    <a
                      href={cert.verifyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-medium text-[var(--accent)] hover:underline"
                    >
                      Verify on Credly ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {CERTIFICATES.map((cert, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={cert.title}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to ${cert.title}`}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  active ? "w-6 bg-[var(--navy)]" : "w-2 bg-[var(--line)] hover:bg-[var(--ink-faint)]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for reading certificate details clearly */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2530]/65 p-4 backdrop-blur-xs"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={previewCert.title}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-[var(--line-soft)] pb-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--navy)]">
                  {previewCert.categoryLabel}
                </p>
                <h4 className="font-serif text-2xl text-[var(--ink)]">{previewCert.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="cursor-pointer rounded-lg border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[var(--ink)] hover:bg-[var(--bg-alt)]"
              >
                Close
              </button>
            </div>
            <div className="flex max-h-[70vh] items-center justify-center overflow-auto rounded-xl bg-[#f4f1ea] p-3">
              <img
                src={previewCert.imageSrc}
                alt={previewCert.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
