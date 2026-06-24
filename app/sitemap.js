export default function sitemap() {
  const baseUrl = 'https://narodniy-team.ru'
  const now = new Date()

  const services = [
    'razrabotka-saytov',
    'razrabotka-botov-s-ii',
    'razrabotka-mobilnyh-prilozheniy',
    'razrabotka-programm-na-pk',
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `${baseUrl}/uslugi/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
