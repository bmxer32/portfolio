'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Reveal from './Reveal'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Современные сайты',
    href: '/uslugi/razrabotka-saytov',
    description: 'Создание красивых, быстрых и удобных сайтов: от одностраничных лендингов до сложных веб-сервисов и интернет-магазинов. Создаем сайты уже более 7 лет.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
  },
  {
    title: 'Telegram-боты и ИИ',
    href: '/uslugi/razrabotka-botov-s-ii',
    description: 'Разработка умных ботов поддержки и автоматизации бизнеса: интеграция нейросетей (ChatGPT, Claude), создание баз знаний и настройка сложных API.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2a2 2 0 0 1-2-2c0-1.1.9-2 2-2z" />
        <path d="M12 6c3.3 0 6 2.7 6 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4c0-3.3 2.7-6 6-6z" />
        <path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M9 13v2" />
        <path d="M15 13v2" />
      </svg>
    ),
    skills: ['Node.js', 'Python', 'OpenAI API', 'LLM / RAG', 'Telegram API'],
  },
  {
    title: 'Мобильные приложения',
    href: '/uslugi/razrabotka-mobilnyh-prilozheniy',
    description: 'Создание мобильных сервисов и игр, которые выглядят потрясающе и работают абсолютно плавно на обеих платформах: iOS и Android.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    skills: ['Flutter', 'Dart', 'Firebase', 'Game Dev', 'UI/UX'],
  },
  {
    title: 'Десктопные программы',
    href: '/uslugi/razrabotka-programm-na-pk',
    description: 'Разработка полноценных приложений для компьютеров на Windows и macOS. Идеально для корпоративного инструментария или мощных утилит.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ['Electron', 'React', 'Tauri', 'Rust', 'C#', '.NET', 'C++'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null);

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
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
            >
            {(() => {
              const CardTag = category.href ? Link : 'div'
              const cardProps = category.href ? { href: category.href } : {}
              return (
                <CardTag {...cardProps} className={`glass-card ${styles.card}`} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      {category.icon}
                    </div>
                    <h3 className={styles.cardTitle}>{category.title}</h3>
                  </div>

                  <p className={styles.cardDesc}>{category.description}</p>
                  <div className={styles.divider}></div>

                  <div className={styles.skillList}>
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {category.href && (
                    <span className={styles.detailsBtn}>
                      Подробнее об услуге
                      <span className={styles.arrow} aria-hidden="true">→</span>
                    </span>
                  )}
                </CardTag>
              )
            })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
