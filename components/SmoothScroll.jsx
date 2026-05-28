'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

/*
 * Lenis-driven smooth scroll + global black→white morph.
 * On every frame we map scroll progress (0→1) to two CSS variables on <html>:
 *   --bg-rgb : page background, dark → light
 *   --fg-rgb : foreground/text, light → dark
 * The whole palette in globals.css is built on top of these, so the entire
 * site fades from black to white as you scroll.
 */

const BG_START = [7, 7, 8]      // near-black
const BG_END = [247, 247, 245]  // near-white
const FG_START = [250, 250, 250]
const FG_END = [10, 10, 12]

const lerp = (a, b, t) => a + (b - a) * t
const clamp01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t)
const smooth = (t) => t * t * (3 - 2 * t) // smoothstep

/*
 * The background morphs smoothly dark→light. The foreground CANNOT do the same
 * continuously: somewhere in the middle bg and fg would both be mid-grey and
 * text would vanish (contrast 0). So the foreground SNAPS between light and dark
 * right at the point where the background crosses mid-grey (smooth(p)=0.5 → p≈0.5).
 * A tiny ramp width avoids a 1-frame hard cut while never resting at grey.
 */
const FG_FLIP = 0.5
const fgCurve = (p) => (p < FG_FLIP ? 0 : 1)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const apply = (p) => {
      const bt = smooth(clamp01(p))
      const ft = fgCurve(p)
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

    apply(0)

    if (reduce) {
      // No smooth scroll, but still morph on native scroll.
      const onScroll = () => {
        const limit = document.documentElement.scrollHeight - window.innerHeight
        apply(limit > 0 ? window.scrollY / limit : 0)
      }
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

    lenis.on('scroll', ({ scroll, limit }) => {
      apply(limit > 0 ? scroll / limit : 0)
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
