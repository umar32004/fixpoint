import { ShieldAlert, CircleCheck, Clock } from 'lucide-react'
import Reveal from './Reveal'

const BRAND_POLICIES = [
  {
    brand: 'ZERO',
    note: 'Complaints raised within 7 days are considered for repair under ZERO’s current policy; warranty becomes inapplicable after it expires.',
  },
  {
    brand: 'Audionic',
    note: 'Out-of-warranty products with technical issues may still be repaired by Audionic for applicable service charges.',
  },
  {
    brand: 'Tech Hunk',
    note: 'Provides repair or replacement coverage according to the warranty period and model-specific terms.',
  },
]

export default function WarrantyNotice() {
  return (
    <section id="warranty" className="section-py bg-white">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-700">
            <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
            Please Read Before Visiting
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Warranty &amp; Out-of-Warranty Notice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-700/80 sm:text-lg">
            Brand warranty is separate from FixPoint repair service. Before bringing a product to
            us, customers should check the brand&apos;s own warranty or claim process.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BRAND_POLICIES.map((policy) => (
              <div
                key={policy.brand}
                className="rounded-2xl border border-navy-900/8 bg-navy-950/[0.02] p-5 transition-colors duration-200 hover:border-accent-500/25"
              >
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-accent-600" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-navy-900">{policy.brand}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-700/75">{policy.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-6 rounded-2xl border-l-4 border-accent-500 bg-accent-500/5 p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-navy-800">
              FixPoint does not claim to provide brand-authorized warranty service. We can help
              confirm your product&apos;s status, but the final warranty decision rests with the
              brand.
            </p>
            <div className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-navy-700/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
              <span>Checking warranty status with the brand can take approximately 7 to 10 days.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
