import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/react.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const navItems = ["Home", "Shop", "Collections", "Learn", "Dashboard"];

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-150 whitespace-nowrap pb-1 group
    ${isActive ? "text-[#e2231a]" : "text-[#444] hover:text-[#e2231a]"}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap');

        .nav-root {
          font-family: 'Nunito', 'Segoe UI', sans-serif;
        }

        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #e2231a;
          border-radius: 2px;
          transition: width 0.2s ease;
        }

        .nav-link-underline:hover::after,
        .nav-link-active::after {
          width: 100%;
        }

        .nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #e2231a;
          border-radius: 2px;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #555;
          border-radius: 2px;
          transition: all 0.25s ease;
          transform-origin: center;
        }

        .hamburger-open .line1 { transform: translateY(7px) rotate(45deg); }
        .hamburger-open .line2 { opacity: 0; transform: scaleX(0); }
        .hamburger-open .line3 { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu-enter {
          animation: slideDown 0.22s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .join-btn {
          background: #e2231a;
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 8px 20px;
          border-radius: 6px;
          letter-spacing: 0.01em;
          transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease;
          box-shadow: 0 2px 6px rgba(226,35,26,0.25);
        }

        .join-btn:hover {
          background: #c41d15;
          box-shadow: 0 4px 12px rgba(226,35,26,0.35);
          transform: translateY(-1px);
        }

        .join-btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 6px rgba(226,35,26,0.25);
        }

        .logo-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .logo-text span {
          color: #e2231a;
        }

        .divider-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ddd;
          display: inline-block;
          vertical-align: middle;
          margin: 0 2px;
        }
      `}</style>

      <header
        className="nav-root w-full bg-white sticky top-0 z-50"
        style={{ boxShadow: "0 1px 0 #e8e8e8, 0 2px 8px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-15.5 px-4 sm:px-6 lg:px-8">
          <NavLink
            to="/home"
            className="flex items-center gap-2 no-underline"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "#e2231a",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(226,35,26,0.3)",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 18,
                  height: 18,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <span className="logo-text">
              Katana<span>Forge</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors duration-150 whitespace-nowrap nav-link-underline px-3 py-1
                  ${isActive ? "text-[#e2231a] nav-link-active" : "text-[#555] hover:text-[#e2231a]"}`
                }
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  letterSpacing: "0.005em",
                }}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/join"
            className="hidden md:inline-block join-btn"
            style={{ textDecoration: "none" }}
          >
            Join Free
          </NavLink>

          <button
            className={`md:hidden flex flex-col gap-1.25 p-1 rounded ${menuOpen ? "hamburger-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="hamburger-line line1" />
            <span className="hamburger-line line2" />
            <span className="hamburger-line line3" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden mobile-menu-enter bg-white px-4 pb-5 pt-2"
            style={{
              borderTop: "1px solid #f0f0f0",
              boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block text-sm font-semibold px-3 py-2.5 rounded-md transition-colors duration-150
                    ${
                      isActive
                        ? "text-[#e2231a] bg-red-50"
                        : "text-[#555] hover:text-[#e2231a] hover:bg-gray-50"
                    }`
                  }
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}

              <div
                style={{ height: 1, background: "#f0f0f0", margin: "8px 0" }}
              />

              <NavLink
                to="/join"
                className="join-btn text-center block mt-1"
                style={{ textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                Join Free
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
