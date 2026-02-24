import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Spray Foam Solutions",
  description: "Privacy policy for Spray Foam Solutions spray foam insulation services.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className="pt-24 pb-20 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300">
            <p className="text-zinc-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
            <p>Spray Foam Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects the following information when you interact with our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number when you submit our contact form.</li>
              <li><strong className="text-white">Project Details:</strong> Property type, square footage, and project descriptions you provide.</li>
              <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent, browser type, and device information through cookies and analytics.</li>
              <li><strong className="text-white">Communication Data:</strong> Records of correspondence when you contact us.</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your quote requests and inquiries</li>
              <li>Provide insulation services and project estimates</li>
              <li>Improve our website and customer experience</li>
              <li>Send relevant communications about our services (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8">3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist with our operations (CRM, analytics)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8">4. Cookies</h2>
            <p>Our website uses essential cookies for functionality and optional analytics cookies to understand usage patterns. You can manage cookie preferences through our cookie consent banner. See our <a href="/cookies" className="text-green-400 hover:text-green-300">Cookie Policy</a> for details.</p>

            <h2 className="text-xl font-semibold text-white mt-8">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-xl font-semibold text-white mt-8">7. Contact Us</h2>
            <p>For privacy-related questions, contact us at:</p>
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
