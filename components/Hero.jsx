'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)
  const sectionRef = useRef(null)

  // As the next section scrolls up over the sticky hero, fade + scale + blur it
  // away so it feels like the page "swallows" the hero.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(10px)'])
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])

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
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.bgBlobs}>
        <div ref={blob1Ref} className={`${styles.blob} ${styles.blob1}`} />
        <div ref={blob2Ref} className={`${styles.blob} ${styles.blob2}`} />
        <div ref={blob3Ref} className={`${styles.blob} ${styles.blob3}`} />
        <div className={styles.grain} />
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
          FULL<span className={styles.outlineText}> STACK</span>
        </h1>

        <h1 className={`${styles.hugeTitle} ${styles.rightAlign} ${styles.titleFloat2}`}>
          РАЗРАБОТЧИК
        </h1>

        <div className={styles.bottomInfo}>
          <p className={styles.snippet}>
            Создаю современные, быстрые и понятные сайты для бизнеса.<br />
            Упаковываю сложную логику в красивую функциональную обертку, чтобы вашим клиентам было удобно.
          </p>
          <a href="#portfolio" className={`cursor-hover ${styles.scrollDown}`}>
            Смотреть работы <span className={styles.arrow}>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
