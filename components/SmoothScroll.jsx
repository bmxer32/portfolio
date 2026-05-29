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

// Flip text when background is already light enough that dark text reads well
// (bg ≈ 193 at p=0.68, contrast dark/bg ≈ 12:1 vs white/bg ≈ 1.7:1).
// The CSS transition: color 0.22s bridges the snap so it feels like a quick fade.
const FG_FLIP = 0.42
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

    // Tracks which side of the flip we're on so we only call setProperty on
    // threshold crossings — not every frame. The CSS transition on the
    // @property --fg-color / --fg-color-muted then handles the smooth animation.
    let prevFgDark = null

    const setFgColor = (isDark) => {
      if (isDark === prevFgDark) return
      prevFgDark = isDark
      root.style.setProperty('--fg-color',       isDark ? 'rgb(10,10,12)'          : 'rgb(250,250,250)')
      root.style.setProperty('--fg-color-muted',  isDark ? 'rgba(10,10,12,0.58)'   : 'rgba(250,250,250,0.58)')
    }

    const apply = (scroll) => {
      const { from, to } = getMorphRange()
      const range = to - from
      const p = clamp01(range > 0 ? (scroll - from) / range : 0)
      const bt = smooth(p)
      const ft = fgCurve(p)

      // Background: updated every frame by JS (smooth via Lenis).
      root.style.setProperty(
        '--bg-rgb',
        `${lerp(BG_START[0], BG_END[0], bt) | 0},${lerp(BG_START[1], BG_END[1], bt) | 0},${lerp(BG_START[2], BG_END[2], bt) | 0}`
      )
      // --fg-rgb: used for borders, bg-card, secondary tints — can snap.
      root.style.setProperty(
        '--fg-rgb',
        `${lerp(FG_START[0], FG_END[0], ft) | 0},${lerp(FG_START[1], FG_END[1], ft) | 0},${lerp(FG_START[2], FG_END[2], ft) | 0}`
      )
      root.style.setProperty('--scroll-progress', p.toFixed(4))

      // --fg-color / --fg-color-muted: text colors — set only at threshold crossing
      // so the CSS @property transition (0.5s ease) smoothly animates the change.
      setFgColor(p >= FG_FLIP)
    }

    apply(0)

    if (reduce) {
      const onScroll = () => apply(window.scrollY)

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

    // Expose for SectionNav (and any other component that needs direct Lenis access).
    window.__lenis = lenis

    lenis.on('scroll', ({ scroll }) => {
      apply(scroll)
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
      delete window.__lenis
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [])

  return children
}
