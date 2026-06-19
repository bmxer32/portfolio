'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

/*
 * Lenis-driven smooth scroll + global black→white morph.
 * The morph STARTS at the top of #skills ("Чем я могу помочь?")
 * and finishes at the bottom of the page (footer).
 * Before #skills the page stays fully black; after the footer it's fully white.
 */

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      return
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
    })

    window.__lenis = lenis

    // Make in-page anchor links (#portfolio, #contact…) use Lenis.
    const onAnchorClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length < 2) return
      
      if (id === '#hero') {
        e.preventDefault()
        lenis.scrollTo(0)
        return
      }

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
