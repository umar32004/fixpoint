import { services } from '../data/services'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            What We Repair
          </h2>
          <p className="mt-4 text-base text-navy-700/80 sm:text-lg">
            Professional solutions for common earbud and wireless earphone problems.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={(i % 3) * 90}>
                <div className="group h-full rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/20 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
