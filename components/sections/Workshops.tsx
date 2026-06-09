import { MessageCircle } from 'lucide-react'
import OnlineWorkshopIllust from '@/components/illustrations/OnlineWorkshopIllust'
import OfflineWorkshopIllust from '@/components/illustrations/OfflineWorkshopIllust'
import { workshops } from '@/lib/content'

// Inline SVG icons matching the mockup's detail row icons exactly
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
)
const IconRupee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const DETAIL_ICONS: Record<string, React.FC> = {
  Date: IconCalendar,
  Duration: IconClock,
  Seats: IconUser,
  Investment: IconRupee,
  Venue: IconPin,
}

export default function Workshops() {
  return (
    <section id="workshops">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">{workshops.eyebrow}</div>
          <h2 className="h-section">
            {workshops.headlinePlain}
            <em>{workshops.headlineItalic}</em>
          </h2>
          <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {workshops.sub}
          </p>
        </div>

        <div className="workshops-grid">
          {/* Online workshop */}
          <article className="workshop-card online reveal">
            <div className="workshop-illust">
              <OnlineWorkshopIllust />
            </div>
            <div className="workshop-body">
              <div className="workshop-format">
                <span className="workshop-format-dot" />
                {workshops.online.format}
              </div>
              <h3 className="workshop-title">
                {workshops.online.titlePlain}
                <em>{workshops.online.titleItalic}</em>
              </h3>
              <p className="workshop-desc">{workshops.online.desc}</p>
              <div className="workshop-details">
                {workshops.online.details.map((row) => {
                  const Icon = DETAIL_ICONS[row.label]
                  return (
                    <div className="workshop-row" key={row.label}>
                      <div className="workshop-row-icon">{Icon && <Icon />}</div>
                      <span className="workshop-row-label">{row.label}</span>
                      <span className="workshop-row-value">{row.value}</span>
                    </div>
                  )
                })}
              </div>
              <div className="workshop-cta-row">
                <a
                  href={workshops.online.cta.href}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp />
                  {workshops.online.cta.label}
                </a>
              </div>
              <div className="workshop-meta">{workshops.online.meta}</div>
            </div>
          </article>

          {/* Offline workshop */}
          <article className="workshop-card offline reveal" data-delay="1">
            <div className="workshop-illust">
              <OfflineWorkshopIllust />
            </div>
            <div className="workshop-body">
              <div className="workshop-format">
                <span className="workshop-format-dot" />
                {workshops.offline.format}
              </div>
              <h3 className="workshop-title">
                {workshops.offline.titlePlain}
                <em>{workshops.offline.titleItalic}</em>
              </h3>
              <p className="workshop-desc">{workshops.offline.desc}</p>
              <div className="workshop-details">
                {workshops.offline.details.map((row) => {
                  const Icon = DETAIL_ICONS[row.label]
                  return (
                    <div className="workshop-row" key={row.label}>
                      <div className="workshop-row-icon">{Icon && <Icon />}</div>
                      <span className="workshop-row-label">{row.label}</span>
                      <span className="workshop-row-value">{row.value}</span>
                    </div>
                  )
                })}
              </div>
              <div className="workshop-cta-row">
                <a
                  href={workshops.offline.cta.href}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp />
                  {workshops.offline.cta.label}
                </a>
              </div>
              <div className="workshop-meta">{workshops.offline.meta}</div>
            </div>
          </article>
        </div>

        {/* Corporate workshop */}
        <div className="workshop-corporate reveal" data-delay="2">
          <h4 className="workshop-corporate-title">
            {workshops.corporate.titlePlain}
            <em>{workshops.corporate.titleItalic}</em>
          </h4>
          <p className="workshop-corporate-desc">{workshops.corporate.desc}</p>
          <a
            href={workshops.corporate.cta.href}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            {workshops.corporate.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
