import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Heart, Lightbulb, Users, CheckCircle2, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Breadcrumbs from "@/components/breadcrumbs"
import Stats from "@/components/stats"
import CtaBanner from "@/components/cta-banner"
import FAQ from "@/components/faq"
import { SITE } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — Pittsburgh's locally owned spray foam insulation company with ${SITE.stats.experience} years of experience, ${SITE.stats.projects} completed projects, and a ${SITE.stats.rating}-star rating.`,
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description: `Pittsburgh's trusted spray foam insulation experts. ${SITE.stats.experience} years of experience serving homeowners and businesses across the greater Pittsburgh area.`,
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${SITE.url}/about` },
}

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "We use only premium spray foam products and follow manufacturer specifications to the letter. Every installation is verified with thermal imaging to ensure complete coverage.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Transparent pricing, honest recommendations, and no high-pressure sales tactics. We tell you what your home actually needs, not what costs the most.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the forefront of insulation technology, continuously training our crews on the latest spray foam techniques and energy efficiency standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "From your first phone call to the final walkthrough, every decision we make is guided by what is best for you. That is why we have a lifetime workmanship warranty.",
  },
]

const aboutFaqs = [
  {
    q: `How long has ${SITE.name} been in business?`,
    a: `${SITE.name} has been serving Pittsburgh and Western Pennsylvania for over ${SITE.stats.experience} years. We have completed more than ${SITE.stats.projects} projects across the region, earning a ${SITE.stats.rating}-star rating from our customers.`,
  },
  {
    q: `Is ${SITE.name} licensed and insured?`,
    a: "Yes. We are fully licensed in the state of Pennsylvania, bonded, and carry comprehensive general liability insurance. Every member of our installation crew is trained, certified, and covered by workers compensation.",
  },
  {
    q: `What areas does ${SITE.name} serve?`,
    a: "We serve the greater Pittsburgh metropolitan area and all of Western Pennsylvania, including Allegheny County, Westmoreland County, Butler County, and the surrounding communities.",
  },
  {
    q: `Does ${SITE.name} offer free estimates?`,
    a: "Yes. We provide free on-site estimates for every project. One of our insulation specialists will visit your property, assess the areas that need insulation, answer your questions, and provide a detailed written proposal within 24 to 48 hours.",
  },
  {
    q: `Does ${SITE.name} offer warranties?`,
    a: "Absolutely. We stand behind every job with a lifetime warranty on workmanship. The spray foam products we use also come with manufacturer warranties. If you ever experience an issue, we will return to make it right at no additional cost.",
  },
]

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "About", url: `${SITE.url}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pittsburgh&apos;s Most Trusted{" "}
              <span className="gradient-text">Spray Foam Team</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              {SITE.name} is a locally owned insulation company dedicated to helping
              Pittsburgh-area homeowners and businesses save energy, improve comfort,
              and protect their properties with professional spray foam insulation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-6 section-divider text-center">
                Our Story
              </h2>
              <div className="mt-10 space-y-5 text-[var(--slate-700)] leading-relaxed">
                <p>
                  Pittsburgh homeowners face some of the toughest weather in the country: bitter
                  winters with sub-zero wind chills and humid summers that push air conditioning
                  to its limits. For too long, families have been paying sky-high energy bills
                  because their homes were built with insulation that simply does not perform.
                </p>
                <p>
                  We founded {SITE.name} to change that. As local insulation professionals
                  with deep roots in Western Pennsylvania, we saw firsthand how spray foam
                  technology could transform a drafty, uncomfortable house into an energy-efficient
                  home. We knew the community deserved a contractor they could trust -- one that
                  shows up on time, does the job right, and stands behind the work for life.
                </p>
                <p>
                  Over the past {SITE.stats.experience} years, that commitment has earned us more
                  than {SITE.stats.projects} completed projects, a {SITE.stats.rating}-star customer
                  rating, and the privilege of being one of Pittsburgh&apos;s most recommended spray
                  foam insulation companies. Every project, from a single crawl space to a full
                  commercial build, gets our complete attention and best work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-12 text-center section-divider">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
              {values.map((v) => (
                <div key={v.title} className="card text-center reveal">
                  <div className="w-14 h-14 rounded-full bg-[var(--blue)]/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-[var(--blue)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--slate-900)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--slate-500)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--slate-900)] mb-12 text-center section-divider">
              By the Numbers
            </h2>
            <Stats />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <CtaBanner
          variant="estimate"
          heading="Ready to Make Your Home More Comfortable?"
          subtext="Get a free, no-obligation estimate from Pittsburgh's most trusted spray foam insulation team."
        />
      </ScrollReveal>

      {/* FAQ */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FAQ
              heading="Frequently Asked Questions"
              items={aboutFaqs}
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
