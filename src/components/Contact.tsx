import { MessageCircle, Phone, MapPin, Send } from 'lucide-react'
import { getWhatsAppLink, LOCATION_URL, PHONE_NUMBER, SITE } from '../config/site'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-navy-950">
      <div className="container-px mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Fix Your Earbuds
          </h2>
          <p className="mt-4 text-base text-navy-100/75 sm:text-lg">
            Have a problem with your earbuds? Tell us what&apos;s happening and we&apos;ll guide you
            through the next step.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with us" href={getWhatsAppLink()} external />
            <ContactCard icon={Phone} label="Phone" value={PHONE_NUMBER} href={`tel:${PHONE_NUMBER}`} />
            <ContactCard icon={MapPin} label="Location" value={SITE.city} href={LOCATION_URL} external />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wa-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-wa-600 active:scale-[0.98] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href="#repair-form"
              className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Repair Query
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof MessageCircle
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = (
    <div className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 transition-colors duration-200 hover:bg-white/[0.06]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-navy-100/50">{label}</div>
        <div className="mt-0.5 text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="btn-focus block rounded-xl"
        aria-label={`${label}: ${value}`}
      >
        {content}
      </a>
    )
  }

  return content
}
