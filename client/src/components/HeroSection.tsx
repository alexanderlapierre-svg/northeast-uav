/* =============================================================
   HERO SECTION — North East UAV
   Design: Full-bleed aerial photography with Ken Burns zoom,
   dark navy overlay, animated text entrance
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663673801420/MRNmSSrokTDxP4PQYidLzH/hero-aerial-ZbErCtySTz7PiSexA9W3FD.webp"
          alt="Aerial view of northeastern landscape"
          className="w-full h-full object-cover animate-ken-burns"
          style={{ transformOrigin: "center center" }}
        />
        {/* Gradient overlay — dark navy at top/bottom, lighter in center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.14 0.05 240 / 0.7) 0%, oklch(0.14 0.05 240 / 0.4) 40%, oklch(0.14 0.05 240 / 0.55) 70%, oklch(0.14 0.05 240 / 0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        {/* Badge label */}
        <div
          className="inline-flex items-center gap-3 mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          <span
            className="h-px flex-1"
            style={{ width: "2rem", background: "oklch(0.75 0.16 70)" }}
          />
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "oklch(0.75 0.16 70)",
              fontWeight: 700,
            }}
          >
            FAA Part 107 Certified
          </span>
          <span
            className="h-px flex-1"
            style={{ width: "2rem", background: "oklch(0.75 0.16 70)" }}
          />
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            textShadow: "0 4px 24px oklch(0 0 0 / 0.5)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.25s",
          }}
        >
          North East
          <br />
          <span style={{ color: "oklch(0.72 0.1 200)" }}>UAV</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            fontWeight: 300,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "1rem",
            color: "oklch(0.9 0.01 200)",
            textShadow: "0 2px 12px oklch(0 0 0 / 0.4)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.4s",
          }}
        >
          Aerial Services
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            fontWeight: 400,
            maxWidth: "560px",
            margin: "1.5rem auto 0",
            color: "oklch(0.85 0.01 200)",
            lineHeight: 1.7,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.55s",
          }}
        >
          Professional drone photography, videography, and inspection
          services across the Northeast United States.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: "0.7s",
          }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.12em",
              background: "oklch(0.75 0.16 70)",
              color: "oklch(0.14 0.05 240)",
              borderRadius: "4px",
              boxShadow: "0 4px 20px oklch(0.75 0.16 70 / 0.4)",
            }}
          >
            Request a Quote
          </button>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.12em",
              background: "transparent",
              color: "white",
              border: "2px solid oklch(0.72 0.1 200)",
              borderRadius: "4px",
            }}
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Mountain silhouette bottom divider */}
      <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
          <path
            d="M0,80 L0,50 L120,20 L240,45 L360,10 L480,35 L600,5 L720,30 L840,8 L960,38 L1080,15 L1200,42 L1320,18 L1440,40 L1440,80 Z"
            fill="oklch(0.985 0 0)"
          />
        </svg>
      </div>
    </section>
  );
}
