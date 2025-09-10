import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';
import HomeBanner from '@/components/home/Banner/HomeBanner';
import Properties from '@/components/home/Properties/Properties';
import CompanyStandards from '@/components/home/CompanyStandards/CompanyStandards';
import { Divider } from '@heroui/react';
// import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';

export default function Home() {
  return (
    <div>
      <main className="mx-auto">
        <Header />
        <HomeBanner />
        <div className="container mx-auto">
          <Properties />
          <Divider />
          <CompanyStandards />
          {/*Galerie*/}
          {/*<TestimonialCarousel />*/}
        </div>
      </main>
      <Footer />
    </div>
  );
}
