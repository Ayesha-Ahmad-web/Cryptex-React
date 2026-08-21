import logo from '../assets/images/logo.svg'
import { footerColumns, socialIcons } from '../data/siteData'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <Reveal as="div" className="px-5 py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-primary">
              <img src={logo} width="40" height="40" alt="Cryptex logo" />
              Cryptex
            </a>

            <h2 className="mt-4 text-xl font-semibold">Let's talk! 🤙</h2>

            <a href="tel:+123456789101" className="mt-3 block text-sm text-text-muted hover:text-primary">
              +92 300 1234567
            </a>
            <a href="mailto:ayeshaahmad10fsd@gmail.com" className="mt-1 block text-sm text-text-muted hover:text-primary">
              ayeshaahmad10fsd@gmail.com
            </a>
            <address className="mt-1 text-sm not-italic text-text-muted">Faisalabad, Pakistan</address>
          </div>

          {footerColumns.map((col) => (
            <ul key={col.title}>
              <li className="mb-3 font-semibold">{col.title}</li>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="block py-1 text-sm text-text-muted hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Reveal>

      <div className="border-t border-card-border px-5 py-6">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Cryptex All Rights Reserved by{' '}
            <a href="#" className="text-primary hover:underline">
              Ayesha Ahmad
            </a>
          </p>

          <ul className="flex gap-4">
            {socialIcons.map((icon) => (
              <li key={icon}>
                <a href="#" className="text-lg text-text-muted hover:text-primary">
                  <ion-icon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
