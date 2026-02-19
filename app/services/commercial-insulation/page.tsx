import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { Building2, CheckCircle2, ArrowRight, Warehouse, Store, Factory, TrendingDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Spray Foam Insulation | Pittsburgh Businesses | EcoSpray Solutions",
  description: "Professional commercial spray foam insulation for offices, warehouses, retail spaces, and industrial buildings in Pittsburgh. Reduce energy costs and improve comfort.",
  keywords: "commercial insulation, warehouse insulation Pittsburgh, office building insulation, retail insulation, industrial spray foam",
}

const buildingTypes = [
  {
    title: "Office Buildings",
    description: "Create comfortable, energy-efficient workspaces that boost productivity and reduce operating costs.",
    icon: Building2,
    benefits: ["Lower HVAC costs", "Improved comfort", "Noise reduction", "Tax incentives"],
  },
  {
    title: "Retail Spaces",
    description: "Maintain consistent temperatures for customer comfort while protecting inventory and reducing utility bills.",
    icon: Store,
    benefits: ["Customer comfort", "Product protection", "Cost savings", "Quick installation"],
  },
  {
    title: "Warehouses & Distribution",
    description: "Insulate large spaces efficiently with spray foam's superior coverage and air sealing properties.",
    icon: Warehouse,
    benefits: ["Fast application", "Large area coverage", "Temperature control", "Moisture barrier"],
  },
  {
    title: "Industrial Facilities",
    description: "Protect equipment, reduce condensation, and improve working conditions in manufacturing environments.",
    icon: Factory,
    benefits: ["Equipment protection", "Condensation control", "Worker comfort", "Energy efficiency"],
  },
]

const benefits = [
  "Reduce energy costs by 30-50% year-round",
  "Improve employee comfort and productivity",
  "Fast installation with minimal disruption",
  "Meet or exceed building code requirements",
  "Qualify for energy efficiency tax incentives",
  "Superior moisture and vapor barrier",
  "Reduce HVAC system wear and tear",
  "Increase property value and appeal",
]

const features = [
  {
    title: "Custom Solutions",
    description: "Every commercial space is unique. We design insulation solutions tailored to your building's specific needs and usage.",
  },
  {
    title: "Minimal Downtime",
    description: "Our experienced crews work efficiently around your schedule to minimize disruption to your business operations.",
  },
  {
    title: "ROI Analysis",
    description: "We provide detailed cost-benefit analysis showing your expected energy savings and payback period.",
  },
  {
    title: "Code Compliance",
    description: "All work meets or exceeds local building codes and fire safety requirements. Fully licensed and insured.",
  },
]

export default function CommercialInsulationPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern commercial building"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Commercial Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Commercial Insulation
              <span className="block gradient-text">For Pittsburgh Businesses</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Reduce operating costs and improve comfort with professional spray foam insulation 
              for offices, warehouses, retail spaces, and industrial buildings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/25"
              >
                Request Quote
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

      {/* Building Types */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Buildings We Serve
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Professional insulation solutions for every commercial space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {buildingTypes.map((type) => (
              <div
                key={type.title}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-zinc-400 mb-6">{type.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {type.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 shadow-2xl shadow-blue-500/20">
                <div className="text-4xl font-bold text-white mb-1">40%</div>
                <div className="text-blue-100 text-sm">Lower Energy Bills</div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Businesses Choose
                <span className="block gradient-text">Spray Foam</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Spray foam insulation delivers superior ROI for commercial properties through 
                energy savings, improved comfort, and long-term durability.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Commercial Advantage
            </h2>
            <p className="text-zinc-400">Why Pittsburgh businesses trust EcoSpray Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
              <TrendingDown className="w-12 h-12 text-blue-400" />
              <div className="text-left">
                <div className="text-white font-bold text-xl mb-1">ROI Calculator Available</div>
                <div className="text-zinc-400">Schedule a consultation for a detailed cost-benefit analysis</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Get Analysis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  )
}
