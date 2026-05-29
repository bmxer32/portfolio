import styles from './Navbar.module.css'

const links = [
  { label: 'Стек', href: '#skills' },
  { label: 'Проекты', href: '#portfolio' },
  { label: 'Процесс', href: '#workflow' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className="gradient-text">Narodniy Team</span>
        </a>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={`btn-primary ${styles.ctaBtn}`}>
          Связаться
        </a>
      </div>
    </header>
  )
}
