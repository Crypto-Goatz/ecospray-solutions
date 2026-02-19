// ============================================================
// CRO9 - Tracking Utilities
// ============================================================
// Helper functions for processing tracker data
// ============================================================

// Parse user agent string
export function parseUserAgent(ua: string): { browser: string; os: string } {
  if (!ua) return { browser: 'Unknown', os: 'Unknown' }

  // Browser detection
  let browser = 'Unknown'
  if (ua.includes('Chrome') && !ua.includes('Edg')) {
    browser = 'Chrome'
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    browser = 'Safari'
  } else if (ua.includes('Firefox')) {
    browser = 'Firefox'
  } else if (ua.includes('Edg')) {
    browser = 'Edge'
  } else if (ua.includes('Opera') || ua.includes('OPR')) {
    browser = 'Opera'
  } else if (ua.includes('MSIE') || ua.includes('Trident')) {
    browser = 'Internet Explorer'
  }

  // OS detection
  let os = 'Unknown'
  if (ua.includes('Windows')) {
    os = 'Windows'
  } else if (ua.includes('Mac OS X')) {
    os = 'macOS'
  } else if (ua.includes('Linux')) {
    os = 'Linux'
  } else if (ua.includes('Android')) {
    os = 'Android'
  } else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) {
    os = 'iOS'
  }

  return { browser, os }
}

// Determine device type from screen width
export function getDeviceType(screenWidth: number): string {
  if (!screenWidth) return 'unknown'
  if (screenWidth < 768) return 'mobile'
  if (screenWidth < 1024) return 'tablet'
  return 'desktop'
}

// Sanitize event data for non-consented visitors
export function sanitizeEventData(event: {
  type: string
  data: Record<string, any>
}): Record<string, any> {
  const sanitized: Record<string, any> = {}

  // For click events, remove text and href
  if (event.type === 'click') {
    const { text, href, ...rest } = event.data || {}
    return { ...rest, textLength: text?.length || 0 }
  }

  // For form events, remove field identifiers
  if (event.type.startsWith('form_') || event.type.startsWith('field_')) {
    const { formId, fieldId, ...rest } = event.data || {}
    return { ...rest, hasFormId: !!formId, hasFieldId: !!fieldId }
  }

  // For copy events, remove content preview
  if (event.type === 'copy') {
    const { preview, ...rest } = event.data || {}
    return { ...rest, hadContent: !!preview }
  }

  // For attribution, keep UTMs but remove referrer
  if (event.type === 'attribution') {
    const { referrer, ...rest } = event.data || {}
    return { ...rest, hadReferrer: !!referrer }
  }

  // Default: pass through non-sensitive data
  return event.data || sanitized
}

// Event types that are always allowed (essential)
export const ESSENTIAL_EVENT_TYPES = [
  'page_view',
  'web_vital',
  'performance',
  'js_error',
  'promise_rejection',
]

// Event types that require consent
export const CONSENT_REQUIRED_EVENT_TYPES = [
  'click',
  'rage_click',
  'dead_click',
  'scroll_depth',
  'rage_scroll',
  'form_view',
  'form_start',
  'field_interaction',
  'field_hesitation',
  'form_complete',
  'form_abandon',
  'exit_intent',
  'tab_visibility',
  'idle_start',
  'idle_end',
  'engagement_summary',
  'copy',
  'paste',
  'attribution',
  'identify',
  'custom',
]

// Check if event type requires consent
export function requiresConsent(eventType: string): boolean {
  return CONSENT_REQUIRED_EVENT_TYPES.includes(eventType)
}

// Generate API key for a site
export function generateApiKey(): string {
  const bytes = new Uint8Array(24)
  crypto.getRandomValues(bytes)
  const hex = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return `cro9_${hex}`
}

// Generate embed code snippet
export function generateEmbedCode(
  apiKey: string,
  options: {
    consentMode?: 'gdpr' | 'ccpa' | 'essential' | 'disabled'
    endpoint?: string
    debug?: boolean
  } = {}
): string {
  const {
    consentMode = 'gdpr',
    endpoint = 'https://cro9.com/api/track/collect',
    debug = false,
  } = options

  const attrs = [
    `src="https://cro9.com/cro9-tracker.min.js"`,
    `data-api-key="${apiKey}"`,
    `data-endpoint="${endpoint}"`,
    `data-consent-mode="${consentMode}"`,
  ]

  if (debug) {
    attrs.push(`data-debug="true"`)
  }

  return `<script ${attrs.join('\n        ')}></script>`
}

// Calculate engagement score (0-100)
export function calculateEngagementScore(metrics: {
  scrollDepth: number
  timeOnPage: number // seconds
  pageviews: number
  formInteractions: number
  rageClicks: number
}): number {
  let score = 0

  // Scroll depth (max 25 points)
  score += Math.min(metrics.scrollDepth * 0.25, 25)

  // Time on page (max 25 points, capped at 5 minutes)
  score += Math.min((metrics.timeOnPage / 300) * 25, 25)

  // Multiple pageviews (max 20 points)
  score += Math.min((metrics.pageviews - 1) * 5, 20)

  // Form interactions (max 30 points)
  score += Math.min(metrics.formInteractions * 10, 30)

  // Penalty for rage clicks
  score -= Math.min(metrics.rageClicks * 5, 20)

  return Math.max(0, Math.min(100, Math.round(score)))
}

// Calculate intent score for a visitor
export function calculateIntentScore(signals: {
  viewedPricing: boolean
  viewedCheckout: boolean
  formStarted: boolean
  formCompleted: boolean
  scrolledDeep: boolean
  timeOnSite: number // seconds
  returnVisitor: boolean
}): number {
  let score = 0

  // Pricing page view (high intent signal)
  if (signals.viewedPricing) score += 25

  // Checkout page view (very high intent)
  if (signals.viewedCheckout) score += 35

  // Form started
  if (signals.formStarted) score += 15

  // Form completed
  if (signals.formCompleted) score += 30

  // Deep scroll (>75%)
  if (signals.scrolledDeep) score += 10

  // Time on site (>2 min = +10, >5 min = +15)
  if (signals.timeOnSite > 300) score += 15
  else if (signals.timeOnSite > 120) score += 10

  // Return visitor
  if (signals.returnVisitor) score += 15

  return Math.min(100, score)
}
