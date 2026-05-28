'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

/*
 * Lenis-driven smooth scroll + global black→white morph.
 * The morph STARTS at the top of #skills ("Чем я могу помочь?")
 * and finishes at the bottom of the page (footer).
 * Before #skills the page stays fully black; after the footer it's fully white.
 */

const BG_START = [7, 7, 8]
const BG_END = [247, 247, 245]
const FG_START = [250, 250, 250]
const FG_END = [10, 10, 12]

const lerp = (a, b, t) => a + (b - a) * t
const clamp01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t)
const smooth = (t) => t * t * (3 - 2 * t) // smoothstep

// Foreground snaps at mid-grey crossing so text never disappears against bg.
const FG_FLIP = 0.5
const fgCurve = (p) => (p < FG_FLIP ? 0 : 1)

// Morph starts at #skills top, ends at #workflow top.
const getMorphRange = () => {
  const start = document.getElementById('skills')
  const end = document.getElementById('workflow')
  const pageH = document.documentElement.scrollHeight
  return {
    from: start ? start.getBoundingClientRect().top + window.scrollY : pageH * 0.5,
    to:   end   ? end.getBoundingClientRect().top   + window.scrollY : pageH * 0.85,
  }
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const apply = (scroll, limit) => {
      const { from, to } = getMorphRange()
      const range = to - from
      const p = range > 0 ? (scroll - from) / range : 0
      const bt = smooth(clamp01(p))
      const ft = fgCurve(clamp01(p))
      root.style.setProperty(
        '--bg-rgb',
        `${lerp(BG_START[0], BG_END[0], bt) | 0},${lerp(BG_START[1], BG_END[1], bt) | 0},${lerp(BG_START[2], BG_END[2], bt) | 0}`
      )
      root.style.setProperty(
        '--fg-rgb',
        `${lerp(FG_START[0], FG_END[0], ft) | 0},${lerp(FG_START[1], FG_END[1], ft) | 0},${lerp(FG_START[2], FG_END[2], ft) | 0}`
      )
      root.style.setProperty('--scroll-progress', clamp01(p).toFixed(4))
    }

    apply(0, 0)

    if (reduce) {
      const onScroll = () => apply(window.scrollY, 0)

      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => window.removeEventListener('scroll', onScroll)
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
    })

    lenis.on('scroll', ({ scroll }) => {
      apply(scroll, 0)
    })

    // Make in-page anchor links (#portfolio, #contact…) use Lenis.
    const onAnchorClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -60 })
    }
    document.addEventListener('click', onAnchorClick)

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [])

  return children
}
