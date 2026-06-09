import { useEffect, type RefObject } from 'react'

export function useTilt(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('.tilt')
    const cleanups: (() => void)[] = []

    cards.forEach((card) => {
      function onMove(e: MouseEvent) {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const rx = (y - 0.5) * -6
        const ry = (x - 0.5) * 6
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
        card.style.setProperty('--mx', `${x * 100}%`)
        card.style.setProperty('--my', `${y * 100}%`)
      }
      function onLeave() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [containerRef])
}
