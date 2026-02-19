/**
 * CMS Helper — Thin wrapper for fetching content from Google Sheets with hardcoded fallback.
 * Components call these functions server-side. When Google Sheets is not configured,
 * they return the hardcoded EcoSpray data so the site always works.
 */

import type { Row } from './0n-layers/core/types'

// ─── Hardcoded Fallback Data (mirrors existing EcoSpray components) ─────────

export const FALLBACK_SERVICES = [
  {
    icon: 'Home',
    title: 'Residential Insulation',
    description: 'Complete home insulation solutions including attics, walls, basements, and crawl spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    features: 'Attic Insulation,Wall Cavities,Basement Sealing,Crawl Spaces',
    color: 'from-green-500 to-emerald-600',
    order: '1',
  },
  {
    icon: 'Building2',
    title: 'Commercial Insulation',
    description: 'Energy-efficient insulation for offices, warehouses, and commercial buildings.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    features: 'Office Buildings,Retail Spaces,Warehouses,Industrial',
    color: 'from-blue-500 to-cyan-600',
    order: '2',
  },
  {
    icon: 'Warehouse',
    title: 'New Construction',
    description: 'Partner with builders for superior insulation in new homes and buildings.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    features: 'Builder Programs,Code Compliance,Custom Solutions,Tight Deadlines',
    color: 'from-orange-500 to-amber-600',
    order: '3',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Energy Audits',
    description: 'Comprehensive energy assessments to identify opportunities for improvement.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    features: 'Thermal Imaging,Blower Door Tests,Detailed Reports,ROI Analysis',
    color: 'from-purple-500 to-violet-600',
    order: '4',
  },
]

export const FALLBACK_TESTIMONIALS = [
  {
    name: 'Mike & Sarah Johnson',
    location: 'Murrysville, PA',
    rating: '5',
    text: 'Our heating bills dropped by 40% after EcoSpray insulated our attic. The crew was professional, clean, and finished in one day. Highly recommend!',
    project: 'Attic Insulation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    order: '1',
  },
  {
    name: 'Tom Reynolds',
    location: 'Pittsburgh, PA',
    rating: '5',
    text: 'As a commercial property owner, I was skeptical about the investment. After seeing the energy savings in my first quarter, I had them do all three of my buildings.',
    project: 'Commercial Buildings',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    order: '2',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Monroeville, PA',
    rating: '5',
    text: "We had terrible drafts in our 1920s home. EcoSpray sealed everything up and now our home is comfortable year-round. The difference is incredible.",
    project: 'Whole Home Retrofit',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    order: '3',
  },
]

export const FALLBACK_STATS = [
  { value: '500+', label: 'Projects Completed', order: '1' },
  { value: '50%', label: 'Avg. Energy Savings', order: '2' },
  { value: '4.9\u2605', label: 'Customer Rating', order: '3' },
  { value: '10+', label: 'Years Experience', order: '4' },
]

export const FALLBACK_CONFIG: Record<string, string> = {
  business_name: 'EcoSpray Solutions',
  tagline: "Pittsburgh's Spray Foam Experts",
  phone: '(412) 555-1234',
  email: 'info@ecospraysolutions.com',
  location: 'Murrysville, PA',
  service_area: 'Serving Pittsburgh & Western PA',
  license: 'PA License #123456',
  headline_1: "Pittsburgh's",
  headline_2: 'Spray Foam',
  headline_3: 'Experts',
  hero_subheadline: 'Professional insulation for homes and businesses. Lower energy costs, improved comfort, and lasting protection for the greater Pittsburgh area.',
  hero_badge: 'Save Up to 50% on Energy Bills',
  hero_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  overall_rating: '4.9',
  review_count: '200+',
  badge_1: 'Licensed & Insured',
  badge_2: '10+ Years Experience',
  badge_3: 'Energy Star Certified',
}

// ─── CMS Fetch Helpers ──────────────────────────────────────────────────────

function isConfigured(): boolean {
  return !!(process.env.GOOGLE_SERVICE_ACCOUNT_KEY && process.env.GOOGLE_SHEET_ID)
}

async function fetchSheetData(tab: string): Promise<Row[] | null> {
  if (!isConfigured()) return null
  try {
    const { getSheetData } = await import('./0n-layers/google-backend/sheets')
    return await getSheetData(tab as any)
  } catch (e) {
    console.error(`[CMS] Failed to fetch "${tab}":`, e)
    return null
  }
}

async function fetchConfig(): Promise<Record<string, string> | null> {
  if (!isConfigured()) return null
  try {
    const { getSiteConfig } = await import('./0n-layers/google-backend/sheets')
    return await getSiteConfig()
  } catch (e) {
    console.error('[CMS] Failed to fetch config:', e)
    return null
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

export async function getServices() {
  const data = await fetchSheetData('services')
  if (data && data.length > 0) return data
  return FALLBACK_SERVICES
}

export async function getTestimonials() {
  const data = await fetchSheetData('testimonials')
  if (data && data.length > 0) return data
  return FALLBACK_TESTIMONIALS
}

export async function getStats() {
  const data = await fetchSheetData('stats')
  if (data && data.length > 0) return data
  return FALLBACK_STATS
}

export async function getSiteConfig() {
  const config = await fetchConfig()
  if (config && Object.keys(config).length > 0) return config
  return FALLBACK_CONFIG
}
