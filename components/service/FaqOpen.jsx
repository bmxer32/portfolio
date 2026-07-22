import styles from './service.module.css'

/**
 * Возражения перед заказом — открытым текстом, без аккордеона.
 * Вопрос набран крупно как прямая речь клиента, ответ виден сразу
 * (лучше для доверия и SEO), вердикт-чип даёт выжимку в одну строку.
 */
export default function FaqOpen({ items }) {
  return (
    <div className={styles.vfaq}>
      {items.map((item, i) => (
        <div key={i} className={styles.vfaqItem}>
          <h3 className={styles.vfaqQ}>{item.q}</h3>
          <div className={styles.vfaqA}>
            <p>{item.a}</p>
            {item.verdict && <span className={styles.vfaqVerdict}>{item.verdict}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}
