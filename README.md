<div align="center">

# Narodniy Team — narodniy-team.ru

**Сайт студии разработки: сайты, мобильные приложения, Telegram-боты с ИИ, десктоп-софт**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

🌐 **Живой сайт: [narodniy-team.ru](https://narodniy-team.ru)**

</div>

---

## О проекте

Продающий сайт студии Narodniy Team: анимированный лендинг с портфолио, SEO-страницы услуг и формы захвата лидов. Полностью кастомный фронт без конструкторов и UI-китов.

## Структура

```
app/
├── page.js                 # Главная: Hero, навыки, портфолио, процесс работы
├── uslugi/
│   ├── razrabotka-saytov/               # Услуга: сайты и веб-приложения
│   ├── razrabotka-mobilnyh-prilozheniy/ # Услуга: мобильные приложения
│   ├── razrabotka-botov-s-ii/           # Услуга: Telegram-боты с ИИ
│   └── razrabotka-programm-na-pk/       # Услуга: десктоп-софт
├── privacy/               # Политика конфиденциальности
├── robots.js / sitemap.js # SEO
components/                # Hero, Portfolio, Skills, Workflow, кастомный курсор и др.
```

## Фичи

- **Анимации** — Framer Motion (reveal-эффекты, scramble-текст), плавный скролл на Lenis
- **SEO** — метаданные, sitemap, robots, отдельные посадочные под каждую услугу
- **Кастомный курсор и секционная навигация** — ощущение «дорогого» сайта
- **Адаптив** — мобильная версия проработана отдельно (выравнивание карточек, hero-бейджи)

## Запуск

```bash
npm install
npm run dev   # http://localhost:3000
```

Деплой — автоматический через Vercel при пуше в `main`.

---

<div align="center">

Разработка — [Буренков М.М.](https://github.com/bmxer32) · Telegram: [@webe9](https://t.me/webe9)

</div>
