import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Zap, Wind, Droplets, Volume2, Calendar, Leaf,
  CheckCircle2, ArrowRight, Shield, Award, Users, MapPin
} from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import SectionCta from '@/components/section-cta'
import Footer from '@/components/footer'
import { getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema-markup'

/* ─────────────────────── SEO Metadata ─────────────────────── */

export const metadata: Metadata = {
  title: "About Spray Foam Solutions | Pittsburgh's Spray Foam Insulation Experts",
  description:
    "Learn about Spray Foam Solutions — Murrysville, PA's locally owned spray foam insulation company serving Pittsburgh and Western PA. Over 10 years of experience, 500+ completed projects, licensed, bonded, and fully insured. Discover why homeowners trust us for energy-efficient insulation.",
  keywords: [
    'about Spray Foam Solutions',
    'spray foam insulation company Pittsburgh',
    'Murrysville PA insulation contractor',
    'Pittsburgh insulation experts',
    'spray foam insulation Western PA',
    'licensed insulation company Pittsburgh',
    'energy efficient insulation Pittsburgh',
    'residential insulation contractor PA',
    'trusted spray foam installer',
    'about spray foam insulation company Pittsburgh',
  ],
  openGraph: {
    title: "About Spray Foam Solutions | Pittsburgh's Spray Foam Insulation Experts",
    description:
      'Locally owned in Murrysville, PA. 10+ years of experience, 500+ projects completed, 4.9-star rating. Licensed, bonded, and fully insured spray foam insulation professionals serving Pittsburgh and Western PA.',
    url: 'https:///about',
    siteName: 'Spray Foam Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https:///images/logos/banner-worker.png',
        width: 1200,
        height: 630,
        alt: 'Spray Foam Solutions team — Pittsburgh spray foam insulation experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Spray Foam Solutions | Pittsburgh's Spray Foam Insulation Experts",
    description:
      'Locally owned in Murrysville, PA. 10+ years, 500+ projects, 4.9-star rating. Licensed & insured spray foam insulation for Pittsburgh & Western PA.',
    images: ['https:///images/logos/banner-worker.png'],
  },
  alternates: {
    canonical: 'https:///about',
  },
}

/* ─────────────────────── FAQ Data ─────────────────────── */

const faqs = [
  {
    question: 'How long has Spray Foam Solutions been in business?',
    answer:
      'Spray Foam Solutions has been serving Pittsburgh and Western Pennsylvania for over 10 years. We started in Murrysville, PA with a simple mission: help local homeowners and businesses save energy and improve comfort through professional spray foam insulation. Since then, we have completed more than 500 projects across the region.',
  },
  {
    question: 'Is Spray Foam Solutions licensed and insured?',
    answer:
      'Yes. Spray Foam Solutions is fully licensed in the state of Pennsylvania, bonded, and carries comprehensive general liability insurance. Every member of our installation crew is trained, certified, and covered by workers compensation. We are happy to provide proof of insurance upon request.',
  },
  {
    question: 'What areas does Spray Foam Solutions serve?',
    answer:
      'We serve the greater Pittsburgh metropolitan area and all of Western Pennsylvania. Our primary service area includes Murrysville, Monroeville, Export, Greensburg, Irwin, North Huntingdon, Delmont, Latrobe, Jeannette, Penn Township, Plum, Penn Hills, Trafford, and Harrison City. If you are within driving distance of Pittsburgh, we can likely serve you.',
  },
  {
    question: 'Does Spray Foam Solutions offer warranties on their work?',
    answer:
      'Absolutely. We stand behind every job with a lifetime warranty on workmanship. The spray foam products we use also come with manufacturer warranties. If you ever experience an issue with our installation, we will return to make it right at no additional cost.',
  },
  {
    question: 'Does Spray Foam Solutions offer free estimates?',
    answer:
      'Yes, we provide free on-site estimates for every project. One of our insulation specialists will visit your property, assess the areas that need insulation, take measurements, answer all your questions, and provide a detailed written proposal within 24 to 48 hours. There is no pressure and no obligation. We also offer financing options to make projects more affordable.',
  },
]

/* ─────────────────────── Benefit Card Data ─────────────────────── */

const benefits = [
  {
    icon: Zap,
    title: 'Energy Savings',
    stat: '50%',
    statLabel: 'Lower Bills',
    description:
      'Spray foam insulation reduces heating and cooling costs by up to 50%, delivering measurable savings on every energy bill from the first month.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Wind,
    title: 'Air Sealing',
    stat: '100%',
    statLabel: 'Coverage',
    description:
      'Unlike batts or blown-in, spray foam expands to fill every gap, crack, and crevice, creating a continuous airtight barrier throughout your home.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Droplets,
    title: 'Moisture Barrier',
    stat: 'Zero',
    statLabel: 'Moisture',
    description:
      'Closed-cell spray foam acts as a Class II vapor retarder, preventing moisture intrusion and protecting your home against mold and rot.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Volume2,
    title: 'Noise Reduction',
    stat: '80%',
    statLabel: 'Quieter',
    description:
      'The dense cellular structure of spray foam dampens airborne sound, making your home noticeably quieter from traffic, weather, and neighbors.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calendar,
    title: 'Long Lasting',
    stat: '25+',
    statLabel: 'Years',
    description:
      'Spray foam will not sag, settle, or degrade over time. Once installed, it maintains its full R-value and air-sealing performance for decades.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    stat: 'Green',
    statLabel: 'Choice',
    description:
      'By dramatically reducing energy consumption, spray foam lowers your carbon footprint. Less energy used means fewer emissions from power plants.',
    color: 'from-emerald-500 to-teal-500',
  },
]

/* ─────────────────────── Why Choose Us Data ─────────────────────── */

const whyChooseUs = [
  {
    icon: MapPin,
    text: 'Locally owned and operated in Murrysville, PA',
    detail: 'We live where we work. Our reputation in the community matters to us personally.',
  },
  {
    icon: Shield,
    text: 'Licensed, bonded, and fully insured',
    detail: 'Full PA licensure with comprehensive liability and workers comp coverage on every job.',
  },
  {
    icon: Award,
    text: 'Free on-site estimates with detailed proposals',
    detail: 'No guesswork. We measure, assess, and deliver a transparent written quote within 48 hours.',
  },
  {
    icon: Users,
    text: 'Clean, professional installation crews',
    detail: 'Our crews protect your property, clean up completely, and treat your home with respect.',
  },
  {
    icon: CheckCircle2,
    text: 'Lifetime warranty on all workmanship',
    detail: 'We stand behind every installation. If there is ever an issue, we come back and fix it.',
  },
  {
    icon: Zap,
    text: 'Financing options available',
    detail: 'Low monthly payments make spray foam insulation accessible for every budget.',
  },
]

/* ─────────────────────── Stats Data ─────────────────────── */

const stats = [
  { value: '500+', label: 'Projects Completed', icon: CheckCircle2 },
  { value: '50%', label: 'Avg Energy Savings', icon: Zap },
  { value: '4.9', label: 'Star Rating', icon: Award },
  { value: '10+', label: 'Years Experience', icon: Calendar },
]

/* ─────────────────────── Page Component ─────────────────────── */

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://' },
    { name: 'About', url: 'https:///about' },
  ]

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems)
  const organizationSchema = getOrganizationSchema()
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute inset-0 pattern-grid opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'About' }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Murrysville, PA &mdash; Serving Pittsburgh &amp; Western PA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Pittsburgh&apos;s Trusted{' '}
              <span className="gradient-text">Spray Foam Insulation</span>{' '}
              Experts
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">
              Spray Foam Solutions is a locally owned insulation company based in Murrysville, Pennsylvania.
              For over a decade, we have been helping homeowners and businesses across the Pittsburgh region
              save energy, improve comfort, and protect their properties with professional spray foam insulation.
              Every project we take on is backed by deep local knowledge, hands-on expertise, and an unwavering
              commitment to doing things right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/25 group"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17248192727"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold rounded-xl hover:bg-zinc-800 hover:border-green-500/30 transition-all duration-300"
              >
                <Shield className="w-5 h-5 text-green-500" />
                (724) 819-2727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OUR STORY SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative bg-zinc-900/30 border-y border-zinc-800">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/30 transition-all duration-500 img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Spray Foam Solutions team performing spray foam insulation in a Pittsburgh area home"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl shadow-green-500/20">
                <div className="text-4xl font-black text-white mb-1">10+</div>
                <div className="text-green-100 text-sm">Years of Excellence</div>
              </div>

              {/* Location Badge */}
              <div className="absolute -top-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold text-sm">Murrysville, PA</span>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
                <Users className="w-4 h-4" />
                Our Story
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Built on Pittsburgh Values,{' '}
                <span className="gradient-text">Driven by Results</span>
              </h2>

              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Spray Foam Solutions was born out of a straightforward observation: too many Pittsburgh homeowners
                  were paying sky-high energy bills because their homes were poorly insulated. Drafty attics, cold
                  basements, and uncomfortable rooms were the norm, not the exception. We knew there was a better way.
                </p>
                <p>
                  Founded in Murrysville by a team of insulation professionals with deep roots in Western Pennsylvania,
                  we set out to bring modern spray foam technology to every home and business in the region. We did not
                  want to be another faceless contractor. We wanted to be the neighbor you trust, the crew that shows up
                  on time, does the job right, and leaves your property cleaner than they found it.
                </p>
                <p>
                  Over the past decade, that commitment has earned us more than 500 completed projects, a 4.9-star
                  rating from our customers, and the privilege of being one of Pittsburgh&apos;s most recommended spray
                  foam insulation companies. We are proud of every single job, from a 200-square-foot crawl space to
                  full commercial builds.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-zinc-900 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Trusted by 500+ families</div>
                  <div className="text-zinc-500 text-xs">across Pittsburgh &amp; Western PA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY SPRAY FOAM — 6 BENEFIT CARDS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 pattern-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              Why Spray Foam?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              The Smart Choice for{' '}
              <span className="block gradient-text">Pittsburgh Homes &amp; Businesses</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Spray foam insulation outperforms fiberglass, cellulose, and blown-in materials in every
              measurable category. Here is why savvy Pittsburgh homeowners are making the switch.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 card-lift hover-glow"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Header with icon and stat */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5`}>
                      <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                      >
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — SPLIT LAYOUT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative bg-zinc-900/30 border-y border-zinc-800">
        <div className="absolute inset-0 pattern-dots opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Spray Foam Solutions professional insulation crew at work in a Pittsburgh home"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl shadow-green-500/20">
                <div className="text-4xl font-bold text-white mb-1">4.9</div>
                <div className="text-green-100 text-sm flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Star Rating
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 shadow-lg">
                <div className="text-green-400 font-bold">Licensed &amp; Insured</div>
                <div className="text-zinc-500 text-xs">PA State License</div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Why Pittsburgh Trusts{' '}
                <span className="gradient-text">Spray Foam Solutions</span>
              </h2>

              <p className="text-zinc-400 text-lg mb-8">
                We are not just another insulation company. We are your neighbors in Murrysville,
                committed to making every home in the Pittsburgh region more comfortable, more
                energy-efficient, and more valuable.
              </p>

              <div className="space-y-5 mb-8">
                {whyChooseUs.map((item) => (
                  <div key={item.text} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                        {item.text}
                      </div>
                      <div className="text-zinc-500 text-sm mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25 group"
              >
                Schedule Your Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BY THE NUMBERS — STATS BAR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative border-b border-zinc-800 bg-zinc-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Spray Foam by the <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              A track record built on results, not promises. Every number here represents real
              projects, real savings, and real trust from our Pittsburgh community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/30 transition-all duration-300 card-lift"
              >
                <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pattern-grid opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Everything you need to know about Spray Foam Solutions, our team, and how we work.
              Have a question that is not listed here? Give us a call at{' '}
              <a href="tel:+17248192727" className="text-green-400 hover:text-green-300 transition-colors font-medium">
                (724) 819-2727
              </a>.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover-glow"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 text-sm text-green-400 font-bold mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-zinc-400 leading-relaxed pl-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <SectionCta
        title="Ready to Make Your Home More Comfortable?"
        subtitle="Get a free, no-obligation estimate from Pittsburgh's most trusted spray foam insulation team. We will visit your property, assess your needs, and provide a detailed proposal within 48 hours."
        variant="gradient"
      />

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
      <Footer />
    </div>
  )
}
