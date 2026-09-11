import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../config/site'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'Warranty', href: '#warranty' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why FixPoint', href: '#why-fixpoint' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-soft backdrop-blur-md'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`container-px mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 font-display" aria-label="FixPoint home">
          <img src="/logo-icon.png" alt="FixPoint" className="h-9 w-auto sm:h-10" />
          <span className="text-lg font-bold tracking-tight text-navy-900">FIXPOINT</span>
        </a>

        <ul className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-navy-700 transition-colors hover:text-accent-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-focus flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-wa-600 transition-colors hover:bg-wa-500/10"
            aria-label="Chat with FixPoint on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="#repair-form"
            className="btn-focus rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-accent-600 hover:shadow-glow active:scale-[0.98]"
          >
            Get a Repair Quote
          </a>
        </div>

        <button
          type="button"
          className="btn-focus flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 xl:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-navy-900/10 bg-white px-5 pb-6 pt-4 shadow-soft">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-900/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-focus flex items-center justify-center gap-2 rounded-lg border border-wa-500/30 px-4 py-3 text-sm font-semibold text-wa-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href="#repair-form"
                onClick={() => setMenuOpen(false)}
                className="btn-focus rounded-lg bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft"
              >
                Get a Repair Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
