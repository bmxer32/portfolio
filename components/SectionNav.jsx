'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './SectionNav.module.css'

/* 'top' — особый id: скролл к началу страницы, без элемента в DOM */
const SERVICE_SECTIONS = [
  { id: 'top',      label: 'Обзор'        },
  { id: 'benefits', label: 'Преимущества' },
  { id: 'pricing',  label: 'Цены'         },
  { id: 'faq',      label: 'Вопросы'      },
  { id: 'contact',  label: 'Контакт'      },
]

const ROUTE_SECTIONS = {
  '/': [
    { id: 'top',       label: 'Главная' },
    { id: 'portfolio', label: 'Работы'  },
    { id: 'skills',    label: 'Стек'    },
    { id: 'workflow',  label: 'Процесс' },
    { id: 'contact',   label: 'Контакт' },
  ],
  '/uslugi/razrabotka-saytov': SERVICE_SECTIONS,
  '/uslugi/razrabotka-botov-s-ii': SERVICE_SECTIONS,
  '/uslugi/razrabotka-mobilnyh-prilozheniy': SERVICE_SECTIONS,
  '/uslugi/razrabotka-programm-na-pk': SERVICE_SECTIONS,
}

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
  const pathname = usePathname()
  const sections = ROUTE_SECTIONS[pathname]
  const [active, setActive] = useState('top')

  useEffect(() => {
    if (!sections) return
    setActive(sections[0].id)
    const check = () => {
      const mid = window.innerHeight * 0.5
      let current = sections[0].id
      sections.slice(1).forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < mid) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [pathname])

  if (!sections) return null;

  const scrollTo = (id) => {
    const lenis = window.__lenis
    if (id === 'top') {
      lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    // Portfolio: clip-path is 120px tall, scroll past it so heading is near top.
    const offset = id === 'portfolio' ? 60 : -60
    lenis
      ? lenis.scrollTo(el, { offset })
      : el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeIdx = sections.findIndex(s => s.id === active)
  const prev = activeIdx > 0 ? sections[activeIdx - 1] : null
  const next = activeIdx < sections.length - 1 ? sections[activeIdx + 1] : null

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
        {sections.map(({ id, label }) => (
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
