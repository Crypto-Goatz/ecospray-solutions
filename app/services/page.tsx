import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Building2, Warehouse, ClipboardCheck, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import SectionCta from '@/components/section-cta'
import Footer from '@/components/footer'
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema } from '@/lib/schema-markup'

/* ─────────────────── Metadata ─────────────────── */

export const metadata: Metadata = {
  title: 'Spray Foam Insulation Services | EcoSpray Solutions Pittsburgh',
  description:
    'Professional residential, commercial, and new construction spray foam insulation services in Pittsburgh & Western PA. Free estimates. Save up to 50% on energy bills.',
  keywords: [
    'spray foam insulation services Pittsburgh',
    'residential spray foam insulation',
    'commercial insulation Pittsburgh PA',
    'new construction insulation Western PA',
    'energy audit Pittsburgh',
    'spray foam contractor Murrysville',
    'closed cell spray foam Pittsburgh',
    'open cell insulation Western PA',
    'attic insulation Pittsburgh',
    'basement insulation Murrysville PA',
  ],
  openGraph: {
    title: 'Spray Foam Insulation Services | EcoSpray Solutions Pittsburgh',
    description:
      'Professional residential, commercial, and new construction spray foam insulation services in Pittsburgh & Western PA. Free estimates. Save up to 50% on energy bills.',
    url: 'https://ecospraysolutions.com/services',
    siteName: 'EcoSpray Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ecospraysolutions.com/images/logos/banner-worker.png',
        width: 1200,
        height: 630,
        alt: 'EcoSpray Solutions Spray Foam Insulation Services in Pittsburgh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spray Foam Insulation Services | EcoSpray Solutions Pittsburgh',
    description:
      'Professional residential, commercial, and new construction spray foam insulation services in Pittsburgh & Western PA. Free estimates.',
    images: ['https://ecospraysolutions.com/images/logos/banner-worker.png'],
  },
  alternates: {
    canonical: 'https://ecospraysolutions.com/services',
  },
}

/* ─────────────────── Data ─────────────────── */

const services = [
  {
    icon: Home,
    title: 'Residential Insulation',
    slug: 'residential-insulation',
    description:
      'Your Pittsburgh home deserves year-round comfort. Our residential spray foam insulation seals every gap, crack, and thermal bridge in your attic, walls, basement, and crawl space. Whether you live in a century-old Lawrenceville row house or a newer Murrysville colonial, spray foam delivers the highest R-value per inch of any insulation material available today. Homeowners across Allegheny and Westmoreland counties report energy bill savings of 30 to 50 percent after a full-home spray foam retrofit.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    color: 'from-green-500 to-emerald-600',
    features: [
      'Attic & roof deck insulation',
      'Exterior wall cavity filling',
      'Basement & foundation sealing',
      'Crawl space encapsulation',
      'Rim joist & band board spray',
      'Garage ceiling insulation',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Insulation',
    slug: 'commercial-insulation',
    description:
      'Cut operating costs and create a more productive work environment with commercial-grade spray foam insulation. From office towers in downtown Pittsburgh to warehouses along Route 30, EcoSpray Solutions delivers large-scale insulation projects on time and on budget. Closed-cell spray foam provides a continuous air and moisture barrier that meets the strictest ASHRAE and IECC energy code requirements, reducing HVAC load and extending the life of your mechanical systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    color: 'from-blue-500 to-cyan-600',
    features: [
      'Office building insulation',
      'Retail & storefront sealing',
      'Warehouse & industrial facilities',
      'Metal building insulation',
      'Roofing underlayment systems',
      'Cold storage & climate control',
    ],
  },
  {
    icon: Warehouse,
    title: 'New Construction',
    slug: 'new-construction',
    description:
      'Partner with the builders and general contractors who trust EcoSpray for new-build insulation throughout the Pittsburgh metro. We work with your construction schedule, coordinate with framing and mechanical trades, and ensure every new home or commercial building exceeds Pennsylvania energy code requirements from day one. Our builder programs include volume pricing, priority scheduling, and RESNET-ready documentation for HERS index scoring.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    color: 'from-orange-500 to-amber-600',
    features: [
      'Custom home builder programs',
      'PA energy code compliance',
      'HERS index scoring support',
      'Tight-deadline scheduling',
      'Flash-and-batt hybrid systems',
      'Multi-unit & development pricing',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Energy Audits',
    slug: 'energy-audits',
    description:
      'Before spending a dollar on insulation, know exactly where your building is losing energy. Our comprehensive energy audits use thermal imaging cameras, blower door testing, and detailed diagnostic analysis to map every air leak and thermal weakness in your property. You receive a prioritized improvement report with projected ROI for each recommended upgrade, giving you a clear roadmap to maximum energy savings in your Pittsburgh home or business.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    color: 'from-purple-500 to-violet-600',
    features: [
      'FLIR thermal imaging scans',
      'Blower door air leakage testing',
      'Duct leakage testing',
      'Detailed diagnostic reports',
      'Prioritized upgrade recommendations',
      'ROI & payback projections',
    ],
  },
]

const differentiators = [
  {
    title: 'Pittsburgh Born & Operated',
    description:
      'We are a locally owned insulation company based in Murrysville. We understand the unique challenges of Western PA weather, from brutal freeze-thaw winters to humid summers, and we build insulation strategies around them.',
  },
  {
    title: 'Licensed, Insured & Certified',
    description:
      'Our crew carries Pennsylvania contractor licensing, full liability insurance, and manufacturer certifications from leading spray foam producers. Your home and your investment are fully protected.',
  },
  {
    title: 'Free On-Site Estimates',
    description:
      'Every project begins with a thorough, no-obligation walkthrough of your property. We measure, diagnose, and explain our recommendations in plain English before you spend a penny.',
  },
  {
    title: 'Energy Savings Guarantee',
    description:
      'We stand behind our work with a written performance guarantee. If your energy bills do not decrease after our spray foam installation, we will come back and make it right at no additional cost.',
  },
  {
    title: '10+ Years of Experience',
    description:
      'With over a decade of insulation work across hundreds of Pittsburgh-area homes and businesses, we have seen every building challenge this region has to offer and we know how to solve it.',
  },
  {
    title: 'Clean, Professional Crews',
    description:
      'Our installers wear booties, lay down drop cloths, and leave your property as clean as they found it. We respect your space, your schedule, and your family.',
  },
]

const faqs = [
  {
    question: 'What is spray foam insulation and how does it work?',
    answer:
      'Spray foam insulation is a two-component polyurethane material that is sprayed as a liquid and expands into a rigid or semi-rigid foam within seconds. It fills every crack, gap, and cavity to create an airtight thermal envelope. Unlike fiberglass batts that can leave gaps around wires and pipes, spray foam conforms to irregular surfaces and provides both insulation and air sealing in a single application. Closed-cell spray foam delivers an R-value of approximately R-6 to R-7 per inch, while open-cell foam provides about R-3.5 to R-3.7 per inch.',
  },
  {
    question: 'How much does spray foam insulation cost in Pittsburgh?',
    answer:
      'Spray foam insulation costs in the Pittsburgh area typically range from $1.00 to $2.50 per board foot for open-cell foam and $1.50 to $3.50 per board foot for closed-cell foam. A typical residential project such as a full attic spray in a 1,500 square foot home might cost between $3,500 and $9,000 depending on accessibility, foam type, and thickness required. Rim joist projects often start around $1,200. EcoSpray Solutions provides free, detailed estimates for every project so there are no surprises.',
  },
  {
    question: 'Is spray foam insulation worth the investment compared to fiberglass?',
    answer:
      'Yes. While spray foam has a higher upfront cost than fiberglass batts, it delivers significantly better performance. Spray foam provides up to 50 percent greater R-value per inch, creates an air seal that fiberglass cannot match, resists moisture and mold growth, and maintains its performance for the lifetime of the building. Most Pittsburgh homeowners see a full return on their spray foam investment within 3 to 7 years through reduced energy bills. Spray foam also increases home resale value by 15 to 25 percent of the project cost.',
  },
  {
    question: 'How long does spray foam insulation installation take?',
    answer:
      'Most residential spray foam projects in the Pittsburgh area are completed in one to two days. A single-zone job like a rim joist or small attic section can often be finished in a few hours. Larger whole-home projects or commercial installations may take two to three days. We coordinate with your schedule and work efficiently to minimize disruption. The foam cures rapidly and most spaces can be re-occupied within 24 hours of application.',
  },
  {
    question: 'Does spray foam insulation help with noise reduction?',
    answer:
      'Absolutely. Open-cell spray foam in particular is an excellent sound dampener because of its soft, flexible structure that absorbs sound waves. Homeowners in noisy areas near Pittsburgh International Airport, busy Route 22 and Route 30 corridors, or dense city neighborhoods notice a significant reduction in outside noise after spray foam installation. It is also effective for reducing sound transfer between floors and rooms within a building.',
  },
  {
    question: 'What areas in Pittsburgh does EcoSpray Solutions serve?',
    answer:
      'EcoSpray Solutions is headquartered in Murrysville, PA, and serves the entire greater Pittsburgh region. Our primary service area includes Pittsburgh, Murrysville, Monroeville, Export, Greensburg, Irwin, North Huntingdon, Delmont, Latrobe, Jeannette, Penn Township, Plum, Penn Hills, Trafford, Harrison City, and all communities throughout Allegheny County, Westmoreland County, and the surrounding Western Pennsylvania area. We provide free estimates anywhere within our service territory.',
  },
]

/* ─────────────────── Structured Data ─────────────────── */

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://ecospraysolutions.com' },
  { name: 'Services', url: 'https://ecospraysolutions.com/services' },
])

const serviceSchemas = services.map((s) =>
  getServiceSchema({
    name: s.title,
    description: s.description,
    image: s.image,
    url: `https://ecospraysolutions.com/services#${s.slug}`,
  })
)

const faqSchema = getFAQSchema(faqs)

/* ─────────────────── Page Component ─────────────────── */

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <div className="text-center mt-8 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              Pittsburgh&apos;s Trusted Spray Foam Experts
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Professional Spray Foam{' '}
              <span className="gradient-text">Insulation Services</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              From cozy Murrysville homes to large-scale commercial buildings across Western Pennsylvania,
              EcoSpray Solutions delivers superior spray foam insulation that cuts energy costs by up to 50%,
              eliminates drafts, and transforms the comfort of your property. Every project starts with a
              free on-site estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17248192727"
                className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-white rounded-xl hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300"
              >
                Call (724) 819-2727
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12 animate-bounce text-zinc-600">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Insulation Solutions for{' '}
              <span className="gradient-text">Every Building Type</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Whether you need to insulate a single crawl space or an entire commercial campus,
              our certified technicians deliver measurable results backed by a performance guarantee.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => {
              const IconComponent = service.icon

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden card-lift hover-glow"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Pittsburgh PA - EcoSpray Solutions`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

                    {/* Icon badge */}
                    <div
                      className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl text-green-400 font-medium hover:from-green-500/20 hover:to-emerald-500/10 hover:border-green-500/40 transition-all duration-300 group/link"
                    >
                      Request a Free Estimate
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE ECOSPRAY ═══════════ */}
      <section className="py-20 lg:py-28 relative bg-zinc-900/30 border-y border-zinc-800">
        <div className="absolute inset-0 pattern-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4 block">
              The EcoSpray Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Why Pittsburgh Homeowners{' '}
              <span className="gradient-text">Choose EcoSpray</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              When you trust someone with your home or business, experience and integrity matter.
              Here is what sets EcoSpray Solutions apart from every other insulation contractor in
              Western Pennsylvania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/30 transition-all duration-500 card-lift"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-sm font-bold text-zinc-400 group-hover:border-green-500/30 group-hover:text-green-400 transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Service area callout */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Serving the Greater Pittsburgh Region
                </h3>
                <p className="text-zinc-400 text-sm">
                  From our home base in Murrysville, we provide spray foam insulation services across
                  Allegheny County, Westmoreland County, and the entire Western PA corridor. No job is
                  too far within our service territory.
                </p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-6 gap-y-2 text-sm">
                {[
                  'Pittsburgh',
                  'Murrysville',
                  'Monroeville',
                  'Greensburg',
                  'Irwin',
                  'Export',
                  'Delmont',
                  'Latrobe',
                  'Penn Hills',
                  'Plum',
                  'Trafford',
                  'Jeannette',
                  'N. Huntingdon',
                  'Penn Twp',
                  'Harrison City',
                ].map((city) => (
                  <span key={city} className="flex items-center gap-1 text-zinc-300 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ SECTION ═══════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Everything Pittsburgh homeowners and business owners ask us about spray foam insulation,
              answered by our team of certified insulation professionals.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/20 transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-green-400 transition-all duration-300 group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <div className="h-px w-full bg-zinc-800 mb-4" />
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Below FAQ prompt */}
          <div className="mt-12 text-center">
            <p className="text-zinc-500 mb-4">
              Have a question that is not listed here?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm font-medium hover:bg-zinc-700 hover:border-green-500/30 transition-all duration-300 group"
            >
              Ask Us Anything
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <SectionCta
        title="Ready to Lower Your Energy Bills?"
        subtitle="Schedule your free on-site estimate today and discover how much you can save with professional spray foam insulation from EcoSpray Solutions."
        variant="gradient"
      />

      {/* ═══════════ FOOTER ═══════════ */}
      <Footer />
    </div>
  )
}
