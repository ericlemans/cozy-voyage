import HomeBanner from '@/components/home/Banner/HomeBanner';
import Properties from '@/components/home/Properties/Properties';
import CompanyStandards from '@/components/home/CompanyStandards/CompanyStandards';
import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';
import Gallery from '@/components/home/Gallery/Gallery';
import { Divider } from 'primereact/divider';

export default function Home() {
  return (
    <div className='bg-white'>
        <HomeBanner />
        <div className="container mx-auto">
          <Properties />
          <Divider />
          <CompanyStandards />
        </div>
        <Gallery />
        <TestimonialCarousel />
    </div>
  );
}
