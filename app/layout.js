import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  metadataBase: new URL('https://max-portfolio-site-ruby.vercel.app'),
  title: 'Максим Буренков | Разработка сайтов и веб-приложений',
  description: 'Профессиональное создание премиальных веб-сайтов и приложений.',
  openGraph: {
    title: 'Максим Буренков | Разработка сайтов и веб-приложений',
    description: 'Профессиональное создание премиальных веб-сайтов и приложений.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Максим Буренков | Full Stack Разработчик',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Максим Буренков | Разработка сайтов и веб-приложений',
    description: 'Профессиональное создание премиальных веб-сайтов и приложений.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Force empty favicon to override cached localhost VPN icons */}
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
