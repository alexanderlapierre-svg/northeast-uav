/* =============================================================
   ABOUT SECTION — North East UAV
   Design: Asymmetric split — left image, right text on navy bg
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Award, Clock, MapPin } from "lucide-react";

const STATS = [
  { icon: ShieldCheck, value: "Part 107", label: "FAA Certified" },
  { icon: Award, value: "Insured", label: "Fully Licensed" },
  { icon: Clock, value: "Fast", label: "Turnaround" },
  { icon: MapPin, value: "NE US", label: "Service Area" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "oklch(0.14 0.05 240)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left: Image */}
        <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/acadia-landscape-EYxeUc5xVYtfBCDmbghmn5.webp"
            alt="Acadia National Park landscape with mountains and coastline"
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
          />
          {/* Overlay gradient on right edge to blend into navy */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: "linear-gradient(to right, transparent 50%, oklch(0.14 0.05 240) 100%)",
            }}
          />
        </div>

        {/* Right: Text */}
        <div
          ref={ref}
          className="flex flex-col justify-center px-8 py-16 lg:pl-12 lg:pr-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="amber-rule" />
          <span className="badge-label block mb-3" style={{ color: "oklch(0.72 0.1 200)" }}>
            Who We Are
          </span>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Precision From
            <br />
            <span style={{ color: "oklch(0.72 0.1 200)" }}>Above</span>
          </h2>

          <p
            className="mb-4"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.8 0.01 200)",
              lineHeight: 1.75,
            }}
          >
            North East UAV is a FAA Part 107 certified aerial services company
            serving clients across the Northeastern United States. We combine
            technical precision with a passion for capturing the world from
            perspectives that inspire.
          </p>
          <p
            className="mb-8"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.8 0.01 200)",
              lineHeight: 1.75,
            }}
          >
            Whether you need stunning real estate imagery, accurate site mapping,
            or detailed infrastructure inspections, we deliver professional results
            on time and within budget. Every flight is planned, permitted, and
            executed with safety as the top priority.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded"
                  style={{
                    background: "oklch(0.2 0.06 240)",
                    border: "1px solid oklch(0.3 0.05 240)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease-out ${0.3 + i * 0.1}s, transform 0.5s ease-out ${0.3 + i * 0.1}s`,
                  }}
                >
                  <Icon size={20} style={{ color: "oklch(0.75 0.16 70)", margin: "0 auto 6px" }} />
                  <div
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "white",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.7rem",
                      color: "oklch(0.65 0.02 200)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
