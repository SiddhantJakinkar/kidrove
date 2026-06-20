import { useState, type FormEvent, type ChangeEvent, type FocusEvent } from 'react'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { fadeUp } from '../utils/animations'
import { validateForm, hasErrors, type FormData, type FormErrors } from '../utils/validation'
import { workshopDetails } from '../data/workshop'

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const nextFormData = { ...formData, [name]: value }
    setFormData(nextFormData)

    if (touched[name]) {
      const fieldErrors = validateForm(nextFormData)
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validateForm({ ...formData, [name]: value })
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true })
    setSubmitError('')

    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.replace(/\D/g, ''),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '' })
      setTouched({})
      setErrors({})
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit enquiry')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Reserve Your Seat
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Spots are limited for the {workshopDetails.title}. Register now to
              secure your child&apos;s place starting {workshopDetails.startDate}.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `Fee: ${workshopDetails.fee} only`,
                `${workshopDetails.duration} of live online sessions`,
                `For ages ${workshopDetails.ageGroup}`,
                'Certificate upon completion',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {isSuccess ? (
              <div
                role="alert"
                className="rounded-[24px] border border-success/20 bg-success/5 p-8 text-center"
              >
                <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
                <h3 className="mt-4 text-xl font-bold text-text-primary">
                  Enquiry Submitted!
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Thank you for your interest. Our team will contact you shortly
                  with enrollment details.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-xl shadow-primary/5"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-surface'
                      }`}
                      placeholder="Enter student's name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-surface'
                      }`}
                      placeholder="parent@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary">
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-surface'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-500" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {submitError && (
                  <p className="mt-4 text-sm text-red-500" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    'Reserve My Seat'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
