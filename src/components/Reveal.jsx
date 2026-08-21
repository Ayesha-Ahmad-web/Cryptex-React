import { useEffect, useRef, useState } from 'react'

// Mirrors the original script.js "scrollReveal" behaviour (adds/removes an
// "active" class once a section is within 1.5x the viewport height) but uses
// an IntersectionObserver instead of a scroll listener.
export default function Reveal({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -20% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} data-section className={`${active ? 'active' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
