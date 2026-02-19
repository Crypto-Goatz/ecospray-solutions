import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { Warehouse, CheckCircle2, ArrowRight, Hammer, Clock, FileCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "New Construction Spray Foam Insulation | Builder Services | EcoSpray Solutions",
  description: "Partner with Pittsburgh builders for superior spray foam insulation in new construction. Fast installation, code compliance, and builder programs available.",
  keywords: "new construction insulation, builder insulation Pittsburgh, new home spray foam, construction insulation services",
}

const services = [
  {
    title: "Builder Partnership Programs",
    description: "Dedicated account managers, priority scheduling, and competitive pricing for builders and contractors.",
    icon: Users,
    benefits: ["Volume discounts", "Priority scheduling", "Dedicated support", "Flexible payment terms"],
  },
  {
    title: "Fast Installation",
    description: "Our experienced crews work efficiently to meet tight construction deadlines without compromising quality.",
    icon: Clock,
    benefits: ["Same-week service", "Large crews available", "Weather-resistant", "Minimal delays"],
  },
  {
    title: "Code Compliance",
    description: "All installations meet or exceed Pennsylvania building codes with proper documentation and inspections.",
    icon: FileCheck,
    benefits: ["ICC certified", "Full documentation", "Inspector coordination", "Permit assistance"],
  },
  {
    title: "Custom Solutions",
    description: "We work with your plans to provide optimal insulation solutions for any design or specification.",
    icon: Hammer,
    benefits: ["Plan review", "Value engineering", "Multiple options", "Technical support"],
  },
]

const advantages = [
  "Superior air sealing eliminates drafts and cold spots",
  "Higher R-values than traditional fiberglass",
  "Moisture barrier protects structure from water damage",
  "Reduces HVAC equipment size requirements",
  "Improves home energy ratings and certifications",
  "Quieter homes with better sound dampening",
  "No settling or degradation over time",
  "Eco-friendly formulations available",
]

const process = [
  {
    step: 1,
    title: "Plan Review",
    description: "Submit your building plans for review. We'll provide detailed specifications and pricing.",
  },
  {
    step: 2,
    title: "Pre-Construction Meeting",
    description: "Coordinate with your team on scheduling, access requirements, and any special considerations.",
  },
  {
    step: 3,
    title: "Installation",
    description: "Our certified crews complete installation quickly and professionally, meeting all code requirements.",
  },
  {
    step: 4,
    title: "Inspection & Documentation",
    description: "Full documentation provided for building inspectors with photos and specifications.",
  },
]

export default function NewConstructionPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="New construction site"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Warehouse className="w-4 h-4" />
              New Construction
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Builder-Focused
              <span className="block gradient-text">Insulation Solutions</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Partner with EcoSpray Solutions for superior spray foam insulation in new construction. 
              We understand builder timelines and deliver quality results on schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium rounded-full hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg shadow-orange-500/25"
              >
                Builder Program Details
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Builders Choose Us
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Reliable service, quality results, and builder-friendly programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Build Better Homes
                <span className="block gradient-text">From Day One</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Spray foam insulation provides superior performance that helps builders deliver 
                more comfortable, energy-efficient homes that buyers love.
              </p>
              <div className="space-y-3">
                {advantages.map((advantage) => (
                  <div key={advantage} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="New home construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 shadow-2xl shadow-orange-500/20">
                <div className="text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-orange-100 text-sm">Years Experience</div>
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
              Our Builder Process
            </h2>
            <p className="text-zinc-400">Simple, streamlined, and on schedule</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl border border-orange-500/20">
              <Hammer className="w-12 h-12 text-orange-400" />
              <div>
                <div className="text-white font-bold text-xl mb-1">Ready to Partner?</div>
                <div className="text-zinc-400 mb-4">Join our builder program for priority service and competitive pricing</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
              >
                Contact Us Today
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
