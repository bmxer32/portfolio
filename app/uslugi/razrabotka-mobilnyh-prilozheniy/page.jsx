import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import MobileShowcase from '../../../components/service/MobileShowcase'
import Faq from '../../../components/service/Faq'

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

const PRICING = [
  {
    tag: 'Старт',
    name: 'MVP-приложение',
    value: 'от 150 000 ₽',
    note: 'Срок 3–5 недель',
    features: ['1 платформа или Flutter', 'Базовый набор экранов', 'Подключение к серверу/API', 'Публикация в одном сторе'],
    featured: false,
  },
  {
    tag: 'Популярное',
    name: 'Бизнес-приложение',
    value: 'от 400 000 ₽',
    note: 'Срок 6–10 недель',
    features: ['iOS + Android на Flutter', 'Авторизация, профиль, push', 'Платежи и подписки', 'Аналитика и A/B-тесты', 'Публикация в App Store и Google Play'],
    featured: true,
  },
  {
    tag: 'Сложный сервис',
    name: 'Под индивидуальный проект',
    value: 'Индивидуально',
    note: 'Оценка после брифа',
    features: ['Сложная логика и интеграции', 'Своя backend-архитектура', 'Карты, гео, real-time', 'Команда под проект', 'SLA и поддержка'],
    featured: false,
  },
]

const FAQ_ITEMS = [
  {
    q: 'Сколько стоит разработка мобильного приложения?',
    a: 'Стоимость зависит от сложности: MVP начинается от 150 000 ₽, полноценное бизнес-приложение для iOS и Android — от 400 000 ₽. Точную цену называем бесплатно после короткого брифа, когда понятен объём функций.',
  },
  {
    q: 'Сколько времени занимает разработка?',
    a: 'Простое приложение (MVP) делаем за 3–5 недель, бизнес-приложение со средней логикой — за 6–10 недель. На старте фиксируем этапы и сроки, чтобы вы видели прогресс на каждой неделе.',
  },
  {
    q: 'Вы делаете отдельно под iOS и Android?',
    a: 'Мы используем Flutter — одна кодовая база работает на обеих платформах с нативной скоростью. Это дешевле и быстрее, чем две раздельные команды, а приложение выглядит «как родное» и на iPhone, и на Android.',
  },
  {
    q: 'Поможете опубликовать приложение в App Store и Google Play?',
    a: 'Да. Берём на себя весь выпуск: аккаунты разработчика, подготовку иконок и описаний, прохождение ревью и саму публикацию. Вы получаете готовое приложение, доступное для скачивания.',
  },
  {
    q: 'Что будет с приложением после запуска?',
    a: 'Мы остаёмся на связи: обновляем приложение под новые версии iOS и Android, исправляем замечания и развиваем функционал. Поддержку и доработки обсуждаем отдельно под ваши задачи.',
  },
  {
    q: 'С какими городами и регионами вы работаете?',
    a: 'Работаем удалённо со всей Россией и странами СНГ. Все коммуникации, демонстрации и передача проекта проходят онлайн — личное присутствие не требуется.',
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
          price: '150000',
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
      <section className={styles.block} aria-labelledby="benefits-title">
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
          Ориентировочные пакеты. Точную стоимость и сроки рассчитываем бесплатно
          после короткого брифа — платите за реальный объём работ, без «воды».
        </p>
        <div className={styles.pricing}>
          {PRICING.map((p) => (
            <div key={p.name} className={`glass-card ${styles.priceCard} ${p.featured ? styles.priceCardFeatured : ''}`}>
              <span className={styles.priceTag}>{p.tag}</span>
              <h3 className={styles.priceName}>{p.name}</h3>
              <div className={styles.priceValue}>{p.value}</div>
              <div className={styles.priceNote}>{p.note}</div>
              <ul className={styles.priceList}>
                {p.features.map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={TG_LINK} target="_blank" rel="noreferrer" className={`${p.featured ? 'btn-primary' : 'btn-secondary'} ${styles.priceBtn}`}>
                Обсудить проект
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.block} aria-labelledby="faq-title">
        <span className={styles.blockLabel}>// Вопросы</span>
        <h2 id="faq-title" className={styles.blockTitle}>Частые вопросы о разработке приложений</h2>
        <p className={styles.blockSub}>
          Коротко о цене, сроках и процессе. Не нашли свой вопрос — напишите нам в Telegram,
          ответим в течение пары часов.
        </p>
        <Faq items={FAQ_ITEMS} />
      </section>

      <Footer />
    </main>
  )
}
