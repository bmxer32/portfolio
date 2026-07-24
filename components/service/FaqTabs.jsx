'use client'
import { useState } from 'react'
import styles from './service.module.css'

/*
 * FAQ для страницы сайтов: окно браузера, где вопросы — вкладки,
 * а адресная строка меняется вместе с выбранной темой. Ответы всех
 * вкладок остаются в DOM (hidden) — текст индексируется целиком.
 *
 * items: [{ tab, slug, q, a }]
 */
export default function FaqTabs({ items, tgLink }) {
  const [active, setActive] = useState(0)

  const onKeys = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setActive((active + 1) % items.length)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setActive((active - 1 + items.length) % items.length)
    }
  }

  return (
    <div className={styles.tfaq}>
      <div className={styles.tfaqWindow}>
        <div className={styles.tfaqChrome} aria-hidden="true">
          <span className={styles.tfaqDot} />
          <span className={styles.tfaqDot} />
          <span className={styles.tfaqDot} />
          <span className={styles.tfaqUrl}>narodniy-team.ru/faq/{items[active].slug}</span>
        </div>

        <div className={styles.tfaqTabs} role="tablist" aria-label="Темы вопросов" onKeyDown={onKeys}>
          {items.map((item, i) => (
            <button
              key={i}
              role="tab"
              id={`tfaq-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`tfaq-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              className={`${styles.tfaqTab} ${active === i ? styles.tfaqTabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {items.map((item, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`tfaq-panel-${i}`}
            aria-labelledby={`tfaq-tab-${i}`}
            hidden={active !== i}
            className={styles.tfaqPanel}
          >
            <h3 className={styles.tfaqQ}>{item.q}</h3>
            <p className={styles.tfaqA}>{item.a}</p>
          </div>
        ))}

        {tgLink && (
          <div className={styles.tfaqFoot}>
            <span>Не нашли свой вопрос?</span>
            <a href={tgLink} target="_blank" rel="noreferrer">Спросить в Telegram →</a>
          </div>
        )}
      </div>
    </div>
  )
}
