import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import LeadForm from "@/components/lead-form"
import CtaBanner from "@/components/cta-banner"
import { SITE } from "@/lib/constants"
import { AREAS, getArea } from "@/lib/areas-data"
import { SERVICES } from "@/lib/services-data"
import { TESTIMONIALS } from "@/lib/testimonials-data"
import { breadcrumbSchema, areaServiceSchema } from "@/lib/schema"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) return {}

  const title = `Spray Foam Insulation in ${area.name}, PA`
  const description = `Professional spray foam insulation services in ${area.name}, ${area.county} County, PA. ${SITE.name} serves ${area.name} homeowners and businesses. Free estimates.`

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.url}/areas/${slug}`,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
    alternates: { canonical: `${SITE.url}/areas/${slug}` },
  }
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params
  const area = getArea(slug)
  if (!area) notFound()

  // Get testimonials near this area (match by area name in location)
  const areaTestimonials = TESTIMONIALS.filter((t) =>
    t.location.toLowerCase().includes(area.name.toLowerCase())
  ).slice(0, 3)

  // If not enough testimonials from this exact area, pad with others
  const displayTestimonials =
    areaTestimonials.length >= 2
      ? areaTestimonials
      : TESTIMONIALS.slice(0, 3)

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Service Areas", url: `${SITE.url}/areas` },
    { name: area.name, url: `${SITE.url}/areas/${slug}` },
  ])

  const areaSchema = areaServiceSchema(area.name, slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/areas" },
              { label: area.name },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {area.county} County &middot; {area.distance} from Pittsburgh &middot; Pop. {area.population}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Spray Foam Insulation in{" "}
              <span className="gradient-text">{area.name}, PA</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights + Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Area Highlights */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6">
                    Why {area.name} Homeowners Choose {SITE.name}
                  </h2>
                  <div className="space-y-3">
                    {area.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 p-4 rounded-lg bg-[var(--slate-50)]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[var(--green)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--slate-700)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Available */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6">
                    Services Available in {area.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="card group !p-4"
                      >
                        <h3 className="font-semibold text-[var(--slate-900)] group-hover:text-[var(--blue)] transition-colors mb-1">
                          {service.shortTitle}
                        </h3>
                        <p className="text-xs text-[var(--slate-500)] line-clamp-2">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[var(--blue)] text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6">
                    What Our Customers Say
                  </h2>
                  <div className="space-y-4">
                    {displayTestimonials.map((t) => (
                      <div key={t.name} className="testimonial-card">
                        <div className="flex gap-1 mb-3">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-[var(--slate-700)] italic mb-3 leading-relaxed">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="text-sm">
                          <span className="font-semibold text-[var(--slate-900)]">
                            {t.name}
                          </span>
                          <span className="text-[var(--slate-500)]">
                            {" "}&mdash; {t.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Lead Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <LeadForm />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner
          variant="estimate"
          heading={`Get Your Free Estimate in ${area.name}`}
          subtext={`Schedule a free on-site consultation for your ${area.name} home or business. No obligation, no pressure.`}
        />
      </ScrollReveal>
    </>
  )
}
