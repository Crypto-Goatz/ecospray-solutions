import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Benefits from "@/components/benefits"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Benefits of Spray Foam Insulation | EcoSpray Solutions",
  description: "Discover the benefits of spray foam insulation: up to 50% energy savings, superior air sealing, moisture barrier, noise reduction, and eco-friendly solutions.",
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Benefits />
      <Cta />
      <Footer />
    </div>
  )
}
