import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.scss';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';
import { routing } from '@/routing';

const leagueSpartanSans = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cozy Voyage | Ferienwohnungen',
  description: 'Stilvolle Ferienunterkünfte im Zentrum von Berlin und Dresden',
};

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
      </body>
    </html>
  );
}
