'use client'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import styles from './service.module.css'

const STEPS = [
  { hero: true },
  {
    label: 'естественное общение',
    title: 'Понимает живую речь',
    line: 'Забудьте о глупых кнопочных меню. Бот понимает текст с опечатками, сленг и сложные запросы.',
  },
  {
    label: 'экспертность',
    title: 'Консультирует как профи',
    line: 'Бот загрузит все данные с вашего сайта или базы знаний и будет отвечать без ошибок.',
  },
  {
    label: 'результат',
    title: 'Закрывает сделки',
    line: 'Расскажет о ваших услугах, ответит на частые вопросы и запишет клиента на прием.',
  },
]

function ScreenChat({ active }) {
  return (
    <div className={styles.botChat}>
      {/* User msg 1 */}
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className={`${styles.chatMsg} ${styles.chatMsgUser}`}>
        Привет! Хочу заказать разработку бота. Сколько это будет стоить и какие сроки?
      </motion.div>

      {/* Bot msg 1 */}
      <motion.div initial={{opacity:0, y:10}} animate={active >= 1 ? {opacity:1, y:0} : {opacity:0, y:10}} transition={{delay:0.1}} className={`${styles.chatMsg} ${styles.chatMsgBot}`}>
        Здравствуйте! 👋 Базовый бот начинается от 10 000 руб, ИИ-бот поддержки — от 30 000 руб, а сложная бот-система — от 80 000 руб.
      </motion.div>

      {/* User msg 2 */}
      <motion.div initial={{opacity:0, y:10}} animate={active >= 2 ? {opacity:1, y:0} : {opacity:0, y:10}} transition={{delay:0.2}} className={`${styles.chatMsg} ${styles.chatMsgUser}`}>
        Нам нужен умный бот для ответов на вопросы клиентов по нашей базе знаний.
      </motion.div>

      {/* Bot msg 2 */}
      <motion.div initial={{opacity:0, y:10}} animate={active >= 3 ? {opacity:1, y:0} : {opacity:0, y:10}} transition={{delay:0.3}} className={`${styles.chatMsg} ${styles.chatMsgBot}`}>
        Отличная задача! ИИ-бот займет около 2-3 недель. Для более точной оценки я могу передать ваши контакты менеджеру или мы можем составить бриф прямо здесь. Что выберете?
      </motion.div>
    </div>
  )
}

export function BotShowcaseInner({ scrollYProgress }) {
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

  // Mobile layout tuning
  const botScale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  // Mobile top text fade out
  const mobileTopOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0])
  const mobileTopY = useTransform(scrollYProgress, [0, 0.2, 1], [0, -24, -24])

  return (
    <div className={styles.tourSticky}>
        
        <motion.div
          className={styles.mobileTopText}
          aria-hidden="true"
          style={{ opacity: mobileTopOpacity, y: mobileTopY }}
        >
          <span className={styles.mobileTopTag}>Автоматизация · ИИ</span>
          <p className={styles.mobileH1}>боты<br/>поддержки.</p>
        </motion.div>

        <div className={`${styles.tourInner} ${styles.botTourInner}`}>
          
          <div className={styles.tourText}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                className={`${styles.step} ${i === activeStep ? styles.stepOn : ''}`}
                aria-hidden={i !== activeStep}
              >
                {s.hero ? (
                  <>
                    <div className={styles.eyebrow}>
                      <span className={styles.eyebrowDot} /> Демонстрация
                    </div>
                    <h2 className={styles.h1}>
                      Умный бот,<br/> <em>отвечающий за вас</em>
                    </h2>
                  </>
                ) : (
                  <>
                    <div className={styles.stepLabel}>{s.label}</div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepLine}>{s.line}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className={styles.tourDevice}>
            <div className={styles.botWrapper}>
              <div className={styles.botHeader}>
                <div className={styles.botAvatar}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2c0-1.1.9-2 2-2z" />
                    <path d="M12 6c3.3 0 6 2.7 6 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4c0-3.3 2.7-6 6-6z" />
                    <path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M9 13v2" /><path d="M15 13v2" />
                  </svg>
                </div>
                <div className={styles.botHeaderInfo}>
                  <div className={styles.botName}>AI Support Bot</div>
                  <div className={styles.botStatus}>online</div>
                </div>
              </div>
              <ScreenChat active={activeStep} />
            </div>

            <div className={styles.rail}>
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.railDot} ${i === activeStep ? styles.railDotActive : ''}`}
                />
              ))}
            </div>
          </div>

        </div>
    </div>
  )
}

export default function BotShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={containerRef} className={styles.tour} style={{ height: '160vh' }}>
      <BotShowcaseInner scrollYProgress={scrollYProgress} />
    </section>
  )
}
