import { Headphones, MessageCircle, MapPin } from 'lucide-react'
import { brands } from '../data/brands'
import { getWhatsAppLink, SITE } from '../config/site'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="FixPoint home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-accent-400">
                <Headphones className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-white">FIXPOINT</span>
            </a>
            <p className="mt-4 text-sm text-navy-100/60">{SITE.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-navy-100/60 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Repair Brands</h3>
            <ul className="mt-4 space-y-2.5">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <a href="#brands" className="text-sm text-navy-100/60 transition-colors hover:text-white">
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-100/60 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-100/60">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {SITE.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-xs text-navy-100/45 sm:flex-row">
          <p>&copy; 2026 FixPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
