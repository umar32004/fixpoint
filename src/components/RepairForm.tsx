import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, MessageCircle, Send, AlertCircle } from 'lucide-react'
import { brandFormOptions, getModelsForBrand } from '../data/brands'
import { PROBLEM_OPTIONS } from '../data/problems'
import { useRepairSelection } from '../context/RepairSelectionContext'
import { buildRepairWhatsAppMessage, getWhatsAppLink } from '../config/site'
import Reveal from './Reveal'

interface FormState {
  fullName: string
  phone: string
  brand: string
  model: string
  problem: string
  details: string
  contactMethod: 'WhatsApp' | 'Phone Call'
}

const EMPTY_FORM: FormState = {
  fullName: '',
  phone: '',
  brand: '',
  model: '',
  problem: '',
  details: '',
  contactMethod: 'WhatsApp',
}

type FormErrors = Partial<Record<keyof FormState, string>>

function encodeFormData(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

export default function RepairForm() {
  const { selection } = useRepairSelection()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const formTopRef = useRef<HTMLDivElement>(null)

  // Pre-fill from Brands / Common Problems sections
  useEffect(() => {
    if (!selection || Object.keys(selection).length === 0) return
    setForm((prev) => ({
      ...prev,
      brand: selection.brand ?? prev.brand,
      model: selection.model ?? prev.model,
      problem: selection.problem ?? prev.problem,
      details: selection.details
        ? prev.details
          ? `${prev.details}\n${selection.details}`
          : selection.details
        : prev.details,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection])

  const modelOptions = form.brand && form.brand !== 'Other' ? getModelsForBrand(form.brand) : []

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'brand') next.model = ''
      return next
    })
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {}
    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!form.phone.trim()) nextErrors.phone = 'Please enter a phone or WhatsApp number.'
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      nextErrors.phone = 'Please enter a valid phone number.'
    if (!form.brand) nextErrors.brand = 'Please select a brand.'
    if (!form.model.trim()) nextErrors.model = 'Please select or enter a model.'
    if (!form.problem) nextErrors.problem = 'Please select the problem.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) {
      formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setSubmitting(true)
    setSubmitError(false)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'repair-inquiry',
          fullName: form.fullName,
          phone: form.phone,
          brand: form.brand,
          model: form.model,
          problem: form.problem,
          details: form.details,
          contactMethod: form.contactMethod,
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function resetForm() {
    setForm(EMPTY_FORM)
    setSubmitted(false)
    setErrors({})
  }

  const whatsappQuickLink = getWhatsAppLink(
    buildRepairWhatsAppMessage({ brand: form.brand, model: form.model, problem: form.problem }),
  )

  return (
    <section id="repair-form" className="section-py bg-navy-950">
      <div className="container-px mx-auto max-w-4xl" ref={formTopRef}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell Us What&apos;s Wrong
          </h2>
          <p className="mt-4 text-base text-navy-100/75 sm:text-lg">
            Send us your earbud details and we&apos;ll help you with the next step.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-2xl sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                  <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">Request Received</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-100/75">
                  Thank you, {form.fullName || 'friend'}. We&apos;ve received your repair inquiry and will
                  reach out via {form.contactMethod} shortly to discuss the next steps.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappQuickLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-focus inline-flex items-center justify-center gap-2 rounded-lg bg-wa-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-wa-600"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Message us on WhatsApp too
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-focus rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="repair-inquiry"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                {...{ 'netlify-honeypot': 'bot-field' }}
              >
                <input type="hidden" name="form-name" value="repair-inquiry" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                {submitError && (
                  <div
                    role="alert"
                    className="col-span-full flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong submitting your request. Please try again, or contact us directly on
                    WhatsApp.
                  </div>
                )}

                <Field label="Full Name" htmlFor="fullName" error={errors.fullName} required>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={inputClass(!!errors.fullName)}
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Phone / WhatsApp Number" htmlFor="phone" error={errors.phone} required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={inputClass(!!errors.phone)}
                    placeholder="03XX XXXXXXX"
                  />
                </Field>

                <Field label="Brand" htmlFor="brand" error={errors.brand} required>
                  <select
                    id="brand"
                    name="brand"
                    value={form.brand}
                    onChange={(e) => updateField('brand', e.target.value)}
                    aria-invalid={!!errors.brand}
                    aria-describedby={errors.brand ? 'brand-error' : undefined}
                    className={inputClass(!!errors.brand)}
                  >
                    <option value="" disabled>
                      Select brand
                    </option>
                    {brandFormOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Model" htmlFor="model" error={errors.model} required>
                  {form.brand && form.brand !== 'Other' ? (
                    <select
                      id="model"
                      name="model"
                      value={form.model}
                      onChange={(e) => updateField('model', e.target.value)}
                      aria-invalid={!!errors.model}
                      aria-describedby={errors.model ? 'model-error' : undefined}
                      className={inputClass(!!errors.model)}
                    >
                      <option value="" disabled>
                        Select model
                      </option>
                      {modelOptions.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id="model"
                      name="model"
                      type="text"
                      value={form.model}
                      onChange={(e) => updateField('model', e.target.value)}
                      aria-invalid={!!errors.model}
                      aria-describedby={errors.model ? 'model-error' : undefined}
                      className={inputClass(!!errors.model)}
                      placeholder={form.brand ? 'Enter your earbud model' : 'Select a brand first'}
                      disabled={!form.brand}
                    />
                  )}
                </Field>

                <Field label="Problem" htmlFor="problem" error={errors.problem} required>
                  <select
                    id="problem"
                    name="problem"
                    value={form.problem}
                    onChange={(e) => updateField('problem', e.target.value)}
                    aria-invalid={!!errors.problem}
                    aria-describedby={errors.problem ? 'problem-error' : undefined}
                    className={inputClass(!!errors.problem)}
                  >
                    <option value="" disabled>
                      Select problem
                    </option>
                    {PROBLEM_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Contact Method" htmlFor="contactMethod">
                  <div className="flex gap-3 pt-1">
                    {(['WhatsApp', 'Phone Call'] as const).map((option) => (
                      <label
                        key={option}
                        className={`btn-focus flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                          form.contactMethod === option
                            ? 'border-accent-500 bg-accent-500/15 text-white'
                            : 'border-white/15 bg-white/[0.03] text-navy-100/75 hover:bg-white/5'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={option}
                          checked={form.contactMethod === option}
                          onChange={() => updateField('contactMethod', option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </Field>

                <Field
                  label="Additional Details"
                  htmlFor="details"
                  className="sm:col-span-2"
                >
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={(e) => updateField('details', e.target.value)}
                    className={inputClass(false)}
                    placeholder="Tell us anything else that might help — when the issue started, what you've already tried, etc."
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {submitting ? 'Submitting…' : 'Submit Repair Request'}
                  </button>

                  <p className="mt-4 text-sm text-navy-100/60">
                    Prefer to chat directly?{' '}
                    <a
                      href={whatsappQuickLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-wa-500 underline-offset-2 hover:underline"
                    >
                      Send this on WhatsApp instead
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-navy-100/35 transition-colors duration-150 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${
    hasError ? 'border-red-400/60' : 'border-white/15'
  }`
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className = '',
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-100/85">
        {label}
        {required && (
          <span className="ml-0.5 text-accent-400" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 flex items-center gap-1 text-xs text-red-300" role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
