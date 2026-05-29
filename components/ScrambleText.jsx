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
export default function ScrambleText({ children, delay = 0, duration = 900, repeatEvery = 0 }) {
  const text = String(children)
  const [out, setOut] = useState('')
  const raf = useRef(null)

  useEffect(() => {
    const chars = text.split('')
    const nonSpace = chars.filter(c => c !== ' ').length
    const stagger = (duration * 0.55) / Math.max(nonSpace, 1)
    const settle = 180

    let nsIdx = 0
    const startTimes = chars.map(c => c === ' ' ? null : (nsIdx++) * stagger)

    let timer = null

    const runAnimation = (extraDelay = 0) => {
      cancelAnimationFrame(raf.current)
      const origin = performance.now() + extraDelay

      const tick = (now) => {
        if (now < origin) { raf.current = requestAnimationFrame(tick); return }
        const elapsed = now - origin
        let allDone = true
        const result = chars.map((ch, i) => {
          if (ch === ' ') return ' '
          const t = startTimes[i]
          if (elapsed >= t + settle) return ch
          allDone = false
          return rndFor(ch)
        })
        setOut(result.join(''))
        if (!allDone) {
          raf.current = requestAnimationFrame(tick)
        } else {
          setOut(text)
          if (repeatEvery > 0) {
            const animDuration = extraDelay + duration
            const wait = Math.max(repeatEvery - animDuration, 500)
            timer = setTimeout(() => runAnimation(0), wait)
          }
        }
      }

      raf.current = requestAnimationFrame(tick)
    }

    runAnimation(delay)
    return () => { cancelAnimationFrame(raf.current); clearTimeout(timer) }
  }, [text, delay, duration, repeatEvery])

  return <>{out}</>
}
