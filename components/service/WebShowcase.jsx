'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import styles from './service.module.css'

/* ---- Fake browser screens ---- */

function ScreenLanding({ active }) {
  const v = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className={styles.dtRow} style={{ gap: 16 }}>
          <div className={styles.scrAvatar} style={{ width: 24, height: 24, borderRadius: 6 }} />
          <div className={styles.dtBar} style={{ width: 40 }} />
          <div className={styles.dtBar} style={{ width: 40 }} />
        </div>
        <div className={styles.scrPill} style={{ padding: '4px 12px', fontSize: 10 }}>Купить</div>
      </div>
      <div className={styles.dtContent} style={{ alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
        <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrTitle} style={{ fontSize: 24, textAlign: 'center' }}>Быстрый старт для вашего бизнеса</motion.div>
        <motion.div custom={1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtBar} style={{ width: '60%', height: 8, opacity: 0.5 }} />
        <motion.div custom={2} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtBar} style={{ width: '40%', height: 8, opacity: 0.5 }} />
        <motion.div custom={3} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.scrPill} style={{ marginTop: 12, background: 'var(--text-primary)', color: '#000' }}>Оставить заявку</motion.div>
      </div>
    </div>
  )
}

function ScreenCorporate({ active }) {
  const v = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ justifyContent: 'center', padding: '20px 0 10px' }}>
        <span className={styles.scrTitle}>Наши услуги</span>
      </div>
      <div className={styles.dtContent} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, padding: '10px 20px' }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <motion.div custom={i} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} key={i} className={styles.dtCard} style={{ height: 60, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div className={styles.scrAvatar} style={{ width: 16, height: 16, borderRadius: 4 }} />
            <div className={styles.dtBar} style={{ width: '50%', height: 4 }} />
          </motion.div>
        ))}
      </div>
      <div className={styles.dtRow} style={{ padding: '10px 20px', gap: 12 }}>
        <motion.div custom={6} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1, background: 'rgba(255,255,255,0.02)' }}>
          <span className={styles.scrStatNum}>15 лет</span>
          <span className={styles.scrStatLabel}>на рынке</span>
        </motion.div>
        <motion.div custom={7} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1, background: 'rgba(255,255,255,0.02)' }}>
          <span className={styles.scrStatNum}>&gt;500</span>
          <span className={styles.scrStatLabel}>проектов</span>
        </motion.div>
      </div>
    </div>
  )
}

function ScreenEcommerce({ active }) {
  const v = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <span className={styles.scrTitle}>Каталог товаров</span>
        <div className={styles.scrPill} style={{ padding: '4px 10px', fontSize: 10 }}>Корзина (3)</div>
      </div>
      <div className={styles.dtContent} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, padding: '20px' }}>
        {[0, 1, 2].map(i => (
          <motion.div custom={i} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className={styles.dtCard} style={{ height: 80, padding: 0, overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05))' }} />
            </div>
            <div className={styles.dtBar} style={{ width: '80%', height: 6 }} />
            <div className={styles.dtRow} style={{ justifyContent: 'space-between' }}>
              <span className={styles.scrTitle} style={{ fontSize: 12 }}>2 990 ₽</span>
              <div className={styles.scrPill} style={{ padding: '2px 8px', fontSize: 9 }}>+</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ScreenWebApp({ active }) {
  const v = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ height: '100%' }}>
        <div className={styles.dtSidebar} style={{ width: 60, padding: '16px 10px', alignItems: 'center' }}>
          <div className={styles.scrAvatar} style={{ marginBottom: 20, width: 24, height: 24 }} />
          {[0, 1, 2].map(i => (
            <motion.div custom={i} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} key={i} className={styles.scrAvatar} style={{ width: 20, height: 20, borderRadius: 6, marginBottom: 12, opacity: i === 0 ? 1 : 0.4 }} />
          ))}
        </div>
        <div className={styles.dtContent} style={{ padding: 20 }}>
          <div className={styles.dtRow} style={{ justifyContent: 'space-between', marginBottom: 20 }}>
            <span className={styles.scrTitle}>Аналитика платформы</span>
            <div className={styles.scrPill} style={{ padding: '4px 12px', fontSize: 10, background: '#22c55e', color: '#fff' }}>Экспорт</div>
          </div>
          <motion.div custom={3} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1 }}>
            <div className={styles.dtChart}>
              {[40, 65, 50, 80, 60, 95, 72, 85, 60, 45, 70, 80].map((h, i) => (
                <motion.span 
                  key={i} 
                  initial={{ height: 0 }} 
                  animate={active ? { height: `${h}%` } : { height: 0 }} 
                  transition={{ delay: 0.3 + i * 0.03 }} 
                  className={styles.dtChartBar}
                  style={{ background: '#3b82f6', width: 12 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const STEPS = [
  {
    eyebrow: 'Лендинги',
    title: <em>Быстрый</em>,
    titleSuffix: ' старт продаж',
    text: 'Создаем одностраничные сайты, которые конвертируют посетителей в клиентов. Сочный дизайн, правильная структура и максимальная скорость загрузки.',
    screen: <ScreenLanding />,
  },
  {
    eyebrow: 'Корпоративные',
    title: <em>Лицо</em>,
    titleSuffix: ' вашей компании',
    text: 'Многостраничные сайты с каталогами услуг, блогом и интеграцией с вашей CRM. Идеально для формирования имиджа и доверия клиентов.',
    screen: <ScreenCorporate />,
  },
  {
    eyebrow: 'E-commerce',
    title: <em>Онлайн</em>,
    titleSuffix: ' магазины',
    text: 'Полноценные интернет-магазины с корзиной, онлайн-оплатой, фильтрами и личным кабинетом. Работают быстро даже при 100 000 товаров.',
    screen: <ScreenEcommerce />,
  },
  {
    eyebrow: 'Web Apps',
    title: <em>Сложные</em>,
    titleSuffix: ' веб-сервисы',
    text: 'SaaS-платформы, личные кабинеты и кастомные дашборды. Пишем на React/Next.js со сложной бизнес-логикой и базами данных.',
    screen: <ScreenWebApp />,
  },
]

export default function WebShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [activeStep, setActiveStep] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const step = Math.min(Math.floor(v * STEPS.length), STEPS.length - 1)
    if (step !== activeStep && step >= 0) {
      setActiveStep(step)
    }
  })

  // Desktop tilt animation
  const rotateX = useTransform(scrollYProgress, [0, 1], [4, -4])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-6, 6])

  const mobileTopOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [1, 0, 0])
  const mobileTopY = useTransform(scrollYProgress, [0, 0.18, 1], [0, -24, -24])

  return (
    <div ref={containerRef} className={styles.tour}>
      <div className={styles.tourSticky}>
        <motion.div
          className={styles.mobileTopText}
          aria-hidden="true"
          style={{ opacity: mobileTopOpacity, y: mobileTopY }}
        >
          <span className={styles.mobileTopTag}>Web · React · Next.js</span>
          <p className={styles.mobileH1}>современные<br/>сайты.</p>
        </motion.div>

        <div className={`${styles.tourInner} ${styles.desktopTourInner}`}>
          <div className={styles.tourText}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                className={`${styles.step} ${i === activeStep ? styles.stepOn : ''}`}
                aria-hidden={i !== activeStep}
              >
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} /> {s.eyebrow}
                </div>
                <h2 className={styles.h1}>
                  {s.title}{s.titleSuffix}
                </h2>
                <p className={styles.lead}>{s.text}</p>

                {i === 0 && (
                  <div className={styles.heroCtas}>
                    <a href="https://t.me/Webe9" target="_blank" rel="noreferrer" className="btn-primary">Обсудить проект</a>
                    <a href="#faq" className="btn-secondary">Частые вопросы</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.tourDevice}>
            <motion.div
              className={styles.desktopWrapper}
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
            >
              <div className={styles.desktopHeader}>
                <span className={styles.desktopDot} style={{ background: '#ff5f56' }} />
                <span className={styles.desktopDot} style={{ background: '#ffbd2e' }} />
                <span className={styles.desktopDot} style={{ background: '#27c93f' }} />
              </div>
              <div className={styles.desktopScreen}>
                {STEPS.map((s, i) => (
                  <React.Fragment key={i}>
                    {React.cloneElement(s.screen, { active: i === activeStep })}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <div className={styles.tourProgress}>
              {STEPS.map((_, i) => (
                <div key={i} className={`${styles.progDot} ${i === activeStep ? styles.progDotOn : ''}`} />
              ))}
            </div>
            <div className={styles.tourHint}>Листайте вниз</div>
          </div>
        </div>
      </div>
    </div>
  )
}
