import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import LeadForm from "@/components/lead-form"
import { SITE } from "@/lib/constants"
import { AREAS } from "@/lib/areas-data"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name} for a free spray foam insulation estimate in the Pittsburgh area. Call ${SITE.phone} or fill out our online form.`,
  openGraph: {
    title: `Contact Us | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} for a free spray foam insulation estimate. Serving the greater Pittsburgh area.`,
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/contact` },
}

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Contact", url: `${SITE.url}/contact` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-white/70">
              Ready for your free estimate? Fill out the form or give us a call. We respond
              to every inquiry within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left - Lead Form */}
              <div className="lg:col-span-3">
                <LeadForm />
              </div>

              {/* Right - Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Phone */}
                <div className="card">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--orange)]/20 transition-colors">
                      <Phone className="w-6 h-6 text-[var(--orange)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--slate-900)]">Phone</h3>
                      <p className="text-[var(--blue)] font-medium text-lg">
                        {SITE.phone}
                      </p>
                      <p className="text-sm text-[var(--slate-500)] mt-1">
                        Call or text for fastest response
                      </p>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div className="card">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--blue)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--blue)]/20 transition-colors">
                      <Mail className="w-6 h-6 text-[var(--blue)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--slate-900)]">Email</h3>
                      <p className="text-[var(--blue)] font-medium">
                        {SITE.email}
                      </p>
                      <p className="text-sm text-[var(--slate-500)] mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </a>
                </div>

                {/* Hours */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--green)]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[var(--green)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--slate-900)]">Business Hours</h3>
                      <p className="text-[var(--slate-700)]">{SITE.hours}</p>
                      <p className="text-sm text-[var(--slate-500)] mt-1">
                        Emergency services available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--orange)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--slate-900)] mb-2">
                        Service Area
                      </h3>
                      <p className="text-sm text-[var(--slate-500)] mb-3">
                        Serving the greater Pittsburgh area including:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {AREAS.slice(0, 8).map((area) => (
                          <span
                            key={area.slug}
                            className="text-xs px-2 py-1 rounded-full bg-[var(--slate-100)] text-[var(--slate-700)]"
                          >
                            {area.name}
                          </span>
                        ))}
                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--orange)]/10 text-[var(--orange)] font-medium">
                          + {AREAS.length - 8} more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
