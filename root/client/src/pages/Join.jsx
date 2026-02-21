import { useState } from "react";

const GoogleIcon = () => (
  <svg
    className="w-4.5 h-4.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-2.75 h-2.75"
    viewBox="0 0 12 12"
    strokeWidth="2.5"
    stroke="#2e7d32"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

const benefits = [
  "Free shipping over $200",
  "Authentic blades",
  "Lifetime warranty",
];

export default function Join() {
  const [tab, setTab] = useState("login");
  const [agreed, setAgreed] = useState(false);
  const isLogin = tab === "login";

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <div className="flex flex-col items-center mb-6">
        <div className="text-4xl mb-2">⚔️</div>
        <h1
          className="text-2xl font-extrabold text-gray-900 tracking-tight"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          Real<span className="text-red-600">Katana</span>
        </h1>
        <p className="text-sm text-gray-400 mt-0.5 font-semibold">
          Authentic Japanese Swords
        </p>
      </div>

      <div
        className="w-full max-w-110"
        style={{ animation: "fadeUp 0.4s ease both" }}
      >
        <div
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}
        >
          <div className="grid grid-cols-2 border-b border-gray-200">
            {[
              ["login", "Log In"],
              ["signup", "Sign Up Free"],
            ].map(([t, label]) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative py-4.5 text-center text-[15px] font-bold cursor-pointer border-none transition-colors ${
                  tab === t
                    ? "bg-white text-gray-900"
                    : "bg-gray-50 text-gray-400 hover:text-gray-600"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {label}
                {tab === t && (
                  <span className="absolute -bottom-px left-[20%] w-[60%] h-0.75 bg-red-600 rounded-t" />
                )}
              </button>
            ))}
          </div>

          <div className="p-8">
            <h2
              className="text-[22px] font-extrabold text-gray-900 mb-1.5 tracking-tight"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="text-sm text-gray-500 mb-7 leading-relaxed">
              {isLogin
                ? "Log in to track orders and manage your collection."
                : "Join thousands of katana enthusiasts worldwide."}
            </p>

            <div className="flex flex-col gap-2.5 mb-5">
              {[
                { Icon: GoogleIcon, label: "Continue with Google" },
                { Icon: FacebookIcon, label: "Continue with Facebook" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border-[1.5px] border-gray-200 bg-white text-sm font-bold text-gray-900 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  <Icon />
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[13px] font-semibold text-gray-400">
                or with email
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {!isLogin && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  ["First Name", "Jane"],
                  ["Last Name", "Doe"],
                ].map(([lbl, ph]) => (
                  <div key={lbl}>
                    <label className="block text-[13px] font-bold text-gray-900 mb-1.5">
                      {lbl}
                    </label>
                    <input
                      type="text"
                      placeholder={ph}
                      className="w-full px-3.5 py-2.75 rounded-xl border-[1.5px] border-gray-200 text-sm text-gray-900 bg-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all placeholder-gray-300"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-[13px] font-bold text-gray-900 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full px-3.5 py-2.75 rounded-xl border-[1.5px] border-gray-200 text-sm text-gray-900 bg-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all placeholder-gray-300"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
            </div>

            <div className={isLogin ? "mb-1" : "mb-4"}>
              <label className="block text-[13px] font-bold text-gray-900 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder={isLogin ? "Your password" : "Create a password"}
                className="w-full px-3.5 py-2.75 rounded-xl border-[1.5px] border-gray-200 text-sm text-gray-900 bg-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all placeholder-gray-300"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
            </div>

            {isLogin && (
              <div className="flex justify-end mb-5 mt-1">
                <a
                  href="#"
                  className="text-[13px] font-semibold text-red-600 no-underline hover:opacity-75 transition-opacity"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start gap-2.5 mb-5 mt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-red-600 shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="text-[13px] text-gray-500 leading-relaxed cursor-pointer"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-red-600 font-semibold no-underline hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-red-600 font-semibold no-underline hover:underline"
                  >
                    Privacy Policy
                  </a>
                  . I consent to receive emails about new arrivals and offers.
                </label>
              </div>
            )}

            <button
              className="w-full py-3.5 bg-red-600 text-white text-[15px] font-extrabold rounded-xl border-none cursor-pointer hover:bg-red-700 hover:-translate-y-px active:translate-y-0 transition-all"
              style={{
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 4px 14px rgba(220,38,38,0.35)",
              }}
            >
              {isLogin ? "Log In" : "Create Free Account"}
            </button>

            <p className="text-center mt-5 text-[13px] text-gray-500 font-semibold">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setTab("signup")}
                    className="text-red-600 font-bold no-underline hover:underline"
                  >
                    Sign up free
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setTab("login")}
                    className="text-red-600 font-bold no-underline hover:underline"
                  >
                    Log in
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
