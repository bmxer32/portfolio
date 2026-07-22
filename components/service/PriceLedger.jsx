import styles from './service.module.css'

/**
 * Прайс в виде «сметы-диалога»: каждая строка — запрос клиента и решение
 * с ценой. Сознательно без карточек, галочек и бейджа «популярный» —
 * структура «нужда → решение → цена» читается как прейскурант студии.
 */
export default function PriceLedger({ rows, tgLink }) {
  return (
    <div className={styles.ledger}>
      {rows.map((r, i) => (
        <a
          key={i}
          href={tgLink}
          target="_blank"
          rel="noreferrer"
          className={styles.ledgerRow}
          aria-label={`${r.name}, ${r.from} ${r.price} рублей — обсудить в Telegram`}
        >
          <div className={styles.ledgerAsk}>«{r.ask}»</div>

          <div className={styles.ledgerWhat}>
            <div className={styles.ledgerName}>{r.name}</div>
            <div className={styles.ledgerIncludes}>{r.includes}</div>
          </div>

          <div className={styles.ledgerPriceWrap}>
            <div className={styles.ledgerFrom}>{r.from}</div>
            <div className={styles.ledgerPrice}>
              {r.price}&nbsp;<span className={styles.ledgerCur}>₽</span>
            </div>
            <div className={styles.ledgerTerm}>{r.term}</div>
            <div className={styles.ledgerGo}>Обсудить задачу →</div>
          </div>
        </a>
      ))}

      <div className={styles.ledgerFoot}>
        <p>
          Не уверены, какой уровень нужен? Пришлите ссылку на ваш сайт —
          соберём демо на ваших данных и подскажем после него. Бесплатно.
        </p>
        <a href={tgLink} target="_blank" rel="noreferrer" className="btn-secondary">
          Прислать сайт
        </a>
      </div>
    </div>
  )
}
