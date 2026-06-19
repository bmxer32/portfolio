'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import styles from './service.module.css'

const TG_LINK = 'https://t.me/Webe9'

/* ---- Fake monochrome app screens (no external assets, SEO-safe) ---- */

function ScreenFeed({ active }) {
  const v = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <>
      <div className={styles.scrTop}>
        <span className={styles.scrTitle}>Лента</span>
        <span className={styles.scrDot} />
      </div>
      {[0, 1].map((i) => (
        <motion.div key={i} custom={i} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrCard}>
          <div className={styles.scrRow}>
            <span className={styles.scrAvatar} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className={styles.scrBar} />
              <span className={styles.scrBarSm} />
            </div>
          </div>
        </motion.div>
      ))}
      <Nav active={0} />
    </>
  )
}

function ScreenStats({ active }) {
  const v = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <>
      <div className={styles.scrTop}>
        <span className={styles.scrTitle}>Аналитика</span>
        <span className={styles.scrDot} />
      </div>
      <div className={styles.scrGrid}>
        <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrStat}><div className={styles.scrStatNum}>+34%</div><div className={styles.scrStatLabel}>Конверсия</div></motion.div>
        <motion.div custom={1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrStat}><div className={styles.scrStatNum}>12.4k</div><div className={styles.scrStatLabel}>Активных</div></motion.div>
      </div>
      <motion.div custom={2} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={`${styles.scrCard} ${styles.scrCardTall}`}>
        <div className={styles.scrChart}>
          {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
            <motion.span 
              key={i} 
              initial={{ height: 0 }} 
              animate={active ? { height: `${h}%` } : { height: 0 }} 
              transition={{ delay: 0.3 + i * 0.05 }} 
              className={styles.scrChartBar} 
            />
          ))}
        </div>
      </motion.div>
      <Nav active={1} />
    </>
  )
}

function ScreenPay({ active }) {
  const v = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <>
      <div className={styles.scrTop}>
        <span className={styles.scrTitle}>Оплата</span>
        <span className={styles.scrDot} />
      </div>
      <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrCard}>
        <span className={styles.scrStatLabel}>К оплате</span>
        <span className={styles.scrStatNum} style={{ fontSize: 30 }}>2 490 ₽</span>
      </motion.div>
      <motion.div custom={1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={`${styles.scrCard} ${styles.scrCardTall}`}>
        <div className={styles.scrRow}><span className={styles.scrAvatar} /><span className={styles.scrBar} style={{ flex: 1 }} /></div>
        <div className={styles.scrRow}><span className={styles.scrAvatar} /><span className={styles.scrBar} style={{ flex: 1 }} /></div>
        <span className={styles.scrPill} style={{ width: '100%', textAlign: 'center' }}>Оплатить</span>
      </motion.div>
      <Nav active={2} />
    </>
  )
}

function ScreenProfile({ active }) {
  const v = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <>
      <div className={styles.scrTop}>
        <span className={styles.scrTitle}>Профиль</span>
        <span className={styles.scrDot} />
      </div>
      <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={`${styles.scrCard} ${styles.scrCardTall}`}>
        <span className={styles.scrAvatar} style={{ width: 56, height: 56, borderRadius: 18 }} />
        <span className={styles.scrBar} style={{ width: '70%' }} />
        <span className={styles.scrBarSm} />
        <span className={styles.scrBarSm} style={{ width: '45%' }} />
        <span className={styles.scrPill}>Подписаться</span>
      </motion.div>
      <Nav active={3} />
    </>
  )
}

function Nav({ active }) {
  return (
    <div className={styles.scrNav}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`${styles.scrNavDot} ${i === active ? styles.scrNavDotActive : ''}`} />
      ))}
    </div>
  )
}

const SCREENS = [ScreenFeed, ScreenStats, ScreenPay, ScreenProfile]

const STEPS = [
  { hero: true, screen: 0 },
  {
    label: 'аналитика',
    title: 'Рост по цифрам, а не на ощупь',
    line: 'Встроенная аналитика событий, A/B-тесты и push-уведомления — вы видите, что делают пользователи.',
    screen: 1,
  },
  {
    label: 'платежи',
    title: 'Платежи и подписки из коробки',
    line: 'Встроенные покупки App Store и Google Play, эквайринг РФ и интеграция с вашей CRM.',
    screen: 2,
  },
  {
    label: 'платформы',
    title: 'Нативная плавность на iOS и Android',
    line: 'Одна кодовая база на Flutter — два магазина. Приложение запускается мгновенно, анимации идут в 60–120 FPS.',
    screen: 3,
  },
]

export default function MobileShowcase() {
  const ref = useRef(null)
  const [idx, setIdx] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Subtle device tilt — only meaningful on desktop (mobile pins flat via CSS).
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [-12, 12]), { stiffness: 55, damping: 18 })
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [6, -6]), { stiffness: 55, damping: 18 })

  // Mobile top heading fades out as user scrolls into the tour; [0,0.2,1] keeps it
  // at opacity 0 for the rest of the tour so it doesn't reappear on the last slide
  const mobileTopOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [1, 0, 0])
  const mobileTopY = useTransform(scrollYProgress, [0, 0.18, 1], [0, -24, -24])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length + 0.00001)))
    setIdx(next)
  })

  const screenIdx = STEPS[idx].screen

  return (
    <section ref={ref} className={styles.tour} aria-label="Разработка мобильных приложений — обзор">
      <div className={styles.tourSticky}>
        {/* Mobile-only: heading fills the empty top space, fades as user scrolls to phone */}
        <motion.div
          className={styles.mobileTopText}
          aria-hidden="true"
          style={{ opacity: mobileTopOpacity, y: mobileTopY }}
        >
          <span className={styles.mobileTopTag}>iOS · Android · Flutter</span>
          <p className={styles.mobileH1}>разрабатываем<br/>приложения.</p>
        </motion.div>

        <div className={styles.tourInner}>

          {/* TEXT — crossfades between hero and capabilities */}
          <div className={styles.tourText}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                className={`${styles.step} ${i === idx ? styles.stepOn : ''}`}
                aria-hidden={i !== idx}
              >
                {s.hero ? (
                  <>
                    <span className={styles.eyebrow}>
                      <span className={styles.eyebrowDot} /> мобильная разработка
                    </span>
                    <h1 className={styles.h1}>
                      Разработка мобильных приложений <em>для&nbsp;iOS и Android</em>
                    </h1>
                    <p className={styles.lead}>
                      Проектируем, дизайним и программируем приложения для бизнеса —
                      от MVP до сложных сервисов с платежами и аналитикой.
                    </p>
                    <div className={styles.heroCtas}>
                      <a href={TG_LINK} target="_blank" rel="noreferrer" className="btn-primary">
                        Написать в Telegram
                      </a>
                      <a href="#pricing" className="btn-secondary">Цены</a>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={styles.stepLabel}>{s.label}</span>
                    <h2 className={styles.stepTitle}>{s.title}</h2>
                    <p className={styles.stepLine}>{s.line}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* DEVICE — the signature: pinned phone whose screen follows the scroll */}
          <div className={styles.tourDevice}>
            <motion.div className={styles.phone} style={{ rotateY, rotateX }}>
              <span className={styles.phoneNotch} />
              <div className={styles.phoneScreens}>
                {SCREENS.map((Screen, i) => (
                  <div key={i} className={`${styles.screen} ${i === screenIdx ? styles.screenActive : ''}`}>
                    <Screen active={i === screenIdx} />
                  </div>
                ))}
              </div>
            </motion.div>

            <div className={styles.tourProgress} aria-hidden="true">
              {STEPS.map((_, i) => (
                <span key={i} className={`${styles.progDot} ${i === idx ? styles.progDotOn : ''}`} />
              ))}
            </div>
            <div className={styles.tourHint} aria-hidden="true">
              {idx === 0 ? 'листайте — это тур по приложению' : `0${idx} / 0${STEPS.length - 1}`}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
