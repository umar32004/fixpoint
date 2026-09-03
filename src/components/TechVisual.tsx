import Reveal from './Reveal'

const CALLOUTS = [
  { label: 'Speaker Driver', top: '18%', left: '46%' },
  { label: 'Battery Cell', top: '42%', left: '72%' },
  { label: 'Circuit Board', top: '64%', left: '30%' },
  { label: 'Charging Pins', top: '84%', left: '58%' },
]

export default function TechVisual() {
  return (
    <section className="section-py overflow-hidden bg-navy-950">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">
            Precision Repair, Not Replacement
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Small Device. Detailed Repair.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-100/75">
            Wireless earbuds are compact, but their problems can be complex. Our repair process
            focuses on identifying the actual fault before recommending a solution.
          </p>
          <ul className="mt-8 space-y-3.5">
            {['Speaker driver & audio path inspection', 'Battery health & charging circuit checks', 'Charging pin & contact point testing', 'Board-level fault identification'].map(
              (item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-100/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Decorative technical rings */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" aria-hidden="true">
              <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
              <circle cx="200" cy="200" r="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
              {/* Earbud silhouette */}
              <g>
                <ellipse cx="195" cy="150" rx="46" ry="52" fill="#101c33" stroke="#2f7bf6" strokeWidth="2" />
                <path
                  d="M180 195 Q160 240 180 275 Q192 300 220 298"
                  fill="none"
                  stroke="#2f7bf6"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="222" cy="298" r="9" fill="#5b9dff" />
                <circle cx="195" cy="150" r="14" fill="#5b9dff" opacity="0.85" />
              </g>
              {/* Callout lines */}
              <line x1="195" y1="120" x2="195" y2="72" stroke="rgba(91,157,255,0.5)" strokeWidth="1.5" />
              <line x1="238" y1="168" x2="288" y2="168" stroke="rgba(91,157,255,0.5)" strokeWidth="1.5" />
              <line x1="170" y1="256" x2="120" y2="256" stroke="rgba(91,157,255,0.5)" strokeWidth="1.5" />
              <line x1="222" y1="298" x2="232" y2="336" stroke="rgba(91,157,255,0.5)" strokeWidth="1.5" />
            </svg>

            {CALLOUTS.map((c) => (
              <span
                key={c.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-navy-900/90 px-2.5 py-1 text-[11px] font-medium text-navy-100/90 shadow-soft backdrop-blur"
                style={{ top: c.top, left: c.left }}
              >
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
