export interface FormData {
  name: string
  email: string
  phone: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[6-9]\d{9}$/

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  const phoneTrimmed = data.phone.trim()
  const phoneDigits = phoneTrimmed.replace(/\D/g, '')

  if (!phoneTrimmed || !phoneDigits) {
    errors.phone = 'Phone number is required'
  } else if (!PHONE_REGEX.test(phoneDigits)) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number'
  }

  return errors
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0
}
