import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'
export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1E3A5F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div style={{ color: '#38BDF8', fontSize: 18, marginBottom: 24 }}>
          AGENCIA DE INTELIGENCIA ARTIFICIAL · LATAM
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            color: '#94A3B8',
            fontSize: 26,
            marginTop: 24,
            textAlign: 'center',
          }}
        >
          Chatbots · Automatización · Desarrollo Web · SEO
        </div>
      </div>
    ),
    { ...size },
  )
}
