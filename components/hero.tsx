import Link from "next/link";
import { ArrowRight, Phone, Star, Shield, TrendingDown, Award, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="text-sm font-medium text-white/80">
              Serving the Greater Pittsburgh Area
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Pittsburgh&apos;s #1 </span>
            <span className="gradient-text">Spray Foam</span>
            <br />
            <span className="text-white">Insulation Experts</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            Save up to <span className="text-[var(--green)] font-semibold">50% on energy bills</span>{" "}
            with professional spray foam insulation. Residential and commercial projects across
            Pittsburgh and Western PA.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/free-estimate" className="btn-primary text-lg">
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="btn-secondary text-lg">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
              <Award className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{SITE.stats.projects}</div>
                <div className="text-white/50 text-xs">Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
              <Star className="w-5 h-5 text-[var(--orange)] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{SITE.stats.rating} Rating</div>
                <div className="text-white/50 text-xs">{SITE.stats.reviews} Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
              <TrendingDown className="w-5 h-5 text-[var(--green)] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{SITE.stats.savings} Avg</div>
                <div className="text-white/50 text-xs">Energy Savings</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-[var(--blue-light)] flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-sm">{SITE.stats.experience} Years</div>
                <div className="text-white/50 text-xs">Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="hidden lg:block absolute top-32 right-12 w-72 h-72 rounded-full border border-white/5 animate-float" />
        <div
          className="hidden lg:block absolute bottom-20 right-40 w-48 h-48 rounded-full border border-[var(--orange)]/10"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
        />
        <div
          className="hidden lg:block absolute top-1/2 right-24 w-3 h-3 rounded-full bg-[var(--orange)]/40"
          style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
        />
        <div
          className="hidden lg:block absolute top-40 right-64 w-2 h-2 rounded-full bg-[var(--blue-light)]/40"
          style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
        />
      </div>
    </section>
  );
}
