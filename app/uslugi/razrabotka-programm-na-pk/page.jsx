import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import DesktopShowcase from '../../../components/service/DesktopShowcase'
import Faq from '../../../components/service/Faq'

import Footer from '../../../components/Footer'
import styles from '../../../components/service/service.module.css'

const PATH = '/uslugi/razrabotka-programm-na-pk'
const TG_LINK = 'https://t.me/Webe9'

export const metadata = {
  title: 'Разработка программ на ПК для Windows, macOS и Linux | Narodniy Team',
  description:
    'Заказать разработку десктопных программ и приложений. Создаем мощные CRM, ERP, и парсеры на Electron и Tauri. Работаем по РФ и СНГ.',
  keywords: [
    'разработка десктопных приложений',
    'разработка программ на пк',
    'создание программ для windows',
    'electron разработка',
    'tauri приложения',
    'программа под заказ',
    'разработка crm систем',
    'разработка erp систем',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Разработка программ на ПК для Windows, macOS и Linux | Narodniy Team',
    description:
      'Создаем быстрые десктопные приложения под ключ: от парсеров до сложных CRM систем на Electron и Tauri.',
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Разработка десктопных приложений — Narodniy Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка программ на ПК для Windows, macOS и Linux',
    description: 'Создаем быстрые десктопные приложения под ключ.',
    images: ['/og-preview.png'],
  },
}

const BENEFITS = [
  {
    title: 'Кроссплатформенность',
    desc: 'Один код работает на Windows, macOS и Linux без необходимости переписывать приложение под каждую ОС.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
  {
    title: 'Высокая производительность',
    desc: 'Используем Tauri или Electron, чтобы программа мгновенно загружалась и не потребляла всю оперативную память.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
  },
  {
    title: 'Офлайн-режим',
    desc: 'Программа сохраняет функциональность без интернета. Все данные синхронизируются с сервером при появлении сети.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64A9 9 0 0 0 5.64 5.64" /><path d="M15.54 9.46a5 5 0 0 0-7.08 0" /><path d="M11 14h2" /><path d="M12 14v7" /><path d="M9 21h6" /></svg>
    ),
  },
  {
    title: 'Работа с «железом»',
    desc: 'Прямой доступ к принтерам чеков, сканерам штрихкодов, камерам и другим локальным устройствам.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
    ),
  },
  {
    title: 'Локальная безопасность',
    desc: 'Возможность хранить конфиденциальные данные исключительно на компьютерах компании, не отправляя их в облако.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    ),
  },
  {
    title: 'Интеграция с корпоративным ПО',
    desc: 'Бесшовная интеграция с 1С, Active Directory, локальными базами данных и внутренними API.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
    ),
  },
]

const PRICING = [
  {
    tag: 'Утилиты',
    name: 'Базовое ПО',
    value: 'от 30 000 ₽',
    note: 'Срок 2–4 недели',
    features: ['Парсеры и скрипты', 'Простые дашборды', 'Работа с локальными файлами', 'Автоматизация рутины'],
    featured: false,
  },
  {
    tag: 'Популярное',
    name: 'Бизнес-приложение',
    value: 'от 120 000 ₽',
    note: 'Срок 1.5–3 месяца',
    features: ['Внутренние CRM / ERP', 'Синхронизация с сервером', 'Сложный UI/UX интерфейс', 'Работа с периферией (кассы, сканеры)'],
    featured: true,
  },
  {
    tag: 'Масштаб',
    name: 'Корпоративная система',
    value: 'Индивидуально',
    note: 'Срок от 3 месяцев',
    features: ['Высокие нагрузки и Big Data', 'Локальные базы данных', 'Многоуровневый доступ', 'Интеграция с 1С / SAP'],
    featured: false,
  },
]

const FAQ = [
  {
    q: 'На чём вы пишете десктопные программы?',
    a: 'Мы используем Electron.js или Tauri. Это позволяет использовать современные веб-технологии (React, Node.js, Rust), делая интерфейс красивым и быстрым, а программу — работающей сразу на Windows, macOS и Linux.',
  },
  {
    q: 'Зачем делать программу на ПК, если можно сделать сайт?',
    a: 'Программы на ПК работают быстрее, не зависят от браузера, имеют прямой доступ к файловой системе и подключенному оборудованию (сканеры, кассы). А главное — они могут работать офлайн и надежнее защищают коммерческие данные.',
  },
  {
    q: 'А вы сможете интегрировать программу с нашей 1С?',
    a: 'Да, мы можем настроить двустороннюю синхронизацию с 1С, Битрикс24 или любой другой внутренней системой через API или прямые запросы к базам данных.',
  },
]

export default function DesktopDevelopmentPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} />

      <ServiceNav activePath={PATH} />
      <DesktopShowcase />

      {/* ===== BENEFITS ===== */}
      <section className={`section ${styles.compactSection}`} style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Преимущества
          </div>
          <h2 className={styles.blockTitle}>Почему десктоп?</h2>
          <p className={styles.blockSub}>Сайты — для всех. Программы — для работы. Когда браузера становится мало, на помощь приходят полноценные десктопные приложения.</p>
          
          <div className={styles.grid}>
            {BENEFITS.map((b, i) => (
              <div key={i} className={styles.benefit}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className={`section ${styles.compactSection} ${styles.pricingSection}`}>
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Цены
          </div>
          <h2 className={styles.blockTitle}>Стоимость разработки</h2>
          <p className={styles.blockSub}>Точная смета составляется после брифа и написания технического задания. Никаких скрытых платежей.</p>

          <div className={styles.pricing}>
            {PRICING.map((p, i) => (
              <div key={i} className={`${styles.priceCard} ${p.featured ? styles.priceCardFeatured : ''}`}>
                <div className={styles.priceTag}>{p.tag}</div>
                <div className={styles.priceName}>{p.name}</div>
                <div className={styles.priceValue}>{p.value}</div>
                <div className={styles.priceNote}>{p.note}</div>
                <ul className={styles.priceList}>
                  {p.features.map((f, j) => (
                    <li key={j}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={TG_LINK} target="_blank" rel="noreferrer" className={`btn-${p.featured ? 'primary' : 'secondary'} ${styles.priceBtn}`}>
                  Оставить заявку
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`section ${styles.compactSection} ${styles.faqSection}`} id="faq">
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> FAQ
          </div>
          <h2 className={styles.blockTitle}>Частые вопросы</h2>
          <Faq items={FAQ} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
