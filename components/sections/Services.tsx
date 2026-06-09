'use client'

import { useRef } from 'react'
import { FileText, Users, LayoutGrid, Target, Activity, CheckCircle, Search } from 'lucide-react'
import { useTilt } from '@/hooks/useTilt'
import { services } from '@/lib/content'

const ICONS = [FileText, Users, LayoutGrid, Target, Activity, CheckCircle, Search]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  useTilt(sectionRef)

  return (
    <section id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{services.eyebrow}</div>
          <h2 className="h-section">
            {services.headlinePlain}
            <em>{services.headlineItalic}</em>
          </h2>
          <p className="lede">{services.sub}</p>
        </div>

        <div className="services-grid">
          {services.items.map((item, i) => {
            const Icon = ICONS[i]
            const delay = i % 3
            return (
              <article
                key={item.num}
                className="service-card tilt reveal"
                {...(delay > 0 ? { 'data-delay': String(delay) } : {})}
              >
                <div className="service-num">{item.num}</div>
                <div className="service-icon">
                  <Icon size={20} />
                </div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </article>
            )
          })}

          {/* Philosophy banner — spans 2 columns */}
          <article className="service-card philosophy tilt reveal" data-delay="1">
            <div className="philosophy-num">{services.philosophy.num}</div>
            <h3 className="philosophy-quote">
              {services.philosophy.quotePlain}
              <em>{services.philosophy.quoteItalic}</em>
            </h3>
            <p className="philosophy-sub">{services.philosophy.sub}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
