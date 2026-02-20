import { NavLink } from "react-router-dom";

const pillars = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Authentic Origins",
    desc: "Every blade is sourced directly from certified Japanese swordsmiths with full provenance documentation and steel composition certificates.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Expert Curation",
    desc: "Our team handpicks each piece — katanas, art, and accessories — against strict quality standards before they reach our catalogue.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trusted Worldwide",
    desc: "Serving collectors, dojos, and galleries across 47 countries with reliable international shipping and white-glove packaging.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "8 Years of Trust",
    desc: "Founded in 2016, KatanaForge has grown from a single Kyoto contact into the most respected katana marketplace online.",
  },
];

const stats = [
  { value: "340+", label: "Blades Curated" },
  { value: "18", label: "Master Smiths" },
  { value: "47", label: "Countries Shipped" },
  { value: "8", label: "Years Active" },
];

const timeline = [
  {
    year: "2016",
    title: "The First Forge",
    desc: "Founded in Kyoto alongside a third-generation swordsmith with one shared vision: zero-compromise authenticity.",
  },
  {
    year: "2018",
    title: "Art Meets Steel",
    desc: "Launched KatanaArt — pairing traditional blades with contemporary lacquer and tsuba art from commissioned Japanese artists.",
  },
  {
    year: "2021",
    title: "Going Global",
    desc: "Expanded to 47 countries. Opened our first physical showroom in Tokyo's Asakusa district.",
  },
  {
    year: "2024",
    title: "Full Ecosystem",
    desc: "Blades, art, accessories, and education — all under one roof, all uncompromising in quality.",
  },
];

const categories = [
  { emoji: "⚔️", label: "Katanas", sub: "Hand-forged blades", to: "/shop" },
  {
    emoji: "🖼️",
    label: "Katana Art",
    sub: "Commissioned works",
    to: "/collections",
  },
  {
    emoji: "🏮",
    label: "Accessories",
    sub: "Stands, bags & tsuba",
    to: "/shop",
  },
  { emoji: "📜", label: "Learn", sub: "History & technique", to: "/learn" },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&display=swap');

        .about-page * { box-sizing: border-box; }
        .about-page {
          font-family: 'Nunito', sans-serif;
          background: #f7f7f8;
          color: #1a1a1a;
        }

        /* Hero */
        .about-hero {
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          padding: 60px 24px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 110%, rgba(226,35,26,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fff1f0;
          border: 1px solid rgba(226,35,26,0.2);
          border-radius: 99px;
          padding: 5px 14px 5px 10px;
          font-size: 11.5px;
          font-weight: 700;
          color: #e2231a;
          margin-bottom: 22px;
          letter-spacing: 0.02em;
        }
        .hero-badge-dot {
          width: 7px; height: 7px;
          background: #e2231a;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 2px rgba(226,35,26,0.2);
        }
        .about-hero h1 {
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 auto 16px;
          max-width: 600px;
        }
        .about-hero h1 span { color: #e2231a; }
        .about-hero p {
          color: #666;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto 28px;
          line-height: 1.7;
          font-weight: 500;
        }
        .hero-btns { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }

        /* Buttons */
        .btn-red {
          background: #e2231a;
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
          box-shadow: 0 2px 8px rgba(226,35,26,0.28);
        }
        .btn-red:hover { background: #c41d15; box-shadow: 0 4px 14px rgba(226,35,26,0.38); transform: translateY(-1px); }
        .btn-outline {
          background: #fff;
          color: #555;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 9px 22px;
          border-radius: 7px;
          border: 1.5px solid #e0e0e0;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.15s, color 0.15s, transform 0.1s;
        }
        .btn-outline:hover { border-color: #e2231a; color: #e2231a; transform: translateY(-1px); }

        /* Stats */
        .stats-row {
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          box-shadow: 0 1px 0 #e8e8e8;
        }
        .stat-val  { font-size: 1.9rem; font-weight: 900; color: #e2231a; letter-spacing: -0.03em; line-height: 1; }
        .stat-lbl  { font-size: 11px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px; }
        .stat-item { text-align: center; padding: 28px 16px; }
        .stat-item + .stat-item { border-left: 1px solid #f0f0f0; }

        /* Cards / sections */
        .white-card {
          background: #fff;
          border: 1.5px solid #ebebeb;
          border-radius: 14px;
          padding: 28px 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .white-card:hover {
          border-color: rgba(226,35,26,0.4);
          box-shadow: 0 6px 22px rgba(226,35,26,0.1);
          transform: translateY(-3px);
        }
        .card-icon {
          width: 42px; height: 42px;
          background: #fff1f0;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          color: #e2231a;
          margin-bottom: 14px;
          transition: background 0.2s, color 0.2s;
        }
        .white-card:hover .card-icon { background: #e2231a; color: #fff; }
        .card-title { font-size: 0.95rem; font-weight: 800; color: #1a1a1a; margin-bottom: 7px; }
        .card-desc  { font-size: 0.84rem; color: #777; line-height: 1.65; font-weight: 500; }

        /* Section labels */
        .eyebrow {
          font-size: 11px; font-weight: 800;
          color: #e2231a; text-transform: uppercase;
          letter-spacing: 0.2em; margin-bottom: 6px;
        }
        .sec-title {
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          font-weight: 900; color: #1a1a1a;
          letter-spacing: -0.025em; line-height: 1.2;
        }
        .sec-body {
          color: #777; font-size: 0.9rem;
          line-height: 1.7; font-weight: 500; margin-top: 10px;
        }
        .red-bar { width: 36px; height: 3px; background: #e2231a; border-radius: 2px; margin-bottom: 16px; }

        /* Checklist */
        .check-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 0; border-bottom: 1px solid #f5f5f5;
          font-size: 0.86rem; font-weight: 600; color: #444;
        }
        .check-icon {
          width: 20px; height: 20px; min-width: 20px;
          background: #fff1f0; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
        }

        /* Timeline */
        .tl-wrap  { position: relative; padding-left: 26px; }
        .tl-wrap::before {
          content: '';
          position: absolute; left: 0; top: 8px; bottom: 8px;
          width: 2px;
          background: linear-gradient(to bottom, #e2231a 0%, #e0e0e0 100%);
          border-radius: 2px;
        }
        .tl-item  { position: relative; padding-bottom: 28px; }
        .tl-item:last-child { padding-bottom: 0; }
        .tl-item::before {
          content: '';
          position: absolute; left: -32px; top: 6px;
          width: 11px; height: 11px;
          border-radius: 50%; background: #e2231a;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2px #e2231a;
        }
        .tl-year  { font-size: 10px; font-weight: 800; color: #e2231a; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 3px; }
        .tl-title { font-size: 0.95rem; font-weight: 800; color: #1a1a1a; margin-bottom: 5px; }
        .tl-desc  { font-size: 0.84rem; color: #777; line-height: 1.65; font-weight: 500; }

        /* Category cards */
        .cat-card {
          background: #fff;
          border: 1.5px solid #ebebeb;
          border-radius: 12px;
          padding: 24px 16px;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .cat-card:hover {
          border-color: rgba(226,35,26,0.4);
          box-shadow: 0 6px 20px rgba(226,35,26,0.09);
          transform: translateY(-3px);
        }
        .cat-emoji { font-size: 1.9rem; display: block; margin-bottom: 9px; }
        .cat-label { font-size: 0.9rem; font-weight: 800; color: #1a1a1a; margin-bottom: 3px; }
        .cat-sub   { font-size: 0.76rem; color: #aaa; font-weight: 600; }

        /* CTA strip */
        .cta-strip {
          background: #e2231a;
          border-radius: 14px;
          padding: 44px 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-strip::after {
          content: '刀';
          position: absolute; right: -8px; bottom: -28px;
          font-size: 13rem; font-weight: 900;
          color: rgba(255,255,255,0.06);
          line-height: 1; pointer-events: none; user-select: none;
        }
        .cta-strip h2 {
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          font-weight: 900; color: #fff;
          letter-spacing: -0.025em; margin-bottom: 10px;
        }
        .cta-strip p  { color: rgba(255,255,255,0.75); font-size: 0.92rem; font-weight: 500; margin-bottom: 24px; }
        .btn-wh {
          background: #fff; color: #e2231a;
          font-family: 'Nunito', sans-serif; font-weight: 800;
          font-size: 0.875rem; padding: 10px 24px;
          border-radius: 7px; border: none; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: opacity 0.15s, transform 0.1s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.14);
        }
        .btn-wh:hover { opacity: 0.92; transform: translateY(-1px); }
        .btn-wh-ghost {
          background: transparent; color: #fff;
          font-family: 'Nunito', sans-serif; font-weight: 700;
          font-size: 0.875rem; padding: 9px 24px;
          border-radius: 7px; border: 2px solid rgba(255,255,255,0.38);
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color 0.15s, transform 0.1s;
        }
        .btn-wh-ghost:hover { border-color: rgba(255,255,255,0.85); transform: translateY(-1px); }
      `}</style>

      <div className="about-page">
        <section className="about-hero">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Est. 2016 · Kyoto, Japan
          </div>
          <h1>
            The home of <span>authentic</span>
            <br />
            Japanese blades
          </h1>
          <p>
            KatanaForge connects collectors, artists, and enthusiasts with
            hand-forged katanas, commissioned art, and premium accessories — all
            verified, all uncompromising.
          </p>
          <div className="hero-btns">
            <NavLink to="/shop" className="btn-red">
              Browse Collection
            </NavLink>
            <NavLink to="/learn" className="btn-outline">
              Our Philosophy →
            </NavLink>
          </div>
        </section>

        <div className="stats-row">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-val">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="eyebrow">Who We Are</p>
            <div className="red-bar" />
            <h2 className="sec-title">
              Built by people who care deeply about the craft
            </h2>
            <p className="sec-body">
              KatanaForge was born from a simple frustration: too many
              "authentic" katanas were anything but. We travelled to Japan,
              built direct relationships with real smiths, and created a
              curation system with zero compromises.
            </p>
            <p className="sec-body mt-2">
              Every blade we carry has been physically inspected and approved by
              someone who knows the difference between a production replica and
              a piece of living history.
            </p>
          </div>

          <div className="white-card" style={{ cursor: "default" }}>
            <p className="eyebrow mb-3">Our Promise</p>
            {[
              "Direct relationships with certified smiths",
              "Physical inspection on every blade",
              "Provenance documents included",
              "Worldwide insured shipping",
              "30-day authenticity guarantee",
            ].map((item) => (
              <div key={item} className="check-row">
                <div className="check-icon">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e2231a"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            borderTop: "1px solid #e8e8e8",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <div className="max-w-4xl mx-auto px-5 py-14">
            <div className="text-center mb-10">
              <p className="eyebrow">What We Stand For</p>
              <div className="red-bar mx-auto" />
              <h2 className="sec-title">Four principles. No exceptions.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="white-card">
                  <div className="card-icon">{p.icon}</div>
                  <div className="card-title">{p.title}</div>
                  <div className="card-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-5 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="eyebrow">Our Journey</p>
            <div className="red-bar" />
            <h2 className="sec-title">Eight years in the making</h2>
            <p className="sec-body">
              From a single connection in Kyoto to a global marketplace trusted
              by collectors and dojos worldwide — here's how KatanaForge grew.
            </p>
          </div>
          <div className="tl-wrap">
            {timeline.map((t) => (
              <div key={t.year} className="tl-item">
                <div className="tl-year">{t.year}</div>
                <div className="tl-title">{t.title}</div>
                <div className="tl-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            borderTop: "1px solid #e8e8e8",
            borderBottom: "1px solid #e8e8e8",
          }}
        >
          <div className="max-w-4xl mx-auto px-5 py-14">
            <div className="text-center mb-10">
              <p className="eyebrow">What We Offer</p>
              <div className="red-bar mx-auto" />
              <h2 className="sec-title">Everything the blade demands</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((c) => (
                <NavLink key={c.label} to={c.to} className="cat-card">
                  <span className="cat-emoji">{c.emoji}</span>
                  <div className="cat-label">{c.label}</div>
                  <div className="cat-sub">{c.sub}</div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-5 py-14">
          <div className="cta-strip">
            <h2>Your blade awaits.</h2>
            <p>
              Browse our full collection of hand-forged katanas, curated art,
              and premium accessories.
            </p>
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <NavLink to="/shop" className="btn-wh">
                Shop Now
              </NavLink>
              <NavLink to="/collections" className="btn-wh-ghost">
                View Collections
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
