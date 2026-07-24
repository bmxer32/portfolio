import styles from './service.module.css'

/*
 * Прайс как «спецификация комплектаций»: одна таблица-смета, где по
 * строкам видно, чем пакеты отличаются. Сознательно без карточек,
 * зелёных бейджей и «популярного» — сравнение состава вместо витрины.
 *
 * cols: [{ tag, name, price, note, featured }]
 * rows: [{ label, values: [string|'—', ...] }]
 */
export default function SpecSheet({ cols, rows, tgLink, ctaLabel = 'Обсудить проект' }) {
  const featCol = (i) => (cols[i]?.featured ? styles.sheetFeat : '')

  return (
    <>
      {/* Desktop: comparison sheet */}
      <div className={styles.sheet} role="table" aria-label="Сравнение пакетов">
        <div className={styles.sheetCorner} />
        {cols.map((c, i) => (
          <div key={c.name} className={`${styles.sheetHead} ${featCol(i)}`}>
            <span className={styles.sheetTag}>{c.tag}</span>
            <span className={styles.sheetName}>{c.name}</span>
            <span className={styles.sheetPrice}>{c.price}</span>
            <span className={styles.sheetNote}>{c.note}</span>
          </div>
        ))}

        {rows.map((r) => (
          <div key={r.label} style={{ display: 'contents' }}>
            <div className={styles.sheetLabel}>{r.label}</div>
            {r.values.map((v, i) => (
              <div key={i} className={`${styles.sheetCell} ${featCol(i)} ${v === '—' ? styles.sheetDash : ''}`}>
                {v}
              </div>
            ))}
          </div>
        ))}

        <div className={styles.sheetCta} />
        {cols.map((c, i) => (
          <div key={c.name} className={`${styles.sheetCta} ${featCol(i)}`}>
            <a
              href={tgLink}
              target="_blank"
              rel="noreferrer"
              className={c.featured ? 'btn-primary' : 'btn-secondary'}
            >
              {ctaLabel}
            </a>
          </div>
        ))}
      </div>

      {/* Mobile: the same sheet, one package after another */}
      <div className={styles.sheetStack}>
        {cols.map((c) => (
          <div key={c.name} className={`${styles.stackBlock} ${c.featured ? styles.sheetFeat : ''}`}>
            <div className={styles.stackHead}>
              <span className={styles.sheetTag}>{c.tag}</span>
              <span className={styles.sheetName}>{c.name}</span>
              <span className={styles.sheetPrice}>{c.price}</span>
              <span className={styles.sheetNote}>{c.note}</span>
            </div>
            <dl className={styles.stackList}>
              {rows.map((r) => {
                const v = r.values[cols.indexOf(c)]
                return (
                  <div key={r.label} className={styles.stackRow}>
                    <dt>{r.label}</dt>
                    <dd className={v === '—' ? styles.sheetDash : ''}>{v}</dd>
                  </div>
                )
              })}
            </dl>
            <a
              href={tgLink}
              target="_blank"
              rel="noreferrer"
              className={`${c.featured ? 'btn-primary' : 'btn-secondary'} ${styles.stackBtn}`}
            >
              {ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
