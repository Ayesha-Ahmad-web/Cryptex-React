import { useState } from 'react'
import { trendTabs, trendCoins } from '../data/siteData'
import Reveal from './Reveal'

const images = import.meta.glob('../assets/images/coin-*.svg', { eager: true, import: 'default' })
const getIcon = (name) => images[`../assets/images/${name}`]

export default function TrendSection() {
  const [activeTab, setActiveTab] = useState(trendTabs[0])

  return (
    <Reveal aria-label="crypto trend" className="section px-5 py-16">
      <div className="container mx-auto max-w-6xl">
        <ul className="flex flex-wrap gap-2 overflow-x-auto pb-4">
          {trendTabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  activeTab === tab
                    ? 'bg-ember-gradient text-bg-dark font-medium'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendCoins.map((coin) => (
            <li key={coin.name}>
              <div
                className={`rounded-2xl border border-card-border bg-card-bg p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-ember ${
                  coin.active ? 'ring-1 ring-primary/60' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={getIcon(coin.icon)} width="24" height="24" alt={`${coin.name} logo`} />
                  <a href="#" className="font-medium text-white">
                    {coin.name} <span className="text-text-muted">{coin.pair}</span>
                  </a>
                </div>

                <p className="mt-3 text-lg font-semibold">{coin.value}</p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-text-muted">{coin.price}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      coin.trend === 'up' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
                    }`}
                  >
                    {coin.change}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
