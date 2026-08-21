import Header from './components/Header'
import Hero from './components/Hero'
import TrendSection from './components/TrendSection'
import MarketSection from './components/MarketSection'
import InstructionSection from './components/InstructionSection'
import AboutSection from './components/AboutSection'
import AppSection from './components/AppSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrendSection />
        <MarketSection />
        <InstructionSection />
        <AboutSection />
        <AppSection />
      </main>
      <Footer />
    </>
  )
}
