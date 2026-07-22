'use client'
import { useEffect, useRef, useState } from 'react'
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

/* Реагирует на prefers-reduced-motion: печать отключается. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

/* Сообщение бота: индикатор «печатает…» → посимвольный набор → готово.
   Полностью обратимо: когда шаг перестаёт быть активным (скролл вверх),
   сообщение гаснет и сбрасывается, а на пути вниз печатается заново. */
function TypingMessage({ text, active, delay = 400 }) {
  const reduced = usePrefersReducedMotion()
  const [phase, setPhase] = useState('idle') // idle | dots | typing | done
  const [shown, setShown] = useState('')
  const timers = useRef([])

  useEffect(() => {
    const clearAll = () => {
      timers.current.forEach((id) => { clearTimeout(id); clearInterval(id) })
      timers.current = []
    }
    clearAll()

    if (!active) {
      setPhase('idle')
      setShown('')
      return
    }
    if (reduced) {
      setShown(text)
      setPhase('done')
      return
    }

    setPhase('dots')
    const t = setTimeout(() => {
      setPhase('typing')
      let i = 0
      const iv = setInterval(() => {
        i += 2
        setShown(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(iv)
          setPhase('done')
        }
      }, 22)
      timers.current.push(iv)
    }, delay)
    timers.current.push(t)

    return clearAll
  }, [active, reduced, text, delay])

  return (
    <div
      className={`${styles.chatMsg} ${styles.chatMsgBot}`}
      style={{
        opacity: phase === 'idle' ? 0 : 1,
        transform: phase === 'idle' ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
      aria-hidden={phase === 'idle'}
    >
      {phase === 'dots' ? (
        <span className={styles.typingDots} aria-label="печатает">
          <span /><span /><span />
        </span>
      ) : (
        <>
          {shown}
          {phase === 'typing' && <span className={styles.typeCaret} />}
        </>
      )}
    </div>
  )
}

/* Пользовательское сообщение: fade-in/out по достижении шага (обратимо). */
function UserMessage({ children, active }) {
  return (
    <div
      className={`${styles.chatMsg} ${styles.chatMsgUser}`}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
      aria-hidden={!active}
    >
      {children}
    </div>
  )
}

function ScreenChat({ active }) {
  return (
    <div className={styles.botChat}>
      <UserMessage active={active >= 0}>
        Привет! Хочу заказать разработку бота. Сколько это будет стоить и какие сроки?
      </UserMessage>

      <TypingMessage
        active={active >= 1}
        text="Здравствуйте! 👋 Базовый бот начинается от 5 000 руб, ИИ-ассистент — от 15 000 руб, а сложная бот-система — от 30 000 руб."
      />

      <UserMessage active={active >= 2}>
        Нам нужен умный бот для ответов на вопросы клиентов по нашей базе знаний.
      </UserMessage>

      <TypingMessage
        active={active >= 3}
        text="Отличная задача! ИИ-бот займет около 2-3 недель. Для более точной оценки я могу передать ваши контакты менеджеру или мы можем составить бриф прямо здесь. Что выберете?"
      />
    </div>
  )
}

export default function BotShowcase() {
  const ref = useRef(null)
  const [idx, setIdx] = useState(0)
  const [tiltOn, setTiltOn] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Mobile top heading fades out as user scrolls into the tour
  const mobileTopOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [1, 0, 0])
  const mobileTopY = useTransform(scrollYProgress, [0, 0.18, 1], [0, -24, -24])

  // Лёгкий 3D-наклон чата: «выравнивается», пока пользователь скроллит тур.
  const rotateY = useTransform(scrollYProgress, [0, 0.45], [-12, 0])
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [6, 0])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px) and (prefers-reduced-motion: no-preference)')
    const update = () => setTiltOn(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length + 0.00001)))
    setIdx(next)
  })

  return (
    <section ref={ref} className={styles.tour} aria-label="Разработка ботов с ИИ — обзор">
      <h1 className="visually-hidden">Разработка Telegram-ботов с ИИ — умные боты поддержки и автоматизации бизнеса на Gemini, GPT и Claude</h1>
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
                className={`${styles.step} ${i === idx ? styles.stepOn : ''}`}
                aria-hidden={i !== idx}
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
            <motion.div
              className={styles.botTilt}
              style={tiltOn ? { rotateY, rotateX } : undefined}
            >
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
                    <div className={styles.botStatus}>
                      {idx >= 1 && idx < 3 ? 'печатает…' : 'online'}
                    </div>
                  </div>
                </div>
                <ScreenChat active={idx} />
              </div>
            </motion.div>

            <div className={styles.rail}>
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.railDot} ${i === idx ? styles.railDotActive : ''}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
