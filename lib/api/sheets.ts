import { getGoogleAccessToken } from '@/lib/utils/googleAuth'
import type { ContactFormData } from '@/lib/types'

const sheetsAppendUrl = (sheetId: string) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`

export const appendLead = async (data: ContactFormData): Promise<void> => {
  const token = await getGoogleAccessToken(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  )

  const row = [
    new Date().toISOString(),
    data.name,
    data.company,
    data.industry,
    data.employeeCount,
    data.country,
    data.process,
    data.email,
    data.whatsapp ?? '',
  ]

  const res = await fetch(sheetsAppendUrl(process.env.GOOGLE_SHEET_ID!), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [row] }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Sheets API ${res.status}: ${body}`)
  }
}
