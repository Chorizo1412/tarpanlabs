import { createClient } from '@supabase/supabase-js'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { ContactFormData } from '@/lib/types'

const getSupabase = () =>
  createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!)

export const POST = async (req: NextRequest) => {
  const supabase = getSupabase()
  const body = (await req.json()) as ContactFormData

  if (!body.name || !body.email || !body.company) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase.from('leads').insert({
    name: body.name,
    company: body.company,
    industry: body.industry,
    employee_count: body.employeeCount,
    country: body.country,
    process: body.process,
    email: body.email,
    whatsapp: body.whatsapp || null,
  })

  if (error) {
    console.error('[contact/route] Supabase error:', error.message)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
