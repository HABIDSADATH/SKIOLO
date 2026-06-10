'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Logo from '@/components/Logo'
import { nav, siteConfig } from '@/lib/content'

const ALL_SECTION_IDS = [
  'hero', 'pillars', 'methodology', 'journey',
  'services', 'workshops', 'courses', 'voices', 'social',
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // Sync theme from DOM on mount
  useEffect(() => {
    const applied = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null
    setTheme(applied === 'light' ? 'light' : 'dark')
  }, [])

  function toggleTheme() {
    const next: 'dark' | 'light' = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('skiolo-theme', next)
  }

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const visibleMap = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleMap.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleMap.delete(entry.target.id)
          }
        })
        let best = ''
        let bestRatio = 0
        visibleMap.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id }
        })
        setActiveSection(best)
      },
      {
        rootMargin: '-10% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      }
    )

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function isActive(href: string) {
    return activeSection === href.replace('#', '')
  }

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Logo height={72} />

          {/* Desktop center links — hidden below 1000px via CSS */}
          <div className="nav-links">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'nav-active' : ''}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: hamburger (mobile only — desktop right side intentionally empty) */}
          <div className="nav-cta">
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Dark overlay */}
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`nav-panel${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="nav-panel-header">
          <Logo height={48} />
          <button
            className="nav-panel-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="nav-panel-links" aria-label="Mobile navigation">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-panel-link${isActive(link.href) ? ' nav-active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-panel-footer">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-panel-wa"
            onClick={handleLinkClick}
          >
            Chat on WhatsApp
          </a>
          <button className="nav-panel-theme" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>
    </>
  )
}
