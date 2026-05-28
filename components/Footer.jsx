"use client"
import { useState, useEffect } from 'react'
import styles from './Footer.module.css'

const TERMINAL_LINES = [
  '> whoami',
  'Maxim Burenkov — Full Stack Dev',
  '> cat contacts.json',
  '{',
  '  "tg": "@Webe9",',
  '  "email": "v71072587@gmail.com",',
  '  "status": "open for work"',
  '}',
  '> echo "Ready to build something great?"',
  'Ready to build something great? ✓',
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < TERMINAL_LINES.length) {
        const line = TERMINAL_LINES[i]
        setVisibleLines(prev => [...prev, line])
        i++
      } else {
        clearInterval(interval)
      }
    }, 380)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <span className={styles.terminalTitle}>bash — portfolio</span>
      </div>
      <div className={styles.terminalBody}>
        {visibleLines.map((line, i) => (
          <p key={i} className={line.startsWith('>') ? styles.termCmd : styles.termOut}>
            {line}
          </p>
        ))}
        <span className={styles.cursor}>▋</span>
      </div>
    </div>
  )
}

export default function Footer() {
  const [runawayPos, setRunawayPos] = useState({ x: 0, y: 0 })
  const [attempts, setAttempts] = useState(0)
  const [showDiscount, setShowDiscount] = useState(false)

  const handleRunaway = () => {
    setAttempts(prev => {
      const next = prev + 1
      if (next >= 15) setShowDiscount(true)
      return next
    })

    const randomX = Math.floor(Math.random() * 220) - 110
    const randomY = Math.floor(Math.random() * 120) - 60
    setRunawayPos({ x: randomX, y: randomY })
  }

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>

        {showDiscount && (
          <div className={styles.discountOverlay} onClick={() => setShowDiscount(false)}>
            <div className={styles.discountCard} onClick={e => e.stopPropagation()}>
              <button className={styles.closeDiscount} onClick={() => setShowDiscount(false)}>×</button>
              <div className={styles.discountIcon}>🎁</div>
              <h3>Ладно, скидочку 10% сделаем!</h3>
              <p>Вы очень настойчивы. Напишите мне в Telegram и скажите кодовое слово <b>"PASHALKA"</b>.</p>
              <a href="https://t.me/Webe9" target="_blank" rel="noreferrer" className={styles.btnTg}>
                Забрать скидку
              </a>
            </div>
          </div>
        )}

        <div className={styles.top}>

          {/* LEFT — заголовок и контакты */}
          <div className={styles.left}>
            <div className="section-label">// Контакт</div>
            <h2 className={styles.title}>Готовы обсудить<br />проект?</h2>
            <p className={styles.subtitle}>
              Напишите мне — обсудим идею, сроки и бюджет.<br />
              Отвечаю в течение пары часов.
            </p>

            <div className={styles.contactLinks}>
              <a href="https://t.me/Webe9" target="_blank" rel="noreferrer" className={styles.btnTg}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
              <a href="mailto:v71072587@gmail.com" className={styles.btnEmail}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </div>

            <div className={styles.easterEgg}>
              <span className={styles.easterEggHint}>Хотите бесплатно?</span>
              <button
                className={styles.runawayBtn}
                onMouseEnter={handleRunaway}
                onTouchStart={handleRunaway}
                onClick={handleRunaway}
                style={{ transform: `translate(${runawayPos.x}px, ${runawayPos.y}px)` }}
              >
                Сделать бесплатно
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>

            {/* Статус */}
            <div className={styles.statusBlock}>
              <span className={styles.statusDot}></span>
              <div>
                <p className={styles.statusTitle}>Открыт для новых проектов</p>
                <p className={styles.statusSub}>Готов приступить в ближайшее время</p>
              </div>
            </div>

            {/* Терминал */}
            <Terminal />

            {/* Навигация */}
            <nav className={styles.quickLinks}>
              <span className={styles.quickTitle}>Навигация:</span>
              <div className={styles.linkRow}>
                <a href="#skills" className={styles.quickLink}>Стек</a>
                <a href="#portfolio" className={styles.quickLink}>Проекты</a>
                <a href="#workflow" className={styles.quickLink}>Процесс</a>
                <a href="#contact" className={styles.quickLink}>Контакт</a>
              </div>
            </nav>

          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.logo}>Maxim Burenkov</span>
          <p className={styles.copy}>© {new Date().getFullYear()} Все права защищены.</p>
        </div>

      </div>
    </footer>
  )
}



