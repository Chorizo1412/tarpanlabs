'use client'

import { useContactForm } from '@/lib/hooks/useContactForm'
import { cn } from '@/lib/utils/cn'

const INDUSTRIES = [
  'Comercio / Retail',
  'Gastronomía / Restaurantes',
  'Servicios profesionales',
  'Salud / Bienestar',
  'Educación',
  'Logística / Transporte',
  'Manufactura',
  'Tecnología',
  'Otro',
]

const EMPLOYEE_COUNTS = ['1-5', '6-20', '21-50', '+50']

const COUNTRIES = [
  'Argentina', 'México', 'Colombia', 'Chile', 'Uruguay',
  'Perú', 'Ecuador', 'Bolivia', 'Paraguay', 'Venezuela', 'Otro',
]

const inputClass = (hasError: boolean) =>
  cn(
    'w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600',
    hasError ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white',
  )

export const ContactForm = () => {
  const { formData, errors, state, handleChange, handleSubmit } = useContactForm()

  if (state.status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">{state.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Empresa *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="¿Cómo se llama tu empresa?"
            className={inputClass(!!errors.company)}
          />
          {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Rubro</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={inputClass(false)}
          >
            <option value="">Seleccioná tu rubro</option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Empleados</label>
          <select
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className={inputClass(false)}
          >
            <option value="">Cantidad</option>
            {EMPLOYEE_COUNTS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">País *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={inputClass(!!errors.country)}
          >
            <option value="">Tu país</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          ¿Qué proceso consume más tiempo en tu empresa?
        </label>
        <textarea
          name="process"
          value={formData.process}
          onChange={handleChange}
          rows={4}
          placeholder="Contanos en qué perdiste más tiempo esta semana. Por ejemplo: responder WhatsApps manualmente, cargar pedidos en planillas, hacer reportes..."
          className={inputClass(false)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email de trabajo"
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            WhatsApp (opcional)
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+54 9 11 1234-5678"
            className={inputClass(false)}
          />
        </div>
      </div>

      {state.status === 'error' && (
        <p className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === 'loading'}
        className="w-full rounded-lg bg-brand-700 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
      >
        {state.status === 'loading' ? 'Enviando...' : 'Quiero una consulta gratuita'}
      </button>
    </form>
  )
}
