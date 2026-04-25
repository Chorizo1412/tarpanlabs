import { describe, it, expect } from 'vitest'
import { validateContactForm } from '../useContactForm'

describe('validateContactForm', () => {
  const validData = {
    name: 'Juan García',
    company: 'Mi Empresa',
    industry: 'Comercio y Retail',
    teamSize: '6–20',
    process: 'Quiero automatizar la atención al cliente.',
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

  it('requires industry', () => {
    const errors = validateContactForm({ ...validData, industry: '' })
    expect(errors.industry).toBeDefined()
  })

  it('requires teamSize', () => {
    const errors = validateContactForm({ ...validData, teamSize: '' })
    expect(errors.teamSize).toBeDefined()
  })

  it('requires process', () => {
    const errors = validateContactForm({ ...validData, process: '' })
    expect(errors.process).toBeDefined()
  })

  it('allows empty whatsapp', () => {
    const errors = validateContactForm({ ...validData, whatsapp: '' })
    expect(errors.whatsapp).toBeUndefined()
  })
})
