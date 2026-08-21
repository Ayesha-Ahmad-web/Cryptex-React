// Central place for the content that used to be hard-coded inside index.html.
// Keeping it here means each component just maps over data instead of
// repeating near-identical markup, while the underlying concept/content
// stays the same as the original site.

export const navLinks = [
  { label: 'Homepage', active: true },
  { label: 'Buy Crypto' },
  { label: 'Markets' },
  { label: 'Sell Crypto' },
  { label: 'Blog' },
  { label: 'BITUSDT' },
]

export const trendTabs = ['Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse', 'Polkadot', 'Solana', 'Opensea', 'Makersplace']

export const trendCoins = [
  { icon: 'coin-1.svg', name: 'Bitcoin', pair: 'BTC/USD', value: 'USD 46,168.95', price: '36,641.20', change: '-0.79%', trend: 'down' },
  { icon: 'coin-2.svg', name: 'Ethereum', pair: 'ETH/USD', value: 'USD 3,480.04', price: '36,641.20', change: '+10.55%', trend: 'up', active: true },
  { icon: 'coin-3.svg', name: 'Tether', pair: 'USDT/USD', value: 'USD 1.00', price: '36,641.20', change: '-0.01%', trend: 'down' },
  { icon: 'coin-4.svg', name: 'BNB', pair: 'BNB/USD', value: 'USD 443.56', price: '36,641.20', change: '-1.24%', trend: 'down' },
]

export const marketTabs = ['View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music']

export const marketCoins = [
  { rank: 1, icon: 'coin-1.svg', name: 'Bitcoin', symbol: 'BTC', price: '$56,623.54', change: '+1.45%', trend: 'up', cap: '$880,423,640,582', chart: 'chart-1.svg' },
  { rank: 2, icon: 'coin-2.svg', name: 'Ethereum', symbol: 'ETH', price: '$56,623.54', change: '-5.12%', trend: 'down', cap: '$880,423,640,582', chart: 'chart-2.svg' },
  { rank: 3, icon: 'coin-3.svg', name: 'Tether', symbol: 'USDT/USD', price: '$56,623.54', change: '+1.45%', trend: 'up', cap: '$880,423,640,582', chart: 'chart-1.svg' },
  { rank: 4, icon: 'coin-4.svg', name: 'BNB', symbol: 'BNB/USD', price: '$56,623.54', change: '-3.75%', trend: 'down', cap: '$880,423,640,582', chart: 'chart-2.svg' },
  { rank: 5, icon: 'coin-5.svg', name: 'Solana', symbol: 'SOL', price: '$56,623.54', change: '+1.45%', trend: 'up', cap: '$880,423,640,582', chart: 'chart-1.svg' },
  { rank: 6, icon: 'coin-6.svg', name: 'XRP', symbol: 'XRP', price: '$56,623.54', change: '-2.22%', trend: 'down', cap: '$880,423,640,582', chart: 'chart-2.svg' },
  { rank: 7, icon: 'coin-7.svg', name: 'Cardano', symbol: 'ADA', price: '$56,623.54', change: '+0.8%', trend: 'up', cap: '$880,423,640,582', chart: 'chart-1.svg' },
  { rank: 8, icon: 'coin-8.svg', name: 'Avalanche', symbol: 'AVAX', price: '$56,623.54', change: '+1.41%', trend: 'up', cap: '$880,423,640,582', chart: 'chart-1.svg' },
]

export const instructionSteps = [
  { image: 'instruction-1.png', subtitle: 'Step 1', title: 'Download', text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.' },
  { image: 'instruction-2.png', subtitle: 'Step 2', title: 'Connect Wallet', text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.' },
  { image: 'instruction-3.png', subtitle: 'Step 3', title: 'Start Trading', text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.' },
  { image: 'instruction-4.png', subtitle: 'Step 4', title: 'Earn Money', text: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.' },
]

export const aboutFeatures = [
  { title: 'View real-time cryptocurrency prices', text: 'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.' },
  { title: 'Buy and sell BTC, ETH, XRP, OKB, Etc...', text: 'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.' },
]

export const appFeatures = [
  { title: 'Buy, Sell, And Trade On The Go', text: 'Manage Your Holdings From Your Mobile Device' },
  { title: 'Take Control Of Your Wealth', text: 'Rest Assured You (And Only You) Have Access To Your Funds' },
]

export const footerColumns = [
  { title: 'Products', links: ['Spot', 'Inverse Perpetual', 'USDT Perpetual', 'Exchange', 'Launchpad', 'Binance Pay'] },
  { title: 'Services', links: ['Buy Crypto', 'Markets', 'Tranding Fee', 'Affiliate Program', 'Referral Program', 'API'] },
  { title: 'Support', links: ['Bybit Learn', 'Help Center', 'User Feedback', 'Submit a request', 'API Documentation', 'Trading Rules'] },
  { title: 'About Us', links: ['About Bybit', 'Authenticity Check', 'Careers', 'Business Contacts', 'Blog'] },
]

export const socialIcons = ['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-linkedin']
