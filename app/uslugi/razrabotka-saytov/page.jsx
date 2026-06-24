import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import WebShowcase from '../../../components/service/WebShowcase'
import Faq from '../../../components/service/Faq'
import Footer from '../../../components/Footer'
import styles from '../../../components/service/service.module.css'

const PATH = '/uslugi/razrabotka-saytov'
const TG_LINK = 'https://t.me/Webe9'

export const metadata = {
  title: 'Разработка современных сайтов под ключ | Narodniy Team',
  description: 'Создание продающих лендингов, корпоративных сайтов и интернет-магазинов. Стильный дизайн, высокая скорость работы и адаптация под мобильные устройства.',
  keywords: [
    'разработка сайтов',
    'создание сайта под ключ',
    'заказать сайт',
    'разработка лендинга',
    'разработка интернет-магазина',
    'корпоративный сайт на заказ',
    'сайт на react next.js',
    'стоимость разработки сайта',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Разработка современных сайтов под ключ | Narodniy Team',
    description: 'Создаём продающие лендинги, корпоративные сайты и интернет-магазины. Дизайн, скорость и SEO из коробки.',
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Разработка сайтов — Narodniy Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка современных сайтов под ключ',
    description: 'Создаём продающие лендинги, корпоративные сайты и интернет-магазины.',
    images: ['/og-preview.png'],
  },
}

const BENEFITS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'Мощный дизайн',
    desc: 'Мы не используем шаблонные решения. Каждый сайт разрабатывается с нуля, чтобы выделить вас на фоне конкурентов.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Быстрая загрузка',
    desc: 'Пишем чистый код на React/Next.js. Ваши сайты будут загружаться за миллисекунды, что напрямую влияет на конверсию.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Идеальный мобильный вид',
    desc: 'Более 70% трафика — это телефоны. Мы делаем интерфейсы, которыми одинаково удобно пользоваться на любом устройстве.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: 'SEO-оптимизация',
    desc: 'Сайт уже готов к продвижению. Правильная структура заголовков, мета-теги и высокая скорость понравятся Google и Яндексу.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    title: 'Надежная инфраструктура',
    desc: 'Настраиваем стабильный хостинг, защиту от DDoS-атак и ежедневные бэкапы, чтобы бизнес работал без перебоев.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    title: 'Интеграция CRM',
    desc: 'Все заявки и продажи с сайта могут автоматически попадать в вашу AmoCRM, Bitrix24 или Telegram-чат.',
  },
]

const PRICING = [
  {
    tag: 'Landing',
    name: 'Landing Page',
    value: 'от 30 000 ₽',
    note: 'от 7 дней',
    features: [
      'Уникальный дизайн',
      'Продающая структура',
      'Мобильная адаптация',
      'Формы заявок в Telegram',
    ],
    featured: false,
  },
  {
    tag: 'Corporate',
    name: 'Корпоративный сайт',
    value: 'от 80 000 ₽',
    note: 'от 3 недель',
    features: [
      'Многостраничная структура',
      'Блог или новости',
      'Каталог услуг',
      'Базовая SEO-оптимизация',
    ],
    featured: true,
  },
  {
    tag: 'E-commerce',
    name: 'Интернет-магазин',
    value: 'от 150 000 ₽',
    note: 'от 1.5 месяцев',
    features: [
      'Каталог с фильтрами',
      'Личный кабинет',
      'Интеграция оплаты (эквайринг)',
      'Синхронизация с 1С / CRM',
    ],
    featured: false,
  },
]

const FAQ = [
  {
    q: 'Вы делаете дизайн сами или нужно приходить со своим?',
    a: 'Мы делаем проекты под ключ. Наш UI/UX дизайнер отрисует несколько вариантов концепции, согласует с вами, и только потом мы приступим к разработке.',
  },
  {
    q: 'На чем вы делаете сайты? Это конструктор?',
    a: 'Нет, мы не используем конструкторы (Tilda/Wix). Мы пишем сайты с нуля с использованием современных технологий React и Next.js. Это позволяет сделать интерфейс невероятно быстрым, плавным и полностью кастомным, без каких-либо ограничений конструкторов.',
  },
  {
    q: 'Смогу ли я сам менять текст и фото на сайте?',
    a: 'Да. Для корпоративных сайтов и интернет-магазинов мы подключаем удобную систему управления контентом (headless CMS), где вы сможете добавлять товары и менять тексты так же легко, как посты в соцсетях.',
  },
  {
    q: 'Вы занимаетесь поддержкой после сдачи проекта?',
    a: 'Конечно. После запуска мы можем взять сайт на техническую поддержку, следить за его доступностью и оперативно внедрять новый функционал по мере роста вашего бизнеса.',
  },
]

export default function WebDevPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} />

      <ServiceNav activePath={PATH} />
      <WebShowcase />

      {/* ===== BENEFITS ===== */}
      <section className={`section ${styles.compactSection}`} style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Преимущества
          </div>
          <h2 className={styles.blockTitle}>Почему наши сайты продают лучше?</h2>
          <p className={styles.blockSub}>Мы объединяем стильный, современный дизайн и мощные технологии, чтобы пользователь получал удовольствие от взаимодействия с сайтом.</p>
          
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
