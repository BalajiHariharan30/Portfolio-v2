"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 4,  suffix: "+", label: "Production Apps" },
  { value: 50, suffix: "+", label: "Students Mentored" },
  { value: 8,  suffix: ".0", label: "CGPA / 10" },
  { value: 4,  suffix: "x", label: "Certified" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1600;
        const step = 16;
        const inc = target / (dur / step);
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur * 10) / 10);
        }, step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {suffix === ".0" ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
}

export default function StatsBar(): React.JSX.Element {
  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-slate-950/60 to-purple-950/20 pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i}
              className="group text-center p-6 rounded-2xl border border-purple-500/20 bg-white/2 hover:border-purple-400/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-950/40 transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-extrabold text-shimmer mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
