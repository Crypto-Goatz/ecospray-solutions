// ============================================================
// EcoSpray Solutions - Event Collection API
// ============================================================
// Receives batched events from the CRO9 tracker script.
// Adapted to write to Google Sheets (0n_events tab) instead of Supabase.
// Privacy-compliant with consent-aware processing.
// ============================================================

import { NextRequest, NextResponse } from 'next/server'
import { appendSheetRow } from '@/lib/0n-layers/google-backend/sheets'

// Types
interface TrackPayload {
  apiKey: string
  visitorId: string
  sessionId: string
  consentStatus: 'granted' | 'denied' | 'essential' | 'pending'
  events: TrackEvent[]
  context: VisitorContext
}

interface VisitorContext {
  userAgent: string
  language: string
  referrer: string
  screenWidth: number
  screenHeight: number
  viewportWidth: number
  viewportHeight: number
  devicePixelRatio: number
  timezone: string
}

interface TrackEvent {
  type: string
  timestamp: number
  url: string
  pageTitle: string
  data: Record<string, unknown>
}

// Rate limiting (simple in-memory, use Redis in production)
const rateLimits = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 1000 // requests per minute
const RATE_WINDOW = 60000 // 1 minute

function checkRateLimit(apiKey: string): boolean {
  const now = Date.now()
  const limit = rateLimits.get(apiKey)

  if (!limit || now > limit.resetAt) {
    rateLimits.set(apiKey, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }

  if (limit.count >= RATE_LIMIT) {
    return false
  }

  limit.count++
  return true
}

// Clean up stale rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, val] of rateLimits.entries()) {
    if (now > val.resetAt) {
      rateLimits.delete(key)
    }
  }
}, 300000)

/**
 * POST /api/track/collect
 * Receives batched events and appends them to the 0n_events sheet tab.
 */
export async function POST(req: NextRequest) {
  // Add CORS headers to response
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-CRO9-Version',
  }

  try {
    // Parse body
    let payload: TrackPayload
    try {
      payload = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON' },
        { status: 400, headers: corsHeaders }
      )
    }

    const { apiKey, visitorId, sessionId, consentStatus, events, context } = payload

    // Validate required fields
    if (!apiKey || !visitorId || !sessionId || !events || !Array.isArray(events)) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      )
    }

    // Validate API key against env
    const expectedKey = process.env.NEXT_PUBLIC_CRO9_KEY
    if (!expectedKey || apiKey !== expectedKey) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401, headers: corsHeaders }
      )
    }

    // Rate limit check
    if (!checkRateLimit(apiKey)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429, headers: corsHeaders }
      )
    }

    // Validate event count
    if (events.length > 100) {
      return NextResponse.json(
        { error: 'Maximum 100 events per request' },
        { status: 400, headers: corsHeaders }
      )
    }

    // Process each event and append to 0n_events sheet
    let processed = 0
    for (const event of events) {
      // Build the row matching the 0n_events schema:
      // columns: ['id', 'timestamp', 'layer', 'event_type', 'payload', 'agent_id']
      const eventRow: Record<string, string> = {
        id: `${visitorId}-${event.timestamp}-${processed}`,
        timestamp: new Date(event.timestamp).toISOString(),
        layer: 'compliance',
        event_type: event.type,
        payload: JSON.stringify({
          visitorId,
          sessionId,
          consentStatus,
          url: event.url,
          pageTitle: event.pageTitle,
          data: consentStatus === 'granted' ? event.data : sanitizeEventData(event),
          context: consentStatus === 'granted'
            ? {
                referrer: context.referrer,
                language: context.language,
                timezone: context.timezone,
                screenWidth: context.screenWidth,
                screenHeight: context.screenHeight,
                viewportWidth: context.viewportWidth,
                viewportHeight: context.viewportHeight,
              }
            : {
                referrer: context.referrer,
                language: context.language,
              },
        }),
        agent_id: 'cro9-tracker',
      }

      try {
        await appendSheetRow('0n_events', eventRow)
        processed++
      } catch (err) {
        console.error('[Track/Collect] Failed to append event:', err)
        // Continue processing remaining events
      }
    }

    return NextResponse.json(
      { success: true, processed },
      { headers: corsHeaders }
    )
  } catch (error) {
    console.error('[Track/Collect] Error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500, headers: corsHeaders }
    )
  }
}

/**
 * Sanitize event data when consent is not fully granted.
 * Strip potentially identifying information while keeping analytics-useful data.
 */
function sanitizeEventData(event: TrackEvent): Record<string, unknown> {
  const safe: Record<string, unknown> = {
    type: event.type,
  }

  // Keep non-identifying analytics data
  if (event.data) {
    if (event.data.depth !== undefined) safe.depth = event.data.depth
    if (event.data.duration !== undefined) safe.duration = event.data.duration
    if (event.data.metric !== undefined) safe.metric = event.data.metric
    if (event.data.value !== undefined) safe.value = event.data.value
    if (event.data.formId !== undefined) safe.formId = event.data.formId
  }

  return safe
}

/**
 * OPTIONS /api/track/collect
 * CORS preflight handler.
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-CRO9-Version',
      'Access-Control-Max-Age': '86400',
    },
  })
}
