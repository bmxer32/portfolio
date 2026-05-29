"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
)

const TERMINAL_LINES = [
  '> whoami',
  'Narodniy Team — Full Stack Dev',
  '> cat contacts.json',
  '{',
  '  "tg": "@Webe9",',
  '  "email": "v71072587@gmail.com",',
  '  "phone": "+7 930 950-24-54",',
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
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = time.toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit' })

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
              <div className={styles.discountIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>
              <h3>Ладно, скидочку 10% сделаем!</h3>
              <p>Вы очень настойчивы. Напишите нам в Telegram и скажите кодовое слово <b>"PASHALKA"</b>.</p>
              <a href="https://t.me/Webe9" target="_blank" rel="noreferrer" className={styles.btnDiscount}>
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

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>ЛОКАЦИЯ</span>
                <span className={styles.infoValue}>
                  <GlobeIcon /> Работаем по всему миру
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>МОСКОВСКОЕ ВРЕМЯ</span>
                <span className={styles.infoValue}>
                  {mounted ? timeString : "00:00"}
                  <span className={styles.statusDotInner}></span>
                  В сети
                </span>
              </div>
            </div>

            <p className={styles.subtitle}>
              Напишите нам — обсудим идею, сроки и бюджет.<br />
              Отвечаем в течение пары часов.
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
              <a href="tel:+79309502454" className={`${styles.btnEmail} ${styles.phoneBtn}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +7 930 950-24-54
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
                <p className={styles.statusTitle}>Открыты для новых проектов</p>
                <p className={styles.statusSub}>Готовы приступить в ближайшее время</p>
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
                <button 
                  type="button"
                  className={styles.quickLink}
                  onClick={() => {
                    window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ cursor: 'pointer', background: 'transparent' }}
                >
                  В начало
                </button>
              </div>
            </nav>

          </div>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
              <span>Next.js</span><span className={styles.dot}>•</span>
              <span>React</span><span className={styles.dot}>•</span>
              <span>Node.js</span><span className={styles.dot}>•</span>
              <span>Figma</span><span className={styles.dot}>•</span>
              <span>TypeScript</span><span className={styles.dot}>•</span>
              <span>Tailwind CSS</span><span className={styles.dot}>•</span>
              <span>PostgreSQL</span><span className={styles.dot}>•</span>
              <span>GSAP</span><span className={styles.dot}>•</span>
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
              <span>Next.js</span><span className={styles.dot}>•</span>
              <span>React</span><span className={styles.dot}>•</span>
              <span>Node.js</span><span className={styles.dot}>•</span>
              <span>Figma</span><span className={styles.dot}>•</span>
              <span>TypeScript</span><span className={styles.dot}>•</span>
              <span>Tailwind CSS</span><span className={styles.dot}>•</span>
              <span>PostgreSQL</span><span className={styles.dot}>•</span>
              <span>GSAP</span><span className={styles.dot}>•</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.logoWrapper}>
              <Image src="/logop.png" alt="Narodniy Team" width={24} height={24} className={styles.logoIcon} />
              <span className={styles.logo}>Narodniy Team</span>
            </div>
            <p className={styles.copy}>© {new Date().getFullYear()} Все права защищены.</p>
          </div>
          <div className={styles.legalInfo}>
            <p className={styles.copy}>ИП Скворцов М.А. ИНН 581304172576</p>
            <Link href="/privacy" className={styles.copy} style={{ textDecoration: 'underline' }}>Политика конфиденциальности</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}



