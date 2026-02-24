import Link from "next/link";
import {
  Home,
  Building2,
  HardHat,
  Warehouse,
  Layers,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import ScrollReveal from "@/components/scroll-reveal";

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Building2,
  HardHat,
  Warehouse,
  Layers,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-[var(--orange)] tracking-wider uppercase mb-3">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4 section-divider">
              Professional Insulation Solutions
            </h2>
            <p className="text-lg text-[var(--slate-500)] max-w-2xl mx-auto mt-6">
              From residential attics to commercial buildings, we deliver expert spray foam
              insulation tailored to your specific needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Home;
            return (
              <ScrollReveal key={service.slug} direction={index % 2 === 0 ? "up" : "scale"}>
                <Link href={`/services/${service.slug}`} className="block group">
                  <div className="card h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[var(--blue)]/5 flex items-center justify-center mb-5 group-hover:bg-[var(--orange)]/10 transition-colors duration-400">
                      <Icon className="w-7 h-7 text-[var(--blue)] group-hover:text-[var(--orange)] transition-colors duration-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--navy)] mb-3 group-hover:text-[var(--blue)] transition-colors duration-300">
                      {service.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--slate-500)] text-sm leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--blue)] group-hover:text-[var(--orange)] transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
