import { NextRequest, NextResponse } from 'next/server'
import { appendSheetRow } from '@/lib/0n-layers/google-backend/sheets'
import { getEmailBrandingForCRM } from '@/lib/email-branding'

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * POST /api/contact
 * Handles contact form submissions from the /contact page.
 *
 * Body: {
 *   name: string,
 *   email: string,
 *   phone?: string,
 *   propertyType?: string,
 *   squareFootage?: string,
 *   message?: string
 * }
 *
 * - Validates required fields (name, email)
 * - Appends a row to the "contacts" sheet tab
 * - Optionally syncs to CRM if CRM_API_KEY is configured
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, propertyType, squareFootage, message } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return json({ error: 'Name is required' }, 400)
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return json({ error: 'A valid email is required' }, 400)
    }

    // Parse name into first/last
    const trimmedName = name.trim()
    const nameParts = trimmedName.split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Build tags from property type and source
    const tags: string[] = ['lead', 'ecospray-website']
    if (propertyType) {
      tags.push(propertyType)
    }

    // Append to contacts sheet
    const contactRow: Record<string, string> = {
      id: `contact-${Date.now()}`,
      first_name: firstName,
      last_name: lastName,
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      company: '',
      tags: tags.join(','),
      source: 'contact_form',
      created_at: new Date().toISOString(),
    }

    await appendSheetRow('contacts', contactRow)

    // Also log as an activity
    try {
      const activityRow: Record<string, string> = {
        id: `activity-${Date.now()}`,
        contact_id: contactRow.id,
        type: 'form_submission',
        description: [
          `Quote request from ${trimmedName}`,
          propertyType ? `Property: ${propertyType}` : '',
          squareFootage ? `Size: ${squareFootage} sq ft` : '',
          message ? `Message: ${message.substring(0, 200)}` : '',
        ]
          .filter(Boolean)
          .join(' | '),
        created_at: new Date().toISOString(),
      }
      await appendSheetRow('activities', activityRow)
    } catch (e) {
      console.error('[Contact] Failed to log activity:', e)
    }

    // If CRM configured, sync contact
    if (process.env.CRM_API_KEY) {
      try {
        const { upsertContact } = await import('@/lib/0n-layers/crm/client')
        const branding = getEmailBrandingForCRM()
        await upsertContact({
          firstName,
          lastName,
          email: email.trim().toLowerCase(),
          phone: (phone || '').trim(),
          tags: ['ecospray-website', 'contact-form', propertyType].filter(Boolean) as string[],
          customFields: branding,
        })
      } catch (e) {
        console.error('CRM sync failed:', e)
        // Non-fatal: contact is already saved to Sheets
      }
    }

    // Log as 0n event for the orchestrator
    try {
      await appendSheetRow('0n_events', {
        id: `event-contact-${Date.now()}`,
        timestamp: new Date().toISOString(),
        layer: 'crm',
        event_type: 'contact_form_submission',
        payload: JSON.stringify({
          contactId: contactRow.id,
          name: trimmedName,
          email: email.trim().toLowerCase(),
          propertyType: propertyType || 'not_specified',
          squareFootage: squareFootage || '',
          source: 'contact_page',
        }),
        agent_id: 'system',
      })
    } catch (e) {
      console.error('[Contact] Failed to log 0n event:', e)
    }

    return json({
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[Contact] Error:', message)
    return json(
      {
        error: 'Something went wrong. Please try again or call us directly.',
      },
      500
    )
  }
}
