"use client"

import Image from "next/image"
import Link from "next/link"
import { Home, Building2, Warehouse, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Building2,
  Warehouse,
  ClipboardCheck,
}

const DEFAULT_SERVICES = [
  {
    icon: 'Home',
    title: "Residential Insulation",
    description: "Complete home insulation solutions including attics, walls, basements, and crawl spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    features: "Attic Insulation,Wall Cavities,Basement Sealing,Crawl Spaces",
    color: "from-green-500 to-emerald-600",
    order: '1',
  },
  {
    icon: 'Building2',
    title: "Commercial Insulation",
    description: "Energy-efficient insulation for offices, warehouses, and commercial buildings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    features: "Office Buildings,Retail Spaces,Warehouses,Industrial",
    color: "from-blue-500 to-cyan-600",
    order: '2',
  },
  {
    icon: 'Warehouse',
    title: "New Construction",
    description: "Partner with builders for superior insulation in new homes and buildings.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    features: "Builder Programs,Code Compliance,Custom Solutions,Tight Deadlines",
    color: "from-orange-500 to-amber-600",
    order: '3',
  },
  {
    icon: 'ClipboardCheck',
    title: "Energy Audits",
    description: "Comprehensive energy assessments to identify opportunities for improvement.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    features: "Thermal Imaging,Blower Door Tests,Detailed Reports,ROI Analysis",
    color: "from-purple-500 to-violet-600",
    order: '4',
  },
]

interface ServicesProps {
  services?: Array<Record<string, string>>
}

export default function Services({ services }: ServicesProps) {
  const items = services && services.length > 0 ? services : DEFAULT_SERVICES

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Insulation
            <span className="block gradient-text">For Every Need</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From cozy homes to large commercial spaces, we deliver superior results
            with industry-leading spray foam technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Home
            const features = (service.features || '').split(',').map(f => f.trim()).filter(Boolean)
            const color = service.color || 'from-green-500 to-emerald-600'

            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 card-lift"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Not sure what you need?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
