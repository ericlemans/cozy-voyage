import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.scss';
import 'leaflet/dist/leaflet.css';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';

const leagueSpartanSans = League_Spartan({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cozy Voyage | Ferienwohnungen',
  description: 'Stilvolle Ferienunterkünfte im Zentrum von Berlin und Dresden',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    {/*<GoogleTagManager gtmId='G-34D5LK3M4Z' />*/}
    <body className={leagueSpartanSans.className}>

    <main className="mx-auto">
      <Header />
      {children}
    </main>
    <Footer />
    </body>
    </html>
  );
}
