'use client'

import { useRef } from 'react'
import { useTilt } from '@/hooks/useTilt'
import { pillars } from '@/lib/content'

export default function Pillars() {
  const sectionRef = useRef<HTMLElement>(null)
  useTilt(sectionRef)

  return (
    <section id="pillars" ref={sectionRef}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">{pillars.eyebrow}</div>
          <h2 className="h-section">
            {pillars.headlinePlain}
            <em>{pillars.headlineItalic}</em>
          </h2>
          <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {pillars.sub}
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.items.map((item, i) => (
            <article
              key={item.num}
              className="pillar-card tilt reveal"
              {...(i > 0 ? { 'data-delay': String(i) } : {})}
            >
              <div className="pillar-num">{item.num}</div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
