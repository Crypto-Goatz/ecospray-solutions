"use client"

import Image from "next/image"
import { Phone, ClipboardCheck, Hammer, ThumbsUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: 1,
    icon: Phone,
    title: "Free Consultation",
    description: "Call us or fill out our form. We'll discuss your project and schedule a convenient time to visit.",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&q=80",
  },
  {
    step: 2,
    icon: ClipboardCheck,
    title: "Energy Assessment",
    description: "Our experts inspect your space, identify problem areas, and provide a detailed proposal.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    step: 3,
    icon: Hammer,
    title: "Professional Installation",
    description: "Our trained crews install your spray foam insulation quickly and cleanly.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: "Enjoy the Savings",
    description: "Start saving on energy bills immediately and enjoy comfort for years to come.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From first call to final inspection, we make the process simple and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="group">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 card-lift">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                    {/* Step Number */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                      <step.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <div className="text-left">
              <div className="text-slate-900 font-bold text-lg">Ready to get started?</div>
              <div className="text-slate-600">Schedule your free consultation today.</div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 group whitespace-nowrap"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
