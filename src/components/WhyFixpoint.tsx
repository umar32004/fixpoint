import { Wrench, MessageSquareText, Layers, SearchCheck, MessageCircle, MapPin } from 'lucide-react'
import { brands } from '../data/brands'
import { services } from '../data/services'
import { problemCategories } from '../data/problems'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'

const REASONS = [
  {
    title: 'Specialized Earbud Repairs',
    description: 'We focus specifically on wireless earbuds, earphones and charging cases.',
    icon: Wrench,
  },
  {
    title: 'Transparent Communication',
    description: 'We explain what we find during diagnosis before any repair work begins.',
    icon: MessageSquareText,
  },
  {
    title: 'Multiple Brands Supported',
    description: 'Experience across popular brands including ZERO, Audionic and Tech Hunk.',
    icon: Layers,
  },
  {
    title: 'Professional Diagnosis',
    description: 'Every repair starts with identifying the actual fault, not guesswork.',
    icon: SearchCheck,
  },
  {
    title: 'Convenient WhatsApp Support',
    description: 'Reach us easily and get updates through WhatsApp, wherever you are.',
    icon: MessageCircle,
  },
  {
    title: 'Karachi-Based Service',
    description: 'A local service that understands the earbud models common in the city.',
    icon: MapPin,
  },
]

const totalModels = brands.reduce((sum, b) => sum + b.models.filter((m) => m !== 'Other Model').length, 0)
const totalProblems = problemCategories.reduce((sum, c) => sum + c.problems.length, 0)

const STATS = [
  { label: 'Repair Services', value: services.length, suffix: '' },
  { label: 'Brands Supported', value: brands.length, suffix: '' },
  { label: 'Models Recognized', value: totalModels, suffix: '+' },
  { label: 'Problems Diagnosed', value: totalProblems, suffix: '+' },
]

export default function WhyFixpoint() {
  return (
    <section id="why-fixpoint" className="section-py bg-navy-950/[0.02]">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Why Choose FixPoint?
          </h2>
          <p className="mt-4 text-base text-navy-700/80 sm:text-lg">
            A focused, transparent approach to earbud and earphone repair.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={(i % 3) * 90}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-700/75">{reason.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-900/8 bg-navy-900/8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatTile key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatTile({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, value: animated } = useCountUp(value)
  return (
    <div ref={ref} className="bg-white px-6 py-8 text-center">
      <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-1.5 text-sm text-navy-700/70">{label}</div>
    </div>
  )
}
