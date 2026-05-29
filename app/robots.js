export default function robots() {
  // Замените на ваш будущий домен
  const baseUrl = 'https://portfolio-site-two-beta-33.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
