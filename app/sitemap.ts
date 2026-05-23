import { MetadataRoute } from 'next';

const SITE_URL = 'https://cozy-voyage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/de`,
      lastModified: new Date(),
      alternates: { languages: { en: `${SITE_URL}/en` } },
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      alternates: { languages: { de: `${SITE_URL}/de` } },
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/de/guide`,
      lastModified: new Date(),
      alternates: { languages: { en: `${SITE_URL}/en/guide` } },
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/de/about`,
      lastModified: new Date(),
      alternates: { languages: { en: `${SITE_URL}/en/about` } },
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/de/impressum`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/de/agb`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/de/privacy-policy`,
      lastModified: new Date(),
      priority: 0.2,
    },
  ];
}
