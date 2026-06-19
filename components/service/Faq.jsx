'use client'
import { useRef, useState } from 'react'
import styles from './service.module.css'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => (
        <FaqItem
          key={i}
          item={item}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQ}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <svg
          className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <div
        className={styles.faqA}
        style={{ maxHeight: isOpen ? `${bodyRef.current?.scrollHeight ?? 0}px` : 0 }}
      >
        <p ref={bodyRef} className={styles.faqAInner}>{item.a}</p>
      </div>
    </div>
  )
}
