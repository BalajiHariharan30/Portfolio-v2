"use client";

import { useEffect, useRef, useState } from "react";

export default function BackToTop(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-purple-900/50 border border-purple-400/40 hover:scale-110 hover:shadow-purple-600/60 transition-all duration-300 ripple-btn ${
        visible ? "animate-slide-up opacity-100" : "opacity-0 pointer-events-none translate-y-8"
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
      </svg>
      {/* ripple ring */}
      <span className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: "2s" }} />
    </button>
  );
}
