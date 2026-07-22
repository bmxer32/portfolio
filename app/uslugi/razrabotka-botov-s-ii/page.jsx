import Link from 'next/link'
import ServiceNav from '../../../components/service/ServiceNav'
import BotShowcase from '../../../components/service/BotShowcase'
import PriceLedger from '../../../components/service/PriceLedger'
import FaqOpen from '../../../components/service/FaqOpen'
import Footer from '../../../components/Footer'
import styles from '../../../components/service/service.module.css'

const PATH = '/uslugi/razrabotka-botov-s-ii'
const TG_LINK = 'https://t.me/Webe9'

export const metadata = {
  title: 'Разработка Telegram-ботов с ИИ | Narodniy Team',
  description: 'Создание умных ботов поддержки и автоматизации бизнеса на основе нейросетей (ChatGPT, Claude) и интеграции с вашими базами знаний.',
  keywords: [
    'разработка telegram-ботов',
    'бот с искусственным интеллектом',
    'чат-бот для бизнеса',
    'ии-бот поддержки',
    'заказать телеграм бота',
    'автоматизация бизнеса ботом',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Разработка Telegram-ботов с ИИ | Narodniy Team',
    description: 'Умные боты поддержки и автоматизации бизнеса на нейросетях (ChatGPT, Claude) с интеграцией в ваши базы знаний.',
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Разработка ботов с ИИ — Narodniy Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка Telegram-ботов с ИИ',
    description: 'Умные боты поддержки и автоматизации бизнеса на нейросетях (ChatGPT, Claude).',
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

const PRICING_ROWS = [
  {
    ask: 'Нужен простой бот: меню, кнопки, приём заявок',
    name: 'Базовый бот',
    includes: 'Кнопочное меню · Заявки вам в Telegram · Рассылки · Админка',
    from: 'от',
    price: '5 000',
    term: 'запуск за 5–7 дней',
  },
  {
    ask: 'Хочу, чтобы отвечал клиентам как живой менеджер',
    name: 'ИИ-ассистент',
    includes: 'Обучение на вашем сайте и прайсе · Естественные ответы · Передача менеджеру · Сбор контактов',
    from: 'от',
    price: '15 000',
    term: 'запуск за 2–3 недели',
  },
  {
    ask: 'Нужна система: оплата в чате, CRM, нагрузки',
    name: 'Бот-система',
    includes: 'Интеграция с CRM · Приём оплат в чате · Мультиязычность · Высокие нагрузки',
    from: 'от',
    price: '30 000',
    term: 'запуск от месяца',
  },
]

const FAQ = [
  {
    q: 'А бот не нагрубит клиенту и не выдумает цены?',
    a: 'Нет. Ассистент отвечает только по тем документам и ценам, которые мы в него загрузим (технология RAG), и каждый ответ опирается на конкретный источник. Если ответа в базе нет — он честно говорит об этом и зовёт живого менеджера, а не сочиняет.',
    verdict: 'Отвечает только по вашим документам',
  },
  {
    q: 'На каких нейросетях это работает?',
    a: 'Google Gemini, GPT или Claude — подбираем модель под вашу задачу и бюджет. Для старта и демо обычно берём Gemini: быстро, качественно по-русски и ощутимо дешевле в поддержке.',
    verdict: 'Модель — под задачу и бюджет',
  },
  {
    q: 'Когда подключается живой человек?',
    a: 'По триггерам, которые мы настраиваем: клиент прямо просит менеджера, бот дважды не нашёл ответа, или клиент готов к покупке. В этот момент в ваш рабочий чат приходит уведомление со всей историей диалога.',
    verdict: 'Человек всегда на подхвате',
  },
  {
    q: 'Куда попадают данные моих клиентов?',
    a: 'База знаний и переписка хранятся в изолированном контуре под ваш проект и не передаются третьим лицам. По запросу разворачиваем систему на вашем собственном сервере — тогда данные физически не покидают вашу инфраструктуру.',
    verdict: 'Данные остаются вашими',
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

      {/* ===== PRICING: смета-диалог ===== */}
      <section className={`section ${styles.compactSection} ${styles.pricingSection}`}>
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Смета
          </div>
          <h2 className={styles.blockTitle}>Сколько это стоит</h2>
          <p className={styles.blockSub}>
            Три уровня — от кнопочного бота до системы с оплатой в чате.
            Точная цена фиксируется после короткого брифа и не меняется по ходу работы.
          </p>
          <PriceLedger rows={PRICING_ROWS} tgLink={TG_LINK} />
        </div>
      </section>

      {/* ===== FAQ: возражения открытым текстом ===== */}
      <section className={`section ${styles.compactSection} ${styles.faqSection}`} id="faq">
        <div className="container">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Возражения
          </div>
          <h2 className={styles.blockTitle}>Что спрашивают перед заказом</h2>
          <FaqOpen items={FAQ} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
