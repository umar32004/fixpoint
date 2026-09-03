import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import Reveal from './Reveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="section-py bg-white">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-navy-700/80 sm:text-lg">
            Answers to common questions about FixPoint&apos;s repair service.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8 shadow-soft">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="btn-focus flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-navy-900/[0.02] sm:px-7"
                  >
                    <span className="text-sm font-semibold text-navy-900 sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy-700/80 sm:px-7">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
