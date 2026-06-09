'use client'

import { useEffect } from 'react'

// Runs once on mount, observes every .reveal element on the page.
// Adds class "in" when the element enters the viewport, triggering
// the fade-up transition defined in globals.css.
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return null
}
