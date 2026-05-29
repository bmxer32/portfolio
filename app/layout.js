import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../components/SmoothScroll'
import SectionNav from '../components/SectionNav'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  metadataBase: new URL('https://portfolio-site-two-beta-33.vercel.app'),
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

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body className={inter.className}>
        <SectionNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
