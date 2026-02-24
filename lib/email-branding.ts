/**
 * Email branding configuration for automated sequences.
 */

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const EMAIL_BRANDING = {
  companyName: 'Spray Foam Solutions',
  tagline: 'Spray Foam Solutions Optimized Environment',
  phone: '',
  email: '',
  website: '',
  location: '',
  serviceArea: '',

  logos: {
    full: `${SITE_URL}/images/logos/logo-full.png`,
    horizontal: `${SITE_URL}/images/logos/logo-horizontal.png`,
    horizontalAlt: `${SITE_URL}/images/logos/logo-horizontal-alt.png`,
    icon: `${SITE_URL}/images/logos/icon.png`,
    iconGlow: `${SITE_URL}/images/logos/icon-glow.png`,
    iconClean: `${SITE_URL}/images/logos/icon-clean.png`,
    whiteText: `${SITE_URL}/images/logos/logo-white-text.png`,
    whiteTextAlt: `${SITE_URL}/images/logos/logo-white-text-alt.png`,
    bannerInterior: `${SITE_URL}/images/logos/banner-interior.png`,
    bannerWorker: `${SITE_URL}/images/logos/banner-worker.png`,
  },

  guide: {
    title: '',
    downloadUrl: '',
    landingPage: '',
  },

  colors: {
    primary: '#22c55e',
    primaryDark: '#16a34a',
    accent: '#10b981',
    background: '#09090b',
    surface: '#18181b',
    text: '#fafafa',
    muted: '#a1a1aa',
    border: '#27272a',
  },

  social: {
    facebook: '',
    instagram: '',
    google: '',
  },
} as const

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

export function getEmailHeader(variant: 'light' | 'dark' = 'dark') {
  const bg = variant === 'dark' ? EMAIL_BRANDING.colors.background : '#ffffff'
  const logo = variant === 'dark' ? EMAIL_BRANDING.logos.whiteText : EMAIL_BRANDING.logos.horizontal

  return `
<div style="background-color: ${bg}; padding: 24px; text-align: center; border-bottom: 2px solid ${EMAIL_BRANDING.colors.primary};">
  <img src="${logo}" alt="${EMAIL_BRANDING.companyName}" style="max-width: 200px; height: auto;" />
</div>`
}

export function getEmailFooter() {
  return `
<div style="background-color: ${EMAIL_BRANDING.colors.surface}; padding: 24px; text-align: center; border-top: 1px solid ${EMAIL_BRANDING.colors.border};">
  <img src="${EMAIL_BRANDING.logos.icon}" alt="${EMAIL_BRANDING.companyName}" style="width: 40px; height: 40px; margin-bottom: 12px;" />
  <p style="color: ${EMAIL_BRANDING.colors.muted}; font-size: 14px; margin: 0 0 8px;">
    ${EMAIL_BRANDING.companyName}
  </p>
</div>`
}
