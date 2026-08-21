import { useState } from 'react'
import { marketTabs, marketCoins } from '../data/siteData'
import Reveal from './Reveal'

const coinImages = import.meta.glob('../assets/images/coin-*.svg', { eager: true, import: 'default' })
const chartImages = import.meta.glob('../assets/images/chart-*.svg', { eager: true, import: 'default' })

export default function MarketSection() {
  const [activeTab, setActiveTab] = useState(marketTabs[0])
  const [favorites, setFavorites] = useState({})

  const toggleFav = (rank) => setFavorites((prev) => ({ ...prev, [rank]: !prev[rank] }))

  return (
    <Reveal aria-label="market update" className="section px-5 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold lg:text-3xl">Market Update</h2>
          <a href="#" className="text-sm text-primary hover:underline">
            See All Coins
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 overflow-x-auto pb-4">
          {marketTabs.map((tab) => (
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

        <div className="overflow-x-auto">
          <table className="mt-4 w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-card-border text-left text-sm text-text-muted">
                <th className="p-3"></th>
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Last Price</th>
                <th className="p-3">24h %</th>
                <th className="p-3">Market Cap</th>
                <th className="p-3">Last 7 Days</th>
                <th className="p-3"></th>
              </tr>
            </thead>

            <tbody>
              {marketCoins.map((coin) => (
                <tr key={coin.rank} className="border-b border-card-border transition-colors hover:bg-primary/5">
                  <td className="p-3">
                    <button
                      aria-label="Add to favourite"
                      onClick={() => toggleFav(coin.rank)}
                      className="text-lg"
                    >
                      <ion-icon
                        name={favorites[coin.rank] ? 'star' : 'star-outline'}
                        style={{ color: favorites[coin.rank] ? '#ffb703' : '#9a97b3' }}
                      />
                    </button>
                  </td>
                  <th className="p-3 text-text-muted" scope="row">
                    {coin.rank}
                  </th>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <img src={coinImages[`../assets/images/${coin.icon}`]} width="20" height="20" alt={`${coin.name} logo`} />
                      <span className="font-medium">
                        {coin.name} <span className="text-text-muted">{coin.symbol}</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-3">{coin.price}</td>
                  <td className={`p-3 ${coin.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>{coin.change}</td>
                  <td className="p-3 text-text-muted">{coin.cap}</td>
                  <td className="p-3">
                    <img src={chartImages[`../assets/images/${coin.chart}`]} width="100" height="40" alt={`${coin.name} chart`} />
                  </td>
                  <td className="p-3">
                    <button className="rounded-full border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-bg-dark">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  )
}
