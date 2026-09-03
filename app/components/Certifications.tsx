"use client";

import { useEffect, useRef } from "react";

interface Credential {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  skills: string[];
}

const credentials: Credential[] = [
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "July 2026",
    badge: "🤖",
    skills: ["Agentic AI", "AI Workflows", "Autonomous Systems", "Prompt Architecture"],
  },
  {
    title: "Full Stack Development Professional",
    issuer: "GUVI × HCL",
    date: "May 2026",
    badge: "💻",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Production Deployments"],
  },
  {
    title: "Frontend Developer (React) Verified",
    issuer: "HackerRank",
    date: "Verified Credential",
    badge: "⚛️",
    skills: ["Component Architecture", "Hooks", "State Management", "Performance Optimization"],
  },
  {
    title: "Node.js, JavaScript & REST API Verified",
    issuer: "HackerRank",
    date: "Verified Credential",
    badge: "🏆",
    skills: ["RESTful Standards", "Async Event Loop", "Authentication", "API Security"],
  },
  {
    title: "SRM TechSpectrum '25 Winner",
    issuer: "SRM University",
    date: "2025",
    badge: "🥇",
    skills: ["Full-Stack Innovation", "Rapid Prototyping", "Technical Presentation"],
  },
];

export default function Certifications(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".stagger");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase animate-fade-in">
            Validated Competencies
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight animate-fade-up">
            Certifications &{" "}
            <span className="text-shimmer">Honors</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Independently verified and tested by global credentialing bodies and engineering competitions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="stagger group p-6 rounded-3xl bg-gradient-to-b from-purple-950/30 via-slate-950/70 to-[#110720] border border-purple-500/20 hover:border-purple-400/55 hover:shadow-2xl hover:shadow-purple-950/50 hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between cursor-default"
              style={{ "--delay": `${idx * 0.1}s` } as React.CSSProperties}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl p-3 rounded-2xl bg-purple-900/30 border border-purple-500/30 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-purple-300 group-hover:border-purple-400/50 transition-colors">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-purple-300/90 text-sm font-medium mb-5">{item.issuer}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-white/70 hover:bg-purple-900/40 hover:text-purple-200 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
