import { brands } from '../data/brands'
import BrandCard from './BrandCard'
import Reveal from './Reveal'

export default function Brands() {
  return (
    <section id="brands" className="section-py bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Brands We Repair
          </h2>
          <p className="mt-4 text-base text-navy-700/80 sm:text-lg">
            Select your brand and model to start a repair inquiry &mdash; or choose{' '}
            <span className="font-medium text-navy-900">Other Model</span> if it isn&apos;t listed.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <Reveal key={brand.id} delay={i * 100} className="h-full">
              <BrandCard brand={brand} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
