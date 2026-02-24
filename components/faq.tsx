"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
}

export default function FAQ({ items, heading }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {heading && (
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-8 section-divider text-center">
          {heading}
        </h2>
      )}

      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "border-[var(--blue)]/30 bg-[var(--blue)]/[0.02] shadow-sm"
                  : "border-[var(--slate-200)] bg-white hover:border-[var(--slate-200)]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={isOpen}
              >
                <span
                  className={`font-semibold text-base transition-colors duration-300 ${
                    isOpen ? "text-[var(--blue)]" : "text-[var(--navy)]"
                  }`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 text-[var(--blue)]"
                      : "text-[var(--slate-500)]"
                  }`}
                />
              </button>
              <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                <div>
                  <div className="px-6 pb-5 text-[var(--slate-500)] leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
