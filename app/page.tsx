import Hero from "@/components/hero"
import Services from "@/components/services"
import Benefits from "@/components/benefits"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}
