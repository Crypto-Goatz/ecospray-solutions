import { NextRequest, NextResponse } from 'next/server'

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * GET /api/admin/stats
 * Returns aggregated dashboard stats from Google Sheets.
 * Falls back to empty data when Sheets is not configured.
 */
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  try {
    const isConfigured = !!(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY && process.env.GOOGLE_SHEET_ID
    )

    if (!isConfigured) {
      return json({
        leads: { total: 0, thisWeek: 0, thisMonth: 0, recent: [] },
        events: { total: 0, pageViews: 0, formSubmissions: 0, uniqueVisitors: 0 },
        topPages: [],
        recentActivity: [],
        configured: false,
      })
    }

    const { getSheetData } = await import(
      '@/lib/0n-layers/google-backend/sheets'
    )

    // Fetch contacts and events in parallel
    const [contacts, events] = await Promise.all([
      getSheetData('contacts').catch(() => []),
      getSheetData('0n_events' as any).catch(() => []),
    ])

    // Process contacts
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    const thisWeek = contacts.filter((c: any) => {
      const d = new Date(c.created_at || '')
      return d >= weekAgo
    }).length

    const thisMonth = contacts.filter((c: any) => {
      const d = new Date(c.created_at || '')
      return d >= monthAgo
    }).length

    const recentLeads = contacts
      .sort((a: any, b: any) => {
        return (
          new Date(b.created_at || 0).getTime() -
          new Date(a.created_at || 0).getTime()
        )
      })
      .slice(0, 10)

    // Process events
    const pageViews = events.filter(
      (e: any) => e.event_type === 'page_view'
    ).length
    const formSubmissions = events.filter(
      (e: any) => e.event_type === 'contact_form_submission' || e.event_type === 'form_submit'
    ).length

    // Count unique visitors from event payloads
    const visitorIds = new Set<string>()
    for (const e of events) {
      try {
        const payload = JSON.parse(e.payload || '{}')
        if (payload.visitorId) visitorIds.add(payload.visitorId)
      } catch {
        // skip malformed payloads
      }
    }

    // Top pages from page_view events
    const pageCounts: Record<string, number> = {}
    for (const e of events) {
      if (e.event_type === 'page_view') {
        try {
          const payload = JSON.parse(e.payload || '{}')
          const url = payload.url || ''
          const path = url.replace(/https?:\/\/[^/]+/, '') || '/'
          pageCounts[path] = (pageCounts[path] || 0) + 1
        } catch {
          // skip
        }
      }
    }
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([path, count]) => ({ path, count }))

    // Recent activity (last 20 events)
    const recentActivity = events
      .sort((a: any, b: any) => {
        return (
          new Date(b.timestamp || 0).getTime() -
          new Date(a.timestamp || 0).getTime()
        )
      })
      .slice(0, 20)
      .map((e: any) => ({
        id: e.id,
        type: e.event_type,
        layer: e.layer,
        timestamp: e.timestamp,
        agent: e.agent_id,
      }))

    return json({
      leads: {
        total: contacts.length,
        thisWeek,
        thisMonth,
        recent: recentLeads,
      },
      events: {
        total: events.length,
        pageViews,
        formSubmissions,
        uniqueVisitors: visitorIds.size,
      },
      topPages,
      recentActivity,
      configured: true,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}
