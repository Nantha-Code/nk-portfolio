import { useState, useEffect } from 'react'
import './Navbar.css'

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about',      label: 'About'      },
    { href: '#projects',   label: 'Projects'   },
    { href: '#skills',     label: 'Skills'     },
    { href: '#experience', label: 'Experience' },
    { href: '#education',  label: 'Education'  },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-mark">NK</div>
          Nantha Kumar
        </a>

        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">
          <span>Hire Me</span>
        </a>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
        </button>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="#contact" onClick={closeMenu} style={{ color: 'var(--gold)' }}>Hire Me</a>
      </div>
    </>
  )
}
