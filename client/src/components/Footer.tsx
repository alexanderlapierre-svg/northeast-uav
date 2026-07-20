/* =============================================================
   FOOTER — North East UAV
   Design: Dark navy with mountain silhouette top divider
   ============================================================= */
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "oklch(0.11 0.045 240)" }}>
      {/* Mountain wave top */}
      <div style={{ lineHeight: 0, background: "oklch(0.14 0.05 240)" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }}>
          <path
            d="M0,0 L0,30 L120,55 L240,25 L360,50 L480,20 L600,48 L720,18 L840,45 L960,22 L1080,50 L1200,28 L1320,52 L1440,24 L1440,0 Z"
            fill="oklch(0.11 0.045 240)"
          />
        </svg>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="North East UAV Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.08em",
                  }}
                >
                  NORTH EAST UAV
                </div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "oklch(0.72 0.1 200)",
                    textTransform: "uppercase",
                  }}
                >
                  Aerial Services
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.875rem",
                color: "oklch(0.6 0.02 200)",
                lineHeight: 1.7,
              }}
            >
              FAA Part 107 certified aerial services across the Northeastern
              United States. Professional, insured, and ready to fly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left transition-colors duration-200 hover:text-white"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.875rem",
                    color: "oklch(0.6 0.02 200)",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "white",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Connect
            </h4>
            <a
              href="mailto:info@northeast-uav.com"
              className="flex items-center gap-2 mb-4 transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.875rem",
                color: "oklch(0.6 0.02 200)",
                textDecoration: "none",
              }}
            >
              <Mail size={14} />
              info@northeast-uav.com
            </a>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/northeast_uav", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/northeast-uav", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded transition-all duration-200 hover:scale-110"
                    style={{
                      background: "oklch(0.18 0.055 240)",
                      color: "oklch(0.72 0.1 200)",
                      border: "1px solid oklch(0.25 0.05 240)",
                    }}
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-6"
          style={{ borderTop: "1px solid oklch(0.2 0.05 240)" }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              color: "oklch(0.45 0.02 240)",
            }}
          >
            © {year} North East UAV Aerial Services. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              color: "oklch(0.45 0.02 240)",
            }}
          >
            northeast-uav.com
          </p>
        </div>
      </div>
    </footer>
  );
}
