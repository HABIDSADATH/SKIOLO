'use client'

import { useRef } from 'react'
import { useTilt } from '@/hooks/useTilt'
import { courses } from '@/lib/content'
import { Check } from 'lucide-react'
import styles from './Courses.module.css'

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const CARD_CLS: Record<string, string> = {
  basic: styles.cardBasic,
  standard: styles.cardStandard,
  premium: styles.cardPremium,
}

const BADGE_CLS: Record<string, string> = {
  basic: styles.tierBadgeBasic,
  standard: styles.tierBadgeStandard,
  premium: styles.tierBadgePremium,
}

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null)
  useTilt(sectionRef)

  return (
    <section id="courses" ref={sectionRef}>
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">COURSES &amp; COMMUNITY</div>
          <h2 className="h-section">
            Learn the system.{' '}
            <em>Own it.</em>
          </h2>
          <p className="lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Recorded lessons, live monthly classes, and the Table Talk founders&apos; community —
            three packages to fit where you are right now.
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((pkg, i) => {
            const isPremium = pkg.tone === 'premium'
            return (
              <div
                key={pkg.tier}
                className={`${styles.cardWrap}${isPremium ? ` ${styles.premiumWrap}` : ''} reveal`}
                {...(i > 0 ? { 'data-delay': String(i) } : {})}
              >
                {pkg.featuredLabel && (
                  <div className={styles.popularLabel}>★ {pkg.featuredLabel}</div>
                )}

                <article className={`${styles.card} ${CARD_CLS[pkg.tone]} tilt`}>
                  {/* Tier badge */}
                  <div className={`${styles.tierBadge} ${BADGE_CLS[pkg.tone]}`}>
                    {pkg.tier}
                  </div>

                  {/* Package name */}
                  <div className={styles.courseName}>{pkg.name} Package</div>

                  {/* Price */}
                  <div className={styles.priceRow}>
                    <span className={styles.priceCurrency}>₹</span>
                    <span className={styles.priceAmount}>
                      {pkg.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className={styles.pricePeriod}>{pkg.period}</div>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Feature list */}
                  <ul className={styles.featureList}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <Check size={14} strokeWidth={2.5} className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={pkg.cta.href}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWhatsApp />
                    {pkg.cta.label}
                  </a>
                </article>
              </div>
            )
          })}
        </div>

        <p className={styles.footerNote}>
          All packages include lifetime access to course updates. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
