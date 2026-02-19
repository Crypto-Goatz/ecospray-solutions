import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ComplianceWrapper } from "@/components/compliance-wrapper"
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/schema-markup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ecospraysolutions.com'),
  title: {
    default: "EcoSpray Solutions | Spray Foam Insulation Pittsburgh PA",
    template: "%s | EcoSpray Solutions",
  },
  description: "Pittsburgh's trusted spray foam insulation experts. Save up to 50% on energy bills with professional residential and commercial insulation services in Murrysville, PA and surrounding areas.",
  keywords: ["spray foam insulation", "Pittsburgh insulation", "Murrysville PA", "energy savings", "residential insulation", "commercial insulation", "spray foam contractor", "insulation company Pittsburgh"],
  authors: [{ name: "EcoSpray Solutions" }],
  creator: "EcoSpray Solutions",
  publisher: "EcoSpray Solutions",
  openGraph: {
    title: "EcoSpray Solutions | Spray Foam Insulation Pittsburgh",
    description: "Save up to 50% on energy bills with professional spray foam insulation services.",
    url: "https://ecospraysolutions.com",
    siteName: "EcoSpray Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logos/banner-worker.png",
        width: 1200,
        height: 630,
        alt: "EcoSpray Solutions - Professional Spray Foam Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoSpray Solutions | Spray Foam Insulation Pittsburgh",
    description: "Save up to 50% on energy bills with professional spray foam insulation.",
    images: ["/images/logos/banner-worker.png"],
  },
  alternates: {
    canonical: "https://ecospraysolutions.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cro9Key = process.env.NEXT_PUBLIC_CRO9_KEY
  const localBusiness = getLocalBusinessSchema()
  const webSite = getWebSiteSchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
        />
      </head>
      <body className={inter.className}>
        <ComplianceWrapper>
          <Navbar />
          <main>{children}</main>
        </ComplianceWrapper>
        {cro9Key && (
          <script
            src="/cro9-tracker.js"
            data-key={cro9Key}
            data-consent-mode="essential"
            defer
          />
        )}
      </body>
    </html>
  )
}
