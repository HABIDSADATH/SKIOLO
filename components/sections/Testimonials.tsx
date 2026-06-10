'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { testimonials } from '@/lib/content'

const SPEED = 44 // px/s

export default function Testimonials() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const halfRef = useRef(0)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number>(0)
  const lastTsRef = useRef<number>(0)
  // Guard against re-entrancy when we set scrollLeft programmatically
  const settingScrollRef = useRef(false)

  useEffect(() => {
    if (!wrapperRef.current) return
    // Capture as non-null; TypeScript can't narrow across closure boundaries
    const el: HTMLDivElement = wrapperRef.current

    // Measure halfway point after first paint
    const measureRaf = requestAnimationFrame(() => {
      halfRef.current = el.scrollWidth / 2
    })

    // Auto-scroll RAF loop
    function step(ts: number) {
      if (!pausedRef.current) {
        const dt = lastTsRef.current ? ts - lastTsRef.current : 0
        posRef.current += (SPEED * dt) / 1000
        const half = halfRef.current
        if (half > 0 && posRef.current >= half) {
          posRef.current -= half
        }
        settingScrollRef.current = true
        el.scrollLeft = posRef.current
        settingScrollRef.current = false
      }
      lastTsRef.current = ts
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)

    function scheduleResume() {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = setTimeout(() => {
        const half = halfRef.current
        // Re-sync position from current scrollLeft so auto-scroll continues from here
        posRef.current = half > 0 ? ((el.scrollLeft % half) + half) % half : el.scrollLeft
        lastTsRef.current = 0
        pausedRef.current = false
      }, 2500)
    }

    // ── Mouse drag (desktop) ──────────────────────────────
    let isDragging = false
    let dragStartX = 0
    let dragStartScroll = 0

    function onMouseDown(e: MouseEvent) {
      isDragging = true
      pausedRef.current = true
      dragStartX = e.clientX
      dragStartScroll = el.scrollLeft
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      el.style.cursor = 'grabbing'
    }

    function onMouseMove(e: MouseEvent) {
      if (!isDragging) return
      const half = halfRef.current
      let next = dragStartScroll + (dragStartX - e.clientX)
      // Wrap during drag so user never hits the end
      if (half > 0) next = ((next % half) + half) % half
      settingScrollRef.current = true
      el.scrollLeft = next
      settingScrollRef.current = false
    }

    function onMouseUp() {
      if (!isDragging) return
      isDragging = false
      el.style.cursor = 'grab'
      scheduleResume()
    }

    // ── Touch (mobile — native scroll handles inertia) ────
    function onTouchStart() {
      pausedRef.current = true
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }

    function onTouchEnd() {
      scheduleResume()
    }

    // ── Scroll event: keep infinite loop when native touch scroll wraps ──
    function onScroll() {
      if (settingScrollRef.current) return // our own RAF, ignore
      const half = halfRef.current
      if (!half) return
      const sl = el.scrollLeft
      if (sl >= half) {
        settingScrollRef.current = true
        el.scrollLeft = sl - half
        settingScrollRef.current = false
        if (pausedRef.current) posRef.current = el.scrollLeft
      }
    }

    el.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchEnd)
    el.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(measureRaf)
      cancelAnimationFrame(rafRef.current)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      el.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', onTouchEnd)
      el.removeEventListener('scroll', onScroll)
    }
  }, [])

  const allCards = [...testimonials.items, ...testimonials.items]

  return (
    <section id="voices" className="testimonials">
      <div className="container">
        <p className="eyebrow reveal">{testimonials.eyebrow}</p>
        <h2 className="h-section reveal" data-delay="1">
          {testimonials.headlinePlain}
          <em>{testimonials.headlineItalic}</em>
        </h2>
      </div>

      <div className="t-carousel-outer">
        <div ref={wrapperRef} className="t-carousel-wrapper">
          <div className="t-carousel-track">
            {allCards.map((item, i) => (
              <div
                key={i}
                className="t-card"
                aria-hidden={i >= testimonials.items.length ? true : undefined}
              >
                <Image
                  src={item.logo}
                  alt={item.role}
                  width={200}
                  height={80}
                  className="t-logo"
                  style={{ height: `${50 * item.scale}px` }}
                  priority={false}
                  draggable={false}
                />
                <div className="t-mark">&ldquo;</div>
                <p className="t-text">{item.quote}</p>
                <div className="t-attrib">
                  <div>
                    <p className="t-name">{item.name}</p>
                    <p className="t-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
