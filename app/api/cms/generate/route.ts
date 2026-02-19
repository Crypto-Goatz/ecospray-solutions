import { NextRequest, NextResponse } from 'next/server'
import { generateContent, generateSEO, generateBlogPost, generatePageContent } from '@/lib/gemini'

function json(data: object, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * POST /api/cms/generate
 * AI content generation via Gemini.
 *
 * Body: { type: 'page' | 'blog' | 'seo' | 'freeform', ... }
 *
 * - type: 'page'     => { context, topic, apiKey? }
 * - type: 'blog'     => { context, topic, apiKey? }
 * - type: 'seo'      => { content, apiKey? }
 * - type: 'freeform' => { content, apiKey? }
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const apiKey = process.env.CMS_ADMIN_KEY
  if (apiKey && authHeader !== `Bearer ${apiKey}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  try {
    const { type, context, topic, content, apiKey: clientApiKey } = await req.json()

    switch (type) {
      case 'page': {
        if (!context || !topic) {
          return json({ error: 'context and topic required' }, 400)
        }
        const result = await generatePageContent(topic, context, clientApiKey)
        return json({ result })
      }

      case 'blog': {
        if (!topic || !context) {
          return json({ error: 'topic and context required' }, 400)
        }
        const result = await generateBlogPost(topic, context, clientApiKey)
        return json({ result })
      }

      case 'seo': {
        if (!content) {
          return json({ error: 'content required for SEO generation' }, 400)
        }
        const result = await generateSEO(content, clientApiKey)
        return json({ result })
      }

      case 'freeform': {
        if (!content) {
          return json({ error: 'content (prompt) required' }, 400)
        }
        const result = await generateContent(content, clientApiKey)
        return json({ result })
      }

      default:
        return json({ error: `Unknown type: ${type}. Valid: page, blog, seo, freeform` }, 400)
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return json({ error: message }, 500)
  }
}
