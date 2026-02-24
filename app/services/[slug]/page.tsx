import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import FAQ from "@/components/faq"
import LeadForm from "@/components/lead-form"
import CtaBanner from "@/components/cta-banner"
import { SITE } from "@/lib/constants"
import { SERVICES, getService } from "@/lib/services-data"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${SITE.name}`,
      description: service.description,
      url: `${SITE.url}/services/${slug}`,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
    alternates: { canonical: `${SITE.url}/services/${slug}` },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const relatedServices = service.relatedSlugs
    .map((s) => getService(s))
    .filter(Boolean)

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
    { name: service.shortTitle, url: `${SITE.url}/services/${slug}` },
  ])

  const svcSchema = serviceSchema(service.title, service.description, slug)
  const faqLd = faqSchema(service.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero with Image */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                {service.hero}
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-[350px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  {service.content.split("\n\n").map((paragraph, i) => {
                    // Handle bold markdown-style text
                    if (paragraph.startsWith("**") && paragraph.includes("**")) {
                      const parts = paragraph.split("**")
                      return (
                        <p
                          key={i}
                          className="text-[var(--slate-700)] leading-relaxed mb-5"
                        >
                          {parts.map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-[var(--slate-900)] font-semibold">
                                {part}
                              </strong>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                        </p>
                      )
                    }

                    // Handle numbered lists
                    if (/^\d+\./.test(paragraph.trim())) {
                      return (
                        <p
                          key={i}
                          className="text-[var(--slate-700)] leading-relaxed mb-5 pl-4 border-l-2 border-[var(--orange)]"
                        >
                          {paragraph.split("**").map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-[var(--slate-900)] font-semibold">
                                {part}
                              </strong>
                            ) : (
                              <span key={j}>{part}</span>
                            )
                          )}
                        </p>
                      )
                    }

                    return (
                      <p
                        key={i}
                        className="text-[var(--slate-700)] leading-relaxed mb-5"
                      >
                        {paragraph.split("**").map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="text-[var(--slate-900)] font-semibold">
                              {part}
                            </strong>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    )
                  })}
                </div>

                {/* Benefits */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 p-3 rounded-lg bg-[var(--slate-50)]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[var(--green)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--slate-700)]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6">
                    What We Offer
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-3 rounded-lg border border-[var(--slate-200)]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--slate-700)]">{feature}</span>
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

      {/* FAQ */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FAQ heading="Frequently Asked Questions" items={service.faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-[var(--slate-900)] mb-8 text-center">
                Related Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {relatedServices.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/services/${related!.slug}`}
                    className="card group text-center"
                  >
                    <h3 className="text-lg font-bold text-[var(--slate-900)] group-hover:text-[var(--blue)] transition-colors mb-2">
                      {related!.shortTitle}
                    </h3>
                    <p className="text-sm text-[var(--slate-500)] line-clamp-2 mb-3">
                      {related!.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[var(--blue)] text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner variant="estimate" />
      </ScrollReveal>
    </>
  )
}
