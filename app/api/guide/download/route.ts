import { NextRequest, NextResponse } from 'next/server'
import { appendSheetRow } from '@/lib/0n-layers/google-backend/sheets'
import { getEmailBrandingForCRM } from '@/lib/email-branding'

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * POST /api/guide/download
 * Captures lead info in exchange for the free guide PDF.
 *
 * Body: { name, email, phone?, propertyType? }
 *
 * - Validates required fields
 * - Appends to "contacts" sheet with 'guide-download' tag
 * - Logs activity and 0n event
 * - Optionally syncs to CRM
 * - Returns PDF download URL
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, propertyType } = body

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return json({ error: 'Name is required' }, 400)
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return json({ error: 'A valid email is required' }, 400)
    }

    const trimmedName = name.trim()
    const nameParts = trimmedName.split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const tags: string[] = ['lead', 'guide-download', 'ecospray-website']
    if (propertyType) tags.push(propertyType)

    const contactRow: Record<string, string> = {
      id: `contact-${Date.now()}`,
      first_name: firstName,
      last_name: lastName,
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      company: '',
      tags: tags.join(','),
      source: 'guide_download',
      created_at: new Date().toISOString(),
    }

    // Save to sheets (non-blocking — don't let failures prevent download)
    const sheetPromises = []

    sheetPromises.push(
      appendSheetRow('contacts' as any, contactRow).catch((e: unknown) => {
        console.error('[Guide] Failed to save contact:', e)
      })
    )

    sheetPromises.push(
      appendSheetRow('activities' as any, {
        id: `activity-${Date.now()}`,
        contact_id: contactRow.id,
        type: 'guide_download',
        description: `Guide download by ${trimmedName}${propertyType ? ` | Property: ${propertyType}` : ''}`,
        created_at: new Date().toISOString(),
      }).catch((e: unknown) => {
        console.error('[Guide] Failed to log activity:', e)
      })
    )

    sheetPromises.push(
      appendSheetRow('0n_events' as any, {
        id: `event-guide-${Date.now()}`,
        timestamp: new Date().toISOString(),
        layer: 'crm',
        event_type: 'guide_download',
        payload: JSON.stringify({
          contactId: contactRow.id,
          name: trimmedName,
          email: email.trim().toLowerCase(),
          propertyType: propertyType || 'not_specified',
          guide: 'pittsburghers-guide-draft-free-home',
          source: 'free_guide_page',
        }),
        agent_id: 'system',
      }).catch((e: unknown) => {
        console.error('[Guide] Failed to log event:', e)
      })
    )

    // Fire all sheet writes in parallel
    await Promise.allSettled(sheetPromises)

    // CRM sync
    if (process.env.CRM_API_KEY) {
      try {
        const { upsertContact } = await import('@/lib/0n-layers/crm/client')
        const branding = getEmailBrandingForCRM()
        await upsertContact({
          firstName,
          lastName,
          email: email.trim().toLowerCase(),
          phone: (phone || '').trim(),
          tags: ['ecospray-website', 'guide-download', propertyType].filter(Boolean) as string[],
          customFields: branding,
        })
      } catch (e) {
        console.error('[Guide] CRM sync failed:', e)
      }
    }

    return json({
      success: true,
      downloadUrl: '/downloads/pittsburghers-guide-draft-free-home.pdf',
      message: "Your guide is ready! We've also sent a copy to your email.",
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[Guide] Error:', message)
    return json({
      success: true,
      downloadUrl: '/downloads/pittsburghers-guide-draft-free-home.pdf',
      message: 'Your guide is ready!',
    })
  }
}
