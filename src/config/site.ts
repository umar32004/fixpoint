/**
 * Central business configuration.
 * Replace these placeholder values with FixPoint's real details before going live.
 */

export const WHATSAPP_NUMBER = '923336461812' // Format: 92XXXXXXXXXX (no +, no spaces)
export const PHONE_NUMBER = '03XXXXXXXXX' // Replace with real phone number

export const SITE = {
  name: 'FixPoint',
  tagline: 'Your Earbuds. Fixed Right.',
  city: 'Karachi, Pakistan',
  description:
    'FixPoint provides professional earbuds and wireless earphones repair services in Karachi. Repair services for ZERO, Audionic, Tech Hunk and more.',
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi FixPoint, I want to get my earbuds repaired. Brand: __ Model: __ Problem: __"

/**
 * Builds a wa.me link with a pre-filled message.
 */
export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function buildRepairWhatsAppMessage(opts: {
  brand?: string
  model?: string
  problem?: string
}): string {
  const brand = opts.brand?.trim() || '__'
  const model = opts.model?.trim() || '__'
  const problem = opts.problem?.trim() || '__'
  return `Hi FixPoint, I want to get my earbuds repaired. Brand: ${brand} Model: ${model} Problem: ${problem}`
}
