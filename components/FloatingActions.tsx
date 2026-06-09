'use client'

import { useEffect, useState } from 'react'
import { Phone, MessageCircle, Sun, Moon } from 'lucide-react'
import { siteConfig } from '@/lib/content'

type Theme = 'dark' | 'light'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const applied = document.documentElement.getAttribute('data-theme') as Theme | null
    setTheme(applied === 'light' ? 'light' : 'dark')

    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('skiolo-theme', next)
  }

  // Stagger delays: WhatsApp in first (0s), then call (0.08s), then theme (0.16s)
  // On hide, all collapse instantly
  const waDelay = visible ? '0s' : '0s'
  const callDelay = visible ? '0.08s' : '0s'
  const themeDelay = visible ? '0.16s' : '0s'

  return (
    <div className="fab-stack" data-visible={visible ? 'true' : 'false'}>
      {/* DOM order: WhatsApp → bottom, call → middle, theme → top (column-reverse) */}
      <a
        href={siteConfig.whatsapp}
        className="fab fab-wa"
        aria-label="Talk on WhatsApp"
        style={{ transitionDelay: waDelay }}
      >
        <MessageCircle />
        <span className="fab-tooltip">Talk on WhatsApp</span>
      </a>

      <a
        href={`tel:${siteConfig.phone}`}
        className="fab fab-call"
        aria-label="Call directly"
        style={{ transitionDelay: callDelay }}
      >
        <Phone />
        <span className="fab-tooltip">Call directly</span>
      </a>

      <button
        className="fab fab-theme"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        style={{ transitionDelay: themeDelay }}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
        <span className="fab-tooltip">Toggle theme</span>
      </button>
    </div>
  )
}
