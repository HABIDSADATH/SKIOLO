'use client'

import { useEffect, useRef } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { hero } from '@/lib/content'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const orbs = section.querySelectorAll<HTMLElement>('[data-parallax]')
    if (!orbs.length) return

    function onMouseMove(e: MouseEvent) {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy

      orbs.forEach((orb) => {
        const factor = parseFloat(orb.dataset.parallax ?? '0') * 30
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`
      })
    }

    section.addEventListener('mousemove', onMouseMove)
    return () => section.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      {/* Floating orbs — CSS float animations + JS parallax on mouse */}
      <div className="hero-orbs">
        <div className="orb orb-1" data-parallax="0.3" />
        <div className="orb orb-2" data-parallax="0.5" />
        <div className="orb orb-3" data-parallax="0.4" />
      </div>

      {/* Subtle dot-grid background */}
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">

          {/* Announcement pill */}
          <div className="hero-pill reveal">
            <span className="hero-pill-badge">{hero.pill.badge}</span>
            <span>
              {hero.pill.text}
              <a href={hero.pill.ctaHref} style={{ color: 'var(--sky)', fontWeight: 600 }}>
                {hero.pill.ctaText}
              </a>
            </span>
          </div>

          {/* Brand name above headline */}
          <p className="hero-eyebrow-name reveal" data-delay="1">{hero.eyebrowName}</p>

          {/* Headline */}
          <h1 className="h-display reveal" data-delay="2">
            {hero.headlinePlain}
            <em>{hero.headlineItalic}</em>
          </h1>

          {/* Sub-headline */}
          <p className="lede reveal" data-delay="3">
            {hero.sub}
          </p>

          {/* CTAs */}
          <div className="hero-ctas reveal" data-delay="3">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              <MessageCircle />
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary">
              <Phone />
              {hero.ctaSecondary.label}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
