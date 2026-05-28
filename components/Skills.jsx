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
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-label">// Что я умею</div>
        <h2 className="section-title">Чем я могу помочь?</h2>
        <p className="section-subtitle">
          Закрываю большинство технических потребностей бизнеса: от верстки визиток 
          до программирования сложной логики, мобильных и десктоп программ. Никаких процентов — только реальные навыки.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card ${styles.card}`}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
