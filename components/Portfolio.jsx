"use client"
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'ВАШ Эксперт',
    description: 'Корпоративный сайт для независимой оценочной компании — под ключ от дизайна до деплоя. Форма захвата лидов с защитой от ботов, уведомления в Telegram, SEO под Яндекс, страница услуг с ценами.',
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Telegram API', 'Python'],
    image: '/projects/v-experto.png',
    imagePosition: 'center 82%',
    demoLink: 'https://v-experto.ru',
  },
  {
    title: 'Народный VPN',
    description: 'Лендинг для VPN-сервиса с упором на простоту и доверие. Понятная подача для широкой аудитории: тарифы, инструкции по подключению, кнопки быстрого старта и интеграция с оплатой.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    image: '/projects/narodniyvpn.png',
    imagePosition: 'center 74%',
    demoLink: 'https://narodniyvpn.online',
  },
  {
    title: 'ScandyStyle',
    description: 'Интернет-магазин мебели под заказ от фабрики. Каталог с фильтрацией, выбор тканей и материалов, форма заявки на бесплатный 3D-проект.',
    tags: ['Next.js', 'React', 'CSS Modules', 'TypeScript', 'Redux Toolkit'],
    image: '/projects/scandistyle.png',
    imagePosition: 'center 55%',
    demoLink: 'https://scandistyle.ru',
  },
  {
    title: 'Retro Games Hub',
    description: 'Мультиплатформенное приложение со сборником классических мини-игр для iOS и Android. Включает популярные аркады с современным дизайном (Glassmorphism), а также локальный и сетевой мультиплеер.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Game Dev'],
    image: '/projects/retrogames.png',
    imagePosition: 'center 50%',
    logo: null,
    demoLink: null,
  },
  {
    title: 'FlowMonitor',
    description: 'Мощное десктопное приложение для ПК. Позволяет мониторить нагрузку на систему, управлять процессами и оптимизировать работу. Кастомный UI с приятными анимациями и поддержкой темной темы.',
    tags: ['Electron', 'React', 'TypeScript', 'Node.js'],
    image: '/projects/flowmonitor.png',
    imagePosition: 'center 57%',
    logo: null,
    demoLink: null,
  },
  {
    title: 'Limpus auto',
    description: 'Telegram-бот для автоматизации ведения каналов. Собирает материалы из RSS-лент, обрабатывает через AI, переводит и публикует по расписанию. Система лицензий, очередь постов, дедупликация, статистика.',
    tags: ['Python', 'Aiogram 3', 'SQLAlchemy', 'APScheduler', 'SQLite'],
    image: null,
    logo: '/projects/megabot-logo.png',
    demoLink: null,
  },
]

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>

      {/* Asymmetric triangle divider — 3 peaks of different heights */}
      <div className={styles.triangleDivider} aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.triangleSvg}>
          <defs>
            <linearGradient id="triHalo" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
              <stop offset="18%"  stopColor="rgba(255,255,255,0.1)" />
              <stop offset="42%"  stopColor="rgba(255,255,255,0.28)" />
              <stop offset="66%"  stopColor="rgba(255,255,255,0.22)" />
              <stop offset="88%"  stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="triLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
              <stop offset="15%"  stopColor="rgba(255,255,255,0.4)" />
              <stop offset="42%"  stopColor="rgba(255,255,255,0.9)" />
              <stop offset="65%"  stopColor="rgba(255,255,255,0.7)" />
              <stop offset="88%"  stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          {/* Multi-facet asymmetric crystal ridge */}
          <path d="M0,120 L96,60 L192,18 L288,84 L384,8 L504,52 L576,0 L648,95 L768,20 L864,68 L984,16 L1080,72 L1152,28 L1200,120" fill="none" stroke="url(#triHalo)" strokeWidth="12" strokeLinejoin="miter"/>
          <path d="M0,120 L96,60 L192,18 L288,84 L384,8 L504,52 L576,0 L648,95 L768,20 L864,68 L984,16 L1080,72 L1152,28 L1200,120" fill="none" stroke="url(#triLine)" strokeWidth="1.5" strokeLinejoin="miter" className={styles.trianglePath}/>
        </svg>
      </div>

      <div className="container">
        <Reveal as="div" className="section-label">// Работы</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Примеры моих работ</Reveal>
        <Reveal as="p" className="section-subtitle" delay={0.1}>
          От современных веб-сервисов и сложных ботов до мобильных игр и десктопных приложений. Здесь собраны проекты из совершенно разных сфер разработки.
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={!showAll && index >= 3 ? styles.hideOnMobile : undefined}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
            <div className={styles.card}>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.cardLink} aria-label={project.title} />
              )}
              <div className={styles.cardImage}>
                {project.image
                  ? <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover', objectPosition: project.imagePosition || 'center' }} />
                  : project.logo
                    ? (
                      <div className={styles.logoPlaceholder}>
                        <div className={styles.logoCircle}>
                          <Image src={project.logo} alt={project.title} width={100} height={100} />
                        </div>
                      </div>
                    )
                    : <div className={styles.placeholderImg}>{project.title}</div>
                }
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {project.demoLink && (
                  <div className={styles.links}>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Открыть сайт
                    </a>
                  </div>
                )}
              </div>
            </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.showMoreContainer}>
          <button 
            className={styles.showMoreBtn} 
            onClick={() => {
              if (showAll) {
                const element = document.getElementById('portfolio');
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 60;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }
                setTimeout(() => setShowAll(false), 150);
              } else {
                setShowAll(true);
              }
            }}
          >
            {showAll ? 'Скрыть' : 'Показать больше работ'}
          </button>
        </div>
      </div>
    </section>
  )
}
