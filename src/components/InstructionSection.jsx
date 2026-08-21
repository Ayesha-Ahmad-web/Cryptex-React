import { instructionSteps } from '../data/siteData'
import Reveal from './Reveal'

const images = import.meta.glob('../assets/images/instruction-*.png', { eager: true, import: 'default' })

export default function InstructionSection() {
  return (
    <Reveal aria-label="instruction" className="section px-5 py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold lg:text-3xl">How It Work</h2>
        <p className="mx-auto mt-3 max-w-xl text-text-muted">
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructionSteps.map((step) => (
            <li key={step.title}>
              <div className="rounded-2xl border border-card-border bg-card-bg p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-ember">
                <figure className="mx-auto mb-4 w-24">
                  <img src={images[`../assets/images/${step.image}`]} width="96" height="96" loading="lazy" alt={step.title} className="mx-auto" />
                </figure>

                <p className="text-sm font-medium text-secondary">{step.subtitle}</p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
