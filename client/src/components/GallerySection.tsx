/* =============================================================
   GALLERY SECTION — North East UAV
   Design: Masonry-style photo grid with hover overlays
   ============================================================= */
import { useEffect, useRef, useState } from "react";

const GALLERY_ITEMS = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/hero-aerial-ZbErCtySTz7PiSexA9W3FD.webp",
    label: "River Valley",
    span: "lg:col-span-2",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/real-estate-aerial-2wMBVPvhgDSAi82RHVxsJg.webp",
    label: "Real Estate",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/inspection-aerial-CpiPfB6TKgxpKTTEX442MK.webp",
    label: "Infrastructure",
    span: "",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/construction-mapping-EFTnKe4ubP9pfYSNhzopiY.webp",
    label: "Construction Progress",
    span: "lg:col-span-2",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24" style={{ background: "oklch(0.97 0.005 200)" }}>
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="amber-rule mx-auto" />
          <span className="badge-label block mb-3">Our Work</span>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.2 0.06 240)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Aerial Gallery
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.45 0.02 240)",
              lineHeight: 1.7,
            }}
          >
            A sample of the aerial perspectives we capture for our clients
            across the Northeast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-lg ${item.span}`}
              style={{
                height: "280px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, oklch(0.14 0.05 240 / 0.8) 0%, transparent 60%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "white",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "oklch(0.55 0.02 240)",
            fontStyle: "italic",
          }}
        >
          More portfolio images coming soon — follow us on social media for the latest shots.
        </p>
      </div>
    </section>
  );
}
