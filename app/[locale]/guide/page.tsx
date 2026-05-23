import type { Metadata } from 'next';
import CityGuide from '@/components/home/CityGuide/CityGuide';

type City = 'berlin' | 'dresden';

const SITE_URL = 'https://cozy-voyage.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEN = locale === 'en';
  return {
    title: isEN
      ? 'City Guide Berlin & Dresden | Cozy Voyage'
      : 'Stadtführer Berlin & Dresden | Cozy Voyage',
    description: isEN
      ? 'Our insider tips for Berlin and Dresden — where to eat, what to see, how to get around. Curated by people who live there.'
      : 'Unsere Insidertipps für Berlin und Dresden — wo man isst, was man sieht, wie man sich fortbewegt. Kuratiert von Menschen, die dort leben.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/guide`,
      languages: {
        de: `${SITE_URL}/de/guide`,
        en: `${SITE_URL}/en/guide`,
        'x-default': `${SITE_URL}/de/guide`,
      },
    },
  };
}

export default async function GuidePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;
  const initialCity: City = city === 'dresden' ? 'dresden' : 'berlin';

  return (
    <div className="bg-[#f9f8f6] pt-24">
      <CityGuide initialCity={initialCity} />
    </div>
  );
}
