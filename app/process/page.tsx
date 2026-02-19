import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Process from "@/components/process"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Spray Foam Installation Process | EcoSpray Solutions",
  description: "Learn about our simple 4-step spray foam installation process: free consultation, energy assessment, professional installation, and guaranteed savings.",
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Process />
      <Cta />
      <Footer />
    </div>
  )
}
