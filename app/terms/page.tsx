import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import { SITE } from "@/lib/constants"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}. Read our terms and conditions for using our website and services.`,
  alternates: { canonical: `${SITE.url}/terms` },
}

export default function TermsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Terms of Service", url: `${SITE.url}/terms` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="pt-28 pb-20 md:pt-36">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />

          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mt-6 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8 text-[var(--slate-700)] leading-relaxed">
            <p className="text-sm text-[var(--slate-500)]">
              Last updated: February 2026
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the {SITE.name} website ({SITE.domain}), you accept
                and agree to be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                2. Services
              </h2>
              <p>
                {SITE.name} provides spray foam insulation services for residential and
                commercial properties in the greater Pittsburgh, Pennsylvania area. All
                insulation services are subject to a separate service agreement and written
                proposal provided before work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                3. Quotes and Estimates
              </h2>
              <p>
                Estimates provided through our website or during initial consultations are
                approximations based on available information and are subject to change upon
                on-site inspection. Final pricing will be provided in a detailed written
                proposal before any work commences. Proposals are valid for 30 days from the
                date of issue unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                4. Website Use
              </h2>
              <p className="mb-3">
                You agree to use our website only for lawful purposes and in a way that does
                not infringe the rights of others. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that is unlawful or fraudulent</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use automated tools to scrape or collect data from the website</li>
                <li>Transmit any malicious code, viruses, or harmful content</li>
                <li>Impersonate another person or entity when using our forms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, logos, graphics, and design,
                is owned by {SITE.name} and protected by copyright and intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works
                from any content on this website without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                6. Warranty
              </h2>
              <p>
                All spray foam insulation work performed by {SITE.name} comes with a lifetime
                workmanship warranty. Material warranties are provided by the respective product
                manufacturers. Complete warranty details, terms, and conditions will be included
                in your service agreement and provided upon completion of work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                {SITE.name} makes no warranties, express or implied, about the accuracy or
                completeness of content on this website. To the fullest extent permitted by law,
                we shall not be liable for any indirect, incidental, special, or consequential
                damages arising from your use of or inability to use this website. This
                limitation does not apply to the insulation services we provide, which are
                governed by your service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible
                for the content, privacy practices, or terms of service of any third-party
                sites. Accessing third-party links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the
                laws of the Commonwealth of Pennsylvania, United States. Any disputes arising
                from these terms shall be subject to the exclusive jurisdiction of the courts
                in Allegheny County, Pennsylvania.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes
                will be posted on this page with an updated revision date. Your continued use
                of the website after changes are posted constitutes your acceptance of the
                revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
                11. Contact
              </h2>
              <p>For questions about these terms, contact us at:</p>
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
