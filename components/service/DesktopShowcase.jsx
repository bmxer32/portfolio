'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import styles from './service.module.css'

const TG_LINK = 'https://t.me/Webe9'

/* ---- Fake desktop screens ---- */

function ScreenDashboard({ active }) {
  const v = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ height: '100%' }}>
        <div className={styles.dtSidebar}>
          <div className={styles.scrAvatar} style={{ marginBottom: 12, width: 24, height: 24 }} />
          {[0, 1, 2, 3].map(i => <div key={i} className={styles.dtBar} style={{ width: i === 0 ? '100%' : '60%' }} />)}
        </div>
        <div className={styles.dtContent}>
          <div className={styles.dtRow} style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <span className={styles.scrTitle}>Дашборд</span>
            <div className={styles.dtBar} style={{ width: 80 }} />
          </div>
          <div className={styles.dtRow}>
            <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1 }}>
              <span className={styles.scrStatNum} style={{ fontSize: 20 }}>142k</span>
              <span className={styles.scrStatLabel}>Пользователей</span>
            </motion.div>
            <motion.div custom={1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1 }}>
              <span className={styles.scrStatNum} style={{ fontSize: 20 }}>+8.4%</span>
              <span className={styles.scrStatLabel}>Рост</span>
            </motion.div>
          </div>
          <motion.div custom={2} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ flex: 1, marginTop: 4 }}>
            <div className={styles.dtChart}>
              {[40, 65, 50, 80, 60, 95, 72, 85, 60, 45].map((h, i) => (
                <motion.span 
                  key={i} 
                  initial={{ height: 0 }} 
                  animate={active ? { height: `${h}%` } : { height: 0 }} 
                  transition={{ delay: 0.2 + i * 0.05 }} 
                  className={`${styles.dtChartBar} ${i === 5 ? styles.dtChartBarHighlight : ''}`} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ScreenCRM({ active }) {
  const v = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ justifyContent: 'space-between', marginBottom: 16 }}>
        <span className={styles.scrTitle}>CRM Система</span>
        <div className={styles.dtRow} style={{ width: 'auto' }}>
          <span className={styles.scrPill} style={{ padding: '4px 10px', fontSize: 10 }}>+ Клиент</span>
        </div>
      </div>
      <div className={styles.dtContent}>
        {[0, 1, 2, 3].map(i => (
          <motion.div custom={i} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} key={i} className={styles.dtRow} style={{ padding: '8px 0', borderBottom: '1px solid rgba(var(--fg-rgb), 0.05)' }}>
            <div className={styles.scrAvatar} style={{ width: 20, height: 20, borderRadius: 4 }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div className={styles.dtBar} style={{ width: '40%' }} />
              <div className={styles.dtBar} style={{ width: '20%', opacity: 0.5 }} />
            </div>
            <div className={styles.scrPill} style={{ opacity: 0.7, padding: '2px 6px', fontSize: 9 }}>Активен</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ScreenIntegration({ active }) {
  const v = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.1, duration: 0.4 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ justifyContent: 'center', marginBottom: 20, paddingTop: 20 }}>
        <span className={styles.scrTitle}>Синхронизация данных</span>
      </div>
      <div className={styles.dtRow} style={{ justifyContent: 'center', gap: 20 }}>
        <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
          <div className={styles.scrAvatar} style={{ borderRadius: 8, width: 32, height: 32 }} />
        </motion.div>
        <motion.div custom={1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} style={{ display: 'flex', gap: 4 }}>
          <span className={styles.scrDot} style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span className={styles.scrDot} style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span className={styles.scrDot} style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
        </motion.div>
        <motion.div custom={2} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center' }}>
           <div className={styles.scrAvatar} style={{ borderRadius: 8, width: 32, height: 32 }} />
        </motion.div>
      </div>
      <div className={styles.dtRow} style={{ justifyContent: 'center', marginTop: 20 }}>
        <motion.div custom={3} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtBar} style={{ width: 120, height: 8, borderRadius: 4, background: 'rgba(var(--fg-rgb), 0.1)' }}>
          <motion.div initial={{ width: 0 }} animate={active ? { width: '100%' } : { width: 0 }} transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }} style={{ height: '100%', background: '#22c55e', borderRadius: 4 }} />
        </motion.div>
      </div>
    </div>
  )
}

function ScreenSecurity({ active }) {
  const v = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
  }
  return (
    <div className={`${styles.dtScreen} ${active ? styles.dtScreenOn : styles.screenOff}`}>
      <div className={styles.dtRow} style={{ marginBottom: 16 }}>
        <span className={styles.scrTitle}>Безопасность</span>
      </div>
      <motion.div custom={0} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} className={styles.dtCard} style={{ background: 'rgba(34, 197, 94, 0.05)', borderColor: 'rgba(34, 197, 94, 0.2)' }}>
        <div className={styles.dtRow}>
          <span className={styles.scrDot} style={{ background: '#22c55e' }} />
          <span className={styles.scrStatLabel} style={{ color: '#22c55e' }}>Система защищена</span>
        </div>
      </motion.div>
      <div className={styles.dtContent} style={{ marginTop: 12 }}>
        {[0, 1].map(i => (
          <motion.div custom={i+1} variants={v} initial="hidden" animate={active ? "visible" : "hidden"} key={i} className={styles.dtRow} style={{ justifyContent: 'space-between' }}>
            <div className={styles.dtBar} style={{ width: '60%' }} />
            <div className={styles.scrPill} style={{ padding: '2px 8px' }}>Вкл</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const STEPS = [
  {
    eyebrow: 'Скорость',
    title: <em>Быстрые</em>,
    titleSuffix: ' десктопные приложения',
    text: 'Создаем мощные программы для Windows, macOS и Linux. Используем современные фреймворки (Electron, Tauri), чтобы интерфейс летал, а приложение потребляло минимум памяти.',
    screen: <ScreenDashboard />,
  },
  {
    eyebrow: 'CRM & ERP',
    title: <em>Автоматизация</em>,
    titleSuffix: ' бизнеса',
    text: 'Разрабатываем кастомные CRM, складские системы и админ-панели. Сложная логика с удобным и современным дизайном, где каждый клик на своем месте.',
    screen: <ScreenCRM />,
  },
  {
    eyebrow: 'Интеграции',
    title: <em>Связь</em>,
    titleSuffix: ' с железом и API',
    text: 'Подключаем кассовое оборудование, IoT-устройства, базы данных и любые сторонние сервисы по API. Все работает синхронно и безопасно.',
    screen: <ScreenIntegration />,
  },
  {
    eyebrow: 'Безопасность',
    title: <em>Защита</em>,
    titleSuffix: ' данных',
    text: 'Шифрование локальных данных, защищенные протоколы обмена с сервером, надежная система авторизации. Ваши коммерческие тайны под замком.',
    screen: <ScreenSecurity />,
  },
]

export default function DesktopShowcase() {
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

  const rotateX = useTransform(scrollYProgress, [0, 1], [4, -4])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-6, 6])
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 0])

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
          <span className={styles.mobileTopTag}>Windows · macOS · Linux</span>
          <p className={styles.mobileH1}>десктопные<br/>программы.</p>
        </motion.div>

        <div className={`${styles.tourInner} ${styles.desktopTourInner}`}>
          
          <div className={styles.tourText}>
            {STEPS.map((s, i) => {
              const isActive = i === activeStep
              return (
                <div key={i} className={`${styles.step} ${isActive ? styles.stepOn : ''}`}>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} /> {s.eyebrow}
                  </div>
                  <h2 className={styles.h1}>
                    {s.title}
                    <br />
                    {s.titleSuffix}
                  </h2>
                  <p className={styles.lead}>{s.text}</p>
                  
                  {i === 0 && (
                    <div className={styles.heroCtas}>
                      <a href={TG_LINK} target="_blank" rel="noreferrer" className="btn-primary">Обсудить проект</a>
                      <a href="#faq" className="btn-secondary">Частые вопросы</a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className={styles.tourDevice}>
            <motion.div 
              className={styles.laptopWrapper}
              style={{ rotateX, rotateY, z: translateZ }}
            >
              <div className={styles.laptopScreenContainer}>
                <div className={styles.laptopCamera} />
                <div className={styles.laptopDisplay}>
                  {STEPS.map((s, i) => (
                    <div key={i} style={{ display: 'contents' }}>
                      {React.cloneElement(s.screen, { active: i === activeStep })}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.laptopBase}>
                <div className={styles.laptopKeyboard}>
                  {Array.from({length: 42}).map((_, i) => (
                    <div key={i} style={{ 
                      width: i === 14 || i === 28 ? 40 : 16, 
                      height: 12, 
                      background: '#1a1a1a', 
                      borderRadius: 2,
                      boxShadow: '0 1px 1px rgba(0,0,0,0.5)'
                    }} />
                  ))}
                  <div style={{ width: 120, height: 12, background: '#1a1a1a', borderRadius: 2, margin: '0 auto' }} />
                </div>
                <div className={styles.laptopTrackpad} />
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
