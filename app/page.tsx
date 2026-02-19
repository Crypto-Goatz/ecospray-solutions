import Hero from "@/components/hero"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import { getServices, getTestimonials, getStats, getSiteConfig } from "@/lib/cms"

export default async function Home() {
  const [services, testimonials, stats, config] = await Promise.all([
    getServices(),
    getTestimonials(),
    getStats(),
    getSiteConfig(),
  ])

  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero config={config} stats={stats} />
      <Services services={services} />
      <Benefits />
      <Process />
      <Testimonials testimonials={testimonials} config={config} />
      <Cta config={config} />
      <Footer config={config} />
    </div>
  )
}
