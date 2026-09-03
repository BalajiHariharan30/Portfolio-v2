"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress(): React.JSX.Element {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
