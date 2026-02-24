import Link from "next/link";
import { ArrowRight, Phone, Star, Shield, TrendingDown, Award, Clock, ClipboardCheck, Ruler, SprayCan, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/constants";

const PROCESS_STEPS = [
  { icon: ClipboardCheck, label: "Free Assessment", desc: "We inspect your property" },
  { icon: Ruler, label: "Custom Plan", desc: "Tailored to your needs" },
  { icon: SprayCan, label: "Expert Install", desc: "Professional application" },
  { icon: CheckCircle2, label: "Quality Check", desc: "Verified performance" },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Main Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Serving the Greater Pittsburgh Area
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6">
              <span className="text-white">Pittsburgh&apos;s #1 </span>
              <span className="gradient-text">Spray Foam</span>
              <br />
              <span className="text-white">Insulation Experts</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              Save up to <span className="text-[var(--green)] font-semibold">50% on energy bills</span>{" "}
              with professional spray foam insulation. Residential and commercial projects across
              Pittsburgh and Western PA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/free-estimate" className="btn-primary text-lg">
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn-secondary text-lg">
                <Phone className="w-5 h-5" />
                Call {SITE.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Award, val: SITE.stats.projects, label: "Projects", color: "var(--orange)" },
                { icon: Star, val: `${SITE.stats.rating} Rating`, label: `${SITE.stats.reviews} Reviews`, color: "var(--orange)" },
                { icon: TrendingDown, val: `${SITE.stats.savings} Avg`, label: "Energy Savings", color: "var(--green)" },
                { icon: Clock, val: `${SITE.stats.experience} Years`, label: "Experience", color: "var(--blue-light)" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
                  <b.icon className="w-5 h-5 flex-shrink-0" style={{ color: b.color }} />
                  <div>
                    <div className="text-white font-bold text-sm">{b.val}</div>
                    <div className="text-white/50 text-xs">{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Visual */}
          <div className="hidden lg:block relative">
            {/* Main image card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop"
                alt="Professional spray foam insulation being applied in a Pittsburgh home"
                className="w-full h-[420px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                  <Shield className="w-8 h-8 text-[var(--green)]" />
                  <div>
                    <div className="text-white font-bold text-sm">Licensed & Fully Insured</div>
                    <div className="text-white/60 text-xs">PA Certified Spray Foam Contractor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-8 top-20 px-5 py-4 rounded-xl bg-white shadow-xl shadow-black/10 border border-[var(--slate-200)] animate-float">
              <div className="text-3xl font-extrabold text-[var(--green)]">50%</div>
              <div className="text-sm font-medium text-[var(--slate-700)]">Energy Savings</div>
            </div>

            {/* Floating review card */}
            <div className="absolute -right-4 bottom-32 px-4 py-3 rounded-xl bg-white shadow-xl shadow-black/10 border border-[var(--slate-200)]" style={{ animation: "float 5s ease-in-out infinite 1.5s" }}>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />
                ))}
              </div>
              <div className="text-sm font-semibold text-[var(--navy)]">&quot;Best investment ever!&quot;</div>
              <div className="text-xs text-[var(--slate-500)]">— Mike J., Murrysville</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Process Strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-[var(--orange)] uppercase tracking-wider">Our Simple 4-Step Process</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="group relative text-center">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-white/5" />
                )}
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--orange)]/20 group-hover:border-[var(--orange)]/30 group-hover:scale-110">
                  <step.icon className="w-7 h-7 text-white/80 group-hover:text-[var(--orange)] transition-colors duration-300" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{step.label}</div>
                <div className="text-white/50 text-xs">{step.desc}</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--orange)] text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--orange)]/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--blue)]/5 blur-3xl translate-y-1/2 -translate-x-1/3" />
    </section>
  );
}
