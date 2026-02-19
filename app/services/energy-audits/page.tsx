import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { ClipboardCheck, CheckCircle2, ArrowRight, ThermometerSun, Wind, Camera, FileText, TrendingDown, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Energy Audits & Assessments | Pittsburgh | EcoSpray Solutions",
  description: "Professional energy audits for Pittsburgh homes and businesses. Thermal imaging, blower door tests, detailed reports, and ROI analysis. Identify energy savings opportunities.",
  keywords: "energy audit Pittsburgh, home energy assessment, thermal imaging, blower door test, energy efficiency",
}

const services = [
  {
    title: "Thermal Imaging",
    description: "Advanced infrared cameras reveal hidden air leaks, missing insulation, and thermal bridges invisible to the naked eye.",
    icon: Camera,
    benefits: ["Identify air leaks", "Find missing insulation", "Detect moisture", "Non-invasive"],
  },
  {
    title: "Blower Door Testing",
    description: "Pressurize your building to measure air leakage and pinpoint exactly where conditioned air is escaping.",
    icon: Wind,
    benefits: ["Quantify air leakage", "Locate problem areas", "Verify improvements", "Code compliance"],
  },
  {
    title: "Detailed Reports",
    description: "Comprehensive analysis with photos, thermal images, and prioritized recommendations for improvements.",
    icon: FileText,
    benefits: ["Photo documentation", "Priority rankings", "Cost estimates", "Digital delivery"],
  },
  {
    title: "ROI Analysis",
    description: "Understand your investment return with detailed projections of energy savings and payback periods.",
    icon: TrendingDown,
    benefits: ["Savings projections", "Payback timeline", "Rebate information", "Financing options"],
  },
]

const whatWeFind = [
  "Air leaks around windows, doors, and penetrations",
  "Inadequate or missing insulation in critical areas",
  "Thermal bridging through framing members",
  "HVAC system inefficiencies and duct leakage",
  "Moisture intrusion and condensation problems",
  "Inefficient appliances and lighting",
  "Opportunities for solar or other renewable energy",
  "Eligibility for utility rebates and tax credits",
]

const process = [
  {
    step: 1,
    title: "Schedule Your Audit",
    description: "Book a convenient time for our certified energy auditor to visit your property.",
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: "Comprehensive Inspection",
    description: "We perform thermal imaging, blower door testing, and thorough visual inspection (2-3 hours).",
    icon: Camera,
  },
  {
    step: 3,
    title: "Receive Your Report",
    description: "Get a detailed report within 48 hours with findings, photos, and prioritized recommendations.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Implementation Plan",
    description: "We help you prioritize improvements and provide quotes for recommended insulation work.",
    icon: ThermometerSun,
  },
]

const pricing = {
  residential: {
    title: "Residential Audit",
    price: "$299",
    features: [
      "Complete home inspection",
      "Thermal imaging scan",
      "Blower door test",
      "Detailed written report",
      "Recommendations & pricing",
      "$299 credit toward insulation",
    ],
  },
  commercial: {
    title: "Commercial Audit",
    price: "Custom",
    features: [
      "Full building assessment",
      "Thermal imaging survey",
      "Air leakage testing",
      "Comprehensive report",
      "ROI analysis",
      "Utility rebate assistance",
    ],
  },
}

export default function EnergyAuditsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Energy audit thermal imaging"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <ClipboardCheck className="w-4 h-4" />
              Energy Audits
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Energy
              <span className="block gradient-text">Audits & Assessments</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Discover exactly where your building is losing energy and money. Our certified auditors 
              use thermal imaging and blower door testing to identify opportunities for savings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-medium rounded-full hover:from-purple-600 hover:to-violet-700 transition-all shadow-lg shadow-purple-500/25"
              >
                Schedule Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+14125551234"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white font-medium rounded-full hover:bg-zinc-700 transition-colors border border-zinc-700"
              >
                Call (412) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What's Included
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Comprehensive assessment using professional-grade equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Find */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Thermal imaging of home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 shadow-2xl shadow-purple-500/20">
                <div className="text-4xl font-bold text-white mb-1">30%+</div>
                <div className="text-purple-100 text-sm">Typical Savings</div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Discover
                <span className="block gradient-text">In Your Building</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Our energy audits reveal hidden problems that cost you money every month. 
                Knowledge is the first step toward lower energy bills.
              </p>
              <div className="space-y-3">
                {whatWeFind.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The Audit Process
            </h2>
            <p className="text-zinc-400">Simple steps to energy savings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm text-purple-400 font-medium mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
              <Home className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.residential.title}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">{pricing.residential.price}</span>
                <span className="text-zinc-500">one-time</span>
              </div>
              <div className="space-y-3">
                {pricing.residential.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
              <ClipboardCheck className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.commercial.title}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white">{pricing.commercial.price}</span>
                <span className="text-zinc-500">pricing</span>
              </div>
              <div className="space-y-3">
                {pricing.commercial.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  )
}
