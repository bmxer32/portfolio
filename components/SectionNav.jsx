'use client'
import { useEffect, useState } from 'react'
import styles from './SectionNav.module.css'

const SECTIONS = [
  { id: 'hero',      label: 'Главная' },
  { id: 'portfolio', label: 'Работы'  },
  { id: 'skills',    label: 'Стек'    },
  { id: 'workflow',  label: 'Процесс' },
  { id: 'contact',   label: 'Контакт' },
]

const Chevron = ({ dir }) => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path
      d={dir === 'up' ? 'M1 5L5 1L9 5' : 'M1 1L5 5L9 1'}
      stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

export default function SectionNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const check = () => {
      const mid = window.innerHeight * 0.5
      let current = 'hero'
      SECTIONS.slice(1).forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < mid) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  const scrollTo = (id) => {
    const lenis = window.__lenis
    if (id === 'hero') {
      lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    lenis
      ? lenis.scrollTo(el, { offset: -60 })
      : el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeIdx = SECTIONS.findIndex(s => s.id === active)
  const prev = activeIdx > 0 ? SECTIONS[activeIdx - 1] : null
  const next = activeIdx < SECTIONS.length - 1 ? SECTIONS[activeIdx + 1] : null

  return (
    <nav className={styles.nav} aria-label="Навигация по разделам">

      {/* Up arrow */}
      <button
        className={`${styles.arrow} ${!prev ? styles.arrowHidden : ''}`}
        onClick={() => prev && scrollTo(prev.id)}
        aria-label="Предыдущая секция"
        tabIndex={prev ? 0 : -1}
      >
        <Chevron dir="up" />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        <div className={styles.track} />
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.item} ${active === id ? styles.active : ''}`}
            onClick={() => scrollTo(id)}
            aria-label={label}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.dot} />
          </button>
        ))}
      </div>

      {/* Down arrow */}
      <button
        className={`${styles.arrow} ${!next ? styles.arrowHidden : ''}`}
        onClick={() => next && scrollTo(next.id)}
        aria-label="Следующая секция"
        tabIndex={next ? 0 : -1}
      >
        <Chevron dir="down" />
      </button>

    </nav>
  )
}
