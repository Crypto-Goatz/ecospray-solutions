import type { Metadata } from "next"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import ServicesGrid from "@/components/services-grid"
import Benefits from "@/components/benefits"
import CtaBanner from "@/components/cta-banner"
import FAQ from "@/components/faq"
import { SITE } from "@/lib/constants"
import { SERVICES } from "@/lib/services-data"
import { breadcrumbSchema, serviceSchema, faqSchema as buildFaqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Spray Foam Insulation Services",
  description: `Professional residential, commercial, and new construction spray foam insulation services in Pittsburgh and Western PA. Free estimates. Save up to ${SITE.stats.savings} on energy bills.`,
  openGraph: {
    title: `Spray Foam Insulation Services | ${SITE.name}`,
    description: `Professional spray foam insulation services in Pittsburgh and Western PA. Free estimates from ${SITE.name}.`,
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/services` },
}

const servicesFaqs = [
  {
    q: "What is spray foam insulation and how does it work?",
    a: "Spray foam insulation is a two-component polyurethane material sprayed as a liquid that expands into a rigid or semi-rigid foam within seconds. It fills every crack, gap, and cavity to create an airtight thermal envelope, providing both insulation and air sealing in a single application.",
  },
  {
    q: "How much does spray foam insulation cost in Pittsburgh?",
    a: "Costs typically range from $1.00 to $2.50 per board foot for open-cell foam and $1.50 to $3.50 per board foot for closed-cell foam. A typical residential attic project might cost between $3,500 and $9,000 depending on size, accessibility, and foam type. We provide free, detailed estimates for every project.",
  },
  {
    q: "Is spray foam better than fiberglass insulation?",
    a: "Yes. Spray foam provides up to 50% greater R-value per inch, creates an air seal that fiberglass cannot match, resists moisture and mold, and maintains performance for the lifetime of the building. Most homeowners see a full return on investment within 3 to 7 years through energy savings.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential projects are completed in 1 to 2 days. A single zone like a rim joist or small attic section can be finished in a few hours. The foam cures rapidly and most spaces can be reoccupied within 24 hours.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Absolutely. Every project starts with a free, no-obligation on-site assessment. We inspect your property, identify problem areas, and provide a detailed written proposal with transparent pricing.",
  },
]

export default function ServicesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
  ])

  const serviceSchemas = SERVICES.map((s) =>
    serviceSchema(s.title, s.description, s.slug)
  )

  const faqLd = buildFaqSchema(servicesFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Spray Foam{" "}
              <span className="gradient-text">Insulation Services</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              From cozy homes to large commercial buildings across Western Pennsylvania,
              {" "}{SITE.name} delivers superior spray foam insulation that cuts energy costs
              by up to {SITE.stats.savings}, eliminates drafts, and transforms comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <ServicesGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* Before/After Visual */}
      <section className="bg-[var(--navy)] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop", label: "Attic Insulation", desc: "R-38+ coverage" },
                { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=350&fit=crop", label: "Wall Systems", desc: "Complete air sealing" },
                { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=350&fit=crop", label: "Crawl Spaces", desc: "Full encapsulation" },
              ].map((item) => (
                <div key={item.label} className="group relative rounded-2xl overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--orange)] text-white text-xs font-semibold mb-2">{item.label}</span>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <Benefits />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FAQ heading="Common Questions About Our Services" items={servicesFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner variant="estimate" />
      </ScrollReveal>
    </>
  )
}
