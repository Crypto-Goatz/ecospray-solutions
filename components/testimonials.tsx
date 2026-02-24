"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/scroll-reveal";

export default function Testimonials() {
  const displayed = TESTIMONIALS.slice(0, 3);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[var(--slate-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Aggregate Rating */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-[var(--orange)] tracking-wider uppercase mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4 section-divider">
              What Our Customers Say
            </h2>

            {/* Aggregate Rating */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[var(--orange)] text-[var(--orange)]"
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-[var(--navy)]">
                {SITE.stats.rating} out of 5
              </span>
              <span className="text-[var(--slate-500)]">
                from {SITE.stats.reviews} reviews
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {displayed.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} direction={index === 1 ? "up" : "scale"}>
              <div className="testimonial-card h-full flex flex-col">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--orange)] text-[var(--orange)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[var(--slate-700)] leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--slate-200)]">
                  <div>
                    <div className="font-bold text-[var(--navy)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[var(--slate-500)]">
                      {testimonial.location}
                    </div>
                  </div>

                  {/* Service Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--blue)]/5 text-[var(--blue)]">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
