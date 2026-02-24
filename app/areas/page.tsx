import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import AreasGrid from "@/components/areas-grid"
import CtaBanner from "@/components/cta-banner"
import { SITE } from "@/lib/constants"
import { AREAS } from "@/lib/areas-data"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Service Areas Near Pittsburgh",
  description: `${SITE.name} serves ${AREAS.length}+ communities across the greater Pittsburgh area including Allegheny, Westmoreland, and Butler counties. Professional spray foam insulation near you.`,
  openGraph: {
    title: `Service Areas Near Pittsburgh | ${SITE.name}`,
    description: `Spray foam insulation services across the greater Pittsburgh area. Serving ${AREAS.length}+ communities in Allegheny, Westmoreland, and Butler counties.`,
    url: `${SITE.url}/areas`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/areas` },
}

export default function AreasPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Service Areas", url: `${SITE.url}/areas` },
  ])

  // Group areas by county
  const byCounty = AREAS.reduce<Record<string, typeof AREAS>>((acc, area) => {
    if (!acc[area.county]) acc[area.county] = []
    acc[area.county].push(area)
    return acc
  }, {})

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Spray Foam Insulation{" "}
              <span className="gradient-text">Near Pittsburgh</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {SITE.name} proudly serves {AREAS.length}+ communities across
              Allegheny County, Westmoreland County, Butler County, and the surrounding
              Western Pennsylvania area. Find your community below.
            </p>
          </div>
        </div>
      </section>

      {/* County Map-like Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] section-divider">
                Our Service Territory
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {Object.entries(byCounty).map(([county, areas]) => (
                <div key={county} className="card">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[var(--orange)]" />
                    <h3 className="text-lg font-bold text-[var(--slate-900)]">
                      {county} County
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {areas.map((area) => (
                      <a
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="flex items-center justify-between text-sm py-1.5 text-[var(--slate-700)] hover:text-[var(--blue)] transition-colors"
                      >
                        <span>{area.name}</span>
                        <span className="text-xs text-[var(--slate-500)]">
                          {area.distance}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Areas Grid */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <AreasGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner
          variant="estimate"
          heading="Don't See Your Area?"
          subtext="We serve communities throughout Western Pennsylvania. Give us a call and we will let you know if we can help."
        />
      </ScrollReveal>
    </>
  )
}
