/* =============================================================
   CONTACT SECTION — North East UAV
   Design: Split layout — left contact info on navy, right form on white
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setSubmitting(false);
        toast.success("Message sent! We'll be in touch within 24 hours.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      })
      .catch(() => {
        setSubmitting(false);
        toast.error("Something went wrong — please email info@northeast-uav.com directly.");
      });
  };

  const inputStyle = {
    fontFamily: "'Lato', sans-serif",
    fontSize: "0.95rem",
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid oklch(0.88 0.005 240)",
    borderRadius: "4px",
    outline: "none",
    background: "white",
    color: "oklch(0.2 0.06 240)",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" ref={ref} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Contact info — navy */}
        <div
          className="px-8 py-16 lg:px-12 flex flex-col justify-center"
          style={{
            background: "oklch(0.14 0.05 240)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="amber-rule" />
          <span className="badge-label block mb-3" style={{ color: "oklch(0.72 0.1 200)" }}>
            Get In Touch
          </span>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Ready to Fly?
            <br />
            <span style={{ color: "oklch(0.72 0.1 200)" }}>Let's Talk.</span>
          </h2>

          <p
            className="mb-8"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "oklch(0.75 0.01 200)",
              lineHeight: 1.7,
            }}
          >
            Fill out the form and we'll get back to you within 24 hours with
            availability and pricing for your project.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-4 mb-8">
            {[
              { icon: Phone, text: "603-923-7123", sub: "Call us anytime", href: "tel:603-923-7123" },
              { icon: Mail, text: "info@northeast-uav.com", sub: "Business email", href: "mailto:info@northeast-uav.com" },
              { icon: MapPin, text: "NH, MA & ME", sub: "Service area" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-4">
                  <div
                    className="p-2 rounded flex-shrink-0"
                    style={{ background: "oklch(0.75 0.16 70 / 0.15)" }}
                  >
                    <Icon size={18} style={{ color: "oklch(0.75 0.16 70)" }} />
                  </div>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.95rem",
                          color: "white",
                          fontWeight: 700,
                          textDecoration: "none",
                          cursor: "pointer",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.1 200)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.95rem",
                          color: "white",
                          fontWeight: 700,
                        }}
                      >
                        {item.text}
                      </div>
                    )}
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.8rem",
                        color: "oklch(0.6 0.02 200)",
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social links */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.6 0.02 200)",
              }}
            >
              Follow Us
            </p>
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
                    className="p-3 rounded transition-all duration-200 hover:scale-110"
                    style={{
                      background: "oklch(0.22 0.06 240)",
                      color: "oklch(0.72 0.1 200)",
                      border: "1px solid oklch(0.3 0.05 240)",
                    }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Form — white */}
        <div
          className="px-8 py-16 lg:px-12 bg-white"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s",
          }}
        >
          <h3
            className="mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "oklch(0.2 0.06 240)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Request a Quote
          </h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block mb-1 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "oklch(0.4 0.02 240)", letterSpacing: "0.1em" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.1 200)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.005 240)")}
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "oklch(0.4 0.02 240)", letterSpacing: "0.1em" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.1 200)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.005 240)")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block mb-1 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "oklch(0.4 0.02 240)", letterSpacing: "0.1em" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.1 200)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.005 240)")}
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "oklch(0.4 0.02 240)", letterSpacing: "0.1em" }}
                >
                  Service Needed
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, appearance: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.1 200)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.005 240)")}
                >
                  <option value="">Select a service...</option>
                  <option value="real-estate">Real Estate Photography</option>
                  <option value="mapping">Mapping & Surveying</option>
                  <option value="inspection">Inspection Services</option>
                  <option value="videography">Aerial Videography</option>
                  <option value="construction">Construction Progress</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className="block mb-1 text-xs font-bold uppercase tracking-wider"
                style={{ fontFamily: "'Oswald', sans-serif", color: "oklch(0.4 0.02 240)", letterSpacing: "0.1em" }}
              >
                Project Details *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your project, location, timeline, and any specific requirements..."
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.1 200)")}
                onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.005 240)")}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="py-4 font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.12em",
                background: submitting ? "oklch(0.5 0.06 240)" : "oklch(0.2 0.06 240)",
                color: "white",
                borderRadius: "4px",
              }}
            >
              {submitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
