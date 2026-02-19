"use client"

import { type ReactNode } from "react"

// Dynamic imports to avoid build errors when compliance layer isn't yet installed
import dynamic from "next/dynamic"

const ConsentProvider = dynamic(
  () => import("@/lib/0n-layers/compliance/consent-provider").then(mod => {
    const Provider = mod.ConsentProvider
    return { default: Provider }
  }),
  {
    ssr: false,
    loading: () => null,
  }
)

const CookieBanner = dynamic(
  () => import("@/lib/0n-layers/compliance/cookie-banner").then(mod => {
    const Banner = mod.CookieBanner
    return { default: Banner }
  }),
  {
    ssr: false,
    loading: () => null,
  }
)

export function ComplianceWrapper({ children }: { children: ReactNode }) {
  return (
    <ConsentProvider defaultMode="essential">
      {children}
      <CookieBanner />
    </ConsentProvider>
  )
}
