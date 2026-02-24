"use client";

import { useEffect, useRef, useState } from "react";
import { Award, TrendingDown, Star, Clock } from "lucide-react";

interface StatItem {
  icon: typeof Award;
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { icon: Award, value: 1200, suffix: "+", label: "Projects Completed" },
  { icon: TrendingDown, value: 50, suffix: "%", label: "Avg Energy Savings" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Customer Rating" },
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const isDecimal = end % 1 !== 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, trigger]);

  return value;
}

function StatCard({ stat, index, visible }: { stat: StatItem; index: number; visible: boolean }) {
  const count = useCountUp(stat.value, 2000 + index * 200, visible);
  const Icon = stat.icon;

  return (
    <div className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--orange)]/20 transition-colors duration-400">
        <Icon className="w-7 h-7 text-[var(--orange)]" />
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
        {count}
        <span className="text-[var(--orange)]">{stat.suffix}</span>
      </div>
      <div className="text-sm text-white/60 font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[var(--navy)] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--blue)]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--orange)]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
