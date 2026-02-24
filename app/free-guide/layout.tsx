import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Guide: The Pittsburgher's Guide to a Draft-Free Home | Spray Foam Solutions",
  description:
    "Download your free 16-page guide to eliminating drafts, lowering energy bills, and choosing the right spray foam insulation for your Pittsburgh home. Real costs, rebate info, and a printable checklist included.",
  keywords: [
    "spray foam insulation guide",
    "Pittsburgh insulation",
    "draft-free home",
    "energy savings Pittsburgh",
    "spray foam cost",
    "insulation rebates PA",
    "open cell vs closed cell",
    "Pittsburgh home energy audit",
    "Murrysville insulation",
    "Western PA spray foam",
  ],
  openGraph: {
    title: "Free Guide: The Pittsburgher's Guide to a Draft-Free Home",
    description:
      "Stop letting the cold out. 16-page playbook with real costs, rebates, and a room-by-room checklist for Pittsburgh homeowners.",
    type: "website",
    url: "https:///free-guide",
    images: [
      {
        url: "/images/logos/banner-worker.png",
        width: 1200,
        height: 630,
        alt: "Spray Foam Solutions - Free Insulation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Guide: The Pittsburgher's Guide to a Draft-Free Home",
    description:
      "16-page playbook with real costs, rebates, and a room-by-room checklist for Pittsburgh homeowners.",
  },
  alternates: {
    canonical: "https:///free-guide",
  },
}

export default function FreeGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
