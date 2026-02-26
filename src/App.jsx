import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Contact"];

const SERVICES = [
  { icon: "🫀", title: "Cardiology", desc: "Advanced cardiac care with state-of-the-art diagnostics and treatment for all heart conditions." },
  { icon: "🧠", title: "Neurology", desc: "Expert neurological care from diagnosis to rehabilitation for brain and spine disorders." },
  { icon: "🦴", title: "Orthopaedics", desc: "Comprehensive bone, joint, and muscle treatments including minimally invasive surgeries." },
  { icon: "🩺", title: "General Medicine", desc: "Holistic primary healthcare with experienced physicians for everyday health needs." },
  { icon: "👶", title: "Paediatrics", desc: "Gentle, specialized care for children from newborns to adolescents." },
  { icon: "🔬", title: "Diagnostics & Lab", desc: "In-house pathology, imaging, and diagnostics for fast, accurate results." },
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
  const [formData, setFormData] = useState({ name: "", phone: "", dept: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8faff", color: "#1a2340", overflowX: "hidden", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; }

        .akh-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          height: 68px; display: flex; align-items: center; padding: 0 24px;
          background: rgba(255,255,255,0.97); backdrop-filter: blur(10px);
          transition: box-shadow 0.3s; border-bottom: 1px solid #e8edf8;
        }
        .akh-nav.scrolled { box-shadow: 0 2px 20px rgba(26,92,184,0.13); }
        .akh-nav-inner {
          width: 100%; max-width: 1180px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .akh-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; flex-shrink: 0; }
        .akh-logo-icon {
          width: 42px; height: 42px; border-radius: 10px;
          background: linear-gradient(135deg,#1a5cb8,#0e3d7a);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 20px; font-weight: 800; flex-shrink: 0;
        }
        .akh-logo-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #0e3d7a; line-height: 1.1; }
        .akh-logo-sub { font-size: 0.65rem; color: #6b7fa8; letter-spacing: 0.07em; text-transform: uppercase; }

        .akh-nav-links { display: flex; align-items: center; gap: 28px; }
        .akh-navbtn {
          background: none; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 0.82rem; font-weight: 600;
          color: #1a2340; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 4px 0; border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .akh-navbtn:hover { color: #1a5cb8; border-bottom-color: #1a5cb8; }

        .akh-book-btn {
          background: linear-gradient(135deg,#1a5cb8,#0e3d7a); color: #fff;
          border: none; border-radius: 6px; padding: 10px 20px;
          font-size: 0.8rem; font-weight: 700; cursor: pointer;
          letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s; font-family: 'Inter', sans-serif;
        }
        .akh-book-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,92,184,0.35); }

        .akh-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 6px;
        }
        .akh-hamburger span { display: block; width: 24px; height: 2px; background: #1a2340; border-radius: 2px; transition: 0.3s; }

        .akh-mobile-menu {
          position: fixed; top: 68px; left: 0; right: 0; z-index: 998;
          background: #fff; border-top: 1px solid #e8edf8;
          padding: 16px 24px 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .akh-mobile-navbtn {
          display: block; width: 100%; background: none; border: none; border-bottom: 1px solid #f0f4fb;
          text-align: left; padding: 14px 0; font-family: 'Inter', sans-serif;
          font-size: 0.95rem; font-weight: 600; color: #1a2340; cursor: pointer;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .akh-mobile-book {
          display: block; width: 100%; margin-top: 16px;
          background: linear-gradient(135deg,#1a5cb8,#0e3d7a);
          color: #fff; border: none; border-radius: 6px; padding: 14px;
          font-size: 0.95rem; font-weight: 700; cursor: pointer;
          text-transform: uppercase; letter-spacing: 0.06em; font-family: 'Inter', sans-serif;
        }

        /* HERO */
        .akh-hero {
          padding-top: 68px;
          background: linear-gradient(145deg, #e8f0fc 0%, #f8faff 55%, #daeaf9 100%);
        }
        .akh-hero-inner {
          width: 100%; max-width: 1180px; margin: 0 auto;
          padding: 72px 24px 80px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center;
        }
        .akh-hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #dce9f9; color: #1a5cb8; padding: 6px 14px; border-radius: 20px;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; margin-bottom: 18px;
          font-family: 'Inter', sans-serif;
        }
        .akh-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 3.5vw, 2.9rem);
          font-weight: 700; color: #0e3d7a; line-height: 1.2; margin-bottom: 18px;
        }
        .akh-hero-p {
          font-size: 1rem; color: #4a5a80; line-height: 1.8; margin-bottom: 30px;
          font-weight: 300; font-family: 'Inter', sans-serif;
        }
        .akh-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .akh-outline-btn {
          background: transparent; border: 2px solid #1a5cb8; color: #1a5cb8;
          padding: 11px 24px; border-radius: 6px; font-size: 0.88rem; font-weight: 700;
          cursor: pointer; letter-spacing: 0.05em; text-transform: uppercase;
          transition: all 0.2s; font-family: 'Inter', sans-serif;
        }
        .akh-outline-btn:hover { background: #1a5cb8; color: #fff; }

        .akh-hero-visual { width: 100%; }
        .akh-hero-card {
          background: linear-gradient(145deg,#1a5cb8,#0e3d7a);
          border-radius: 20px; padding: 36px 30px; color: #fff; width: 100%;
          box-shadow: 0 20px 60px rgba(26,92,184,0.28);
          position: relative; overflow: hidden;
        }
        .akh-hero-card::before {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,0.07);
        }
        .akh-hero-card-icon { font-size: 2.8rem; margin-bottom: 10px; }
        .akh-hero-card-title { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 4px; }
        .akh-hero-card-sub { font-size: 0.85rem; opacity: 0.78; margin-bottom: 22px; font-family: 'Inter', sans-serif; }
        .akh-hero-tags { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .akh-hero-tag {
          background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.22);
          border-radius: 8px; padding: 9px 12px; font-size: 0.8rem; font-weight: 600;
          font-family: 'Inter', sans-serif;
        }

        /* STATS */
        .akh-stats { background: linear-gradient(135deg,#1a5cb8,#0e3d7a); padding: 44px 24px; }
        .akh-stats-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(4,1fr); }
        .akh-stat { text-align: center; padding: 10px 16px; border-right: 1px solid rgba(255,255,255,0.2); }
        .akh-stat:last-child { border-right: none; }
        .akh-stat-val { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 700; color: #fff; line-height: 1; }
        .akh-stat-lbl { color: rgba(255,255,255,0.75); font-size: 0.82rem; margin-top: 6px; font-family: 'Inter', sans-serif; }

        /* ABOUT */
        .akh-about { padding: 88px 24px; background: #fff; }
        .akh-about-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .akh-about-visual { background: linear-gradient(145deg,#eaf0fb,#d4e5f7); border-radius: 20px; padding: 30px; }
        .akh-about-card-top {
          background: linear-gradient(135deg,#1a5cb8,#0e3d7a);
          border-radius: 14px; padding: 26px 22px; color: #fff; margin-bottom: 14px;
        }
        .akh-about-card-top-icon { font-size: 2rem; margin-bottom: 6px; }
        .akh-about-card-top-title { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; }
        .akh-about-card-top-sub { font-size: 0.83rem; opacity: 0.8; margin-top: 4px; font-family: 'Inter', sans-serif; }
        .akh-trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .akh-trust-tag {
          background: #fff; border: 1px solid #dde6f5; border-radius: 8px;
          padding: 10px 12px; font-size: 0.8rem; font-weight: 600; color: #1a5cb8;
          text-align: center; font-family: 'Inter', sans-serif;
        }
        .akh-section-label { color: #1a5cb8; font-size: 0.73rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; font-family: 'Inter', sans-serif; }
        .akh-section-h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 2.8vw, 2.2rem); font-weight: 700; color: #0e3d7a; line-height: 1.25; margin-bottom: 16px; }
        .akh-section-p { color: #4a5a80; line-height: 1.85; font-size: 0.97rem; margin-bottom: 14px; font-weight: 300; font-family: 'Inter', sans-serif; }

        /* SERVICES */
        .akh-services { padding: 88px 24px; background: #f0f5fd; }
        .akh-services-inner { max-width: 1180px; margin: 0 auto; }
        .akh-section-head { text-align: center; margin-bottom: 50px; }
        .akh-section-head .akh-section-p { max-width: 500px; margin: 0 auto; }
        .akh-services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .akh-service-card {
          background: #fff; border: 1px solid #dde6f5; border-radius: 12px;
          padding: 28px 22px; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .akh-service-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(26,92,184,0.12); border-color: #1a5cb8; }
        .akh-service-icon { font-size: 2.3rem; margin-bottom: 12px; }
        .akh-service-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #0e3d7a; margin-bottom: 8px; }
        .akh-service-desc { color: #4a5a80; font-size: 0.88rem; line-height: 1.7; font-weight: 300; font-family: 'Inter', sans-serif; }

        /* CONTACT */
        .akh-contact { padding: 88px 24px; background: #fff; }
        .akh-contact-inner { max-width: 1180px; margin: 0 auto; }
        .akh-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; margin-top: 50px; align-items: start; }
        .akh-info-item { display: flex; gap: 14px; margin-bottom: 26px; }
        .akh-info-icon {
          width: 44px; height: 44px; background: #eaf0fb; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; font-size: 1.15rem; flex-shrink: 0;
        }
        .akh-info-title { font-weight: 700; color: #0e3d7a; margin-bottom: 3px; font-size: 0.92rem; font-family: 'Inter', sans-serif; }
        .akh-info-text { color: #4a5a80; font-size: 0.88rem; line-height: 1.6; white-space: pre-line; font-weight: 300; font-family: 'Inter', sans-serif; }
        .akh-form { background: #f4f8fe; border: 1px solid #dde6f5; border-radius: 14px; padding: 30px; }
        .akh-input {
          display: block; width: 100%; padding: 12px 15px; margin-bottom: 13px;
          border: 1.5px solid #c8d6ee; border-radius: 6px;
          font-size: 0.92rem; font-family: 'Inter', sans-serif;
          background: #fff; color: #1a2340; transition: border-color 0.2s;
        }
        .akh-input:focus { outline: none; border-color: #1a5cb8; }
        .akh-submit {
          width: 100%; padding: 13px;
          background: linear-gradient(135deg,#1a5cb8,#0e3d7a);
          color: #fff; border: none; border-radius: 6px;
          font-size: 0.92rem; font-weight: 700; cursor: pointer;
          letter-spacing: 0.06em; text-transform: uppercase;
          transition: transform 0.2s, box-shadow 0.2s; font-family: 'Inter', sans-serif;
        }
        .akh-submit:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(26,92,184,0.3); }
        .akh-success { text-align: center; padding: 52px 32px; background: #eaf0fb; border-radius: 14px; }

        /* FOOTER */
        .akh-footer { background: #0a2a5e; color: rgba(255,255,255,0.82); padding: 52px 24px 28px; }
        .akh-footer-inner { max-width: 1180px; margin: 0 auto; }
        .akh-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; margin-bottom: 36px; }
        .akh-footer-title { font-weight: 700; color: #fff; font-size: 0.8rem; letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 14px; font-family: 'Inter', sans-serif; }
        .akh-footer-link { font-size: 0.87rem; margin-bottom: 8px; cursor: pointer; transition: color 0.2s; display: block; font-family: 'Inter', sans-serif; }
        .akh-footer-link:hover { color: #7db8f7; }
        .akh-footer-bar { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.45); font-family: 'Inter', sans-serif; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .akh-nav-links { display: none !important; }
          .akh-hamburger { display: flex !important; }
          .akh-hero-inner { grid-template-columns: 1fr !important; gap: 32px; padding: 52px 20px 56px; }
          .akh-about-inner { grid-template-columns: 1fr !important; gap: 32px; }
          .akh-services-grid { grid-template-columns: 1fr 1fr !important; }
          .akh-contact-grid { grid-template-columns: 1fr !important; gap: 36px; }
          .akh-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .akh-stats-inner { grid-template-columns: 1fr 1fr !important; }
          .akh-stat { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.15) !important; padding: 16px !important; }
          .akh-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15) !important; }
          .akh-stat:nth-last-child(-n+2) { border-bottom: none !important; }
        }

        @media (max-width: 560px) {
          .akh-hero-inner { padding: 36px 18px 44px !important; }
          .akh-hero-h1 { font-size: 1.75rem !important; }
          .akh-services-grid { grid-template-columns: 1fr !important; }
          .akh-footer-grid { grid-template-columns: 1fr !important; }
          .akh-about { padding: 56px 18px !important; }
          .akh-services { padding: 56px 18px !important; }
          .akh-contact { padding: 56px 18px !important; }
          .akh-hero-tags { grid-template-columns: 1fr 1fr !important; }
          .akh-trust-grid { grid-template-columns: 1fr 1fr !important; }
          .akh-form { padding: 22px 16px !important; }
          .akh-section-h2 { font-size: 1.55rem !important; }
          .akh-hero-btns { flex-direction: column; }
          .akh-hero-btns button { width: 100%; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`akh-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="akh-nav-inner">
          <div className="akh-logo" onClick={() => scrollTo("home")}>
            <div className="akh-logo-icon">✚</div>
            <div>
              <div className="akh-logo-name">Akhila Hospital</div>
              <div className="akh-logo-sub">Agra Road, Jaipur</div>
            </div>
          </div>
          <div className="akh-nav-links">
            {NAV_LINKS.map(l => (
              <button key={l} className="akh-navbtn" onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
            <button className="akh-book-btn" onClick={() => scrollTo("contact")}>Book Appointment</button>
          </div>
          <button className="akh-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="akh-mobile-menu">
          {NAV_LINKS.map(l => (
            <button key={l} className="akh-mobile-navbtn" onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
          ))}
          <button className="akh-mobile-book" onClick={() => scrollTo("contact")}>📅 Book Appointment</button>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="akh-hero">
        <div className="akh-hero-inner">
          <div>
            <div className="akh-hero-badge">🏥 Trusted Healthcare in Jaipur</div>
            <h1 className="akh-hero-h1">Your Health.<br />Our Commitment.</h1>
            <p className="akh-hero-p">
              Akhila Hospital brings world-class medical expertise to Agra Road, Jaipur. Compassionate care and cutting-edge technology — all under one roof.
            </p>
            <div className="akh-hero-btns">
              <button className="akh-book-btn" style={{ padding: "13px 26px", fontSize: "0.9rem" }} onClick={() => scrollTo("contact")}>Book Appointment</button>
              <button className="akh-outline-btn" onClick={() => scrollTo("services")}>Our Services</button>
            </div>
          </div>
          <div className="akh-hero-visual">
            <div className="akh-hero-card">
              <div className="akh-hero-card-icon">🏥</div>
              <div className="akh-hero-card-title">Akhila Hospital</div>
              <div className="akh-hero-card-sub">Agra Road, Jaipur, Rajasthan</div>
              <div className="akh-hero-tags">
                {["✚ 24/7 Emergency", "👨‍⚕️ 50+ Specialists", "🏆 15+ Yrs Experience", "🔬 Advanced Diagnostics"].map((t, i) => (
                  <div key={i} className="akh-hero-tag">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="akh-stats">
        <div className="akh-stats-inner">
          {STATS.map((s, i) => (
            <div key={i} className="akh-stat">
              <div className="akh-stat-val">{s.value}</div>
              <div className="akh-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="akh-about">
        <div className="akh-about-inner">
          <div className="akh-about-visual">
            <div className="akh-about-card-top">
              <div className="akh-about-card-top-icon">🏥</div>
              <div className="akh-about-card-top-title">Multi-Specialty Hospital</div>
              <div className="akh-about-card-top-sub">Agra Road, Jaipur, Rajasthan</div>
            </div>
            <div className="akh-trust-grid">
              {["✓ NABH Accredited", "✓ Latest Technology", "✓ Expert Doctors", "✓ Affordable Care"].map((t, i) => (
                <div key={i} className="akh-trust-tag">{t}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="akh-section-label">About Us</div>
            <h2 className="akh-section-h2">Healing with Heart, Technology &amp; Trust</h2>
            <p className="akh-section-p">
              Founded with a vision of making quality healthcare accessible to all, Akhila Hospital has been serving the people of Jaipur with unwavering dedication. Our multi-specialty facility on Agra Road brings together over 50 experienced doctors across diverse fields.
            </p>
            <p className="akh-section-p" style={{ marginBottom: 28 }}>
              We combine compassionate patient care with the latest medical technology to ensure you and your family receive the best possible treatment — at every stage of life.
            </p>
            <button className="akh-book-btn" style={{ padding: "13px 26px" }} onClick={() => scrollTo("contact")}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="akh-services">
        <div className="akh-services-inner">
          <div className="akh-section-head">
            <div className="akh-section-label">What We Offer</div>
            <h2 className="akh-section-h2">Our Medical Services</h2>
            <p className="akh-section-p">Comprehensive care across specialties — all under one roof, with a team dedicated to your recovery.</p>
          </div>
          <div className="akh-services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="akh-service-card">
                <div className="akh-service-icon">{s.icon}</div>
                <div className="akh-service-title">{s.title}</div>
                <p className="akh-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="akh-contact">
        <div className="akh-contact-inner">
          <div className="akh-section-head">
            <div className="akh-section-label">Reach Us</div>
            <h2 className="akh-section-h2">Book an Appointment</h2>
            <p className="akh-section-p">Fill out the form or call us. Our team will confirm your appointment shortly.</p>
          </div>
          <div className="akh-contact-grid">
            <div>
              {[
                { icon: "📍", title: "Location", text: "Agra Road, Jaipur, Rajasthan, India" },
                { icon: "📞", title: "Phone", text: "+91 98765 43210\n+91 141 234 5678" },
                { icon: "🕐", title: "OPD Hours", text: "Mon – Sat: 9:00 AM – 8:00 PM\nEmergency: 24 × 7" },
                { icon: "✉️", title: "Email", text: "info@akhilahospital.com" },
              ].map((item, i) => (
                <div key={i} className="akh-info-item">
                  <div className="akh-info-icon">{item.icon}</div>
                  <div>
                    <div className="akh-info-title">{item.title}</div>
                    <div className="akh-info-text">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {submitted ? (
                <div className="akh-success">
                  <div style={{ fontSize: "3rem", marginBottom: 14 }}>✅</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#0e3d7a", marginBottom: 8 }}>Request Received!</h3>
                  <p style={{ color: "#4a5a80", fontWeight: 300, fontFamily: "Inter, sans-serif" }}>We'll contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form className="akh-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <input className="akh-input" type="text" placeholder="Your Full Name *" required
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  <input className="akh-input" type="tel" placeholder="Phone Number *" required
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  <select className="akh-input" value={formData.dept} onChange={e => setFormData({ ...formData, dept: e.target.value })}>
                    <option value="">Select Department</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                  <textarea className="akh-input" rows={4} placeholder="Describe your concern (optional)..."
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: "vertical" }} />
                  <button className="akh-submit" type="submit">Book Appointment →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="akh-footer">
        <div className="akh-footer-inner">
          <div className="akh-footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>✚</div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff" }}>Akhila Hospital</span>
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300, fontFamily: "Inter, sans-serif" }}>Quality multi-specialty healthcare on Agra Road, Jaipur. Compassionate care, trusted expertise.</p>
            </div>
            <div>
              <div className="akh-footer-title">Quick Links</div>
              {NAV_LINKS.map(l => (
                <span key={l} className="akh-footer-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
              ))}
            </div>
            <div>
              <div className="akh-footer-title">Emergency</div>
              <div style={{ fontSize: "1.7rem", fontFamily: "'Playfair Display', serif", color: "#7db8f7", fontWeight: 700 }}>24 / 7</div>
              <div style={{ fontSize: "0.88rem", marginTop: 4, fontFamily: "Inter, sans-serif" }}>+91 98765 43210</div>
              <div style={{ fontSize: "0.8rem", marginTop: 8, opacity: 0.65, fontFamily: "Inter, sans-serif" }}>Agra Road, Jaipur</div>
            </div>
          </div>
          <div className="akh-footer-bar">© {new Date().getFullYear()} Akhila Hospital, Jaipur. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
