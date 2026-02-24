import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas-data";
import ScrollReveal from "@/components/scroll-reveal";

export default function AreasGrid() {
  return (
    <section id="areas" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-[var(--orange)] tracking-wider uppercase mb-3">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4 section-divider">
              Serving Greater Pittsburgh
            </h2>
            <p className="text-lg text-[var(--slate-500)] max-w-2xl mx-auto mt-6">
              Professional spray foam insulation across Allegheny, Westmoreland, Butler, and
              surrounding counties.
            </p>
          </div>
        </ScrollReveal>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {AREAS.map((area) => (
            <ScrollReveal key={area.slug} direction="scale">
              <Link href={`/areas/${area.slug}`} className="block group">
                <div className="h-full p-6 rounded-xl border-2 border-[var(--slate-200)] bg-white transition-all duration-400 hover:border-[var(--blue)] hover:shadow-lg hover:shadow-[var(--blue)]/5 hover:-translate-y-1">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors duration-300">
                        {area.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-[var(--slate-500)] bg-[var(--slate-100)] px-2 py-0.5 rounded-full">
                          {area.county} County
                        </span>
                        <span className="text-xs text-[var(--slate-500)]">
                          {area.distance}
                        </span>
                      </div>
                    </div>
                    <MapPin className="w-5 h-5 text-[var(--blue)]/40 group-hover:text-[var(--orange)] transition-colors duration-300 flex-shrink-0 mt-1" />
                  </div>

                  {/* Description Preview */}
                  <p className="text-sm text-[var(--slate-500)] leading-relaxed line-clamp-2 mb-4">
                    {area.description}
                  </p>

                  {/* View Details Link */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--blue)] group-hover:text-[var(--orange)] transition-colors duration-300">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
