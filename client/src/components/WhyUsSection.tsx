/* =============================================================
   WHY CHOOSE US — North East UAV
   Design: Navy background, horizontal feature list with amber icons
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Zap, DollarSign, FileCheck, Headphones, Star } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "FAA Part 107 Certified",
    desc: "Fully licensed and insured for commercial drone operations. We operate legally and safely on every flight.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Edited photos and deliverables typically within 24–48 hours of the flight date.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Transparent, flat-rate packages with no hidden fees. Custom quotes available for larger projects.",
  },
  {
    icon: FileCheck,
    title: "Airspace Compliance",
    desc: "We handle all LAANC authorizations and airspace coordination so you don't have to worry.",
  },
  {
    icon: Headphones,
    title: "Responsive Communication",
    desc: "Direct contact with your pilot. We respond quickly and keep you updated throughout the process.",
  },
  {
    icon: Star,
    title: "Professional Quality",
    desc: "High-resolution imagery and video delivered in formats ready for MLS, marketing, and reporting.",
  },
];

export default function WhyUsSection() {
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
    <section className="py-24 relative overflow-hidden" style={{ background: "oklch(0.18 0.055 240)" }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            oklch(0.72 0.1 200) 0px,
            oklch(0.72 0.1 200) 1px,
            transparent 1px,
            transparent 60px
          ), repeating-linear-gradient(
            90deg,
            oklch(0.72 0.1 200) 0px,
            oklch(0.72 0.1 200) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="container relative z-10">
        <div
          ref={ref}
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="amber-rule mx-auto" />
          <span className="badge-label block mb-3" style={{ color: "oklch(0.72 0.1 200)" }}>
            Why Choose Us
          </span>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            The North East UAV Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="flex gap-4 p-6 rounded-lg"
                style={{
                  background: "oklch(0.22 0.06 240)",
                  border: "1px solid oklch(0.3 0.05 240)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease-out ${i * 0.08}s, transform 0.6s ease-out ${i * 0.08}s`,
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div
                    className="p-2 rounded"
                    style={{ background: "oklch(0.75 0.16 70 / 0.15)" }}
                  >
                    <Icon size={20} style={{ color: "oklch(0.75 0.16 70)" }} />
                  </div>
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "white",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.7 0.02 200)",
                      lineHeight: 1.65,
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
