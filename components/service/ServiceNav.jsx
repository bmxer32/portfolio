'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './service.module.css'

const TG_LINK = 'https://t.me/Webe9'

export default function ServiceNav() {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/logop.png" alt="Narodniy Team" width={32} height={32} className={styles.navLogoIcon} />
          <span className={`gradient-text ${styles.logoFull}`}>Narodniy Team</span>
          <span className={`gradient-text ${styles.logoShort}`}>Narodniy</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Главная</Link>
          <Link href="/#portfolio" className={styles.navLink}>Проекты</Link>
          <Link href="/#workflow" className={styles.navLink}>Процесс</Link>
        </nav>
        <a href={TG_LINK} target="_blank" rel="noreferrer" className={`btn-primary ${styles.navCta}`}>
          Обсудить проект
        </a>
      </div>
    </header>
  )
}
