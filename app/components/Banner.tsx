"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Magnetic from "./Magnetic";

const ROLES = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "AI & Web Integrator",
  "Agile Problem Solver",
];

export default function Banner(): React.JSX.Element {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const speed = deleting ? 40 : 88;
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter
  useEffect(() => {
    const cur = ROLES[roleIdx];
    if (!deleting) {
      if (display.length < cur.length) {
        const t = setTimeout(() => setDisplay(cur.slice(0, display.length + 1)), speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDeleting(true), 1900);
      return () => clearTimeout(t);
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(cur.slice(0, display.length - 1)), speed);
        return () => clearTimeout(t);
      }
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [display, deleting, roleIdx, speed]);

  // Intersection-observer stagger
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
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden"
    >
      {/* Ambient orbs — static, no animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700/12 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ── Profile Avatar Showcase (Clean placement, zero overlay) ── */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2 stagger" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="relative group">
              {/* Subtle ambient back-glow (behind the card, not overlaying anything) */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-purple-400/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Clean Glassmorphic Frame */}
              <div className="relative w-72 sm:w-88 md:w-96 lg:w-[420px] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-purple-500/25 via-slate-950/85 to-[#110720] border border-purple-500/40 backdrop-blur-xl shadow-2xl shadow-purple-950/80 transition-all duration-500 group-hover:border-purple-400/70 group-hover:shadow-purple-700/30">
                <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#110720] shadow-inner">
                  <Image
                    src="/assets/balaji-avatar.jpg"
                    alt="Balaji H - Full-Stack MERN Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 352px, (max-width: 1024px) 384px, 420px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Floating MERN + AI Top Badge */}
                <div className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-3 px-3.5 py-1.5 rounded-xl bg-purple-900/95 border border-purple-400/50 text-purple-200 text-xs sm:text-sm font-bold shadow-xl shadow-purple-950/90 flex items-center gap-1.5 animate-bounce z-20">
                  <span>⚡</span><span>MERN + AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Left Text ── */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Hello greeting badge */}
            <div className="inline-block relative stagger mb-2" style={{ "--delay": "0.05s" } as React.CSSProperties}>
              <div className="relative bg-purple-950/70 px-4 py-1.5 rounded-full border border-purple-400/35 backdrop-blur-md inline-flex items-center gap-2 shadow-lg shadow-purple-950/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <p className="text-white text-sm sm:text-base font-medium">
                  Hello! I Am <span className="text-purple-400 font-bold">Balaji H</span>
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="stagger" style={{ "--delay": "0.15s" } as React.CSSProperties}>
              <p className="text-2xl text-white/90 font-light">
                A <span className="text-purple-400 font-semibold">MERN Stack Developer</span> who
              </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-bold text-white leading-tight">
                Built to{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200}
                    className="absolute mt-2" style={{ width: "auto", height: "auto" }} />
                  <span className="text-shimmer">perform.</span>
                </span>
                <br />
                Designed to impress.
              </h1>
              <p className="text-md text-white/75 mt-4">
                Because engineering without elegance is just noise.
              </p>
            </div>
          </div>
        </div>

        {/* ── Lower hero ── */}
        <div className="space-y-4 pt-16 text-center lg:text-left">
          <div className="stagger" style={{ "--delay": "0.3s" } as React.CSSProperties}>
            <p className="text-4xl sm:text-5xl text-white font-bold">
              I&apos;m a{" "}
              <span className="text-purple-300">{display}</span>
              <span className="animate-typewriter-blink text-purple-400 ml-0.5">|</span>
            </p>
          </div>

          <div className="stagger" style={{ "--delay": "0.42s" } as React.CSSProperties}>
            <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Currently, I&apos;m a Full-Stack Engineer based in</span>
              <span className="text-purple-400 font-semibold underline underline-offset-4 decoration-purple-500/50">
                Trichy, Tamil Nadu.
              </span>
            </p>
          </div>

          <div className="stagger" style={{ "--delay": "0.54s" } as React.CSSProperties}>
            <p className="text-lg text-white/80 max-w-2xl mt-4 mx-auto lg:mx-0 leading-relaxed">
              A results-oriented Full-Stack MERN Developer and B.Tech graduate from Bannari Amman Institute of
              Technology (8.0 CGPA). I build resilient digital applications, distributed backends, and
              AI-powered interfaces that create an equilibrium between computational elegance and high-speed
              execution.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6 stagger" style={{ "--delay": "0.66s" } as React.CSSProperties}>
            <Magnetic>
              <Link href="#lab"
                className="ripple-btn px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold transition-all shadow-lg shadow-purple-900/40 hover:scale-105 hover:shadow-purple-700/60 hover:-translate-y-1 duration-200 block">
                View Featured Work
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="ripple-btn px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105 hover:-translate-y-1 flex items-center gap-2 duration-200">
                <span>Resume PDF</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <Link href="#contact"
                className="px-6 py-3 rounded-xl text-white/80 hover:text-white font-medium hover:bg-white/5 transition-colors hover:-translate-y-1 duration-200 block">
                Contact Me →
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
