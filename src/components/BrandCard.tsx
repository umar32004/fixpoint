import { useState } from 'react'
import { ChevronDown, Wrench } from 'lucide-react'
import type { Brand } from '../data/brands'
import { useRepairSelection } from '../context/RepairSelectionContext'

const COLLAPSED_COUNT = 8

export default function BrandCard({ brand }: { brand: Brand }) {
  const [expanded, setExpanded] = useState(false)
  const { selectAndScroll } = useRepairSelection()

  const visibleModels = expanded ? brand.models : brand.models.slice(0, COLLAPSED_COUNT)
  const hiddenCount = brand.models.length - COLLAPSED_COUNT

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/25 hover:shadow-card-hover sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-navy-900">{brand.name}</h3>
        <span className="shrink-0 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-700">
          {brand.category}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{brand.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {visibleModels.map((model) => (
          <button
            key={model}
            type="button"
            onClick={() => selectAndScroll({ brand: brand.name, model })}
            className="btn-focus rounded-lg border border-navy-900/10 bg-navy-950/[0.03] px-3 py-1.5 text-xs font-medium text-navy-800 transition-all duration-150 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-accent-700 active:scale-95"
          >
            {model}
          </button>
        ))}

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="btn-focus inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-accent-600 transition-colors hover:text-accent-700"
            aria-expanded={expanded}
          >
            {expanded ? 'Show fewer' : `+${hiddenCount} more`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      <div className="mt-6 border-t border-navy-900/8 pt-5">
        <button
          type="button"
          onClick={() => selectAndScroll({ brand: brand.name })}
          className="btn-focus inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-600 active:scale-[0.98]"
        >
          <Wrench className="h-4 w-4" aria-hidden="true" />
          Request Repair
        </button>
      </div>
    </div>
  )
}
