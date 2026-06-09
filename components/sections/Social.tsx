import { Youtube, Instagram } from 'lucide-react'
import { social } from '@/lib/content'

export default function Social() {
  return (
    <section id="social" className="section">
      <div className="container">
        <p className="eyebrow reveal">{social.eyebrow}</p>
        <h2 className="reveal" data-delay="1">
          {social.headlinePlain}
          <em>{social.headlineItalic}</em>
        </h2>
        <p className="section-sub reveal" data-delay="2">
          {social.sub}
        </p>

        <div className="social-grid">
          <a
            href={social.youtube.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card social-card-yt reveal"
            data-delay="1"
          >
            <div className="social-head">
              <div className="social-icon social-icon-yt">
                <Youtube />
              </div>
              <span className="social-handle">{social.youtube.handle}</span>
            </div>
            <h3 className="social-title">
              {social.youtube.titlePlain}
              <em>{social.youtube.titleItalic}</em>
            </h3>
            <p className="social-desc">{social.youtube.desc}</p>
            <span className="social-cta">{social.youtube.cta}</span>
          </a>

          <a
            href={social.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card social-card-ig reveal"
            data-delay="2"
          >
            <div className="social-head">
              <div className="social-icon social-icon-ig">
                <Instagram />
              </div>
              <span className="social-handle">{social.instagram.handle}</span>
            </div>
            <h3 className="social-title">
              {social.instagram.titlePlain}
              <em>{social.instagram.titleItalic}</em>
            </h3>
            <p className="social-desc">{social.instagram.desc}</p>
            <span className="social-cta">{social.instagram.cta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
