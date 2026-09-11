import { ArrowRight, MessageCircle, ShieldCheck, Bluetooth, BatteryCharging, Waves } from 'lucide-react'
import { getWhatsAppLink } from '../config/site'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 sm:pt-32 lg:pt-36">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 pb-20 lg:grid-cols-2 lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Professional Earbuds Repair &bull; Karachi
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Fix Your Earbuds.
            <br />
            You Get Your Sound Back.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            Professional repair assessment for Pakistani online-brand earbuds and local-market TWS
            earbuds. Tell us the brand, model and problem &mdash; we will inspect the unit and
            advise the repair.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#repair-form"
              className="btn-focus group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-600 active:scale-[0.98]"
            >
              Get a Repair Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-focus inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 text-wa-500" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md animate-fade-in lg:mx-0 lg:ml-auto" style={{ animationDelay: '150ms' }}>
          <div className="relative aspect-square w-full">
            {/* Center glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-500/20 to-transparent blur-2xl" />

            {/* Charging case */}
            <div className="absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-navy-800 to-navy-900 shadow-2xl">
              <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/10" />
              <div className="absolute inset-x-6 top-10 h-px bg-white/10" />

              {/* LED */}
              <div className="absolute right-6 top-6 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-400" />
                <span className="text-[10px] font-medium tracking-wide text-white/40">READY</span>
              </div>

              {/* Earbud slots */}
              <div className="absolute inset-x-0 bottom-9 flex items-center justify-center gap-8">
                {[0, 1].map((i) => (
                  <div key={i} className="relative flex flex-col items-center">
                    <div className="h-16 w-11 rounded-2xl border border-white/10 bg-navy-950/60" />
                    <div className="absolute top-2 h-9 w-7 rounded-full bg-gradient-to-b from-white/90 to-white/60 shadow-lg" />
                    <div className="absolute top-8 h-5 w-2.5 rounded-full bg-white/70" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating technical chips */}
            <div className="absolute -left-2 top-6 animate-float rounded-xl border border-white/10 bg-navy-900/90 px-3.5 py-2.5 shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <BatteryCharging className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
                Battery Diagnostics
              </div>
            </div>

            <div
              className="absolute -right-4 top-1/3 animate-float-delay rounded-xl border border-white/10 bg-navy-900/90 px-3.5 py-2.5 shadow-card backdrop-blur"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <Bluetooth className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
                Connectivity Check
              </div>
            </div>

            <div className="absolute -left-6 bottom-6 animate-float rounded-xl border border-white/10 bg-navy-900/90 px-3.5 py-2.5 shadow-card backdrop-blur" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <Waves className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
                Sound Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
