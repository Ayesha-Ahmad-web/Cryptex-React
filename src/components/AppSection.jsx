import appBanner from '../assets/images/app-banner.png'
import googlePlay from '../assets/images/googleplay.png'
import appStore from '../assets/images/appstore.png'
import { appFeatures } from '../data/siteData'
import Reveal from './Reveal'

export default function AppSection() {
  return (
    <Reveal aria-label="app" className="section px-5 py-16">
      <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">Free Your Money & Invest With Confident</h2>
          <p className="mt-3 text-text-muted">With Cryptor Trade, you can be sure your trading skills are matched</p>

          <ul className="mt-6 space-y-6">
            {appFeatures.map((feature) => (
              <li key={feature.title}>
                <div className="flex items-center gap-2">
                  <ion-icon name="checkmark-circle" style={{ color: '#ffb703', fontSize: '20px' }} />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm text-text-muted">{feature.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-4">
            <a href="#">
              <img src={googlePlay} width="135" height="40" loading="lazy" alt="get it on google play" />
            </a>
            <a href="#">
              <img src={appStore} width="120" height="40" loading="lazy" alt="download on the app store" />
            </a>
          </div>
        </div>

        <div className="relative text-center">
          <img src={appBanner} width="618" height="526" loading="lazy" alt="app banner" className="mx-auto w-full max-w-md" />
          <span className="mt-3 inline-block text-sm text-text-muted">Scan To Download</span>
        </div>
      </div>
    </Reveal>
  )
}
