import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Spray Foam Services | EcoSpray Solutions",
  description: "Professional spray foam insulation services for residential, commercial, and new construction projects in Pittsburgh. Energy audits and custom solutions available.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Services />
      <Cta />
      <Footer />
    </div>
  )
}
