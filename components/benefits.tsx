"use client"

import Image from "next/image"
import {
  Zap, Wind, Droplets, Volume2, Calendar, Leaf,
  CheckCircle2, ArrowRight
} from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Zap,
    title: "Energy Savings",
    description: "Reduce heating and cooling costs by up to 50% with superior thermal performance.",
    stat: "50%",
    statLabel: "Lower Bills",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Wind,
    title: "Air Sealing",
    description: "Spray foam expands to fill gaps and cracks, creating an airtight barrier.",
    stat: "100%",
    statLabel: "Coverage",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Droplets,
    title: "Moisture Barrier",
    description: "Closed-cell foam prevents moisture intrusion, protecting against mold.",
    stat: "Zero",
    statLabel: "Moisture",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Volume2,
    title: "Noise Reduction",
    description: "Enjoy a quieter home with spray foam's excellent sound-dampening properties.",
    stat: "80%",
    statLabel: "Quieter",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Long Lasting",
    description: "Unlike traditional insulation, spray foam won't sag, settle, or degrade.",
    stat: "25+",
    statLabel: "Years",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint with energy-efficient insulation that lasts.",
    stat: "Green",
    statLabel: "Choice",
    color: "from-emerald-500 to-teal-500",
  },
]

const whyChoose = [
  "Locally owned and operated in Murrysville, PA",
  "Licensed, bonded, and fully insured",
  "Free on-site estimates with detailed proposals",
  "Clean, professional installation crews",
  "Lifetime warranty on all workmanship",
  "Financing options available",
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Smart Choice for
            <span className="block gradient-text">Pittsburgh Homes</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Spray foam insulation outperforms traditional materials in every category.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 card-lift"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className="relative">
                {/* Header with icon and stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5`}>
                    <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.stat}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{benefit.statLabel}</div>
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

        {/* Why Choose Us - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional insulation team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl shadow-green-500/20">
              <div className="text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-green-100 text-sm">Happy Customers</div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 shadow-lg">
              <div className="text-green-400 font-bold">10+ Years</div>
              <div className="text-zinc-500 text-xs">of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose
              <span className="gradient-text"> Spray Foam Solutions?</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-8">
              We&apos;re not just another insulation company. We&apos;re your neighbors,
              committed to making Pittsburgh homes more comfortable and energy-efficient.
            </p>

            <div className="space-y-4 mb-8">
              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-medium rounded-full hover:bg-zinc-100 transition-colors group"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
