"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow(): React.JSX.Element {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const running = useRef(false);

  useEffect(() => {
    // Skip on touch / mobile
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      // Dot snaps immediately — no RAF needed
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
      }
      if (!running.current) {
        running.current = true;
        animateGlow();
      }
    };

    const animateGlow = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 200}px,${current.current.y - 200}px)`;
      }

      const dx = Math.abs(target.current.x - current.current.x);
      const dy = Math.abs(target.current.y - current.current.y);

      if (dx > 0.5 || dy > 0.5) {
        requestAnimationFrame(animateGlow);
      } else {
        running.current = false; // stop when settled
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={glowRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,0.07) 0%,transparent 70%)", willChange: "transform" }} />
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-400/70 pointer-events-none z-[999]"
        style={{ willChange: "transform" }} />
    </>
  );
}
