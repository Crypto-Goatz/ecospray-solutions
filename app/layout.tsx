import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ComplianceWrapper } from "@/components/compliance-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoSpray Solutions | Spray Foam Insulation Pittsburgh",
  description: "Pittsburgh's trusted spray foam insulation experts. Save up to 50% on energy bills with professional residential and commercial insulation services in Murrysville, PA and surrounding areas.",
  keywords: ["spray foam insulation", "Pittsburgh insulation", "Murrysville PA", "energy savings", "residential insulation", "commercial insulation"],
  openGraph: {
    title: "EcoSpray Solutions | Spray Foam Insulation Pittsburgh",
    description: "Save up to 50% on energy bills with professional spray foam insulation services.",
    url: "https://ecospraysolutions.com",
    siteName: "EcoSpray Solutions",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cro9Key = process.env.NEXT_PUBLIC_CRO9_KEY

  return (
    <html lang="en">
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
