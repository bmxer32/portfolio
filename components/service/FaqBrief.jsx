import styles from './service.module.css'

/*
 * FAQ без аккордеона: короткий ответ виден сразу и набран крупно —
 * визуальный акцент на ответе, а не на вопросе. Подробности ниже,
 * вторым планом. Открытый текст лучше читается и индексируется.
 *
 * items: [{ q, short, a }]
 */
export default function FaqBrief({ items }) {
  return (
    <div className={styles.bfaq}>
      {items.map((item, i) => (
        <div key={i} className={styles.bfaqItem}>
          <h3 className={styles.bfaqQ}>{item.q}</h3>
          <div className={styles.bfaqA}>
            {item.short && <p className={styles.bfaqShort}>{item.short}</p>}
            <p className={styles.bfaqLong}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
