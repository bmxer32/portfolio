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
    if (id === 'hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.nav} aria-label="Навигация по разделам">
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
    </nav>
  )
}
