import Footer from "@/components/footer"

export const metadata = {
  title: "Cookie Policy | EcoSpray Solutions",
  description: "Cookie policy for EcoSpray Solutions website.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="pt-24 pb-20 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300">
            <p className="text-zinc-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <h2 className="text-xl font-semibold text-white mt-8">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you interact with the site.</p>

            <h2 className="text-xl font-semibold text-white mt-8">How We Use Cookies</h2>
            <p>EcoSpray Solutions uses the following categories of cookies:</p>

            <h3 className="text-lg font-semibold text-white mt-6">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas. The website cannot function properly without these cookies.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">0n_consent</strong> — Stores your cookie consent preferences (1 year)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">CRO9 Analytics</strong> — Tracks page views, scroll depth, engagement time, and site performance (session-based)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6">Marketing Cookies</h3>
            <p>These cookies may be used to track visitors across websites to display relevant advertisements. We currently use minimal marketing tracking.</p>

            <h2 className="text-xl font-semibold text-white mt-8">Managing Cookies</h2>
            <p>You can manage your cookie preferences at any time through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our cookie consent banner (appears on first visit)</li>
              <li>Your browser settings (instructions vary by browser)</li>
              <li>Clearing your browser cookies and local storage</li>
            </ul>
            <p>Note that disabling certain cookies may affect website functionality.</p>

            <h2 className="text-xl font-semibold text-white mt-8">Third-Party Cookies</h2>
            <p>Some third-party services we use may set their own cookies. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.</p>

            <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
            <p>For questions about our cookie practices, contact:</p>
            <p>
              <strong className="text-white">EcoSpray Solutions</strong><br />
              Email: <a href="mailto:info@ecospraysolutions.com" className="text-green-400 hover:text-green-300">info@ecospraysolutions.com</a><br />
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
