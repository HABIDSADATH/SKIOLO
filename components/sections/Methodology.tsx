'use client'

import { useRef } from 'react'
import { useTilt } from '@/hooks/useTilt'
import { methodology } from '@/lib/content'

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null)
  useTilt(sectionRef)

  return (
    <section id="methodology" className="methodology" ref={sectionRef}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">{methodology.eyebrow}</div>
          <h2 className="h-section">
            {methodology.headlinePlain}
            <em>{methodology.headlineItalic}</em>
          </h2>
          <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {methodology.sub}
          </p>
        </div>

        <div className="method-track">
          <div className="method-connector" />

          {methodology.phases.map((phase, i) => (
            <article
              key={phase.badge}
              className={`method-card tilt reveal${phase.active ? ' active' : ''}`}
              {...(i > 0 ? { 'data-delay': String(i) } : {})}
            >
              <div className="method-badge">
                <span className="method-badge-dot" />
                {phase.badge}
              </div>
              <div className="method-subtitle">{phase.subtitle}</div>
              <h3 className="method-title">
                {phase.titlePlain}
                <em>{phase.titleItalic}</em>
              </h3>
              <p className="method-desc">{phase.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
