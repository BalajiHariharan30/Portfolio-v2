"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const internshipHighlights = [
  "Developed full-stack features for a Hospital Management System using React.js, Node.js, Express.js, and MongoDB, building and integrating RESTful APIs for managing patients, doctors, appointments, and hospital workflows.",
  "Implemented JWT authentication and Role-Based Access Control (RBAC) to secure application access and backend endpoints.",
  "Developed responsive React.js components and reusable UI modules to improve user experience and maintainability.",
  "Integrated AI-powered features into application workflows and performed API testing, debugging, database operations, and performance optimization while following Agile development practices.",
];

export default function Experience(): React.JSX.Element {
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
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase animate-fade-in">
            Professional Experience
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 animate-fade-up">
            Work <span className="text-shimmer">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="stagger group bg-gradient-to-br from-slate-950 via-purple-950/60 to-slate-950 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-t-[3px] border-purple-600 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-900/60 flex flex-col sm:flex-row items-start gap-8 transition-all duration-300 hover:-translate-y-2"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            <div className="shrink-0 mx-auto sm:mx-0 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors">
              <Image
                src="/cards/card-1.png"
                alt="Codomax Digital Solutions"
                width={120}
                height={120}
                className="object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-900/50 border border-purple-500/40 text-purple-300">
                  Internship
                </span>
                <span className="text-xs font-medium text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  July 2026 – Aug 2026
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-200">
                Codomax Digital Solutions
              </h3>
              <p className="text-purple-400 text-sm font-semibold mb-5">
                Software Engineer Intern (Full-Stack Development)
              </p>

              <ul className="space-y-3 text-white/80 text-sm leading-relaxed list-none p-0">
                {internshipHighlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 text-base leading-none mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
