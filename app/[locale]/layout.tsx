import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';
import { routing } from '@/routing';
import { GoogleAnalytics } from '@next/third-parties/google';

const leagueSpartanSans = League_Spartan({ subsets: ['latin'] });

const SITE_URL = 'https://cozy-voyage.com';
const OG_IMAGE = `${SITE_URL}/assets/images/Berlin_Ks_1.jpeg`;

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEN = locale === 'en';

  const title = isEN
    ? 'Cozy Voyage | Design Apartments Berlin & Dresden'
    : 'Cozy Voyage | Designwohnungen Berlin & Dresden';

  const description = isEN
    ? 'Stylish, fully equipped apartments in the heart of Berlin and Dresden. Better than a hotel, more personal than Airbnb — perfect for city breaks, extended stays, and business travel.'
    : 'Vollausgestattete Designwohnungen in Berlin und Dresden. Besser als ein Hotel, persönlicher als Airbnb — ideal für Städtereisen, Langzeitaufenthalte und Geschäftsreisen.';

  const ogDescription = isEN
    ? 'Self check-in 24/7 · Fully equipped · Deep cleaned after every stay.'
    : 'Self Check-in 24/7 · Vollausgestattet · Tiefenreinigung nach jedem Aufenthalt.';

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        de: `${SITE_URL}/de`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/de`,
      },
    },
    openGraph: {
      title,
      description: ogDescription,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Cozy Voyage',
      type: 'website',
      locale: isEN ? 'en_US' : 'de_DE',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 800,
          alt: 'Cozy Voyage — Design Apartments Berlin & Dresden',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function LocaleLayout({
                                             children,
                                             params,
                                           }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'de' | 'en')) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body className={leagueSpartanSans.className}>
    <NextIntlClientProvider messages={messages}>
      <main className="mx-auto">
        <Header />
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
    {process.env.NODE_ENV !== 'development' &&
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-34D5LK3M4Z'} />
    }
    </body>
    </html>
  );
}
