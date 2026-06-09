import { MessageCircle } from 'lucide-react'
import { finalCta } from '@/lib/content'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>
          {finalCta.headlinePlain}
          <em>{finalCta.headlineItalic}</em>
        </h2>
        <p className="section-sub">{finalCta.sub}</p>

        <div className="hero-cta">
          <a href={finalCta.ctaPrimary.href} className="btn btn-primary">
            <MessageCircle />
            {finalCta.ctaPrimary.label}
          </a>
        </div>

        <p className="final-cta-meta">{finalCta.meta}</p>
      </div>
    </section>
  )
}
