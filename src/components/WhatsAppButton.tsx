import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FixPoint on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa-500 text-white shadow-card-hover animate-pulse-soft transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 btn-focus"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} aria-hidden="true" />
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 sm:block"
      >
        Chat on WhatsApp
      </span>
    </a>
  )
}
