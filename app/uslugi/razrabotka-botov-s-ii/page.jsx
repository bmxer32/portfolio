import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import BotShowcase from '../../../components/service/BotShowcase'
import Faq from '../../../components/service/Faq'
import Footer from '../../../components/Footer'
import styles from '../../../components/service/service.module.css'

const PATH = '/uslugi/razrabotka-botov-s-ii'
const TG_LINK = 'https://t.me/Webe9'

export const metadata = {
  title: 'Разработка Telegram-ботов с ИИ | Narodniy Team',
  description: 'Создание умных ботов поддержки и автоматизации бизнеса на основе нейросетей (ChatGPT, Claude) и интеграции с вашими базами знаний.',
  keywords: [
    'разработка телеграм бота',
    'создание чат-бота',
    'бот с искусственным интеллектом',
    'заказать telegram бота',
    'автоматизация бизнеса ии',
    'бот поддержки на нейросети',
    'интеграция chatgpt в бизнес',
    'стоимость разработки бота',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Разработка Telegram-ботов с ИИ | Narodniy Team',
    description: 'Создаём умных ботов поддержки и автоматизации на основе ChatGPT и Claude с интеграцией в ваши базы знаний.',
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Разработка ботов с ИИ — Narodniy Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка Telegram-ботов с ИИ',
    description: 'Создаём умных ботов поддержки и автоматизации бизнеса на нейросетях.',
    images: ['/og-preview.png'],
  },
}

const BENEFITS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: 'Снижение расходов',
    desc: 'Один ИИ-бот заменяет целый отдел первой линии поддержки, работая без выходных и зарплаты.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>,
    title: 'Моментальные ответы',
    desc: 'Бот отвечает за секунду, не заставляя клиента ждать. Это повышает лояльность и конверсию.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
    title: 'Интеграция с базой',
    desc: 'Мы загружаем всю информацию о вашей компании (услуги, цены, правила), и бот консультирует строго по ним.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    title: 'Автоматизация продаж',
    desc: 'Бот может не только общаться, но и выставлять счета, принимать оплату и оформлять заявки в вашу CRM.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>,
    title: 'Аналитика и сбор данных',
    desc: 'Сохраняем всю историю общения и контакты в удобном виде. Бот может собирать номера телефонов и отзывы.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    title: 'Многоязычность',
    desc: 'ИИ автоматически понимает язык клиента и отвечает на нем же, стирая любые языковые барьеры.',
  },
]

const PRICING = [
  {
    tag: 'Start',
    name: 'Базовый бот',
    value: 'от 10 000 ₽',
    note: 'от 5 дней',
    features: [
      'Стандартное меню кнопок',
      'Отправка заявок в Telegram',
      'Рассылка сообщений',
      'Базовая админка',
    ],
    featured: false,
  },
  {
    tag: 'Pro',
    name: 'ИИ-Бот Поддержки',
    value: 'от 30 000 ₽',
    note: 'от 3 недель',
    features: [
      'Внедрение ChatGPT / Claude',
      'Обучение на вашей базе знаний',
      'Естественное общение с клиентом',
      'Сбор контактов',
    ],
    featured: true,
  },
  {
    tag: 'Enterprise',
    name: 'Бот-Система',
    value: 'от 80 000 ₽',
    note: 'от 1 месяца',
    features: [
      'Интеграция с вашей CRM',
      'Прием оплат прямо в чате',
      'Несколько языков',
      'Поддержка высоких нагрузок',
    ],
    featured: false,
  },
]

const FAQ = [
  {
    q: 'Может ли бот нагрубить клиенту или выдумать несуществующие цены?',
    a: 'Нет. Мы используем технологии RAG (генерация с дополненной выборкой) и строго ограничиваем промпт. Бот будет отвечать только по тем документам и ценам, которые мы ему загрузим. Если он не знает ответа, он так и скажет или переведет на оператора.',
  },
  {
    q: 'Вы используете ChatGPT?',
    a: 'Да, в большинстве случаев мы интегрируемся с OpenAI API (ChatGPT) или Anthropic (Claude), так как они дают лучшее качество общения на русском языке.',
  },
  {
    q: 'А как бот понимает, когда нужно перевести диалог на человека?',
    a: 'Мы настраиваем триггеры. Например, если клиент пишет "свяжите меня с менеджером", или если бот не может ответить на вопрос дважды, или если клиент готов к покупке, бот отправляет уведомление в ваш рабочий чат.',
  },
]

export default function AiBotsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} />

      <ServiceNav activePath={PATH} />
      <BotShowcase />

      {/* ===== BENEFITS ===== */}
      <section className={`section ${styles.compactSection}`} style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Преимущества
          </div>
          <h2 className={styles.blockTitle}>Почему ИИ-боты?</h2>
          <p className={styles.blockSub}>Обычные кнопочные боты всех раздражают. ИИ-бот общается как живой человек, понимает опечатки и голосовые сообщения.</p>
          
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
