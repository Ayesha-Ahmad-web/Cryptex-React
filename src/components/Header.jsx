import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import { navLinks } from '../data/siteData'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-card-border backdrop-blur-md transition-colors ${
        scrolled ? 'bg-bg-dark/90' : 'bg-bg-dark/70'
      }`}
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <img src={logo} width="32" height="32" alt="Cryptex logo" />
          Cryptex
        </a>

        <nav
          className={`fixed inset-x-0 top-[72px] flex flex-col gap-4 bg-bg-dark/95 p-6 backdrop-blur-md transition-transform lg:static lg:flex lg:translate-y-0 lg:flex-row lg:gap-8 lg:bg-transparent lg:p-0 ${
            navOpen ? 'translate-y-0' : '-translate-y-[150%] lg:translate-y-0'
          }`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  onClick={() => setNavOpen(false)}
                  className={`text-sm transition-colors hover:text-primary ${
                    link.active ? 'text-primary' : 'text-text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setNavOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-text-main transition-transform ${navOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-text-main transition-opacity ${navOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-text-main transition-transform ${navOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <a
          href="#"
          className="hidden rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-bg-dark lg:inline-block"
        >
          Wallet
        </a>
      </div>
    </header>
  )
}
