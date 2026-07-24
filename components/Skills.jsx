'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Reveal from './Reveal'
import styles from './Skills.module.css'

/*
 * Каждая услуга нарисована как её «носитель»: сайт — окно браузера,
 * бот — переписка, мобильное приложение — телефон, десктоп — окно
 * программы. Продолжение приёма device tour с внутренних страниц.
 */

function BrowserDevice() {
  return (
    <div className={`${styles.device} ${styles.deviceBrowser}`} aria-hidden="true">
      <div className={styles.browserBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.browserUrl}>narodniy-team.ru</span>
      </div>
      <div className={styles.browserBody}>
        <span className={styles.skHeading} />
        <span className={styles.skLine} />
        <span className={styles.skLineShort} />
        <span className={styles.skBtn} />
      </div>
    </div>
  )
}

function ChatDevice() {
  return (
    <div className={`${styles.device} ${styles.deviceChat}`} aria-hidden="true">
      <div className={styles.chatMsgIn}>Сколько будет стоить доставка в Казань?</div>
      <div className={styles.chatMsgOut}>Доставка в Казань — 350 ₽, завтра к 14:00. Оформляем?</div>
      <div className={styles.chatMeta}>ИИ-ассистент · отвечает мгновенно</div>
    </div>
  )
}

function PhoneDevice() {
  return (
    <div className={`${styles.device} ${styles.devicePhone}`} aria-hidden="true">
      <div className={styles.phoneFrame}>
        <span className={styles.phoneNotch} />
        <span className={styles.skImage} />
        <span className={styles.skLine} />
        <span className={styles.skLineShort} />
        <span className={styles.phoneTabbar}>
          <i /><i /><i />
        </span>
      </div>
    </div>
  )
}

function DesktopDevice() {
  return (
    <div className={`${styles.device} ${styles.deviceDesktop}`} aria-hidden="true">
      <div className={styles.winBar}>
        <span className={styles.winTitle}>app.exe</span>
        <span className={styles.winControls}><i /><i /><i /></span>
      </div>
      <div className={styles.winBody}>
        <div className={styles.winSidebar}>
          <span /><span /><span />
        </div>
        <div className={styles.winMain}>
          <span className={styles.skLine} />
          <span className={styles.skLine} />
          <span className={styles.skLineShort} />
        </div>
      </div>
    </div>
  )
}

const skillCategories = [
  {
    title: 'Современные сайты',
    href: '/uslugi/razrabotka-saytov',
    description: 'Создание красивых, быстрых и удобных сайтов: от одностраничных лендингов до сложных веб-сервисов и интернет-магазинов. Создаем сайты уже более 7 лет.',
    device: <BrowserDevice />,
    skills: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
  },
  {
    title: 'Telegram-боты и ИИ',
    href: '/uslugi/razrabotka-botov-s-ii',
    description: 'Разработка умных ботов поддержки и автоматизации бизнеса: интеграция нейросетей (ChatGPT, Claude), создание баз знаний и настройка сложных API.',
    device: <ChatDevice />,
    skills: ['Node.js', 'Python', 'OpenAI API', 'LLM / RAG', 'Telegram API'],
  },
  {
    title: 'Мобильные приложения',
    href: '/uslugi/razrabotka-mobilnyh-prilozheniy',
    description: 'Создание мобильных сервисов и игр, которые выглядят потрясающе и работают абсолютно плавно на обеих платформах: iOS и Android.',
    device: <PhoneDevice />,
    skills: ['Flutter', 'Dart', 'Firebase', 'Game Dev', 'UI/UX', 'Платежи', 'Аналитика'],
  },
  {
    title: 'Десктопные программы',
    href: '/uslugi/razrabotka-programm-na-pk',
    description: 'Разработка полноценных приложений для компьютеров на Windows и macOS. Идеально для корпоративного инструментария или мощных утилит.',
    device: <DesktopDevice />,
    skills: ['Electron', 'React', 'Tauri', 'Rust', 'C#', '.NET', 'C++'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <Reveal as="div" className="section-label">// Что мы умеем</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Чем мы можем помочь?</Reveal>
        <Reveal as="p" className="section-subtitle" delay={0.1}>
          Закрываем большинство технических потребностей бизнеса: от верстки визиток
          до программирования сложной логики, мобильных и десктоп программ. Никаких процентов — только реальные навыки.
        </Reveal>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex' }}
            >
              <Link href={category.href} className={styles.card}>
                {category.device}
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardDesc}>{category.description}</p>
                <div className={styles.cardFoot}>
                  <span className={styles.stack}>{category.skills.join(' · ')}</span>
                  <span className={styles.cardGo}>
                    Подробнее об услуге
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
