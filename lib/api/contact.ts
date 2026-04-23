import type { ContactFormData } from '@/lib/types'

type SubmitResult = { ok: boolean }

export const submitContact = async (data: ContactFormData): Promise<SubmitResult> => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return { ok: res.ok }
  } catch {
    return { ok: false }
  }
}
