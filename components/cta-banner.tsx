import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

interface CTABannerProps {
  variant?: "estimate" | "call";
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  variant = "estimate",
  heading,
  subtext,
}: CTABannerProps) {
  const defaultHeading =
    variant === "estimate"
      ? "Ready to Start Saving on Energy?"
      : "Talk to an Insulation Expert";

  const defaultSubtext =
    variant === "estimate"
      ? "Get your free, no-obligation estimate today and find out how much you could save with spray foam insulation."
      : "Our team is standing by to answer your questions and help you choose the right insulation solution.";

  return (
    <section className="relative overflow-hidden">
      {/* Orange Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--orange) 0%, var(--orange-hover) 50%, #c2410c 100%)",
        }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-2 border-white"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-60 h-60 rounded-full border-2 border-white"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/20"
          style={{ animation: "float 8s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          {heading || defaultHeading}
        </h2>
        <p className="text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtext || defaultSubtext}
        </p>

        {variant === "estimate" ? (
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-white text-[var(--orange)] font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300"
          >
            Get Your Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        ) : (
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-white text-[var(--orange)] font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call {SITE.phone}
          </a>
        )}
      </div>
    </section>
  );
}
