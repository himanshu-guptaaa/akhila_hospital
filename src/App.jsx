import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Contact"];

const SERVICES = [
  {
    icon: "🫀",
    title: "Cardiology",
    desc: "Advanced cardiac care with state-of-the-art diagnostics and treatment for all heart conditions.",
  },
  {
    icon: "🧠",
    title: "Neurology",
    desc: "Expert neurological care from diagnosis to rehabilitation for brain and spine disorders.",
  },
  {
    icon: "🦴",
    title: "Orthopaedics",
    desc: "Comprehensive bone, joint, and muscle treatments including minimally invasive surgeries.",
  },
  {
    icon: "🩺",
    title: "General Medicine",
    desc: "Holistic primary healthcare with experienced physicians for everyday health needs.",
  },
  {
    icon: "👶",
    title: "Paediatrics",
    desc: "Gentle, specialized care for children from newborns to adolescents.",
  },
  {
    icon: "🔬",
    title: "Diagnostics & Lab",
    desc: "In-house pathology, imaging, and diagnostics for fast, accurate results.",
  },
];

const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "50+", label: "Expert Doctors" },
  { value: "1L+", label: "Patients Treated" },
  { value: "24/7", label: "Emergency Care" },
];

export default function AkhilaHospital() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f8faff", color: "#1a2340", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Source Sans 3', sans-serif; }

        .nav-link {
          cursor: pointer;
          color: #1a2340;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s, color 0.2s;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
        }
        .nav-link:hover { border-bottom-color: #1a5cb8; color: #1a5cb8; }

        .btn-primary {
          background: linear-gradient(135deg, #1a5cb8, #0e3d7a);
          color: #fff;
          border: none;
          padding: 14px 34px;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.04em;
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
          text-transform: uppercase;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,92,184,0.35); }

        .service-card {
          background: #fff;
          border: 1px solid #dde6f5;
          border-radius: 8px;
          padding: 32px 24px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,92,184,0.12); border-color: #1a5cb8; }

        .stat-item { text-align: center; }

        .form-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #c8d6ee;
          border-radius: 4px;
          font-size: 1rem;
          font-family: 'Source Sans 3', sans-serif;
          background: #fff;
          transition: border-color 0.2s;
          color: #1a2340;
          margin-bottom: 16px;
        }
        .form-input:focus { outline: none; border-color: #1a5cb8; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-grid { flex-direction: column !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .about-grid { flex-direction: column !important; }
          .contact-grid { flex-direction: column !important; }
          .hero-text h1 { font-size: 2.4rem !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-text h1 { font-size: 1.9rem !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        boxShadow: scrolled ? "0 2px 20px rgba(26,92,184,0.12)" : "0 1px 0 #dde6f5",
        backdropFilter: "blur(8px)",
        transition: "box-shadow 0.3s",
        padding: "0 5%",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#1a5cb8,#0e3d7a)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 22, fontWeight: 700 }}>
              ✚
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#0e3d7a", lineHeight: 1.1 }}>Akhila Hospital</div>
              <div style={{ fontSize: "0.7rem", color: "#6b7fa8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Agra Road, Jaipur</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map(link => (
              <button key={link} className="nav-link" onClick={() => scrollTo(link.toLowerCase())}>{link}</button>
            ))}
            <button className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.88rem" }} onClick={() => scrollTo("contact")}>
              Book Appointment
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: "block", width: 26, height: 2, background: "#1a2340", borderRadius: 2, transition: "0.3s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none"
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #dde6f5", padding: "16px 5% 24px" }}>
            {NAV_LINKS.map(link => (
              <button key={link} className="nav-link" style={{ display: "block", marginBottom: 16, fontSize: "1rem" }} onClick={() => scrollTo(link.toLowerCase())}>{link}</button>
            ))}
            <button className="btn-primary" style={{ width: "100%", textAlign: "center" }} onClick={() => scrollTo("contact")}>Book Appointment</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} style={{ paddingTop: 70, minHeight: "100vh", background: "linear-gradient(160deg, #eaf0fb 0%, #f8faff 60%, #d6e4f7 100%)", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 5%", width: "100%" }}>
          <div className="hero-grid" style={{ display: "flex", alignItems: "center", gap: 60 }}>
            <div className="hero-text" style={{ flex: 1 }}>
              <div className="fade-up" style={{ display: "inline-block", background: "#dce9f9", color: "#1a5cb8", padding: "6px 16px", borderRadius: 20, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                🏥 Trusted Healthcare in Jaipur
              </div>
              <h1 className="fade-up delay-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 700, lineHeight: 1.2, color: "#0e3d7a", marginBottom: 24 }}>
                Your Health.<br />Our Commitment.
              </h1>
              <p className="fade-up delay-2" style={{ fontSize: "1.15rem", color: "#4a5a80", lineHeight: 1.8, marginBottom: 36, maxWidth: 480, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
                Akhila Hospital brings world-class medical expertise to your doorstep on Agra Road, Jaipur. Compassionate care. Cutting-edge technology. All under one roof.
              </p>
              <div className="fade-up delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("contact")}>Book Appointment</button>
                <button onClick={() => scrollTo("services")} style={{ background: "transparent", border: "2px solid #1a5cb8", color: "#1a5cb8", padding: "13px 30px", borderRadius: 4, fontSize: "1rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase", transition: "background 0.2s, color 0.2s" }}
                  onMouseEnter={e => { e.target.style.background="#1a5cb8"; e.target.style.color="#fff"; }}
                  onMouseLeave={e => { e.target.style.background="transparent"; e.target.style.color="#1a5cb8"; }}>
                  Our Services
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 340, height: 340 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#1a5cb8,#0e3d7a)", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", opacity: 0.12 }} />
                <div style={{ position: "absolute", inset: 30, background: "linear-gradient(135deg,#1a5cb8 0%,#3a8ef6 100%)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 60px rgba(26,92,184,0.3)" }}>
                  <div style={{ textAlign: "center", color: "#fff" }}>
                    <div style={{ fontSize: "5rem", marginBottom: 8 }}>✚</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.05em" }}>Akhila Hospital</div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: 4 }}>Jaipur</div>
                  </div>
                </div>
                {/* Floating badges */}
                {[
                  { top: -10, right: -10, text: "24/7 Emergency", bg: "#fff" },
                  { bottom: 10, left: -20, text: "50+ Specialists", bg: "#fff" },
                ].map((b, i) => (
                  <div key={i} style={{ position: "absolute", top: b.top, right: b.right, bottom: b.bottom, left: b.left, background: b.bg, borderRadius: 12, padding: "10px 18px", boxShadow: "0 8px 24px rgba(26,92,184,0.18)", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                    <span style={{ color: "#1a5cb8", fontSize: "1.1rem" }}>✚</span>
                    <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0e3d7a" }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section style={{ background: "linear-gradient(135deg,#1a5cb8,#0e3d7a)", padding: "48px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-item" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none", padding: "8px 0" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: 6, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "flex", gap: 60, alignItems: "center" }}>
            {/* Visual */}
            <div style={{ flex: 1 }}>
              <div style={{ background: "linear-gradient(135deg,#eaf0fb,#d6e4f7)", borderRadius: 16, padding: 40, position: "relative" }}>
                <div style={{ background: "linear-gradient(135deg,#1a5cb8,#0e3d7a)", borderRadius: 12, padding: "32px 28px", color: "#fff", marginBottom: 20 }}>
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>🏥</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}>Multi-Specialty Hospital</div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.85, marginTop: 6, lineHeight: 1.7 }}>Agra Road, Jaipur, Rajasthan</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {["NABH Accredited", "Latest Technology", "Expert Doctors", "Affordable Care"].map((tag, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "12px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#1a5cb8", textAlign: "center", border: "1px solid #dde6f5" }}>
                      ✓ {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{ color: "#1a5cb8", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>About Us</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0e3d7a", marginBottom: 20, lineHeight: 1.25 }}>
                Healing with Heart, Technology & Trust
              </h2>
              <p style={{ color: "#4a5a80", lineHeight: 1.9, marginBottom: 20, fontSize: "1.05rem", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
                Founded with a vision of making quality healthcare accessible to all, Akhila Hospital has been serving the people of Jaipur with unwavering dedication. Our multi-specialty facility on Agra Road brings together over 50 experienced doctors across diverse fields.
              </p>
              <p style={{ color: "#4a5a80", lineHeight: 1.9, marginBottom: 32, fontSize: "1.05rem", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
                We combine compassionate patient care with the latest medical technology to ensure you and your family receive the best possible treatment — at every stage of life.
              </p>
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Get in Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 5%", background: "#f0f5fd" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#1a5cb8", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>What We Offer</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0e3d7a", marginBottom: 16 }}>Our Medical Services</h2>
            <p style={{ color: "#4a5a80", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
              Comprehensive care across specialties — all under one roof, with a team dedicated to your recovery and well-being.
            </p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#0e3d7a", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#4a5a80", lineHeight: 1.7, fontSize: "0.95rem", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#1a5cb8", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Reach Us</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0e3d7a", marginBottom: 16 }}>Book an Appointment</h2>
            <p style={{ color: "#4a5a80", maxWidth: 500, margin: "0 auto", lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
              Fill out the form below or call us directly. Our team will confirm your appointment at the earliest.
            </p>
          </div>

          <div className="contact-grid" style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>
            {/* Info */}
            <div style={{ flex: 1 }}>
              {[
                { icon: "📍", title: "Location", text: "Agra Road, Jaipur, Rajasthan, India" },
                { icon: "📞", title: "Phone", text: "+91 98765 43210\n+91 141 234 5678" },
                { icon: "🕐", title: "Hours", text: "OPD: Mon–Sat, 9 AM – 8 PM\nEmergency: 24 × 7" },
                { icon: "✉️", title: "Email", text: "info@akhilahospital.com" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 18, marginBottom: 32 }}>
                  <div style={{ width: 48, height: 48, background: "#eaf0fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0e3d7a", marginBottom: 4, fontFamily: "'Playfair Display', serif" }}>{item.title}</div>
                    <div style={{ color: "#4a5a80", fontSize: "0.95rem", lineHeight: 1.6, whiteSpace: "pre-line", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ flex: 1 }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 40px", background: "#eaf0fb", borderRadius: 12 }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#0e3d7a", marginBottom: 10 }}>Request Received!</h3>
                  <p style={{ color: "#4a5a80", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>We'll contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "#f8faff", padding: 36, borderRadius: 12, border: "1px solid #dde6f5" }}>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <textarea
                    className="form-input"
                    rows={4}
                    placeholder="Describe your concern or department you need..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: "vertical" }}
                  />
                  <button className="btn-primary" type="submit" style={{ width: "100%", textAlign: "center" }}>
                    Book Appointment →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a2a5e", color: "rgba(255,255,255,0.85)", padding: "48px 5% 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 36 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, fontWeight: 700 }}>✚</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff" }}>Akhila Hospital</div>
              </div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 260, fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}>
                Quality healthcare on Agra Road, Jaipur. Your health, our priority.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 14, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Quick Links</div>
              {NAV_LINKS.map(link => (
                <div key={link} style={{ marginBottom: 8, cursor: "pointer", fontSize: "0.9rem", transition: "color 0.2s" }}
                  onClick={() => scrollTo(link.toLowerCase())}
                  onMouseEnter={e => e.target.style.color = "#7db8f7"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.85)"}
                >{link}</div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 14, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Emergency</div>
              <div style={{ fontSize: "1.6rem", fontFamily: "'Playfair Display', serif", color: "#7db8f7", fontWeight: 700 }}>24 / 7</div>
              <div style={{ fontSize: "0.9rem", marginTop: 4 }}>+91 98765 43210</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20, textAlign: "center", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Akhila Hospital, Jaipur. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
