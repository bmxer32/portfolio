'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Современные сайты',
    description: 'Создание красивых, быстрых и удобных сайтов: от одностраничных лендингов до сложных веб-сервисов и интернет-магазинов.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    skills: ['React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Серверы и Боты',
    description: 'Разработка надежной "невидимой" логики: проектирование баз данных, настройка API и создание умных Telegram-ботов для автоматизации бизнеса.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Express', 'Telegram API'],
  },
  {
    title: 'Мобильные приложения',
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
    description: 'Разработка полноценных приложений для компьютеров на Windows и macOS. Идеально для корпоративного инструментария или мощных утилит.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ['Electron', 'React', 'Tauri', 'Rust', 'C#'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(10px)']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div style={{ opacity, filter, scale, transformOrigin: 'top center' }} ref={sectionRef}>
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
            >
            <div className={`glass-card ${styles.card}`}>
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
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
  )
}
