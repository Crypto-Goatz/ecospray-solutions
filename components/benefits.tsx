import {
  ShieldCheck,
  Calculator,
  CalendarCheck,
  BadgeCheck,
  MapPin,
  Leaf,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your complete peace of mind. We carry comprehensive liability and workers' compensation coverage.",
  },
  {
    icon: Calculator,
    title: "Free Estimates",
    description:
      "Get a detailed, no-obligation estimate with transparent pricing. We will explain exactly what you need and why, with no hidden fees.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Week Scheduling",
    description:
      "We respect your time. Most projects are scheduled within the same week and completed in 1-2 days, minimizing disruption to your routine.",
  },
  {
    icon: BadgeCheck,
    title: "Lifetime Warranty",
    description:
      "Our workmanship is backed by a lifetime warranty. Spray foam does not sag, settle, or degrade, and neither does our commitment to you.",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description:
      "We live and work in Pittsburgh. We understand the unique challenges of western PA weather and the specific insulation needs of local homes.",
  },
  {
    icon: Leaf,
    title: "Energy Savings Guarantee",
    description:
      "We guarantee measurable energy savings on every project. Most homeowners see 40-50% reduction in heating and cooling costs after installation.",
  },
];

export default function Benefits() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[var(--slate-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-[var(--orange)] tracking-wider uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4 section-divider">
              Pittsburgh Trusts Us for a Reason
            </h2>
            <p className="text-lg text-[var(--slate-500)] max-w-2xl mx-auto mt-6">
              With {new Date().getFullYear() - 2011}+ years of experience and over 1,200 completed
              projects, we deliver insulation that performs.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={benefit.title}
                direction={index < 3 ? "up" : "scale"}
              >
                <div className="card h-full group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/5 flex items-center justify-center mb-5 group-hover:bg-[var(--orange)]/10 transition-colors duration-400">
                    <Icon className="w-6 h-6 text-[var(--blue)] group-hover:text-[var(--orange)] transition-colors duration-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--blue)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[var(--slate-500)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
