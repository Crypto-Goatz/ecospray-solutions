"use client";

import { useState } from "react";
import ScrollReveal from "@/components/scroll-reveal";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    alt: "Spray foam insulation being applied to attic rafters",
    label: "Attic Insulation",
  },
  {
    src: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=400&fit=crop",
    alt: "Residential home in Pittsburgh with energy efficient upgrades",
    label: "Residential Projects",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    alt: "Commercial building insulation project in Pittsburgh",
    label: "Commercial Work",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    alt: "Energy efficient home interior after spray foam insulation",
    label: "Energy Savings",
  },
];

export default function ImageShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-[var(--orange)] tracking-wider uppercase mb-3">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4 section-divider">
              See the Difference
            </h2>
            <p className="text-lg text-[var(--slate-500)] max-w-2xl mx-auto mt-6">
              Professional spray foam insulation transforms homes and buildings across the Pittsburgh area.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? "up" : "scale"}>
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIdx === i ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredIdx === i ? "opacity-90" : "opacity-60"
                }`} />
                <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${
                  hoveredIdx === i ? "translate-y-0" : "translate-y-2"
                }`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--orange)] text-white text-xs font-semibold mb-2">
                    {img.label}
                  </span>
                  <p className={`text-white/80 text-sm transition-opacity duration-500 ${
                    hoveredIdx === i ? "opacity-100" : "opacity-0"
                  }`}>
                    {img.alt}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
