/* =============================================================
   NAVBAR — North East UAV
   Design: Transparent on hero, solid navy on scroll
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Rates", href: "/rates.html" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!href.startsWith("#")) { window.location.href = href; return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.14 0.05 240 / 0.97)"
          : "oklch(0.14 0.05 240 / 0.35)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.3)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-36">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src="/logo.png"
            alt="North East UAV Logo"
            className="h-32 w-32 object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.1em",
              background: "oklch(0.75 0.16 70)",
              color: "oklch(0.14 0.05 240)",
              borderRadius: "4px",
            }}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "oklch(0.14 0.05 240 / 0.98)",
        }}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-white/80 hover:text-white py-3 border-b border-white/10 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-3 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-center"
            style={{
              fontFamily: "'Oswald', sans-serif",
              background: "oklch(0.75 0.16 70)",
              color: "oklch(0.14 0.05 240)",
              borderRadius: "4px",
            }}
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
