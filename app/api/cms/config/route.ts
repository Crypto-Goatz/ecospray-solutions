import { NextRequest, NextResponse } from 'next/server'
import { getSiteConfig, upsertSiteConfigKey } from '@/lib/0n-layers/google-backend/sheets'

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * GET /api/cms/config
 * Returns all key-value pairs from the site_config sheet tab.
 */
export async function GET(req: NextRequest) {
  // Simple API key auth for admin routes
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  try {
    const config = await getSiteConfig()
    return json({ config })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}

/**
 * PUT /api/cms/config
 * Body: { key: string, value: string } or { updates: { key: value, ... } }
 */
export async function PUT(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  try {
    const body = await req.json()

    if (body.updates && typeof body.updates === 'object') {
      for (const [key, value] of Object.entries(body.updates)) {
        await upsertSiteConfigKey(key, String(value))
      }
      return json({ success: true, updated: Object.keys(body.updates).length })
    }

    if (body.key) {
      await upsertSiteConfigKey(body.key, body.value || '')
      return json({ success: true })
    }

    return json({ error: 'Provide { key, value } or { updates: { ... } }' }, 400)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}
