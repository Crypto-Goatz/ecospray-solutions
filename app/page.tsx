import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Zap, Shield, Award, Star, Home, Building2, Warehouse, ClipboardCheck, CheckCircle2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { getServices, getTestimonials, getStats, getSiteConfig } from "@/lib/cms"

export default async function HomePage() {
  const [services, testimonials, stats, config] = await Promise.all([
    getServices(),
    getTestimonials(),
    getStats(),
    getSiteConfig(),
  ])

  const c = {
    business_name: 'EcoSpray Solutions',
    headline_1: "Pittsburgh's",
    headline_2: 'Spray Foam',
    headline_3: 'Experts',
    hero_subheadline: 'Professional insulation for homes and businesses. Lower energy costs, improved comfort, and lasting protection for the greater Pittsburgh area.',
    hero_badge: 'Save Up to 50% on Energy Bills',
    hero_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    phone: '(724) 819-2727',
    badge_1: 'Licensed & Insured',
    badge_2: '10+ Years Experience',
    badge_3: 'Energy Star Certified',
    overall_rating: '4.9',
    review_count: '200+',
    ...config,
  }

  const s = stats && stats.length > 0 ? stats : [
    { value: '500+', label: 'Projects Completed', order: '1' },
    { value: '50%', label: 'Avg. Energy Savings', order: '2' },
    { value: '4.9\u2605', label: 'Customer Rating', order: '3' },
    { value: '10+', label: 'Years Experience', order: '4' },
  ]

  const ICON_MAP: Record<string, typeof Home> = { Home, Building2, Warehouse, ClipboardCheck }

  const badges = [
    { icon: Shield, text: c.badge_1 },
    { icon: Award, text: c.badge_2 },
    { icon: Zap, text: c.badge_3 },
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={c.hero_image}
            alt="Professional spray foam insulation installation in Pittsburgh"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 pattern-grid opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm animate-pulse-glow">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">{c.hero_badge}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">{c.headline_1}</span>
                <br />
                <span className="gradient-text">{c.headline_2}</span>
                <br />
                <span className="text-white">{c.headline_3}</span>
              </h1>

              <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">
                {c.hero_subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6 glow-green group"
                >
                  <Link href="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg px-8 py-6 group"
                >
                  <a href="tel:+17248192727">
                    <Phone className="mr-2 w-5 h-5" />
                    {c.phone}
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {badges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-zinc-400">
                    <badge.icon className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {s.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="border-gradient p-6 backdrop-blur-sm card-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-400" />
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Insulation
              <span className="block gradient-text">For Every Need</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From cozy homes to large commercial spaces, we deliver superior results with industry-leading spray foam technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(services || []).slice(0, 4).map((service) => {
              const IconComponent = ICON_MAP[service.icon] || Home
              return (
                <Link
                  key={service.title}
                  href="/services"
                  className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 card-lift"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 line-clamp-2">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY ECOSPRAY ═══ */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 pattern-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              Why EcoSpray?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Smart Choice for
              <span className="block gradient-text">Pittsburgh Homes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '500+', label: 'Projects Completed', desc: 'Homes and businesses across Western PA' },
              { stat: '50%', label: 'Average Savings', desc: 'Reduction in heating and cooling costs' },
              { stat: '4.9/5', label: 'Customer Rating', desc: 'From over 200 verified reviews' },
            ].map((item) => (
              <div key={item.label} className="text-center p-8 glass rounded-2xl hover-glow">
                <div className="text-5xl font-bold text-green-400 mb-2">{item.stat}</div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-sm text-zinc-500">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Licensed & Insured', desc: 'Full coverage and PA licensing for your protection' },
              { title: 'Local Experts', desc: 'Based in Murrysville, serving all of Western PA' },
              { title: 'Lifetime Warranty', desc: 'Our workmanship is guaranteed for life' },
              { title: 'Free Estimates', desc: 'No-obligation consultations with detailed proposals' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-zinc-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS PREVIEW ═══ */}
      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Pittsburgh Homeowners
              <span className="block gradient-text">Are Saying</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {(testimonials || []).slice(0, 3).map((t) => {
              const rating = parseInt(t.rating || '5', 10)
              return (
                <div
                  key={t.name}
                  className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 card-lift"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-6 leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-zinc-500">{t.location} &mdash; {t.project}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all"
            >
              Read All Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Pittsburgh skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-900/90 to-green-900/95" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Save on
            <span className="block text-green-300">Energy Bills?</span>
          </h2>
          <p className="text-xl text-green-100/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our experts will assess your property
            and show you exactly how much you can save with spray foam insulation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-zinc-100 text-lg px-8 py-6 group"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href="tel:+17248192727">
                <Phone className="mr-2 w-5 h-5" />
                (724) 819-2727
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer config={config} />
    </div>
  )
}
