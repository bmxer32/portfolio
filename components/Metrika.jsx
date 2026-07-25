'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { METRIKA_ID } from './metrika-id'

/*
 * Досылка просмотров в Яндекс.Метрику при клиентских переходах.
 *
 * Сайт на App Router: клик по «Услугам» или «Политике» не перезагружает
 * страницу, поэтому счётчик сам увидит только самый первый просмотр.
 * Остальные отправляем руками на смену маршрута.
 *
 * Сам счётчик подключается инлайновым скриптом в <head> — так он грузится
 * раньше и успевает отметить визит, даже если посетитель сразу закроет вкладку.
 */
export default function Metrika() {
  const pathname = usePathname()
  const first = useRef(true)

  useEffect(() => {
    // первый просмотр уже отправлен вызовом init в <head> — не дублируем
    if (first.current) {
      first.current = false
      return
    }
    if (typeof window.ym !== 'function') return
    window.ym(METRIKA_ID, 'hit', window.location.href, {
      referer: document.referrer,
      title: document.title,
    })
  }, [pathname])

  return null
}
