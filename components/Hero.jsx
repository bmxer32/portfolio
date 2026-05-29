'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrambleText from './ScrambleText'
import styles from './Hero.module.css'

// Decorative floating glyphs for the hero background.
const TG = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
)
const CODE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
)
const TERMINAL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
)
const BRACES = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>
)
const CURSOR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>
)
const PHONE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

const TG_LINK = 'https://t.me/Webe9'
const TEL_LINK = 'tel:+79309502454'

const FLOAT_ICONS = [
  { svg: TG,       top: '18%', left: '12%', size: '40px', dur: '13s', delay: '0s',   opacity: 0.20, link: TG_LINK },
  { svg: CODE,     top: '64%', left: '8%',  size: '32px', dur: '17s', delay: '-3s',  opacity: 0.16, hideOnMobile: true },
  { svg: TERMINAL, top: '30%', left: '84%', size: '36px', dur: '15s', delay: '-6s',  opacity: 0.17 },
  { svg: BRACES,   top: '72%', left: '80%', size: '34px', dur: '19s', delay: '-2s',  opacity: 0.15 },
  { svg: TG,       top: '82%', left: '46%', size: '26px', dur: '21s', delay: '-9s',  opacity: 0.13, link: TG_LINK, hideOnMobile: true },
  { svg: CURSOR,   top: '14%', left: '62%', size: '28px', dur: '16s', delay: '-5s',  opacity: 0.16, hideOnMobile: true },
  { svg: PHONE,    top: '52%', left: '90%', size: '32px', dur: '18s', delay: '-4s',  opacity: 0.22, link: TEL_LINK, label: 'Телефон' },
]

export default function Hero() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)
  const sectionRef = useRef(null)

  // Use global scrollY to avoid jitter with position: sticky
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 800], [1, 0.92])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const filter = useTransform(scrollY, [0, 800], ['blur(0px)', 'blur(10px)'])
  const y = useTransform(scrollY, [0, 800], [0, 60])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let raf

    const onMove = (e) => { cx = e.clientX; cy = e.clientY }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      const px = (cx / window.innerWidth - 0.5) * 100
      const py = (cy / window.innerHeight - 0.5) * 100
      if (blob1Ref.current)
        blob1Ref.current.style.transform = `translate(calc(-50% + ${px * 0.6}px), calc(-50% + ${py * 0.6}px))`
      if (blob2Ref.current)
        blob2Ref.current.style.transform = `translate(calc(-50% + ${px * -0.9}px), calc(-50% + ${py * -0.9}px))`
      if (blob3Ref.current)
        blob3Ref.current.style.transform = `translate(calc(-50% + ${px * 1.3}px), calc(-50% + ${py * 0.4}px))`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      <div className={styles.bgBlobs}>
        <div ref={blob1Ref} className={`${styles.blob} ${styles.blob1}`} />
        <div ref={blob2Ref} className={`${styles.blob} ${styles.blob2}`} />
        <div ref={blob3Ref} className={`${styles.blob} ${styles.blob3}`} />
        <div className={styles.grain} />
      </div>

      {/* Decorative floating icons — behind the content */}
      <div className={styles.floatLayer} aria-hidden="true">
        {FLOAT_ICONS.filter(ic => !ic.link).map((ic, i) => (
          <span
            key={i}
            className={`${styles.floatIcon} ${styles['float' + (i % 3)]} ${ic.hideOnMobile ? styles.hideOnMobile : ''}`}
            style={{
              top: ic.top, left: ic.left, width: ic.size, height: ic.size,
              animationDuration: ic.dur, animationDelay: ic.delay, opacity: ic.opacity,
            }}
          >
            {ic.svg}
          </span>
        ))}
      </div>

      {/* Clickable floating icons — above the content so they're always tappable */}
      <div className={styles.floatLinkLayer}>
        {FLOAT_ICONS.filter(ic => ic.link).map((ic, i) => (
          <a
            key={i}
            href={ic.link}
            target={ic.link.startsWith('tel:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={ic.label || 'Telegram'}
            className={`${styles.floatIcon} ${styles.floatLink} ${styles['float' + (i % 3)]} ${ic.hideOnMobile ? styles.hideOnMobile : ''}`}
            style={{
              top: ic.top, left: ic.left, width: ic.size, height: ic.size,
              animationDuration: ic.dur, animationDelay: ic.delay, opacity: ic.opacity,
            }}
          >
            {ic.svg}
          </a>
        ))}
      </div>

      <motion.div className={styles.content} style={{ scale, opacity, filter, y }}>

        <div className={styles.topInfoBar}>
          <div className={styles.infoBadge}>
            <span className={styles.pulsingDot}></span> Приём заявок 24/7
          </div>
          <div className={styles.infoText}>Full Stack Разработка</div>
          <div className={styles.infoText}>UX/UI Интеграция</div>
        </div>

        <h1 className={`${styles.hugeTitle} ${styles.titleFloat1}`}>
          <ScrambleText delay={200} duration={900} repeatEvery={7000}>FULL</ScrambleText>
          <span className={styles.outlineText}>
            <ScrambleText delay={280} duration={900} repeatEvery={7000}> STACK</ScrambleText>
          </span>
        </h1>

        <h1 className={`${styles.hugeTitle} ${styles.rightAlign} ${styles.titleFloat2}`}>
          <ScrambleText delay={500} duration={1100} repeatEvery={7000}>РАЗРАБОТКА</ScrambleText>
        </h1>

        <div className={styles.bottomInfo}>
          <p className={styles.snippet}>
            Создаем современные, быстрые и понятные сайты для бизнеса.<br />
            Упаковываем сложную логику в красивую функциональную обертку, чтобы вашим клиентам было удобно.
          </p>
          <a href="#portfolio" className={`cursor-hover ${styles.scrollDown}`}>
            Смотреть работы <span className={styles.arrow}>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
