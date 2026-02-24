import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { SITE } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE.url}/privacy` },
}

export default function PrivacyPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Privacy Policy", url: `${SITE.url}/privacy` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="pt-28 pb-20 md:pt-36">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mt-6 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-[var(--slate-700)] leading-relaxed">
            <p className="text-sm text-[var(--slate-500)]">
              Last updated: February 2026
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) collects the following
                information when you interact with our website at {SITE.domain}:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--slate-900)]">Contact Information:</strong>{" "}
                  Name, email address, phone number, and ZIP code when you submit a form.
                </li>
                <li>
                  <strong className="text-[var(--slate-900)]">Project Details:</strong>{" "}
                  Property type, insulation areas, project timeline, and descriptions you provide.
                </li>
                <li>
                  <strong className="text-[var(--slate-900)]">Usage Data:</strong>{" "}
                  Pages visited, time spent, browser type, and device information collected through cookies and analytics.
                </li>
                <li>
                  <strong className="text-[var(--slate-900)]">Communication Data:</strong>{" "}
                  Records of correspondence when you contact us by phone, email, or form submission.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your estimate requests and inquiries</li>
                <li>Provide spray foam insulation services and project proposals</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Send relevant communications about our services (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                3. Cookies and Tracking
              </h2>
              <p>
                Our website uses essential cookies to enable core functionality and optional
                analytics cookies to understand how visitors use our site. You can manage
                your cookie preferences through your browser settings. We use Google Analytics
                to collect anonymized usage data. No personally identifiable information is
                shared with third-party advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                4. Third-Party Services
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist with our business operations (CRM, email, analytics)</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
              <p className="mt-3">
                All third-party service providers are bound by contractual obligations to keep
                your personal information confidential and use it only for the purposes for which
                we provide it to them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal data against unauthorized access, alteration, disclosure, or destruction.
                Our website uses SSL/TLS encryption for all data transmissions. However, no
                method of electronic storage or transmission is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                6. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted
                on this page with an updated revision date. Your continued use of our website
                after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                8. Contact Us
              </h2>
              <p>For privacy-related questions or to exercise your rights, contact us at:</p>
              <div className="mt-3 p-4 rounded-lg bg-[var(--slate-50)]">
                <p className="font-semibold text-[var(--slate-900)]">{SITE.name}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[var(--blue)] hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="text-[var(--blue)] hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </p>
                <p>{SITE.address.full}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
