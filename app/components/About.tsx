"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".stagger");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16 stagger" style={{ "--delay": "0s" } as React.CSSProperties}>
          <p className="text-2xl sm:text-3xl max-w-5xl mx-auto leading-relaxed font-light text-white">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400 font-semibold bg-purple-950/50 px-3 py-1 rounded-xl border border-purple-500/30 inline-block my-1">
              cross-functional team
            </span>
            <br />
            <span className="text-sm sm:text-base text-white/80 mt-3 block leading-normal">
              that values building resilient, scalable digital systems and high-throughput web applications
              with clean architecture.
            </span>
          </p>
        </div>

        {/* Illustration */}
        <div className="relative group max-w-4xl mx-auto stagger" style={{ "--delay": "0.2s" } as React.CSSProperties}>
          <div className="absolute inset-0 bg-purple-600/15 rounded-full blur-3xl group-hover:bg-purple-600/25 transition-all duration-700 pointer-events-none" />
          <Image
            src="/assets/illustration.png"
            alt="Technical Toolkit Illustration"
            width={800}
            height={800}
            className="object-cover mx-auto relative z-10 hover:scale-[1.03] transition-transform duration-700 drop-shadow-2xl"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
