'use client'

import { useState } from 'react'
import { submitContact } from '@/lib/api/contact'
import type { ContactFormData, ContactFormState } from '@/lib/types'

export const validateContactForm = (
  data: ContactFormData,
): Partial<Record<keyof ContactFormData, string>> => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {}

  if (!data.name.trim()) errors.name = 'El nombre es requerido'
  if (!data.company.trim()) errors.company = 'El nombre de la empresa es requerido'
  if (!data.industry) errors.industry = 'Selecciona un rubro'
  if (!data.teamSize) errors.teamSize = 'Selecciona el tamaño del equipo'
  if (!data.process.trim()) errors.process = 'Cuéntanos qué proceso quieres resolver'
  if (!data.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'El email no es válido'
  }

  return errors
}

const emptyForm: ContactFormData = {
  name: '',
  company: '',
  industry: '',
  teamSize: '',
  process: '',
  email: '',
  whatsapp: '',
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [state, setState] = useState<ContactFormState>({ status: 'idle', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateContactForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setState({ status: 'loading', message: '' })
    const result = await submitContact(formData)

    if (result.ok) {
      setState({
        status: 'success',
        message: 'Recibimos tu consulta. Te respondemos en menos de 48 horas.',
      })
      setFormData(emptyForm)
    } else {
      setState({
        status: 'error',
        message: 'Hubo un error al enviar. Escribinos a hola@tarpanlabs.com',
      })
    }
  }

  return { formData, errors, state, handleChange, handleSubmit }
}
