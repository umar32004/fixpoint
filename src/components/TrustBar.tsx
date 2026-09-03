import { Wrench, Layers, SearchCheck, MapPin } from 'lucide-react'

const ITEMS = [
  { icon: Wrench, label: 'Specialized Earbuds Repair' },
  { icon: Layers, label: 'Multiple Brands Supported' },
  { icon: SearchCheck, label: 'Professional Diagnosis' },
  { icon: MapPin, label: 'Karachi Based Service' },
]

export default function TrustBar() {
  return (
    <section className="relative bg-navy-950" aria-label="Why customers trust FixPoint">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-t-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-navy-950 px-5 py-6 transition-colors duration-200 hover:bg-navy-900"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent-400">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-white/85">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
