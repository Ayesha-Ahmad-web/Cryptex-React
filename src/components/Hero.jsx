import heroBanner from '../assets/images/hero-banner.png'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <Reveal aria-label="hero" className="pt-32 pb-16 px-5 text-center lg:pt-40">
      <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:text-left">
        <div>
          <h1 className="gradient-text text-4xl font-bold leading-tight lg:text-5xl">
            Buy & Sell Digital Assets In The Cryptex
          </h1>

          <p className="mt-4 text-text-muted">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
          </p>

          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-ember-gradient px-7 py-3 font-medium text-bg-dark shadow-ember transition-all hover:-translate-y-1 hover:shadow-ember-lg"
          >
            Get started now
          </a>
        </div>

        <figure>
          <img src={heroBanner} width="570" height="448" alt="hero banner" className="w-full" />
        </figure>
      </div>
    </Reveal>
  )
}
