'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { testimonials } from '@/lib/content'

// px/second — 6 cards × 400px avg = ~2400px half-width → ~55s full loop
const SPEED = 44

export default function Testimonials() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)
  const halfWidthRef = useRef(0)
  const rafRef = useRef<number>(0)
  const lastTsRef = useRef<number>(0)

  // Drag state
  const dragActiveRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartPosRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Measure loop point: left edge of the 7th card (first duplicate)
    const measureId = requestAnimationFrame(() => {
      const card7 = track.children[6] as HTMLElement | undefined
      halfWidthRef.current = card7 ? card7.offsetLeft : track.scrollWidth / 2
    })

    function step(ts: number) {
      if (!pausedRef.current && !dragActiveRef.current) {
        const dt = lastTsRef.current ? ts - lastTsRef.current : 0
        posRef.current += (SPEED * dt) / 1000
        const half = halfWidthRef.current
        if (half > 0 && posRef.current >= half) {
          posRef.current -= half
        }
        if (track) track.style.transform = `translateX(-${posRef.current}px)`
      }
      lastTsRef.current = ts
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(measureId)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function onMouseEnter() { pausedRef.current = true }
  function onMouseLeave() {
    pausedRef.current = false
    dragActiveRef.current = false
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragActiveRef.current = true
    dragStartXRef.current = e.clientX
    dragStartPosRef.current = posRef.current
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragActiveRef.current) return
    const delta = dragStartXRef.current - e.clientX
    const half = halfWidthRef.current
    let next = dragStartPosRef.current + delta
    if (half > 0) next = ((next % half) + half) % half
    posRef.current = next
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${next}px)`
  }

  function onPointerUp() {
    dragActiveRef.current = false
  }

  // Duplicate cards for seamless loop
  const allCards = [...testimonials.items, ...testimonials.items]

  return (
    <section id="voices" className="testimonials">
      <div className="container">
        <p className="eyebrow reveal">{testimonials.eyebrow}</p>
        <h2 className="reveal" data-delay="1">
          {testimonials.headlinePlain}
          <em>{testimonials.headlineItalic}</em>
        </h2>
      </div>

      <div
        ref={wrapperRef}
        className="t-carousel-wrapper"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={trackRef} className="t-carousel-track">
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
    </section>
  )
}
