import { describe, it, expect } from 'vitest'
import { validateContactForm } from '../useContactForm'

describe('validateContactForm', () => {
  const validData = {
    name: 'Juan García',
    company: 'Mi Empresa',
    industry: 'comercio',
    employeeCount: '6-20',
    country: 'Argentina',
    process: 'Atención al cliente manual',
    email: 'juan@empresa.com',
    whatsapp: '',
  }

  it('returns no errors for valid data', () => {
    expect(validateContactForm(validData)).toEqual({})
  })

  it('requires name', () => {
    const errors = validateContactForm({ ...validData, name: '' })
    expect(errors.name).toBeDefined()
  })

  it('requires valid email', () => {
    const errors = validateContactForm({ ...validData, email: 'not-an-email' })
    expect(errors.email).toBeDefined()
  })

  it('requires company', () => {
    const errors = validateContactForm({ ...validData, company: '' })
    expect(errors.company).toBeDefined()
  })

  it('requires country', () => {
    const errors = validateContactForm({ ...validData, country: '' })
    expect(errors.country).toBeDefined()
  })

  it('allows empty whatsapp', () => {
    const errors = validateContactForm({ ...validData, whatsapp: '' })
    expect(errors.whatsapp).toBeUndefined()
  })
})
