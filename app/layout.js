import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../components/SmoothScroll'
import SectionNav from '../components/SectionNav'
import NoZoom from '../components/NoZoom'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  metadataBase: new URL('https://narodniy-team.ru'),
  title: 'Narodniy Team | Разработка сайтов и веб-приложений',
  description: 'Профессиональное создание премиальных веб-сайтов и приложений. Full Stack разработка под ключ.',
  keywords: ['разработка сайтов', 'веб-приложения', 'фронтенд', 'бэкенд', 'React', 'Next.js', 'создание сайтов под ключ', 'full stack', 'веб студия'],
  authors: [{ name: 'Narodniy Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Narodniy Team | Разработка сайтов и веб-приложений',
    description: 'Профессиональное создание премиальных веб-сайтов и приложений.',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Narodniy Team | Full Stack Разработка',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narodniy Team | Разработка сайтов и веб-приложений',
    description: 'Профессиональное создание премиальных веб-сайтов и приложений.',
    images: ['/og-preview.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Narodniy Team',
  description: 'Профессиональная разработка сайтов, веб-приложений и лендингов под ключ. Full Stack разработка на React, Next.js, Node.js.',
  url: 'https://narodniy-team.ru',
  logo: 'https://narodniy-team.ru/logop.png',
  image: 'https://narodniy-team.ru/og-preview.png',
  telephone: '+79309502454',
  email: 'v71072587@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Russia',
  },
  serviceType: [
    'Разработка сайтов',
    'Создание веб-приложений',
    'Full Stack разработка',
    'Разработка лендингов',
    'Frontend разработка',
    'Backend разработка',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+79309502454',
    contactType: 'sales',
    availableLanguage: 'Russian',
    contactOption: 'TollFree',
  },
  sameAs: [
    'https://t.me/Webe9',
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NoZoom />
        <SectionNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
