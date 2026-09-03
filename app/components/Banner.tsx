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

          {/* ── 3-D Hologram Card with Profile Avatar ── */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2 stagger" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="relative">

              {/* Mobile hello pointer */}
              <div className="lg:hidden absolute -top-16 left-1/2 -translate-x-1/2 z-20 animate-pop-in" style={{ animationDelay: "0.6s" }}>
                <div className="relative inline-block">
                  <Image src="/assets/arrow.png" alt="pointer" width={70} height={70}
                    className="absolute top-2 -left-12 rotate-z-280 animate-float-bob"
                    style={{ width: "auto", height: "auto", animationDelay: "0.4s" }} />
                  <div className="relative bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-400/40 backdrop-blur-md">
                    <p className="text-white text-sm whitespace-nowrap font-medium">
                      Hello! I Am <span className="text-purple-400 font-bold">Balaji H</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hologram card */}
              <div className="relative w-72 sm:w-84 aspect-[4/4.8] rounded-3xl p-5 bg-gradient-to-b from-purple-500/25 via-slate-950/85 to-[#110720] border border-purple-500/40 backdrop-blur-xl shadow-2xl shadow-purple-950/80 group animate-border-pulse hover:animate-none hover:border-purple-400/70 transition-colors duration-500">

                {/* outer glow halo */}
                <div className="absolute inset-0 rounded-3xl bg-purple-600/20 blur-2xl animate-pulse-glow pointer-events-none" />

                {/* inner canvas */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c0b36] via-[#110720] to-[#0a0314] border border-purple-400/30 flex flex-col items-center justify-between p-4 sm:p-5 shadow-inner">

                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-20 pointer-events-none" />

                  {/* Single orbital ring */}
                  <div className="absolute w-56 h-56 rounded-full border border-dashed border-purple-400/25 animate-spin-slow pointer-events-none" />

                  {/* Status bar */}
                  <div className="relative z-10 flex items-center justify-between w-full text-[11px] text-purple-300/80 font-mono tracking-wider">
                    <span>// SYSTEM.CORE</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ONLINE
                    </span>
                  </div>

                  {/* Profile Avatar cleanly placed in BH center area - no overlay */}
                  <div className="relative z-10 my-auto select-none cursor-default group-hover:scale-105 transition-transform duration-500 text-center flex flex-col items-center">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-purple-400/40 shadow-2xl shadow-purple-950/80 bg-[#110720]">
                      <Image
                        src="/assets/balaji-avatar.jpg"
                        alt="Balaji H"
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="mt-2.5 text-xs uppercase tracking-[0.4em] text-purple-200/90 font-bold">
                      Balaji H
                    </div>
                  </div>

                  {/* Code badge */}
                  <div className="relative z-10 w-full pt-2.5 border-t border-purple-500/20">
                    <div className="font-mono text-[11px] sm:text-xs text-purple-200 bg-purple-950/70 px-3 py-1.5 rounded-xl border border-purple-400/30 flex items-center justify-center gap-2 shadow-inner">
                      <span className="text-purple-400 font-bold">&lt;/&gt;</span>
                      <span>MERN · React · Node.js</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges (exact previous floating style) */}
                <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-xl bg-purple-900/95 border border-purple-400/50 text-purple-200 text-xs font-bold shadow-xl shadow-purple-950/90 flex items-center gap-1.5 animate-bounce z-20">
                  <span>⚡</span><span>MERN + AI</span>
                </div>
                <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-xl bg-slate-900/95 border border-purple-400/40 text-emerald-400 text-xs font-semibold shadow-xl shadow-black/90 flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Graduated · Trichy</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Left Text ── */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Desktop hello pointer */}
            <div className="hidden lg:inline-block relative stagger" style={{ "--delay": "0.05s" } as React.CSSProperties}>
              <Image src="/assets/arrow.png" alt="Arrow pointer" width={100} height={100}
                className="absolute animate-float-bob"
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }} />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg font-medium">
                  Hello! I Am <span className="text-purple-400 font-bold">Balaji H</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10" />
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
