'use client'
import { useEffect } from 'react'

/**
 * Disables pinch-to-zoom on iOS Safari via WebKit gesture events.
 * These are non-standard events that ONLY fire on pinch gestures —
 * they never touch scrolling, so Lenis stays smooth.
 *
 * Android pinch-zoom + horizontal swipe are blocked by
 * touch-action: pan-y on body (in globals.css).
 */
export default function NoZoom() {
  useEffect(() => {
    const prevent = (e) => e.preventDefault()

    document.addEventListener('gesturestart', prevent, { passive: false })
    document.addEventListener('gesturechange', prevent, { passive: false })
    document.addEventListener('gestureend', prevent, { passive: false })

    return () => {
      document.removeEventListener('gesturestart', prevent)
      document.removeEventListener('gesturechange', prevent)
      document.removeEventListener('gestureend', prevent)
    }
  }, [])
  return null
}
