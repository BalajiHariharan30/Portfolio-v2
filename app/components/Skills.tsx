"use client";

import { useState, useEffect, useRef } from "react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "db-ai" | "tools";
  level: "Advanced" | "Proficient" | "Intermediate";
  icon: string;
  pct: number;
}

const skillsData: SkillItem[] = [
  { name: "React.js",           category: "frontend", level: "Advanced",     icon: "⚛️", pct: 92 },
  { name: "Next.js",            category: "frontend", level: "Proficient",   icon: "▲",  pct: 78 },
  { name: "JavaScript (ES6+)",  category: "frontend", level: "Advanced",     icon: "🟨", pct: 90 },
  { name: "Tailwind CSS",       category: "frontend", level: "Advanced",     icon: "🎨", pct: 88 },
  { name: "Redux Toolkit",      category: "frontend", level: "Intermediate", icon: "🔄", pct: 65 },
  { name: "HTML5 & CSS3",       category: "frontend", level: "Advanced",     icon: "🌐", pct: 95 },
  { name: "Vite",               category: "frontend", level: "Proficient",   icon: "⚡", pct: 80 },
  { name: "Ant Design",         category: "frontend", level: "Intermediate", icon: "🐜", pct: 60 },
  { name: "Node.js",            category: "backend",  level: "Advanced",     icon: "🟢", pct: 88 },
  { name: "Express.js",         category: "backend",  level: "Advanced",     icon: "🚂", pct: 86 },
  { name: "RESTful APIs",       category: "backend",  level: "Advanced",     icon: "🔌", pct: 90 },
  { name: "Java",               category: "backend",  level: "Proficient",   icon: "☕", pct: 75 },
  { name: "Spring Boot",        category: "backend",  level: "Intermediate", icon: "🍃", pct: 60 },
  { name: "Socket.io",          category: "backend",  level: "Intermediate", icon: "💬", pct: 68 },
  { name: "MongoDB",            category: "db-ai",    level: "Advanced",     icon: "🍃", pct: 88 },
  { name: "MySQL",              category: "db-ai",    level: "Intermediate", icon: "🐬", pct: 65 },
  { name: "Redis",              category: "db-ai",    level: "Intermediate", icon: "🔴", pct: 62 },
  { name: "Google Gemini API",  category: "db-ai",    level: "Proficient",   icon: "🤖", pct: 78 },
  { name: "Agentic AI",         category: "db-ai",    level: "Proficient",   icon: "🧠", pct: 75 },
  { name: "JWT & RBAC",         category: "db-ai",    level: "Advanced",     icon: "🔐", pct: 85 },
  { name: "Git & GitHub",       category: "tools",    level: "Proficient",   icon: "🐙", pct: 82 },
  { name: "GitHub Actions CI",  category: "tools",    level: "Intermediate", icon: "🔁", pct: 62 },
  { name: "Vercel Cloud",       category: "tools",    level: "Proficient",   icon: "▲",  pct: 80 },
  { name: "Postman",            category: "tools",    level: "Proficient",   icon: "📮", pct: 82 },
  { name: "Jest & Vitest",      category: "tools",    level: "Intermediate", icon: "🧪", pct: 58 },
  { name: "Agile / Scrum",      category: "tools",    level: "Proficient",   icon: "🏃", pct: 80 },
];

const filterTabs = [
  { key: "all",      label: "All Technologies" },
  { key: "frontend", label: "Frontend" },
  { key: "backend",  label: "Backend & APIs" },
  { key: "db-ai",    label: "Databases & AI" },
  { key: "tools",    label: "DevOps & Tools" },
] as const;

const LEVEL_COLOR: Record<string, string> = {
  Advanced:     "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
  Proficient:   "text-purple-300  border-purple-500/30  bg-purple-950/30",
  Intermediate: "text-sky-300     border-sky-500/30     bg-sky-950/30",
};

const BAR_COLOR: Record<string, string> = {
  Advanced:     "from-emerald-500 to-teal-400",
  Proficient:   "from-purple-500  to-violet-400",
  Intermediate: "from-sky-500     to-blue-400",
};

function SkillBar({ pct, level, visible }: { pct: number; level: string; visible: boolean }) {
  return (
    <div className="w-full h-1 rounded-full bg-white/5 mt-2 overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${BAR_COLOR[level]} transition-all duration-1000 ease-out`}
        style={{ width: visible ? `${pct}%` : "0%" }}
      />
    </div>
  );
}

export default function Skills(): React.JSX.Element {
  const [active, setActive] = useState<typeof filterTabs[number]["key"]>("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = active === "all" ? skillsData : skillsData.filter((s) => s.category === active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // reset bars when filter changes so they re-animate
  const handleFilter = (key: typeof filterTabs[number]["key"]) => {
    setVisible(false);
    setActive(key);
    setTimeout(() => setVisible(true), 60);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase animate-fade-in">Technical Arsenal</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight animate-fade-up">
            Tools & Frameworks I Use to{" "}
            <span className="text-shimmer">Build at Scale</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            A battle-tested stack spanning client-side interfaces, distributed server backends,
            intelligent APIs, and automated deployment pipelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button key={tab.key} onClick={() => handleFilter(tab.key)}
                className={`ripple-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-250 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/50 border border-purple-400/50 scale-105 -translate-y-0.5"
                    : "bg-white/5 hover:bg-white/10 text-white/75 hover:text-white border border-white/10 hover:border-purple-500/40 hover:scale-105"
                }`}>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((skill, idx) => (
            <div
              key={`${active}-${idx}`}
              className="group p-4 rounded-2xl bg-gradient-to-b from-purple-950/30 via-slate-950/60 to-[#110720] border border-purple-500/20 hover:border-purple-400/55 hover:shadow-xl hover:shadow-purple-950/50 hover:-translate-y-2 transition-all duration-250 flex flex-col items-center text-center min-h-[155px] cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                animation: visible
                  ? `fadeUp 0.45s ease-out ${Math.min(idx * 0.045, 0.9)}s forwards`
                  : "none",
              }}
            >
              <span className="text-3xl sm:text-4xl mb-2 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300 block">
                {skill.icon}
              </span>
              <p className="text-white font-semibold text-xs sm:text-sm leading-snug mb-1 group-hover:text-purple-300 transition-colors w-full">
                {skill.name}
              </p>
              <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full border font-medium mb-1 ${LEVEL_COLOR[skill.level]}`}>
                {skill.level}
              </span>
              <div className="w-full mt-auto">
                <SkillBar pct={skill.pct} level={skill.level} visible={visible} />
                <p className="text-[10px] text-white/40 text-right mt-0.5">{skill.pct}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
