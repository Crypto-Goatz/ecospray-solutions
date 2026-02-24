import type { Metadata } from "next"
import { Shield, Star, Clock, CheckCircle2 } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import LeadForm from "@/components/lead-form"
import { SITE } from "@/lib/constants"
import { TESTIMONIALS } from "@/lib/testimonials-data"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Get Your Free Spray Foam Estimate",
  description: `Request a free, no-obligation spray foam insulation estimate from ${SITE.name}. Serving Pittsburgh and the surrounding communities. Fast response, transparent pricing.`,
  openGraph: {
    title: `Free Spray Foam Estimate | ${SITE.name}`,
    description: `Get a free, no-obligation spray foam insulation estimate for your Pittsburgh home or business. ${SITE.stats.projects} projects completed, ${SITE.stats.rating}-star rating.`,
    url: `${SITE.url}/free-estimate`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/free-estimate` },
}

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: `${SITE.stats.rating}-Star Rated` },
  { icon: Clock, label: "24-Hour Response" },
  { icon: CheckCircle2, label: "No Obligation" },
]

export default function FreeEstimatePage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Free Estimate", url: `${SITE.url}/free-estimate` },
  ])

  // Pick a strong testimonial to show below the form
  const featuredTestimonial = TESTIMONIALS[0]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="min-h-screen bg-[var(--slate-50)] pt-24 pb-20 md:pt-28">
        <div className="max-w-3xl mx-auto px-4">
          {/* Heading */}
          <ScrollReveal>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
                Get Your <span className="gradient-text">Free Spray Foam Estimate</span>
              </h1>
              <p className="text-lg text-[var(--slate-500)] max-w-xl mx-auto">
                Tell us about your project and we will provide a detailed, no-obligation
                estimate within 24 hours.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-[var(--slate-700)]"
                >
                  <badge.icon className="w-5 h-5 text-[var(--green)]" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Lead Form */}
          <ScrollReveal>
            <div className="card">
              <LeadForm />
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal>
            <div className="mt-10 testimonial-card max-w-xl mx-auto">
              <div className="flex gap-1 mb-3">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-[var(--slate-700)] italic mb-3 leading-relaxed">
                &ldquo;{featuredTestimonial.text}&rdquo;
              </p>
              <div className="text-sm">
                <span className="font-semibold text-[var(--slate-900)]">
                  {featuredTestimonial.name}
                </span>
                <span className="text-[var(--slate-500)]">
                  {" "}&mdash; {featuredTestimonial.location}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
