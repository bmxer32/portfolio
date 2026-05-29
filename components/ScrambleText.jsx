'use client'
import { useEffect, useRef, useState } from 'react'

const POOL_LAT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$%&'
const POOL_CYR = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ0123456789#@!'

const rnd = (p) => p[Math.floor(Math.random() * p.length)]
const rndFor = (ch) => (/[А-ЯЁа-яё]/.test(ch) ? rnd(POOL_CYR) : rnd(POOL_LAT))

/*
 * Renders `children` as text that scrambles in on mount.
 * Spaces are never scrambled. Letters reveal left→right with
 * a brief random-char phase before settling.
 *
 * Props:
 *   delay    – ms before animation starts (for staggering siblings)
 *   duration – ms for the full wave to finish (excl. delay)
 */
export default function ScrambleText({ children, delay = 0, duration = 900 }) {
  const text = String(children)
  const [out, setOut] = useState('')
  const raf = useRef(null)

  useEffect(() => {
    const chars = text.split('')
    const nonSpace = chars.filter(c => c !== ' ').length
    const stagger = (duration * 0.55) / Math.max(nonSpace, 1) // wave spread
    const settle = 180 // ms each char scrambles before settling

    let nsIdx = 0
    const startTimes = chars.map(c => c === ' ' ? null : (nsIdx++) * stagger)
    const origin = performance.now() + delay

    const tick = (now) => {
      if (now < origin) { raf.current = requestAnimationFrame(tick); return }
      const elapsed = now - origin
      let allDone = true
      const result = chars.map((ch, i) => {
        if (ch === ' ') return ' '
        const t = startTimes[i]
        if (elapsed >= t + settle) return ch         // settled
        allDone = false
        if (elapsed >= t) return rndFor(ch)          // scrambling
        return rndFor(ch)                            // not yet reached (random noise)
      })
      setOut(result.join(''))
      if (!allDone) raf.current = requestAnimationFrame(tick)
      else setOut(text)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [text, delay, duration])

  return <>{out}</>
}
