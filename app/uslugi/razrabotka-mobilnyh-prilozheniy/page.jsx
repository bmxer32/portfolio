import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import MobileShowcase from '../../../components/service/MobileShowcase'
import SpecSheet from '../../../components/service/SpecSheet'
import FaqBrief from '../../../components/service/FaqBrief'

import Footer from '../../../components/Footer'
import styles from '../../../components/service/service.module.css'

const PATH = '/uslugi/razrabotka-mobilnyh-prilozheniy'
const TG_LINK = 'https://t.me/Webe9'

export const metadata = {
  title: 'Разработка мобильных приложений для iOS и Android | Narodniy Team',
  description:
    'Заказать разработку мобильного приложения под ключ для iOS и Android. Flutter, аналитика, платежи и подписки. Прозрачные сроки и цены, поддержка после запуска. Работаем по РФ и СНГ.',
  keywords: [
    'разработка мобильных приложений',
    'создание мобильного приложения',
    'заказать мобильное приложение',
    'разработка приложений ios android',
    'разработка приложения под ключ',
    'мобильное приложение для бизнеса',
    'flutter разработка',
    'стоимость разработки приложения',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Разработка мобильных приложений для iOS и Android | Narodniy Team',
    description:
      'Создаём мобильные приложения под ключ: Flutter, платежи, аналитика, поддержка. Один код — две платформы.',
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Разработка мобильных приложений — Narodniy Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка мобильных приложений для iOS и Android',
    description: 'Создаём мобильные приложения под ключ: Flutter, платежи, аналитика, поддержка.',
    images: ['/og-preview.png'],
  },
}

const BENEFITS = [
  {
    title: 'iOS и Android из одного кода',
    desc: 'Flutter даёт нативную производительность на обеих платформах при одном бюджете — вы не платите за две команды разработки.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
    ),
  },
  {
    title: 'Дизайн под ваш бренд',
    desc: 'Сначала прототип и UX, потом код. Интерфейс, который удобен пользователю и работает на конверсию, а не просто «красивый».',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
    ),
  },
  {
    title: 'Платежи и подписки',
    desc: 'Встроенные покупки App Store и Google Play, эквайринг РФ, подписочные модели и интеграция с вашей CRM.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
    ),
  },
  {
    title: 'Аналитика и пуши',
    desc: 'Видите поведение пользователей, отправляете push-уведомления и растите retention на основе реальных данных.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    ),
  },
  {
    title: 'Публикация в магазинах',
    desc: 'Берём на себя выпуск в App Store и Google Play: подготовка, ревью, иконки и описания — вы получаете готовое приложение в сторах.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
    ),
  },
  {
    title: 'Поддержка после запуска',
    desc: 'Остаёмся на связи: обновления под новые версии iOS и Android, доработки и развитие приложения вместе с вашим бизнесом.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
]

const SPEC_COLS = [
  { tag: 'Старт', name: 'MVP-приложение', price: 'от 60 000 ₽', note: 'срок 3–5 недель', featured: false },
  { tag: 'Чаще всего', name: 'Бизнес-приложение', price: 'от 150 000 ₽', note: 'срок 6–10 недель', featured: true },
  { tag: 'Сложный сервис', name: 'Индивидуальный проект', price: 'по брифу', note: 'оценка бесплатно', featured: false },
]

const SPEC_ROWS = [
  { label: 'Платформы', values: ['1 платформа или Flutter', 'iOS + Android на Flutter', 'iOS + Android + свой backend'] },
  { label: 'Экраны и логика', values: ['Базовый набор экранов', 'Авторизация, профиль, push', 'Сложная логика: карты, гео, real-time'] },
  { label: 'Платежи', values: ['—', 'Платежи и подписки', 'Платежи, CRM и интеграции'] },
  { label: 'Аналитика', values: ['—', 'Аналитика и A/B-тесты', 'Своя аналитика и метрики'] },
  { label: 'Публикация', values: ['Один стор', 'App Store и Google Play', 'App Store и Google Play'] },
  { label: 'Поддержка', values: ['Гарантия после запуска', 'Гарантия и обновления', 'SLA, команда под проект'] },
]

const FAQ_ITEMS = [
  {
    q: 'Сколько стоит разработка мобильного приложения?',
    short: 'MVP — от 60 000 ₽, бизнес-приложение — от 150 000 ₽.',
    a: 'Стоимость зависит от сложности: MVP начинается от 60 000 ₽, полноценное бизнес-приложение для iOS и Android — от 150 000 ₽. Точную цену называем бесплатно после короткого брифа, когда понятен объём функций.',
  },
  {
    q: 'Сколько времени занимает разработка?',
    short: 'MVP — 3–5 недель, бизнес-приложение — 6–10 недель.',
    a: 'Простое приложение (MVP) делаем за 3–5 недель, бизнес-приложение со средней логикой — за 6–10 недель. На старте фиксируем этапы и сроки, чтобы вы видели прогресс на каждой неделе.',
  },
  {
    q: 'Вы делаете отдельно под iOS и Android?',
    short: 'Нет: один код на Flutter работает на обеих платформах.',
    a: 'Мы используем Flutter — одна кодовая база работает на обеих платформах с нативной скоростью. Это дешевле и быстрее, чем две раздельные команды, а приложение выглядит «как родное» и на iPhone, и на Android.',
  },
]

export default function MobileAppPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://narodniy-team.ru${PATH}#service`,
        name: 'Разработка мобильных приложений',
        serviceType: 'Разработка мобильных приложений для iOS и Android',
        description:
          'Разработка мобильных приложений под ключ для iOS и Android на Flutter: дизайн, программирование, платежи, аналитика, публикация в App Store и Google Play.',
        provider: {
          '@type': 'Organization',
          name: 'Narodniy Team',
          url: 'https://narodniy-team.ru',
        },
        areaServed: ['RU', 'Россия', 'СНГ'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'RUB',
          price: '60000',
          url: `https://narodniy-team.ru${PATH}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://narodniy-team.ru' },
          { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://narodniy-team.ru/uslugi' },
          { '@type': 'ListItem', position: 3, name: 'Разработка мобильных приложений', item: `https://narodniy-team.ru${PATH}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageGlow} aria-hidden="true" />

      <ServiceNav />

      {/* Breadcrumbs */}
      <div className={styles.block} style={{ paddingTop: 40, paddingBottom: 0 }}>
        <nav className={styles.crumbs} aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span className={styles.crumbSep}>/</span>
          <Link href="/#skills">Услуги</Link>
          <span className={styles.crumbSep}>/</span>
          <span className={styles.crumbCurrent}>Мобильные приложения</span>
        </nav>
      </div>

      {/* Hero + sticky phone */}
      <MobileShowcase />

      {/* Benefits */}
      <section id="benefits" className={styles.block} aria-labelledby="benefits-title">
        <span className={styles.blockLabel}>// Что входит</span>
        <h2 id="benefits-title" className={styles.blockTitle}>Приложение, которое решает задачи бизнеса</h2>
        <p className={styles.blockSub}>
          Не просто «программа в телефоне», а рабочий инструмент: с платежами, аналитикой
          и поддержкой. Закрываем весь цикл — от идеи до публикации в магазинах.
        </p>
        <div className={styles.grid}>
          {BENEFITS.map((b) => (
            <div key={b.title} className={`glass-card ${styles.benefit}`}>
              <div className={styles.benefitIcon}>{b.icon}</div>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.block} aria-labelledby="pricing-title">
        <span className={styles.blockLabel}>// Стоимость</span>
        <h2 id="pricing-title" className={styles.blockTitle}>Сколько стоит разработка приложения</h2>
        <p className={styles.blockSub}>
          Одна смета вместо трёх витрин: по строкам видно, чем комплектации отличаются.
          Точную стоимость и сроки рассчитываем бесплатно после короткого брифа.
        </p>
        <SpecSheet cols={SPEC_COLS} rows={SPEC_ROWS} tgLink={TG_LINK} />
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.block} aria-labelledby="faq-title">
        <span className={styles.blockLabel}>// Вопросы</span>
        <h2 id="faq-title" className={styles.blockTitle}>Частые вопросы о разработке приложений</h2>
        <p className={styles.blockSub}>
          Коротко о цене, сроках и процессе. Не нашли свой вопрос — напишите нам в Telegram,
          ответим в течение пары часов.
        </p>
        <FaqBrief items={FAQ_ITEMS} />
      </section>

      <Footer />
    </main>
  )
}
