import Link from "next/link"
import { Shield, AlertTriangle, ExternalLink, ArrowRight } from "lucide-react"

interface LicensedCtaProps {
  variant?: "full" | "compact"
}

export default function LicensedCta({ variant = "full" }: LicensedCtaProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl border-2 border-[var(--orange)]/30 bg-gradient-to-r from-[var(--orange)]/5 to-[var(--blue)]/5 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[var(--orange)]" />
          </div>
          <div>
            <h3 className="font-bold text-[var(--slate-900)] mb-1">
              Always Hire a Licensed Contractor
            </h3>
            <p className="text-sm text-[var(--slate-600)] mb-3">
              Unlicensed spray foam work can void your warranty, fail inspection,
              and make your home unsellable. Pennsylvania law requires all contractors
              performing $5,000+ in work to register with the Attorney General.
            </p>
            <Link
              href="/licensed-contractor"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue)] hover:text-[var(--orange)] transition-colors"
            >
              Learn why it matters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-gradient-to-br from-[var(--navy)] via-[#0f2540] to-[var(--navy)] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--orange)]/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--blue)]/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Warning + Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--orange)]/10 border border-[var(--orange)]/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-[var(--orange)]" />
              <span className="text-sm font-semibold text-[var(--orange)]">
                Homeowner Alert
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Unlicensed Spray Foam Work Can Make Your Home{" "}
              <span className="text-[var(--orange)]">Unsellable</span>
            </h2>

            <p className="text-white/70 leading-relaxed mb-4">
              Lenders are denying mortgages on homes with improperly installed spray
              foam insulation. Unlicensed contractors skip critical steps that lead
              to trapped moisture, hidden structural damage, and failed inspections.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              Pennsylvania law requires all home improvement contractors performing
              $5,000 or more in work to register with the Attorney General under the{" "}
              <strong className="text-white">Home Improvement Consumer Protection Act</strong>.
              Violations carry <strong className="text-white">treble damages</strong> and
              criminal penalties.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/licensed-contractor"
                className="btn-primary"
              >
                Read the Full Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://hicsearch.attorneygeneral.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Verify a PA License
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Stats / Facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                stat: "250K+",
                label: "Homes at risk of being unmortgageable due to bad spray foam work",
                color: "var(--orange)",
              },
              {
                stat: "$5,000",
                label: "PA registration threshold — contractors must register above this amount",
                color: "var(--blue-light)",
              },
              {
                stat: "3x",
                label: "Treble damages awarded under PA consumer protection law for violations",
                color: "var(--green)",
              },
              {
                stat: "24hrs",
                label: "Full cure time required — cutting corners causes long-term health risks",
                color: "var(--orange)",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="text-2xl md:text-3xl font-extrabold mb-2"
                  style={{ color: item.color }}
                >
                  {item.stat}
                </div>
                <p className="text-sm text-white/60 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
