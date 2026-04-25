'use client'

import { useContactForm } from '@/lib/hooks/useContactForm'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const INDUSTRIES = [
  'Comercio y Retail',
  'Gastronomía',
  'Servicios Profesionales',
  'Salud',
  'Tecnología',
  'Inmobiliaria',
  'Educación',
  'Otro',
]

const TEAM_SIZES = ['1–5', '6–20', '21–50', 'Más de 50']

const fieldClass = (hasError: boolean) =>
  cn(
    'w-full rounded-[--radius] border bg-bg-2 px-4 py-3 text-sm text-fg placeholder:text-fg-dim',
    'transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30',
    hasError
      ? 'border-danger-dim focus:ring-danger/20'
      : 'border-line focus:border-accent',
  )

export const ContactForm = () => {
  const { formData, errors, state, handleChange, handleSubmit } = useContactForm()

  if (state.status === 'success') {
    return (
      <div className="border border-success-dim bg-success-subtle rounded-[--radius-lg] p-8 text-center">
        <p className="text-lg font-medium text-success">{state.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={fieldClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            Empresa *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            className={fieldClass(!!errors.company)}
          />
          {errors.company && <p className="mt-1 text-xs text-danger">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            Rubro / Industria *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={fieldClass(!!errors.industry)}
          >
            <option value="">Seleccioná un rubro</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          {errors.industry && <p className="mt-1 text-xs text-danger">{errors.industry}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            Tamaño del equipo *
          </label>
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className={fieldClass(!!errors.teamSize)}
          >
            <option value="">Seleccioná una opción</option>
            {TEAM_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.teamSize && <p className="mt-1 text-xs text-danger">{errors.teamSize}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-fg-muted">
          ¿Qué proceso o área de tu empresa consume más tiempo o recursos? *
        </label>
        <textarea
          name="process"
          value={formData.process}
          onChange={handleChange}
          rows={4}
          placeholder="Contanos qué proceso querés automatizar o mejorar. Qué hace tu equipo manualmente hoy, qué resultado esperás."
          className={fieldClass(!!errors.process)}
        />
        {errors.process && <p className="mt-1 text-xs text-danger">{errors.process}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            Email de contacto *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hola@empresa.com"
            className={fieldClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg-muted">
            WhatsApp (opcional)
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+54 9 11 ..."
            className={fieldClass(false)}
          />
        </div>
      </div>

      {state.status === 'error' && (
        <p className="rounded-[--radius] border border-danger-dim bg-danger-subtle p-4 text-sm text-danger">
          {state.message}
        </p>
      )}

      <p className="text-xs text-fg-dim">
        No hacemos seguimiento agresivo. Si no es el momento indicado, no hay problema.
      </p>

      <Button
        type="submit"
        disabled={state.status === 'loading'}
        size="lg"
        className="w-full"
      >
        {state.status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </Button>
    </form>
  )
}
