"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import TiltCard from "./TiltCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "CareSync — AI Clinical Appointment & Telemedicine System",
    description:
      "A comprehensive MERN healthcare portal orchestrating end-to-end patient consultations, doctor schedules, and digital records. Integrates Google Gemini AI for intelligent symptom triage and real-time telemedicine, achieving sub-400ms API response latency and an 89+ Lighthouse performance score on Vercel.",
    image: "/projects/caresync-logo.jpg",
    liveUrl: "https://care-sync-pro-lbel.vercel.app/",
    githubUrl: "https://github.com/BalajiHariharan30",
  },
  {
    id: 2,
    title: "InsightOps — AI-Enhanced Multi-Tenant Inventory & Expense SaaS",
    description:
      "A resilient multi-organization resource management platform featuring real-time inventory synchronization, automated expense anomaly detection via statistical heuristics, and natural-language query processing powered by the Google Gemini API and Redis caching.",
    image: "/projects/insightops-logo.jpg",
    liveUrl: "https://insightops-saas.vercel.app/",
    githubUrl: "https://github.com/BalajiHariharan30/insightops-saas",
  },
  {
    id: 3,
    title: "ReserveX — High-Concurrency Ticket Reservation Platform",
    description:
      "An enterprise-grade reservation portal equipped with atomic seat-locking mechanisms via Socket.io to eliminate race conditions and double-bookings during traffic spikes. Features three-tier RBAC protection, dynamic discount coupon recalculation, and interactive analytics.",
    image: "/projects/reservex-logo.jpg",
    githubUrl: "https://github.com/BalajiHariharan30",
  },
  {
    id: 4,
    title: "Stockflow — Enterprise Inventory Control & Order Cycle Engine",
    description:
      "A streamlined inventory control dashboard engineered with React, Vite, and Redux Toolkit, providing granular product catalog tracking, audit trail logging, and secure role-based permissions over strict RESTful API endpoints.",
    image: "/projects/inventory-logo.jpg",
    liveUrl: "https://inventory-management-pcw8.vercel.app/",
    githubUrl: "https://github.com/BalajiHariharan30",
  },
];

export default function Projects(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".stagger");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="lab" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={project.id}
              className="mb-28 last:mb-0 group stagger"
              style={{ "--delay": `${index * 0.12}s` } as React.CSSProperties}
            >
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>

                {/* Text */}
                <div className={isEven ? "lg:col-start-2" : ""}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium tracking-wide">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Overlapping description card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 via-white/10 to-purple-950/20 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl hover:border-purple-400/45 transition-all duration-300 hover:-translate-y-1 ${isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"}`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="ripple-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-medium text-sm transition-all hover:scale-105 hover:-translate-y-0.5 shadow-md shadow-purple-900/40 hover:shadow-purple-700/60">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span>Live Demo</span>
                      </Link>
                    )}
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="ripple-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-purple-400/30 hover:border-purple-400/65 transition-all hover:scale-105 hover:-translate-y-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>

                {/* Image with TiltCard */}
                <div className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <TiltCard intensity={8}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl border border-purple-500/20 group-hover:border-purple-400/45 group-hover:shadow-purple-900/40 transition-all duration-500">
                      {/* Animated conic gradient border glow */}
                      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "conic-gradient(from 0deg, #a855f7, #6366f1, #a855f7)", padding: "1px" }}>
                        <div className="absolute inset-0 rounded-2xl bg-slate-950" />
                      </div>
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image src={project.image} alt={project.title} fill
                          sizes="(max-width:1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-[1.06] transition-transform duration-700" />
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
