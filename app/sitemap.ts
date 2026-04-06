import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app'
  const now = new Date()

  // Dynamic project pages (add these as you create them)
  const projects = [
    { slug: 'mahalaxmi-tailors', priority: 0.95, freq: 'monthly' as const },
    { slug: 'falcovita-healthcare', priority: 0.90, freq: 'monthly' as const },
    { slug: 'ipo-predictor', priority: 0.90, freq: 'monthly' as const },
    { slug: 'aws-cloud-architecture', priority: 0.85, freq: 'quarterly' as const },
    { slug: 'mern-portfolio', priority: 0.85, freq: 'quarterly' as const },
  ]

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'bi-weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    ...projectEntries,
    {
      url: `${baseUrl}/certifications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/urdu-shayari`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
