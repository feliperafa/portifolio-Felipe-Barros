'use client'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about',      label: 'Sobre' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experiência' },
  { href: '#education',  label: 'Formação' },
  { href: '#contact',    label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">FB</a>
      <ul className="nav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
