import aboutBanner from '../assets/images/about-banner.png'
import { aboutFeatures } from '../data/siteData'
import Reveal from './Reveal'

export default function AboutSection() {
  return (
    <Reveal aria-label="about" className="section px-5 py-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <figure>
          <img src={aboutBanner} width="748" height="436" loading="lazy" alt="about banner" className="w-full rounded-2xl" />
        </figure>

        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">What Is Cryptex</h2>

          <p className="mt-3 text-text-muted">
            Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot
            Trade, Futures Trade, P2P, Staking, Mining, and margin.
          </p>

          <ul className="mt-6 space-y-6">
            {aboutFeatures.map((feature) => (
              <li key={feature.title}>
                <div className="flex items-center gap-2">
                  <ion-icon name="checkmark-circle" style={{ color: '#ffb703', fontSize: '20px' }} />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm text-text-muted">{feature.text}</p>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-ember-gradient px-7 py-3 font-medium text-bg-dark shadow-ember transition-all hover:-translate-y-1 hover:shadow-ember-lg"
          >
            Explore More
          </a>
        </div>
      </div>
    </Reveal>
  )
}
