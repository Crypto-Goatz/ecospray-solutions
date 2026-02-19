import { NextRequest, NextResponse } from 'next/server'
import {
  getSheetData,
  updateSheetRow,
  appendSheetRow,
  deleteSheetRow,
  upsertSiteConfigKey,
} from '@/lib/0n-layers/google-backend/sheets'
import type { SheetName } from '@/lib/0n-layers/core/schema'

const VALID_SHEETS: SheetName[] = [
  'pages',
  'blog_posts',
  'navigation',
  'site_config',
  'media_log',
  'contacts',
  'leads',
  'pipeline',
  'activities',
  'tags',
  // EcoSpray-specific tabs
  'services',
  'testimonials',
  'stats',
]

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * GET /api/cms/content?sheet=pages
 * Returns all rows from the specified sheet tab.
 */
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  const sheet = req.nextUrl.searchParams.get('sheet') as SheetName | null
  if (!sheet || !VALID_SHEETS.includes(sheet)) {
    return json({ error: `Invalid sheet. Valid: ${VALID_SHEETS.join(', ')}` }, 400)
  }

  try {
    const data = await getSheetData(sheet)
    return json({ data })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}

/**
 * POST /api/cms/content
 * Body: { sheet: string, data: Record<string, string> }
 * Appends a new row to the specified sheet tab.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  const { sheet, data } = await req.json()
  if (!sheet || !VALID_SHEETS.includes(sheet)) {
    return json({ error: 'Invalid sheet' }, 400)
  }

  try {
    if (sheet === 'site_config' && data.key) {
      await upsertSiteConfigKey(data.key, data.value || '')
    } else {
      await appendSheetRow(sheet, data)
    }
    return json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}

/**
 * PUT /api/cms/content
 * Body: { sheet: string, rowIndex: number, data: Record<string, string> }
 * Updates an existing row in the specified sheet tab.
 */
export async function PUT(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  const { sheet, rowIndex, data } = await req.json()
  if (!sheet || !VALID_SHEETS.includes(sheet)) {
    return json({ error: 'Invalid sheet' }, 400)
  }
  if (typeof rowIndex !== 'number') {
    return json({ error: 'rowIndex required' }, 400)
  }

  try {
    await updateSheetRow(sheet, rowIndex, data)
    return json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}

/**
 * DELETE /api/cms/content?sheet=pages&rowIndex=0
 * Deletes a row from the specified sheet tab.
 */
export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  const sheet = req.nextUrl.searchParams.get('sheet') as SheetName | null
  const rowIndex = parseInt(req.nextUrl.searchParams.get('rowIndex') || '', 10)

  if (!sheet || !VALID_SHEETS.includes(sheet)) {
    return json({ error: 'Invalid sheet' }, 400)
  }
  if (isNaN(rowIndex)) {
    return json({ error: 'rowIndex required' }, 400)
  }

  try {
    await deleteSheetRow(sheet, rowIndex)
    return json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}
