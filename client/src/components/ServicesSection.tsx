/* =============================================================
   SERVICES SECTION — North East UAV
   Design: White background, 3-column card grid with aerial images,
   badge-style service labels echoing logo shape
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Camera, Map, Building2, Video, Ruler, Eye } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Roof Documentation & Damage Analysis",
    description:
      "Our flagship service. High-resolution aerial documentation of residential and commercial roofs for contractors, roofers, and property managers — damage photos, flashing and penetration detail, measurements, and an organized report package. No ladders, no liability.",
    image: "/tile-1.jpg",
    tag: "Flagship",
  },
  {
    icon: Ruler,
    title: "Construction Progress Documentation",
    description:
      "Recurring aerial documentation of active job sites for builders and GCs. Timestamped, georeferenced imagery for stakeholders, project tracking, and dispute resolution.",
    image: "/tile-2.jpg",
    tag: "Recurring",
  },
  {
    icon: Video,
    title: "Commercial & Marketing Content",
    description:
      "Cinematic aerial photos and 4K video for local businesses, dealerships, venues, and trades — marketing content that shows your operation from a perspective the ground can't.",
    image: "/tile-3.jpg",
    tag: "Commercial",
  },
  {
    icon: Map,
    title: "Property & Site Documentation",
    description:
      "Aerial site documentation and basic site maps for land parcels, facilities, and development sites. Clear overhead reference imagery for planning, records, and marketing.",
    image: "/tile-4.jpg",
    tag: "Documentation",
  },
  {
    icon: Eye,
    title: "Roof & Infrastructure Inspection",
    description:
      "Safe, detailed visual inspections of roofs, towers, and infrastructure. High-res imagery and reporting without scaffolding or lift equipment.",
    image: "/tile-5.jpg",
    tag: "Inspection",
  },
  {
    icon: Camera,
    title: "Aerial Photography & Video",
    description:
      "Professional 4K aerial stills and video for events, tourism, and commercial productions across the Seacoast and beyond.",
    tag: "Aerial",
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="group rounded-lg overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease-out ${index * 0.08}s, transform 0.6s ease-out ${index * 0.08}s, box-shadow 0.3s ease, translate 0.3s ease`,
        boxShadow: "0 2px 12px oklch(0 0 0 / 0.06)",
      }}
    >
      {/* Image or icon placeholder */}
      {service.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, oklch(0.14 0.05 240 / 0.5) 0%, transparent 60%)" }}
          />
          {/* Tag badge */}
          <span
            className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wider"
            style={{
              fontFamily: "'Oswald', sans-serif",
              background: "oklch(0.75 0.16 70)",
              color: "oklch(0.14 0.05 240)",
              borderRadius: "3px",
              letterSpacing: "0.1em",
            }}
          >
            {service.tag}
          </span>
        </div>
      ) : (
        <div
          className="relative h-48 flex items-center justify-center"
          style={{ background: "oklch(0.2 0.06 240)" }}
        >
          <Icon size={48} style={{ color: "oklch(0.72 0.1 200)", opacity: 0.8 }} />
          <span
            className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wider"
            style={{
              fontFamily: "'Oswald', sans-serif",
              background: "oklch(0.75 0.16 70)",
              color: "oklch(0.14 0.05 240)",
              borderRadius: "3px",
              letterSpacing: "0.1em",
            }}
          >
            {service.tag}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="p-2 rounded"
            style={{ background: "oklch(0.95 0.01 200)" }}
          >
            <Icon size={18} style={{ color: "oklch(0.2 0.06 240)" }} />
          </div>
          <h3
            className="font-bold text-lg"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: "oklch(0.2 0.06 240)",
              letterSpacing: "0.04em",
            }}
          >
            {service.title}
          </h3>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif", color: "oklch(0.45 0.02 240)" }}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="amber-rule mx-auto" />
          <span className="badge-label block mb-3">What We Do</span>
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
            Our Services
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.45 0.02 240)",
              lineHeight: 1.7,
            }}
          >
            From flagship roof documentation to construction progress and
            commercial marketing content, we deliver professional aerial work
            built for contractors and businesses across NH, ME, and MA.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.95rem",
              letterSpacing: "0.12em",
              background: "oklch(0.2 0.06 240)",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
