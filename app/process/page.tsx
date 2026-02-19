import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Phone,
  ClipboardCheck,
  Hammer,
  ThumbsUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Thermometer,
  Droplets,
} from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import SectionCta from '@/components/section-cta'
import Footer from '@/components/footer'
import { getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/schema-markup'

/* ─────────────────── Metadata (SXO-optimized) ─────────────────── */

export const metadata: Metadata = {
  title: 'How Spray Foam Insulation Works | Our Process | EcoSpray Solutions',
  description:
    'Discover our simple 4-step spray foam insulation process in Pittsburgh. Free consultation, energy assessment, professional installation, and immediate savings. Call (724) 819-2727 for your free quote.',
  keywords: [
    'spray foam insulation installation process Pittsburgh',
    'how spray foam insulation works',
    'spray foam insulation steps',
    'insulation installation process',
    'Pittsburgh insulation contractor',
    'spray foam consultation Pittsburgh',
    'open cell vs closed cell insulation',
    'spray foam insulation Murrysville PA',
    'energy assessment Pittsburgh',
    'professional insulation installation',
  ],
  openGraph: {
    title: 'How Spray Foam Insulation Works | Our 4-Step Process',
    description:
      'From free consultation to immediate energy savings — see how EcoSpray Solutions installs spray foam insulation in Pittsburgh homes and businesses.',
    url: 'https://ecospraysolutions.com/process',
    siteName: 'EcoSpray Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ecospraysolutions.com/images/logos/banner-worker.png',
        width: 1200,
        height: 630,
        alt: 'EcoSpray Solutions spray foam insulation installation process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Spray Foam Insulation Works | EcoSpray Solutions',
    description:
      'Our simple 4-step process: Free consultation, energy assessment, professional installation, and immediate savings. Serving Pittsburgh & Western PA.',
    images: ['https://ecospraysolutions.com/images/logos/banner-worker.png'],
  },
  alternates: {
    canonical: 'https://ecospraysolutions.com/process',
  },
}

/* ─────────────────── Data ─────────────────── */

const steps = [
  {
    step: 1,
    icon: Phone,
    title: 'Free Consultation',
    description:
      'Getting started is easy. Give us a call at (724) 819-2727 or fill out our online form to tell us about your project. We will discuss your goals, answer your questions about spray foam insulation, and schedule a convenient time to visit your home or business. There is never any pressure or obligation.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=80',
    imageAlt: 'Phone consultation for spray foam insulation in Pittsburgh',
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: 'Energy Assessment',
    description:
      'Our certified insulation experts come to your property and conduct a thorough inspection. We identify air leaks, thermal weak points, and areas where energy is being wasted. Using our findings, we put together a detailed proposal with transparent pricing, recommended foam type, and projected energy savings tailored to your Pittsburgh home.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    imageAlt: 'Energy assessment and insulation inspection in Pittsburgh home',
  },
  {
    step: 3,
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Our trained, fully insured crews arrive on schedule and get to work. We carefully prepare the area, apply the spray foam insulation using professional-grade equipment, and clean up thoroughly when the job is done. Most residential projects are completed in a single day, minimizing disruption to your daily routine.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    imageAlt: 'Professional spray foam insulation installation in Pittsburgh',
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: 'Enjoy the Savings',
    description:
      'Once installation is complete, the difference is immediate. You will feel more consistent temperatures throughout your home, notice reduced noise from outside, and start seeing lower energy bills right away. Most Pittsburgh homeowners report saving 30-50% on their heating and cooling costs year over year.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    imageAlt: 'Pittsburgh homeowner enjoying energy savings from spray foam insulation',
  },
]

const expectSections = [
  {
    icon: ClipboardCheck,
    title: 'Before Installation',
    subtitle: 'Preparation',
    items: [
      'We send a confirmation email with your appointment details and what to expect',
      'Clear the work area of personal items and valuables — we will let you know which rooms',
      'Ensure HVAC systems are turned off in the areas being insulated',
      'Our crew lead contacts you the day before to confirm timing and answer any last questions',
    ],
  },
  {
    icon: Hammer,
    title: 'Installation Day',
    subtitle: 'The Main Event',
    items: [
      'Our crew arrives on time with all equipment — most jobs take 4-8 hours',
      'We protect floors, walls, and furniture with plastic sheeting and drop cloths',
      'Spray foam is applied in precise layers to reach the optimal thickness and R-value',
      'The foam expands and cures within minutes, creating an airtight thermal barrier',
    ],
  },
  {
    icon: Shield,
    title: 'After Installation',
    subtitle: 'Quality Assurance',
    items: [
      'Our crew lead walks you through the completed work for a final inspection',
      'We verify coverage, thickness, and R-value meet or exceed specifications',
      'All protective coverings are removed and the work area is left clean',
      'You receive a detailed warranty document and care instructions for your records',
    ],
  },
]

const faqs = [
  {
    question: 'How long does spray foam insulation installation take?',
    answer:
      'Most residential spray foam insulation projects in Pittsburgh are completed in a single day, typically within 4 to 8 hours. Larger commercial projects or whole-home installations may take 2-3 days. During your free consultation, we will provide an accurate timeline based on the scope of your specific project.',
  },
  {
    question: 'Do I need to leave my home during installation?',
    answer:
      'We recommend vacating the work area during application and for approximately 2 hours after installation is complete. This allows the spray foam to fully cure and any fumes to dissipate. You can remain in other parts of the house that are not being treated. We will clearly communicate the timeline so you can plan accordingly.',
  },
  {
    question: 'Is spray foam insulation safe for my family and pets?',
    answer:
      'Absolutely. Once fully cured, which takes about 24 hours, spray foam insulation is completely inert and safe. The products we use meet all EPA and OSHA safety standards. Our trained installers follow strict safety protocols during application, including proper ventilation and protective equipment. After curing, spray foam produces no off-gassing or harmful emissions.',
  },
  {
    question: 'What is the difference between open-cell and closed-cell spray foam?',
    answer:
      'Open-cell spray foam is a lighter, more flexible product with an R-value of about R-3.7 per inch. It is ideal for interior walls, attics, and sound dampening. Closed-cell spray foam is denser, with a higher R-value of R-6 to R-7 per inch. It also acts as a vapor barrier and adds structural rigidity. During your energy assessment, we recommend the best type for each area of your home based on your specific needs and budget.',
  },
  {
    question: 'How soon will I see energy savings after installation?',
    answer:
      'You will notice a difference in comfort immediately after installation — more consistent temperatures, fewer drafts, and reduced outside noise. Energy bill savings typically appear on your very next billing cycle. Most Pittsburgh homeowners see a 30-50% reduction in heating and cooling costs. The insulation pays for itself within 3 to 7 years depending on the scope of the project and current energy costs.',
  },
]

/* ─────────────────── Structured Data ─────────────────── */

const breadcrumbItems = [
  { name: 'Home', url: 'https://ecospraysolutions.com' },
  { name: 'Our Process', url: 'https://ecospraysolutions.com/process' },
]

const howToSteps = steps.map((s) => ({
  name: s.title,
  text: s.description,
  image: s.image,
}))

/* ─────────────────── Page Component ─────────────────── */

export default function ProcessPage() {
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems)
  const howToSchema = getHowToSchema(howToSteps)
  const faqSchema = getFAQSchema(faqs)

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Dark Section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-zinc-950 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl" />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Our Process' }]} />

          <div className="text-center max-w-4xl mx-auto mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Simple 4-Step Process
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              How{' '}
              <span className="gradient-text">Spray Foam Insulation</span>{' '}
              Works
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              From your first phone call to lasting energy savings, our proven 4-step installation
              process makes upgrading your Pittsburgh home simple, fast, and stress-free. Here is
              exactly what to expect when you choose EcoSpray Solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17248192727"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-green-500" />
                (724) 819-2727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4-STEP PROCESS — Light Section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              4 Simple Steps to a More Comfortable Home
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We have refined our spray foam insulation installation process to be as seamless
              as possible for Pittsburgh homeowners and businesses.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative">
            {/* Connection Line (desktop) */}
            <div className="hidden lg:block absolute top-[200px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={step.step} className="group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 card-lift h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                      {/* Step Number */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                        <step.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-green-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <div className="text-left">
                <div className="text-slate-900 font-bold text-lg">Ready to get started?</div>
                <div className="text-slate-600">
                  Step 1 is free and takes less than 5 minutes.
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 group whitespace-nowrap"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT TO EXPECT — Dark Section (Timeline)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              What to Expect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Installation <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              We walk you through every stage so there are no surprises. Here is a detailed
              look at what happens before, during, and after your spray foam insulation project.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {expectSections.map((section, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div key={section.title} className="relative">
                    {/* Timeline dot (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-14 h-14 rounded-full bg-zinc-900 border-2 border-green-500/50 items-center justify-center z-10 glow-green">
                      <section.icon className="w-6 h-6 text-green-400" />
                    </div>

                    <div
                      className={`md:grid md:grid-cols-2 md:gap-16 items-start ${
                        isLeft ? '' : 'md:direction-rtl'
                      }`}
                    >
                      {/* Content side */}
                      <div
                        className={`${
                          isLeft ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'
                        }`}
                      >
                        <div
                          className={`glass rounded-2xl p-8 hover-glow transition-all duration-300 ${
                            isLeft ? '' : ''
                          }`}
                        >
                          {/* Mobile icon */}
                          <div className="md:hidden w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                            <section.icon className="w-6 h-6 text-green-400" />
                          </div>

                          <div className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-2">
                            {section.subtitle}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>

                          <ul className={`space-y-3 ${isLeft ? 'md:text-left' : ''}`}>
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Empty side for timeline spacing */}
                      {isLeft ? <div className="hidden md:block" /> : <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TYPES OF SPRAY FOAM — Light Section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-emerald-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              Foam Types
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Open-Cell vs. Closed-Cell Spray Foam
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Not all spray foam is the same. During your energy assessment, we recommend the right type
              for each area of your home based on performance needs and budget.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Open Cell */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden card-lift border border-slate-100 hover:border-green-200 transition-all duration-300">
              <div className="p-2">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Open-Cell</h3>
                  <p className="text-sm text-green-600 font-medium">Versatile & Cost-Effective</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">R-Value per Inch</span>
                  <span className="text-sm font-bold text-slate-900">R-3.5 to R-3.7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Density</span>
                  <span className="text-sm font-bold text-slate-900">0.5 lb/ft3 (Low)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Moisture Barrier</span>
                  <span className="text-sm font-bold text-slate-900">No (Vapor Permeable)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Sound Dampening</span>
                  <span className="text-sm font-bold text-green-600">Excellent</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-500">Cost</span>
                  <span className="text-sm font-bold text-green-600">$ Lower</span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Best For:</h4>
                  <ul className="space-y-2">
                    {[
                      'Interior walls and ceilings',
                      'Attic insulation (under the roof deck)',
                      'Sound reduction between rooms',
                      'Budget-conscious whole-home projects',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Closed Cell */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden card-lift border-2 border-green-200 hover:border-green-400 transition-all duration-300 relative">
              {/* Popular badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                Most Popular
              </div>

              <div className="p-2">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Closed-Cell</h3>
                  <p className="text-sm text-green-600 font-medium">Premium Performance</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">R-Value per Inch</span>
                  <span className="text-sm font-bold text-slate-900">R-6 to R-7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Density</span>
                  <span className="text-sm font-bold text-slate-900">2.0 lb/ft3 (High)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Moisture Barrier</span>
                  <span className="text-sm font-bold text-green-600">Yes (Class II Vapor Retarder)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Sound Dampening</span>
                  <span className="text-sm font-bold text-slate-900">Good</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-slate-500">Cost</span>
                  <span className="text-sm font-bold text-slate-900">$$$ Premium</span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Best For:</h4>
                  <ul className="space-y-2">
                    {[
                      'Rim joists and band joists (basement perimeter)',
                      'Crawl spaces and areas with moisture concerns',
                      'Exterior walls requiring high R-value',
                      'Areas needing structural reinforcement',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
              <Thermometer className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Not sure which type you need?</h4>
                <p className="text-sm text-slate-600">
                  Many Pittsburgh homes benefit from a combination of both types. We often recommend closed-cell
                  for rim joists and crawl spaces where moisture is a concern, and open-cell for attic roof decks
                  where maximum coverage at a lower cost is the priority. Our free energy assessment will determine
                  the ideal approach for your specific property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ — Dark Section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything Pittsburgh homeowners ask about the spray foam insulation installation
              process, answered by our expert team.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 md:p-8 hover-glow transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-sm text-green-400 font-bold mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-zinc-400 leading-relaxed pl-11">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 text-center">
            <p className="text-zinc-500 mb-4">Have a question that is not listed here?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 group"
              >
                Ask Us Anything
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17248192727"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-xl hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-green-500" />
                (724) 819-2727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA Section
      ═══════════════════════════════════════════════════════════════ */}
      <SectionCta
        title="Ready to Start Saving on Energy Bills?"
        subtitle="Schedule your free consultation today and take the first step toward a warmer, more energy-efficient Pittsburgh home. No obligation, no pressure."
        variant="gradient"
      />

      {/* ═══════════════════════════════════════════════════════════════
          Footer
      ═══════════════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  )
}
