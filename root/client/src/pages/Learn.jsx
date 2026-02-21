import { useState } from "react";
import { NavLink } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Tamahagane — The Sacred Steel",
    duration: "3–5 days",
    tag: "Materials",
    body: "Everything begins with tamahagane, a high-carbon steel smelted in a clay furnace called a tatara. Iron sand (satetsu) and charcoal are layered and burned for up to 72 hours, producing a bloom of steel with varying carbon content. The master smith hand-selects the best pieces — hard high-carbon steel for the edge, softer low-carbon steel for the spine.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Orikaeshi Tanren — Folding the Steel",
    duration: "1–2 weeks",
    tag: "Forging",
    body: "The steel is heated, hammered flat, folded, and welded back on itself — repeatedly. A typical katana undergoes 10 to 16 folds, creating over 30,000 micro-layers. This process removes impurities, distributes carbon evenly, and creates the blade's grain pattern (hada), visible as wood-like textures on the polished surface.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Tsukuri-komi — Shaping the Blade",
    duration: "3–7 days",
    tag: "Shaping",
    body: "The smith combines the hard and soft steel — hard (hagane) on the outside for a razor edge, soft (shingane) at the core for flexibility and shock absorption. This composite structure is hammered into the rough blade shape: defining the curvature (sori), the tip (kissaki), the ridge line (shinogi), and the tang (nakago).",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Tsuchioki — Clay Coating",
    duration: "1 day",
    tag: "Preparation",
    body: "Before hardening, the smith paints a precise clay mixture (tsuchioki) onto the blade — thick along the spine, thin along the edge. This differential clay application is the defining step that creates the hamon: the iconic wavy temper line visible on every authentic katana.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Yaki-ire — The Hardening Fire",
    duration: "Hours",
    tag: "Hardening",
    body: "The clay-coated blade is heated to around 800°C until it glows a uniform orange-yellow, then plunged into a water trough in a single controlled motion. The edge, with its thin clay coating, cools instantly and becomes extremely hard (martensite). The spine, insulated by thick clay, cools slowly and stays tough and flexible. This differential hardening is the soul of the katana.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Togi — The Polish",
    duration: "1–2 weeks",
    tag: "Finishing",
    body: "A dedicated polisher (togishi) works through a sequence of increasingly fine whetstones — from coarse shaping stones down to fingernail-sized finger stones (hazuya and jizuya). This 12-step process can take over 120 hours and reveals the hamon, the hada grain, and the mirror-bright edge. The polish is considered an art form separate from smithing itself.",
    icon: (
      <svg
        width="20"
        height="20"
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
  },
  {
    number: "07",
    title: "Koshirae — The Fittings",
    duration: "1–4 weeks",
    tag: "Assembly",
    body: "The bare blade (shirasaya) is fitted with its full dressing (koshirae): the tsuba (guard), fuchi and kashira (collar and pommel), menuki (grip ornaments), same (ray-skin grip wrap), and ito (silk or cotton braid). Each fitting is traditionally made by a specialist craftsperson — a single sword may pass through five or six different artisans before completion.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

const glossary = [
  {
    term: "Tamahagane",
    def: "Traditional Japanese steel smelted from iron sand in a clay furnace.",
  },
  {
    term: "Hamon",
    def: "The wavy temper line on the blade surface created by differential hardening.",
  },
  {
    term: "Hada",
    def: "The grain pattern in the steel, visible after polishing. Result of folding.",
  },
  {
    term: "Sori",
    def: "The curvature of the blade, characteristic of the katana's silhouette.",
  },
  {
    term: "Nakago",
    def: "The tang — the unpolished portion of the blade that fits inside the handle.",
  },
  {
    term: "Shinogi",
    def: "The ridge line running along the side of the blade dividing its geometry.",
  },
  {
    term: "Kissaki",
    def: "The tip of the blade — its shape indicates the style and period of the sword.",
  },
  {
    term: "Tsuba",
    def: "The hand guard, typically made of iron or brass, often intricately decorated.",
  },
];

export default function Learn() {
  const [activeStep, setActiveStep] = useState(0);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&display=swap');

        .learn-page * { box-sizing: border-box; }
        .learn-page {
          font-family: 'Nunito', sans-serif;
          background: #f7f7f8;
          color: #1a1a1a;
          min-height: 100vh;
        }

        /* Hero */
        .learn-hero {
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          padding: 52px 24px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .learn-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 110%, rgba(226,35,26,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .learn-badge {
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
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }
        .learn-badge-dot {
          width: 7px; height: 7px;
          background: #e2231a; border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(226,35,26,0.2);
        }
        .learn-hero h1 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900; color: #1a1a1a;
          letter-spacing: -0.03em; line-height: 1.12;
          margin: 0 auto 14px; max-width: 560px;
        }
        .learn-hero h1 span { color: #e2231a; }
        .learn-hero p {
          color: #666; font-size: 0.97rem;
          max-width: 480px; margin: 0 auto;
          line-height: 1.7; font-weight: 500;
        }

        /* Eyebrow / rule */
        .eyebrow {
          font-size: 11px; font-weight: 800;
          color: #e2231a; text-transform: uppercase;
          letter-spacing: 0.2em; margin-bottom: 6px;
        }
        .red-bar { width: 36px; height: 3px; background: #e2231a; border-radius: 2px; margin-bottom: 14px; }
        .sec-title {
          font-size: clamp(1.35rem, 2.6vw, 1.8rem);
          font-weight: 900; color: #1a1a1a;
          letter-spacing: -0.025em; line-height: 1.2;
        }

        /* Step tabs — left rail */
        .step-rail {
          display: flex; flex-direction: column; gap: 2px;
        }
        .step-tab {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 9px;
          cursor: pointer;
          border: none; background: transparent;
          font-family: 'Nunito', sans-serif;
          text-align: left; width: 100%;
          transition: background 0.15s;
        }
        .step-tab:hover { background: #f7f7f8; }
        .step-tab.active { background: #fff1f0; }
        .step-num {
          font-size: 10px; font-weight: 800;
          color: #ccc; letter-spacing: 0.05em;
          min-width: 22px;
          transition: color 0.15s;
        }
        .step-tab.active .step-num { color: #e2231a; }
        .step-tab-title {
          font-size: 0.82rem; font-weight: 700; color: #555;
          line-height: 1.3;
          transition: color 0.15s;
        }
        .step-tab.active .step-tab-title { color: #1a1a1a; }
        .step-dot {
          width: 6px; height: 6px; min-width: 6px;
          border-radius: 50%; background: #e0e0e0;
          margin-left: auto;
          transition: background 0.15s;
        }
        .step-tab.active .step-dot { background: #e2231a; }

        /* Step detail panel */
        .step-panel {
          background: #fff;
          border: 1.5px solid #ebebeb;
          border-radius: 14px;
          padding: 32px 28px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
          min-height: 300px;
        }
        .step-tag {
          display: inline-block;
          background: #fff1f0;
          color: #e2231a;
          font-size: 10.5px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.1em;
          padding: 3px 10px; border-radius: 99px;
          border: 1px solid rgba(226,35,26,0.2);
          margin-bottom: 14px;
        }
        .step-panel-num {
          font-size: 4rem; font-weight: 900;
          color: rgba(226,35,26,0.07);
          line-height: 1; float: right;
          margin: -8px -4px 0 0;
          letter-spacing: -0.04em;
          user-select: none;
        }
        .step-panel h2 {
          font-size: 1.25rem; font-weight: 900;
          color: #1a1a1a; letter-spacing: -0.02em;
          line-height: 1.25; margin-bottom: 8px;
        }
        .step-duration {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 700; color: #aaa;
          margin-bottom: 16px;
        }
        .step-panel p {
          font-size: 0.9rem; color: #555;
          line-height: 1.75; font-weight: 500;
        }
        .step-nav-btns {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 24px; padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }
        .step-nav-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          color: #e2231a; background: none; border: none;
          cursor: pointer; padding: 0;
          transition: opacity 0.15s;
        }
        .step-nav-btn:hover { opacity: 0.75; }
        .step-nav-btn:disabled { color: #ccc; cursor: default; opacity: 1; }
        .step-progress {
          font-size: 11px; font-weight: 700; color: #bbb;
        }

        /* Icon chip */
        .icon-chip {
          width: 38px; height: 38px;
          background: #fff1f0; border-radius: 9px;
          display: inline-flex; align-items: center; justify-content: center;
          color: #e2231a; margin-bottom: 14px;
        }

        /* Glossary */
        .glossary-toggle {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 16px 20px;
          background: #fff; border: 1.5px solid #ebebeb;
          border-radius: 12px; cursor: pointer;
          font-family: 'Nunito', sans-serif;
          transition: border-color 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .glossary-toggle:hover { border-color: rgba(226,35,26,0.35); box-shadow: 0 4px 14px rgba(226,35,26,0.08); }
        .glossary-toggle.open { border-color: rgba(226,35,26,0.4); border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom-color: transparent; }
        .glossary-label { font-size: 0.92rem; font-weight: 800; color: #1a1a1a; }
        .glossary-chevron {
          color: #e2231a; transition: transform 0.2s;
          display: flex; align-items: center;
        }
        .glossary-chevron.open { transform: rotate(180deg); }
        .glossary-body {
          background: #fff;
          border: 1.5px solid rgba(226,35,26,0.4);
          border-top: none;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          overflow: hidden;
        }
        .glos-row {
          display: grid; grid-template-columns: 150px 1fr;
          gap: 12px; padding: 11px 20px;
          border-bottom: 1px solid #f5f5f5;
          align-items: baseline;
        }
        .glos-row:last-child { border-bottom: none; }
        .glos-term { font-size: 0.84rem; font-weight: 800; color: #e2231a; }
        .glos-def  { font-size: 0.84rem; font-weight: 500; color: #666; line-height: 1.55; }

        /* CTA */
        .cta-strip {
          background: #e2231a; border-radius: 14px;
          padding: 40px 32px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-strip::after {
          content: '刀';
          position: absolute; right: -8px; bottom: -28px;
          font-size: 13rem; font-weight: 900;
          color: rgba(255,255,255,0.06);
          line-height: 1; pointer-events: none; user-select: none;
        }
        .cta-strip h2 { font-size: clamp(1.3rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; letter-spacing: -0.025em; margin-bottom: 8px; }
        .cta-strip p  { color: rgba(255,255,255,0.75); font-size: 0.9rem; font-weight: 500; margin-bottom: 22px; }
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

      <div className="learn-page">
        <section className="learn-hero">
          <div className="learn-badge">
            <span className="learn-badge-dot" />7 Steps · Beginner Friendly
          </div>
          <h1>
            How a <span>katana</span>
            <br />
            is born
          </h1>
          <p>
            From raw iron sand to polished steel — a concise guide to the
            traditional Japanese sword-making process, step by step.
          </p>
        </section>

        <section
          style={{ background: "#fff", borderBottom: "1px solid #e8e8e8" }}
        >
          <div className="max-w-4xl mx-auto px-5 py-14">
            <div className="mb-10">
              <p className="eyebrow">The Process</p>
              <div className="red-bar" />
              <h2 className="sec-title">Seven stages of creation</h2>
            </div>

            <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
              <div className="step-rail">
                {steps.map((s, i) => (
                  <button
                    key={s.number}
                    className={`step-tab ${activeStep === i ? "active" : ""}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <span className="step-num">{s.number}</span>
                    <span className="step-tab-title">
                      {s.title.split("—")[0].trim()}
                    </span>
                    <span className="step-dot" />
                  </button>
                ))}
              </div>

              <div className="step-panel">
                <div className="step-panel-num">{steps[activeStep].number}</div>
                <div className="step-tag">{steps[activeStep].tag}</div>
                <div className="icon-chip">{steps[activeStep].icon}</div>
                <h2>{steps[activeStep].title}</h2>
                <div className="step-duration">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  Typical duration: {steps[activeStep].duration}
                </div>
                <p>{steps[activeStep].body}</p>

                <div className="step-nav-btns">
                  <button
                    className="step-nav-btn"
                    onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                    disabled={activeStep === 0}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Previous
                  </button>
                  <span className="step-progress">
                    {activeStep + 1} / {steps.length}
                  </span>
                  <button
                    className="step-nav-btn"
                    onClick={() =>
                      setActiveStep((p) => Math.min(steps.length - 1, p + 1))
                    }
                    disabled={activeStep === steps.length - 1}
                  >
                    Next
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-5 py-14">
          <div className="mb-6">
            <p className="eyebrow">Key Terms</p>
            <div className="red-bar" />
            <h2 className="sec-title">Essential vocabulary</h2>
          </div>

          <button
            className={`glossary-toggle ${glossaryOpen ? "open" : ""}`}
            onClick={() => setGlossaryOpen((o) => !o)}
          >
            <span className="glossary-label">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e2231a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  display: "inline",
                  marginRight: 8,
                  verticalAlign: "middle",
                }}
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Katana Glossary — {glossary.length} terms
            </span>
            <span className={`glossary-chevron ${glossaryOpen ? "open" : ""}`}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>

          {glossaryOpen && (
            <div className="glossary-body">
              {glossary.map((g) => (
                <div key={g.term} className="glos-row">
                  <span className="glos-term">{g.term}</span>
                  <span className="glos-def">{g.def}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="max-w-4xl mx-auto px-5 pb-14">
          <div className="cta-strip">
            <h2>Ready to own a piece of this craft?</h2>
            <p>
              Browse our curated collection of hand-forged katanas, each created
              through this very process.
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
                Shop Katanas
              </NavLink>
              <NavLink to="/about" className="btn-wh-ghost">
                About KatanaForge
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
