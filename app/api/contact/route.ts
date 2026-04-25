import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { ContactFormData } from '@/lib/types'
import { appendLead } from '@/lib/api/sheets'
import { sendLeadNotification } from '@/lib/api/email'

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as ContactFormData

  if (!body.name || !body.email || !body.company) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await appendLead(body)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[contact/route] Sheets error:', message)
    return NextResponse.json({ error: 'Storage error' }, { status: 500 })
  }

  try {
    await sendLeadNotification(body)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[contact/route] Email error:', message)
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
