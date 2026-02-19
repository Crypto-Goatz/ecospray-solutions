import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { Home, CheckCircle2, ArrowRight, Shield, Zap, Droplets, ThermometerSun } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Spray Foam Insulation | Pittsburgh Homes | EcoSpray Solutions",
  description: "Professional residential spray foam insulation for Pittsburgh homes. Insulate attics, walls, basements, and crawl spaces. Save up to 50% on energy bills. Free estimates.",
  keywords: "residential insulation, home insulation Pittsburgh, attic insulation, basement insulation, crawl space insulation, spray foam home",
}

const areas = [
  {
    title: "Attic Insulation",
    description: "Stop heat loss through your roof. Spray foam creates a complete thermal barrier in attics, preventing ice dams and reducing cooling costs.",
    icon: Home,
    benefits: ["Prevents ice dams", "Reduces HVAC load", "Eliminates drafts", "Extends roof life"],
  },
  {
    title: "Wall Cavity Insulation",
    description: "Upgrade your walls with spray foam for superior R-value and air sealing that traditional fiberglass can't match.",
    icon: Shield,
    benefits: ["Higher R-value", "Airtight seal", "Sound dampening", "No settling"],
  },
  {
    title: "Basement Sealing",
    description: "Transform damp basements into comfortable living spaces. Spray foam prevents moisture intrusion and insulates foundation walls.",
    icon: Droplets,
    benefits: ["Moisture barrier", "Mold prevention", "Warmer floors", "Lower humidity"],
  },
  {
    title: "Crawl Space Insulation",
    description: "Encapsulate and insulate crawl spaces to improve indoor air quality and eliminate cold floors above.",
    icon: ThermometerSun,
    benefits: ["Sealed vapor barrier", "Warmer floors", "Pest deterrent", "Energy savings"],
  },
]

const benefits = [
  "Up to 50% reduction in heating and cooling costs",
  "Improved indoor air quality and comfort",
  "Elimination of drafts and cold spots",
  "Protection against moisture and mold",
  "Increased home value",
  "Noise reduction from outside",
  "Lower carbon footprint",
  "25+ year lifespan without settling",
]

const testimonials = [
  {
    quote: "Our energy bills dropped by 40% after EcoSpray insulated our attic. The house is so much more comfortable now!",
    author: "Sarah M.",
    location: "Murrysville, PA",
  },
  {
    quote: "Professional crew, clean work, and amazing results. Our basement is finally usable year-round.",
    author: "Mike R.",
    location: "Penn Hills, PA",
  },
]

export default function ResidentialInsulationPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Beautiful Pittsburgh home"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Residential Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pittsburgh Home
              <span className="block gradient-text">Insulation Experts</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Transform your home into an energy-efficient haven with professional spray foam insulation. 
              Serving Pittsburgh homeowners for over 10 years with superior comfort and savings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
              >
                Get Free Estimate
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

      {/* Areas We Insulate */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Areas We Insulate
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Complete home insulation solutions for every space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-zinc-400 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
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
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Homeowners Choose
                <span className="block gradient-text">Spray Foam Insulation</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Spray foam insulation delivers unmatched performance for Pittsburgh homes, 
                providing comfort, savings, and protection that lasts for decades.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Comfortable home interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl shadow-green-500/20">
                <div className="text-4xl font-bold text-white mb-1">50%</div>
                <div className="text-green-100 text-sm">Energy Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Homeowners Say
            </h2>
            <p className="text-zinc-400">Real results from real Pittsburgh homes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8"
              >
                <p className="text-zinc-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  )
}
