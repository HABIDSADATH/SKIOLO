'use client'

import { useEffect, useRef, useState } from 'react'
import { journey } from '@/lib/content'

const EMBED_BASE = `https://www.youtube-nocookie.com/embed/${journey.video.id}?autoplay=1&mute=1&loop=1&playlist=${journey.video.id}&controls=1&modestbranding=1&rel=0`

export default function Journey() {
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const [videoSrc, setVideoSrc] = useState('')
  const [posterHidden, setPosterHidden] = useState(false)

  function startVideo() {
    if (videoSrc) return
    setVideoSrc(EMBED_BASE)
    setPosterHidden(true)
  }

  useEffect(() => {
    const wrap = videoWrapRef.current
    if (!wrap) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            startVideo()
          }
        })
      },
      { threshold: [0, 0.5, 1] }
    )
    observer.observe(wrap)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="journey" className="journey">
      <div className="container">
        <div className="journey-layout">

          {/* Left: text + timeline */}
          <div className="journey-text reveal">
            <div className="eyebrow">{journey.eyebrow}</div>
            <h2 className="h-section">
              {journey.headlinePlain}
              <em>{journey.headlineItalic}</em>
            </h2>
            <p className="lede">{journey.sub}</p>

            <div className="journey-points">
              {journey.timeline.map((item) => (
                <div className="journey-point" key={item.year}>
                  <div className="journey-point-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>{item.year} —</strong>{' '}{item.text}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={journey.youtubeCta.href}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M23 12s0-3.7-.5-5.5c-.3-1-1-1.8-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5c-1 .3-1.7 1-2 2C1 8.3 1 12 1 12s0 3.7.5 5.5c.3 1 1 1.8 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5c1-.3 1.7-1 2-2 .5-1.8.5-5.5.5-5.5zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
              {journey.youtubeCta.label}
            </a>
          </div>

          {/* Right: video */}
          <div className="reveal" data-delay="1">
            <div className="video-wrap" ref={videoWrapRef}>

              {/* "FROM YOUTUBE" badge */}
              <div className="video-badge">
                <span className="video-badge-dot" />
                FROM YOUTUBE
              </div>

              {/* Poster overlay */}
              <div
                className={`video-poster${posterHidden ? ' hidden' : ''}`}
                onClick={startVideo}
                role="button"
                aria-label="Play video"
              >
                <div className="video-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="video-poster-title">{journey.video.title}</div>
                <div className="video-poster-meta">{journey.video.meta}</div>
              </div>

              {/* YouTube iframe — src injected on trigger */}
              {videoSrc && (
                <iframe
                  className="video-frame"
                  src={videoSrc}
                  title={journey.video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
