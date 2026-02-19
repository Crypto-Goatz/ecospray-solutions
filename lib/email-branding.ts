/**
 * Email branding configuration for automated sequences.
 *
 * When a form is filled out (contact or guide download), the CRM sync
 * includes these branding assets so email templates can reference them.
 *
 * Logo variants are served from the site's public directory.
 */

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://ecospray-solutions.vercel.app'

export const EMAIL_BRANDING = {
  // Company info
  companyName: 'EcoSpray Solutions',
  tagline: "Pittsburgh's Spray Foam Experts",
  phone: '(724) 819-2727',
  email: 'hello@ecospraysolutions.com',
  website: 'ecospraysolutions.com',
  location: 'Murrysville, PA',
  serviceArea: 'Serving Pittsburgh & Western PA',

  // Logo URLs — use in email templates
  logos: {
    /** Full logo with text and tagline (768x571, white bg) */
    full: `${SITE_URL}/images/logos/logo-full.png`,
    /** Horizontal logo with icon + text (transparent bg, for headers) */
    horizontal: `${SITE_URL}/images/logos/logo-horizontal.png`,
    /** Horizontal logo alternate */
    horizontalAlt: `${SITE_URL}/images/logos/logo-horizontal-alt.png`,
    /** Icon only — yin-yang house/leaf (transparent bg, square) */
    icon: `${SITE_URL}/images/logos/icon.png`,
    /** Icon with fire/ice glow effect */
    iconGlow: `${SITE_URL}/images/logos/icon-glow.png`,
    /** Icon clean variant */
    iconClean: `${SITE_URL}/images/logos/icon-clean.png`,
    /** White text logo on transparent bg (for dark email headers) */
    whiteText: `${SITE_URL}/images/logos/logo-white-text.png`,
    /** White text logo alternate */
    whiteTextAlt: `${SITE_URL}/images/logos/logo-white-text-alt.png`,
    /** Banner with interior background */
    bannerInterior: `${SITE_URL}/images/logos/banner-interior.png`,
    /** Banner with worker background */
    bannerWorker: `${SITE_URL}/images/logos/banner-worker.png`,
  },

  // Guide download assets
  guide: {
    title: "The Pittsburgher's Guide to a Draft-Free Home",
    downloadUrl: `${SITE_URL}/downloads/pittsburghers-guide-draft-free-home.pdf`,
    landingPage: `${SITE_URL}/free-guide`,
  },

  // Colors for email templates (inline CSS compatible)
  colors: {
    primary: '#22c55e',      // green-500
    primaryDark: '#16a34a',  // green-600
    accent: '#10b981',       // emerald-500
    background: '#09090b',   // zinc-950
    surface: '#18181b',      // zinc-900
    text: '#fafafa',         // zinc-50
    muted: '#a1a1aa',        // zinc-400
    border: '#27272a',       // zinc-800
  },

  // Social links
  social: {
    facebook: '',
    instagram: '',
    google: '',
  },
} as const

/**
 * Get email branding data to include in CRM contact sync.
 * This allows automated email sequences to use branded logos.
 */
export function getEmailBrandingForCRM() {
  return {
    company_name: EMAIL_BRANDING.companyName,
    company_phone: EMAIL_BRANDING.phone,
    company_email: EMAIL_BRANDING.email,
    company_website: EMAIL_BRANDING.website,
    logo_url: EMAIL_BRANDING.logos.horizontal,
    logo_full_url: EMAIL_BRANDING.logos.full,
    logo_icon_url: EMAIL_BRANDING.logos.icon,
    banner_url: EMAIL_BRANDING.logos.bannerWorker,
    guide_url: EMAIL_BRANDING.guide.downloadUrl,
    guide_page_url: EMAIL_BRANDING.guide.landingPage,
  }
}

/**
 * Generate an HTML email header snippet with the branded logo.
 * Use this in email templates for consistent branding.
 */
export function getEmailHeader(variant: 'light' | 'dark' = 'dark') {
  const bg = variant === 'dark' ? EMAIL_BRANDING.colors.background : '#ffffff'
  const logo = variant === 'dark' ? EMAIL_BRANDING.logos.whiteText : EMAIL_BRANDING.logos.horizontal

  return `
<div style="background-color: ${bg}; padding: 24px; text-align: center; border-bottom: 2px solid ${EMAIL_BRANDING.colors.primary};">
  <a href="${EMAIL_BRANDING.guide.landingPage}" style="text-decoration: none;">
    <img src="${logo}" alt="${EMAIL_BRANDING.companyName}" style="max-width: 200px; height: auto;" />
  </a>
</div>`
}

/**
 * Generate an HTML email footer snippet with contact info.
 */
export function getEmailFooter() {
  return `
<div style="background-color: ${EMAIL_BRANDING.colors.surface}; padding: 24px; text-align: center; border-top: 1px solid ${EMAIL_BRANDING.colors.border};">
  <img src="${EMAIL_BRANDING.logos.icon}" alt="${EMAIL_BRANDING.companyName}" style="width: 40px; height: 40px; margin-bottom: 12px;" />
  <p style="color: ${EMAIL_BRANDING.colors.muted}; font-size: 14px; margin: 0 0 8px;">
    ${EMAIL_BRANDING.companyName} &bull; ${EMAIL_BRANDING.location}
  </p>
  <p style="color: ${EMAIL_BRANDING.colors.muted}; font-size: 12px; margin: 0 0 4px;">
    <a href="tel:${EMAIL_BRANDING.phone.replace(/[^+\d]/g, '')}" style="color: ${EMAIL_BRANDING.colors.primary}; text-decoration: none;">${EMAIL_BRANDING.phone}</a>
    &bull;
    <a href="mailto:${EMAIL_BRANDING.email}" style="color: ${EMAIL_BRANDING.colors.primary}; text-decoration: none;">${EMAIL_BRANDING.email}</a>
  </p>
  <p style="color: ${EMAIL_BRANDING.colors.muted}; font-size: 11px; margin: 12px 0 0;">
    ${EMAIL_BRANDING.serviceArea}
  </p>
</div>`
}
