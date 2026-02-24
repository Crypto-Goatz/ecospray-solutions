import type { Metadata, Viewport } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StickyCta from "@/components/sticky-cta"
import { SITE } from "@/lib/constants"
import { localBusinessSchema } from "@/lib/schema"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1b2e",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pittsburgh Spray Foam Insulation Experts | NearPittsburgh Spray Foam",
    template: "%s | NearPittsburgh Spray Foam",
  },
  description: SITE.description,
  keywords: [
    "spray foam insulation Pittsburgh",
    "Pittsburgh insulation contractor",
    "spray foam insulation near me",
    "residential insulation Pittsburgh PA",
    "commercial insulation Pittsburgh",
    "crawl space insulation Pittsburgh",
    "attic insulation Pittsburgh",
    "NearPittsburgh Spray Foam",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    title: "Pittsburgh Spray Foam Insulation Experts | NearPittsburgh Spray Foam",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pittsburgh Spray Foam Insulation Experts | NearPittsburgh Spray Foam",
    description: SITE.description,
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
  alternates: {
    canonical: SITE.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--orange)] focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  )
}
