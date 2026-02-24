import type { Metadata } from "next"
import { Phone, ClipboardCheck, Hammer, ThumbsUp } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import Benefits from "@/components/benefits"
import FAQ from "@/components/faq"
import CtaBanner from "@/components/cta-banner"
import { SITE } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Our Process",
  description: `Discover our simple 4-step spray foam insulation process in Pittsburgh. Free consultation, custom plan, professional installation, and quality verification. Call ${SITE.phone} for your free estimate.`,
  openGraph: {
    title: `Our Process | ${SITE.name}`,
    description: "From free consultation to quality verification -- see how we install spray foam insulation in Pittsburgh homes and businesses.",
    url: `${SITE.url}/process`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/process` },
}

const steps = [
  {
    step: 1,
    icon: Phone,
    title: "Free Consultation & Energy Assessment",
    description:
      "Give us a call or fill out our online form. We will discuss your goals, answer your questions, and schedule a convenient time to visit your property. During the visit, our certified insulation experts identify air leaks, thermal weak points, and areas where energy is being wasted using professional diagnostic tools.",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Custom Insulation Plan",
    description:
      "Based on our assessment, we design a custom insulation plan tailored to your property. You receive a detailed written proposal with transparent pricing, recommended foam type (open-cell, closed-cell, or both), projected energy savings, and a clear timeline. No surprises, no hidden fees.",
  },
  {
    step: 3,
    icon: Hammer,
    title: "Professional Installation",
    description:
      "Our trained, fully insured crews arrive on schedule and get to work. We carefully prepare the area with protective coverings, apply the spray foam using professional-grade equipment, and verify coverage with thermal imaging. Most residential projects are completed in a single day.",
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: "Quality Verification & Walkthrough",
    description:
      "Once installation is complete, our crew lead walks you through the finished work. We verify coverage, thickness, and R-value meet or exceed specifications. You receive warranty documentation and care instructions. The difference in comfort is immediate -- and your next energy bill will prove it.",
  },
]

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Spray Foam Insulation Installation Works",
  description:
    "Our proven 4-step process for spray foam insulation installation in Pittsburgh homes and businesses.",
  totalTime: "PT1D",
  step: steps.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.description,
    position: s.step,
  })),
}

const processFaqs = [
  {
    q: "How long does spray foam insulation installation take?",
    a: "Most residential projects are completed in a single day, typically within 4 to 8 hours. Larger commercial projects or whole-home installations may take 2 to 3 days. We provide an accurate timeline during your free consultation.",
  },
  {
    q: "Do I need to leave my home during installation?",
    a: "We recommend vacating the work area during application and for approximately 2 hours after completion. You can remain in other parts of the house that are not being treated.",
  },
  {
    q: "Is spray foam insulation safe for my family?",
    a: "Once fully cured (about 24 hours), spray foam is completely inert and safe. Our installers follow strict safety protocols during application, including proper ventilation and protective equipment.",
  },
  {
    q: "What is the difference between open-cell and closed-cell spray foam?",
    a: "Open-cell foam is lighter with an R-value of about R-3.7 per inch -- ideal for interior walls and sound dampening. Closed-cell foam is denser with R-6.5 per inch, acts as a vapor barrier, and adds structural strength. We recommend the best type for each area of your home.",
  },
  {
    q: "How soon will I see energy savings?",
    a: "You will notice improved comfort immediately. Energy bill savings typically appear on your next billing cycle. Most Pittsburgh homeowners see a 30-50% reduction in heating and cooling costs.",
  },
]

export default function ProcessPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Our Process", url: `${SITE.url}/process` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Our Process" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              How <span className="gradient-text">Spray Foam Insulation</span> Works
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              From your first phone call to lasting energy savings, our proven 4-step
              installation process makes upgrading your Pittsburgh home simple, fast,
              and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] section-divider">
                4 Simple Steps to Better Comfort
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--orange)] via-[var(--blue)] to-[var(--green)] hidden md:block -translate-x-1/2" />
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--orange)] via-[var(--blue)] to-[var(--green)] md:hidden" />

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <div key={step.step} className="relative">
                      {/* Step number circle */}
                      <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 rounded-full bg-white border-4 border-[var(--orange)] flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xl font-bold text-[var(--orange)]">
                          {step.step}
                        </span>
                      </div>

                      {/* Content card */}
                      <div
                        className={`ml-20 md:ml-0 md:w-[calc(50%-48px)] ${
                          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                      >
                        <div className="card">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center">
                              <step.icon className="w-5 h-5 text-[var(--orange)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--slate-900)]">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-[var(--slate-500)] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
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
            <FAQ heading="Frequently Asked Questions" items={processFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner
          variant="estimate"
          heading="Ready to Get Started?"
          subtext="Step 1 is free and takes less than 5 minutes. Schedule your free consultation today."
        />
      </ScrollReveal>
    </>
  )
}
