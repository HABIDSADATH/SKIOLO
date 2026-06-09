'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

type Theme = 'dark' | 'light'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Sync with whatever the FOUC-prevention script in layout.tsx already applied.
    // Reading from the DOM attribute (not localStorage) so we always match what's visible.
    const applied = document.documentElement.getAttribute('data-theme') as Theme | null
    setTheme(applied === 'light' ? 'light' : 'dark')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('skiolo-theme', next)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* CSS in globals.css drives the opacity + rotation swap via [data-theme="light"] */}
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
    </button>
  )
}
