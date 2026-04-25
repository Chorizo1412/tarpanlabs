import type { ContactFormData } from '@/lib/types'

const RESEND_API = 'https://api.resend.com/emails'
const TO = 'tarpanlabs.battle472@8alias.com'
const FROM = 'onboarding@resend.dev'

export const sendLeadNotification = async (data: ContactFormData): Promise<void> => {
  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      subject: `Nuevo lead: ${data.name} — ${data.company}`,
      html: `
        <h2>Nuevo contacto desde tarpanlabs.vercel.app</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Nombre</strong></td><td>${data.name}</td></tr>
          <tr><td><strong>Empresa</strong></td><td>${data.company}</td></tr>
          <tr><td><strong>Industria</strong></td><td>${data.industry}</td></tr>
          <tr><td><strong>Equipo</strong></td><td>${data.teamSize}</td></tr>
          <tr><td><strong>Proceso</strong></td><td>${data.process}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td><strong>WhatsApp</strong></td><td>${data.whatsapp || '—'}</td></tr>
        </table>
      `,
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Resend API ${res.status}: ${body}`)
  }
}
