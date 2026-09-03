import { MessagesSquare, SearchCheck, ThumbsUp, PackageCheck } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Tell Us About Your Earbuds',
    description: 'Share your brand, model and the problem you’re facing through our form or WhatsApp.',
    icon: MessagesSquare,
  },
  {
    number: '02',
    title: 'Get a Diagnosis',
    description: 'We review the details and identify the likely fault before recommending a next step.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Approve the Repair',
    description: 'We walk you through the findings so you can decide how you’d like to proceed.',
    icon: ThumbsUp,
  },
  {
    number: '04',
    title: 'Get Your Earbuds Back',
    description: 'Once the repair is complete, your earbuds are ready to be returned to you.',
    icon: PackageCheck,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            How FixPoint Works
          </h2>
          <p className="mt-4 text-base text-navy-700/80 sm:text-lg">
            A simple, transparent process from first message to finished repair.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            <div className="absolute left-0 right-0 top-6 h-px bg-navy-900/10" aria-hidden="true" />
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.number} delay={i * 120}>
                  <div className="relative flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500 bg-white text-accent-600 shadow-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="mt-5 font-display text-3xl font-bold text-navy-900/10">
                      {step.number}
                    </span>
                    <h3 className="-mt-6 text-lg font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{step.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="mt-12 space-y-8 lg:hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.number} delay={i * 100}>
                <div className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white text-accent-600 shadow-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {i < STEPS.length - 1 && <div className="mt-2 w-px flex-1 bg-navy-900/10" />}
                  </div>
                  <div className="pb-2">
                    <span className="font-display text-sm font-bold text-accent-500">{step.number}</span>
                    <h3 className="mt-1 text-lg font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
