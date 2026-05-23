import { MetadataRoute } from 'next';

const SITE_URL = 'https://cozy-voyage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      alternates: { languages: { en: `${SITE_URL}/en`, 'x-default': `${SITE_URL}/de` } },
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      alternates: { languages: { de: `${SITE_URL}/de`, 'x-default': `${SITE_URL}/de` } },
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/de/guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: { languages: { en: `${SITE_URL}/en/guide`, 'x-default': `${SITE_URL}/de/guide` } },
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: { languages: { de: `${SITE_URL}/de/guide`, 'x-default': `${SITE_URL}/de/guide` } },
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/de/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: { languages: { en: `${SITE_URL}/en/about`, 'x-default': `${SITE_URL}/de/about` } },
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: { languages: { de: `${SITE_URL}/de/about`, 'x-default': `${SITE_URL}/de/about` } },
      priority: 0.6,
    },
  ];
}
