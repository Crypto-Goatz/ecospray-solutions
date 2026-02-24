import Footer from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Spray Foam Solutions",
  description: "Terms of service for Spray Foam Solutions spray foam insulation services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="pt-24 pb-20 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300">
            <p className="text-zinc-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <h2 className="text-xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
            <p>By accessing and using the Spray Foam Solutions website (&quot;&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>

            <h2 className="text-xl font-semibold text-white mt-8">2. Services</h2>
            <p>Spray Foam Solutions provides spray foam insulation services for residential and commercial properties in the greater Pittsburgh, PA area. All services are subject to a separate service agreement and proposal.</p>

            <h2 className="text-xl font-semibold text-white mt-8">3. Quotes and Estimates</h2>
            <p>Quotes provided through our website are estimates only and subject to change upon on-site inspection. Final pricing will be provided in a written proposal before any work begins.</p>

            <h2 className="text-xl font-semibold text-white mt-8">4. Website Use</h2>
            <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that is unlawful or fraudulent</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use automated tools to scrape or collect data from the website</li>
              <li>Transmit any malicious code or harmful content</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8">5. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is owned by Spray Foam Solutions and protected by copyright law. You may not reproduce, distribute, or create derivative works without our written permission.</p>

            <h2 className="text-xl font-semibold text-white mt-8">6. Limitation of Liability</h2>
            <p>Spray Foam Solutions makes no warranties about the accuracy or completeness of website content. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.</p>

            <h2 className="text-xl font-semibold text-white mt-8">7. Warranty</h2>
            <p>All insulation work performed by Spray Foam Solutions comes with a lifetime workmanship warranty. Material warranties are provided by the respective manufacturers. Warranty details will be included in your service agreement.</p>

            <h2 className="text-xl font-semibold text-white mt-8">8. Governing Law</h2>
            <p>These terms are governed by the laws of the Commonwealth of Pennsylvania, United States.</p>

            <h2 className="text-xl font-semibold text-white mt-8">9. Contact</h2>
            <p>
              <strong className="text-white">Spray Foam Solutions</strong><br />
              Email: <a href="mailto:info@" className="text-green-400 hover:text-green-300">info@</a><br />
              Phone: <a href="tel:+14125551234" className="text-green-400 hover:text-green-300">(412) 555-1234</a><br />
              Murrysville, PA
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
