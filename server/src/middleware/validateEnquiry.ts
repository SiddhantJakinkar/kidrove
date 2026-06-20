import { Request, Response, NextFunction } from 'express'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[6-9]\d{9}$/

export interface EnquiryBody {
  name?: string
  email?: string
  phone?: string
}

export function validateEnquiry(req: Request, res: Response, next: NextFunction): void {
  const { name, email, phone } = req.body as EnquiryBody
  const errors: string[] = []

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push('Name is required')
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.push('Email is required')
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push('Invalid email format')
  }

  const phoneTrimmed = phone && typeof phone === 'string' ? phone.trim() : ''
  const phoneDigits = phoneTrimmed.replace(/\D/g, '')

  if (!phoneTrimmed || !phoneDigits) {
    errors.push('Phone is required')
  } else if (!PHONE_REGEX.test(phoneDigits)) {
    errors.push('Phone must be a valid 10-digit Indian number')
  }

  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    })
    return
  }

  req.body = {
    name: name!.trim(),
    email: email!.trim().toLowerCase(),
    phone: phoneDigits,
  }

  next()
}
