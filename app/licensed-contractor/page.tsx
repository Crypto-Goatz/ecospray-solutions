import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield, AlertTriangle, ExternalLink, CheckCircle2, XCircle,
  Phone, ArrowRight, Scale, Home, FileWarning, Banknote, Search,
  Building2, Lock, BadgeCheck, Gavel, HeartCrack
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import FAQ from "@/components/faq"
import CtaBanner from "@/components/cta-banner"
import { SITE } from "@/lib/constants"
import { breadcrumbSchema, faqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Why You Must Hire a Licensed Spray Foam Contractor in PA",
  description:
    "Unlicensed spray foam insulation can make your home unsellable. Learn how improper installation leads to mortgage denials, structural damage, and legal liability. Verify PA contractor licenses here.",
  keywords: [
    "licensed spray foam contractor Pennsylvania",
    "PA contractor license lookup",
    "spray foam insulation mortgage problems",
    "spray foam insulation home value",
    "HICPA Pennsylvania",
    "can spray foam make home unsellable",
    "spray foam insulation lender denial",
    "verify contractor license PA",
    "spray foam insulation risks",
    "home improvement consumer protection act",
  ],
  openGraph: {
    title: "Why You Must Hire a Licensed Spray Foam Contractor | Pittsburgh PA",
    description:
      "Homes with improperly installed spray foam are being denied mortgages. Learn the risks, verify PA licenses, and protect your home's value.",
    url: `${SITE.url}/licensed-contractor`,
    siteName: SITE.name,
    locale: "en_US",
    type: "article",
  },
  alternates: { canonical: `${SITE.url}/licensed-contractor` },
}

const licenseFaqs = [
  {
    q: "How do I verify if a spray foam contractor is licensed in Pennsylvania?",
    a: "Visit the Pennsylvania Attorney General's Home Improvement Contractor Search at hicsearch.attorneygeneral.gov. You can search by business name, registration number, county, or type of work. Every legitimate contractor must display their PA registration number (format: PA#####) on all advertisements, contracts, and estimates.",
  },
  {
    q: "What happens if I hire an unlicensed contractor in PA?",
    a: "Under the Home Improvement Consumer Protection Act (HICPA), contracts with unregistered contractors are voidable at the homeowner's option. If the work is defective, you can seek treble (triple) damages plus attorney's fees under the Unfair Trade Practices and Consumer Protection Law. However, recovering money from an unlicensed contractor who has no insurance or assets can be extremely difficult.",
  },
  {
    q: "Can spray foam insulation really make my home unsellable?",
    a: "Yes. When spray foam is improperly installed — particularly on roof structures — it can trap moisture against wooden structural elements, causing hidden rot. Surveyors cannot inspect covered rafters and joists, leading lenders to deny mortgage applications. In the UK, over 250,000 homes have been affected, with some lenders rejecting up to 95% of spray foam property applications. While the US market has not seen the same scale of denials, appraisers and lenders are increasingly scrutinizing spray foam installations, especially when done by unlicensed or uncertified contractors.",
  },
  {
    q: "What insurance should a spray foam contractor carry?",
    a: "At minimum, Pennsylvania law requires $50,000 in personal injury liability and $50,000 in property damage coverage. A reputable spray foam contractor should carry general liability insurance of at least $1 million, workers' compensation insurance, and ideally professional liability (errors and omissions) coverage. Ask for certificates of insurance naming you as an additional insured.",
  },
  {
    q: "What is the Home Improvement Consumer Protection Act (HICPA)?",
    a: "HICPA is a Pennsylvania law adopted in October 2008 that requires all home improvement contractors performing $5,000 or more in work per year to register with the Attorney General's Office. It mandates written contracts for projects over $500, gives homeowners a 3-day cancellation right, and provides for treble damages and criminal penalties for violations including fraud and abandonment.",
  },
  {
    q: "What should be included in a spray foam insulation contract?",
    a: "Under Pennsylvania law, every contract over $500 must include: the contractor's name, address, phone, and PA registration number; total project price; estimated start and completion dates; detailed description of work and materials; down payment amount; notice of 3-day cancellation rights; and insurance coverage amounts. For spray foam specifically, the contract should also specify the foam type (open-cell or closed-cell), target R-value, areas to be insulated, preparation and protection measures, and warranty terms.",
  },
  {
    q: "How do mortgage lenders evaluate spray foam insulation?",
    a: "Lenders rely on surveyor and appraiser reports. When spray foam is found, surveyors assess whether it was professionally installed with proper documentation, whether it obstructs structural inspection, and whether there are signs of moisture damage. Installations by licensed, certified contractors with full documentation (product certificates, thermal imaging verification, manufacturer warranties) are far less likely to trigger lending concerns than undocumented work by unknown installers.",
  },
  {
    q: "What certifications should a spray foam installer have?",
    a: "Beyond Pennsylvania state registration, look for: SPFA (Spray Polyurethane Foam Alliance) certification, BPI (Building Performance Institute) certification, manufacturer-specific training certifications for the products they use, and EPA Lead-Safe certification if working on pre-1978 homes. These certifications demonstrate ongoing training in proper installation techniques, safety protocols, and building science.",
  },
  {
    q: "Can I get spray foam removed if it was installed incorrectly?",
    a: "Yes, but removal is difficult and expensive — typically costing more than the original installation. Professional removal uses dry ice blasting technology and requires careful containment to avoid spreading debris. After removal, a structural engineer's report and independent roof survey may be needed before the property can be re-mortgaged. This is why hiring a licensed, insured contractor from the start is critical.",
  },
  {
    q: "Does spray foam insulation affect home appraisals?",
    a: "Properly installed spray foam insulation with full documentation can increase your home's appraised value due to improved energy efficiency. However, undocumented or improperly installed spray foam can decrease appraised value or cause the appraisal to be flagged. Appraisers look for professional installation, documentation, and whether the insulation obstructs inspection of structural elements.",
  },
]

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why You Must Hire a Licensed Spray Foam Contractor in Pennsylvania",
  description: "Comprehensive guide on the risks of unlicensed spray foam installation, PA licensing requirements, and how improper work can affect your mortgage and home value.",
  author: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  datePublished: "2026-02-24",
  dateModified: "2026-02-24",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/licensed-contractor`,
  },
}

export default function LicensedContractorPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Licensed Contractor Guide", url: `${SITE.url}/licensed-contractor` },
  ])

  const faqLd = faqSchema(licenseFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Licensed Contractor Guide" }]} />
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">
                  Homeowner Protection Guide
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Why Hiring a{" "}
                <span className="gradient-text">Licensed Contractor</span>{" "}
                Protects Your Home
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Improperly installed spray foam insulation is causing mortgage denials,
                structural damage, and homes that cannot be sold. Here is everything
                Pittsburgh homeowners need to know before hiring a spray foam contractor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hicsearch.attorneygeneral.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Search className="w-5 h-5" />
                  Verify a PA License
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link href="/free-estimate" className="btn-secondary">
                  Get a Licensed Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop"
                  alt="Professional contractor reviewing licensing documents and plans"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                    <Shield className="w-8 h-8 text-[var(--green)]" />
                    <div>
                      <div className="text-white font-bold text-sm">PA Registration Required</div>
                      <div className="text-white/60 text-xs">Home Improvement Consumer Protection Act</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Mortgage Crisis */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <HeartCrack className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                    The Growing Crisis
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-6 section-divider">
                Spray Foam Insulation Is Making Homes Unsellable
              </h2>

              <div className="prose max-w-none space-y-5 text-[var(--slate-700)] leading-relaxed">
                <p>
                  Across the housing market, a troubling pattern has emerged: homes with
                  spray foam insulation are being flagged during inspections, triggering
                  mortgage denials, lower appraisals, and properties that sit on the market
                  unsold. The problem is not spray foam itself — it is spray foam installed
                  by <strong className="text-[var(--slate-900)]">unlicensed, untrained contractors</strong> who
                  skip critical steps.
                </p>

                <p>
                  In the United Kingdom, where the crisis has been most acute, over{" "}
                  <strong className="text-[var(--slate-900)]">250,000 homes</strong> are at risk of becoming
                  unmortgageable due to improperly installed spray foam. Major lenders including
                  TSB, Nationwide, Barclays, and Santander have implemented restrictions or
                  outright bans on lending for properties with retrofit spray foam insulation.
                  Halifax has reported a{" "}
                  <strong className="text-[var(--slate-900)]">95% rejection rate</strong> for spray foam
                  property applications.
                </p>

                <p>
                  While the United States has not yet experienced the same scale of systematic
                  mortgage denials, the warning signs are here. Appraisers and home inspectors
                  are increasingly scrutinizing spray foam installations, particularly when there
                  is no documentation of licensed, professional work. Properties with undocumented
                  spray foam — especially in attics and crawl spaces — face growing risk of
                  reduced appraisals, extended sale timelines, and lender pushback.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Lenders Deny - Stats Grid */}
      <section className="bg-[var(--navy)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why Lenders Are Denying Mortgages on Spray Foam Homes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "Prevents Structural Inspection",
                  desc: "Spray foam covering rafters and joists makes it impossible for surveyors to assess the condition of roof structure, load-bearing elements, and connections.",
                },
                {
                  icon: FileWarning,
                  title: "Hidden Moisture Damage",
                  desc: "Improperly installed foam traps condensation against wooden structural elements, causing rot, mold, and decay that is invisible until catastrophic failure.",
                },
                {
                  icon: Building2,
                  title: "Structural Integrity Risk",
                  desc: "Trapped moisture weakens load-bearing timbers over time. In severe cases, roof collapse becomes a real possibility — an unacceptable risk for any lender.",
                },
                {
                  icon: Lock,
                  title: "Conceals Pre-Existing Problems",
                  desc: "Spray foam hides water leaks, pest infestations, wiring problems, and pre-existing structural damage that would normally be caught during inspection.",
                },
                {
                  icon: Banknote,
                  title: "Removal Is Extremely Costly",
                  desc: "Removing improperly installed spray foam costs more than the original installation — often $8,000 to $25,000 — with no guarantee of mortgage approval afterward.",
                },
                {
                  icon: Scale,
                  title: "Unquantifiable Risk",
                  desc: "Without the ability to inspect what is behind the foam, lenders cannot properly assess the property's value or structural soundness — making the loan too risky to approve.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Licensed vs Unlicensed */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-12 text-center section-divider">
              Licensed vs. Unlicensed: What You Actually Get
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Licensed */}
              <div className="rounded-2xl border-2 border-[var(--green)]/30 bg-[var(--green)]/5 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--green)]/10 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-[var(--green)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--green)]">
                    Licensed Contractor
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "PA Attorney General registration (PA#####)",
                    "Minimum $50K liability + property damage insurance",
                    "Workers' compensation for all crew members",
                    "Written contract with transparent pricing",
                    "3-day cancellation right protected by law",
                    "Manufacturer-certified installation techniques",
                    "Thermal imaging verification of coverage",
                    "Full documentation for future home sales",
                    "Treble damage protection if work is defective",
                    "Proper ventilation and moisture management",
                    "Product warranties + workmanship guarantee",
                    "Recourse through PA consumer protection law",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--green)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--slate-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unlicensed */}
              <div className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-red-500">
                    Unlicensed Contractor
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "No state registration or verification possible",
                    "No insurance — you are liable for injuries",
                    "No workers' comp — lawsuits fall on you",
                    "Verbal agreements with no legal protection",
                    "No cancellation rights",
                    "Self-taught techniques, no manufacturer training",
                    "No verification — gaps and voids go undetected",
                    "No documentation — mortgage risk at resale",
                    "No legal recourse for defective work",
                    "Blocked ventilation causing moisture and mold",
                    "No warranties — problems are your expense",
                    "Criminal prosecution unlikely to recover losses",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--slate-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PA License Verification Tool */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blue)]/10 border border-[var(--blue)]/20 mb-4">
                  <Shield className="w-4 h-4 text-[var(--blue)]" />
                  <span className="text-sm font-semibold text-[var(--blue)]">
                    Free Public Tool
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-4 section-divider">
                  Verify Any PA Contractor License — Free
                </h2>
                <p className="text-lg text-[var(--slate-500)] max-w-2xl mx-auto mt-6">
                  The Pennsylvania Attorney General operates a free public database of all
                  registered home improvement contractors. Use it before signing any contract.
                </p>
              </div>

              {/* License Search CTA Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-[var(--slate-200)] overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--slate-900)] mb-4">
                        PA Home Improvement Contractor Search
                      </h3>
                      <p className="text-[var(--slate-600)] mb-4">
                        Search by business name, registration number, county, or type of work.
                        Every legitimate contractor must have a PA registration number in the
                        format <strong className="text-[var(--navy)]">PA#####</strong>.
                      </p>
                      <p className="text-sm text-[var(--slate-500)] mb-6">
                        Operated by the Pennsylvania Office of Attorney General under the
                        Home Improvement Consumer Protection Act (HICPA), 73 P.S. Section 517.1.
                      </p>
                      <a
                        href="https://hicsearch.attorneygeneral.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Search className="w-5 h-5" />
                        Search PA Contractor Database
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[var(--slate-900)]">
                        You can search by:
                      </h4>
                      {[
                        "Registration Number (PA#####)",
                        "Business Name",
                        "Owner / Primary Applicant",
                        "City, State, or ZIP Code",
                        "County (all PA counties)",
                        "Type of Work (40+ categories including insulation)",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--green)] flex-shrink-0" />
                          <span className="text-sm text-[var(--slate-700)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--slate-50)] border-t border-[var(--slate-200)] px-8 py-4">
                  <p className="text-xs text-[var(--slate-500)]">
                    <strong>Important:</strong> Registration under HICPA is not an endorsement or
                    recommendation by the Attorney General of the contractor&apos;s competency or skill.
                    Always verify insurance, check references, and obtain a written contract.
                    AG HelpLine: <a href="tel:18885206680" className="text-[var(--blue)] hover:underline">1-888-520-6680</a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HICPA Deep Dive */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-[var(--blue)]" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[var(--blue)] uppercase tracking-wider">
                    Pennsylvania Law
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-6 section-divider">
                What Pennsylvania Law Requires from Contractors
              </h2>

              <div className="space-y-5 text-[var(--slate-700)] leading-relaxed">
                <p>
                  The <strong className="text-[var(--slate-900)]">Home Improvement Consumer Protection Act
                  (HICPA)</strong>, adopted by Pennsylvania&apos;s General Assembly in October 2008,
                  established a mandatory registration program for all home improvement contractors
                  in the state.
                </p>

                <h3 className="text-xl font-bold text-[var(--slate-900)] pt-4">
                  Who Must Register
                </h3>
                <p>
                  All contractors who perform at least <strong className="text-[var(--slate-900)]">$5,000
                  worth of home improvements per year</strong> must register with the Attorney General&apos;s
                  Office. This includes sole proprietors, subcontractors, corporations, nonprofits,
                  and out-of-state contractors working in Pennsylvania. The registration fee is $100
                  every two years.
                </p>

                <h3 className="text-xl font-bold text-[var(--slate-900)] pt-4">
                  What Must Be in Every Contract
                </h3>
                <p>
                  Every written contract for projects exceeding $500 must include:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-6 mb-8">
                {[
                  "Contractor name, address, phone, and PA registration number",
                  "All known subcontractors and their details",
                  "Total project price with no hidden fees",
                  "Estimated start and completion dates",
                  "Detailed work description with specifications",
                  "Down payment amount listed separately",
                  "PA Attorney General toll-free verification number",
                  "Notice of 3-day cancellation rights (exact statutory language)",
                  "Insurance coverage amounts",
                  "Maximum 10% cost overrun threshold for time-and-materials work",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[var(--slate-50)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--slate-700)]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-5 text-[var(--slate-700)] leading-relaxed">
                <h3 className="text-xl font-bold text-[var(--slate-900)] pt-4">
                  Consumer Protections and Penalties
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "3-Day Cancellation Right",
                      desc: "Homeowners may rescind any home improvement contract within three business days without penalty.",
                    },
                    {
                      title: "Treble Damages",
                      desc: "HICPA violations trigger the Unfair Trade Practices law, exposing contractors to triple damages plus attorney's fees.",
                    },
                    {
                      title: "Contract Voidability",
                      desc: "Contracts that do not comply with HICPA are voidable at the homeowner's option — you can walk away.",
                    },
                    {
                      title: "Criminal Penalties",
                      desc: "Home improvement fraud can be prosecuted as a misdemeanor or third-degree felony for first offenses.",
                    },
                    {
                      title: "Registration Revocation",
                      desc: "Courts can revoke a contractor's registration for up to five years, preventing them from working.",
                    },
                    {
                      title: "Civil Penalties",
                      desc: "Unregistered contractors face penalties of $1,000 or more per violation.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl border border-[var(--slate-200)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <h4 className="font-bold text-[var(--slate-900)] mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--slate-500)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Health & Safety Risks */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-6 section-divider">
                The Health Risks of Improper Installation
              </h2>

              <div className="space-y-5 text-[var(--slate-700)] leading-relaxed mb-8">
                <p>
                  The U.S. Environmental Protection Agency has identified multiple chemicals of
                  concern in spray polyurethane foam, including{" "}
                  <strong className="text-[var(--slate-900)]">isocyanates</strong> — the primary hazard — as well as
                  amines, volatile organic compounds, carbon monoxide, and hydrogen cyanide.
                  During application, inhalation exposures{" "}
                  <strong className="text-[var(--slate-900)]">typically exceed OSHA occupational exposure limits</strong>.
                </p>

                <p>
                  Once fully cured (approximately 24 hours), properly installed spray foam is
                  completely inert and safe. The danger lies in <em>improper</em> installation:
                  incorrect chemical mixing ratios create foul odors and ongoing off-gassing,
                  insufficient cure times expose occupants to hazardous chemicals, and electrical
                  cables embedded in foam can overheat.
                </p>

                <p>
                  A licensed contractor follows strict safety protocols: proper ventilation,
                  full PPE for installation crews, correct chemical ratios, adequate cure time
                  verification, and re-occupancy guidance. An unlicensed contractor may skip
                  every one of these steps.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Moisture trapping leading to mold growth behind insulation" },
                  { label: "Timber rot from condensation against structural wood" },
                  { label: "Blocked ventilation causing superheating and CO buildup" },
                  { label: "Chemical off-gassing from incorrect mixing ratios" },
                  { label: "Concealed termite damage and pest infestations" },
                  { label: "Electrical cable overheating under rigid foam" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[var(--slate-200)]"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--slate-700)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Protect Your Investment */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-6 text-center section-divider">
                How to Protect Your Home and Investment
              </h2>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Search,
                    title: "1. Verify the License",
                    desc: "Search the PA Attorney General's database at hicsearch.attorneygeneral.gov before signing anything. Ask for the PA##### registration number upfront.",
                  },
                  {
                    icon: Shield,
                    title: "2. Demand Proof of Insurance",
                    desc: "Request certificates of insurance showing at least $1M general liability and workers' compensation. Call the insurance company to verify the policy is current.",
                  },
                  {
                    icon: FileWarning,
                    title: "3. Get Everything in Writing",
                    desc: "A HICPA-compliant written contract is required by law for projects over $500. If a contractor resists putting it in writing, walk away immediately.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "4. Check Certifications",
                    desc: "Look for SPFA certification, BPI certification, and manufacturer-specific training. These demonstrate ongoing investment in proper installation techniques.",
                  },
                  {
                    icon: Home,
                    title: "5. Ask for Documentation",
                    desc: "A professional contractor provides product certificates, thermal imaging verification, manufacturer warranties, and before/after photos. This documentation protects resale value.",
                  },
                  {
                    icon: Phone,
                    title: "6. Know Your Rights",
                    desc: "You have 3 days to cancel any home improvement contract. If work is defective, you can pursue treble damages. AG HelpLine: 1-888-520-6680.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-xl bg-[var(--slate-50)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--blue)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--slate-900)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--slate-600)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FAQ
              heading="Licensed Contractor FAQ"
              items={licenseFaqs}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner
          variant="estimate"
          heading="Work With a Licensed, Insured Team"
          subtext={`${SITE.name} is registered with the PA Attorney General, fully insured, and provides complete documentation with every project. Get your free estimate today.`}
        />
      </ScrollReveal>
    </>
  )
}
