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
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-mono text-xs font-semibold text-[var(--ink-faint)]">
            0{activeIndex + 1} / 0{CERTIFICATES.length} — SLIDE OR CLICK ARROWS
          </p>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous certificate"
              className="brutal-btn h-9 w-10 cursor-pointer bg-white text-sm text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === CERTIFICATES.length - 1}
              aria-label="Next certificate"
              className="brutal-btn h-9 w-10 cursor-pointer bg-white text-sm text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>

        <div ref={trackRef} className="cert-track">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.title}
              className="cert-card brutal-box brutal-box-hover flex flex-col overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setPreviewCert(cert)}
                className="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b-2 border-[var(--ink)] bg-[#ece8de] p-4"
                aria-label={`Preview ${cert.title}`}
              >
                <img
                  src={cert.imageSrc}
                  alt={cert.title}
                  loading="lazy"
                  className="cert-img h-full w-full object-contain"
                />
                <span className="pointer-events-none absolute right-3 bottom-3 border-2 border-[var(--ink)] bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-[var(--navy)] opacity-0 shadow-[2px_2px_0_0_var(--ink)] transition-opacity group-hover:opacity-100">
                  Zoom ↗
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="inline-block border-2 border-[var(--ink)] bg-[var(--navy)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {cert.categoryLabel}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-[var(--ink)]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] font-medium text-[var(--ink-faint)]">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">
                    {cert.summary}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5 border-t-2 border-[var(--line-soft)] pt-4">
                  <a
                    href={cert.documentSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn bg-white px-3 py-1.5 text-xs text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white"
                  >
                    Open File ↗
                  </a>
                  {cert.verifyHref && (
                    <a
                      href={cert.verifyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn bg-[var(--navy-soft)] px-3 py-1.5 text-xs text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                    >
                      Verify on Credly ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sharp rectangular pagination bars */}
        <div className="mt-4 flex justify-center gap-2">
          {CERTIFICATES.map((cert, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={cert.title}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to ${cert.title}`}
                className={`h-2 cursor-pointer border border-[var(--ink)] transition-all ${
                  active ? "w-8 bg-[var(--navy)]" : "w-3 bg-white hover:bg-[var(--navy-soft)]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Brutalist Lightbox Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#181d25]/70 p-4 backdrop-blur-xs"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={previewCert.title}
        >
          <div
            className="brutal-box relative max-h-[90vh] w-full max-w-4xl overflow-hidden bg-white p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b-2 border-[var(--ink)] pb-3">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--navy)]">
                  {previewCert.categoryLabel}
                </p>
                <h4 className="font-display text-2xl font-bold text-[var(--ink)]">
                  {previewCert.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="brutal-btn cursor-pointer bg-white px-3 py-1.5 text-xs text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="flex max-h-[70vh] items-center justify-center overflow-auto border-2 border-[var(--ink)] bg-[#ece8de] p-3">
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
