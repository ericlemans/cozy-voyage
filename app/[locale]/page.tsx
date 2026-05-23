import HomeBanner from '@/components/home/Banner/HomeBanner';
import Properties from '@/components/home/Properties/Properties';
import CompanyStandards from '@/components/home/CompanyStandards/CompanyStandards';
import BusinessTravel from '@/components/home/BusinessTravel/BusinessTravel';
import TestimonialCarousel from '@/components/home/TestimonialCarousel/TestimonialCarousel';
import Gallery from '@/components/home/Gallery/Gallery';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cozy-voyage.com/#organization',
      name: 'Cozy Voyage GmbH',
      url: 'https://cozy-voyage.com',
      logo: 'https://cozy-voyage.com/assets/logos/Cozy-Voyage-Logo.svg',
      email: 'info@cozy-voyage.com',
      foundingDate: '2023',
      areaServed: ['Berlin', 'Dresden'],
    },
    {
      '@type': 'LodgingBusiness',
      '@id': 'https://cozy-voyage.com/#lodging',
      name: 'Cozy Voyage',
      url: 'https://cozy-voyage.com',
      description:
        'Fully equipped designer apartments in Berlin and Dresden. Self check-in 24/7, deep cleaned after every stay.',
      email: 'info@cozy-voyage.com',
      image: 'https://cozy-voyage.com/assets/images/Berlin_Ks_1.jpeg',
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Credit Card, PayPal, Bank Transfer',
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Self Check-in', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Workspace', value: true },
      ],
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Berlin',
          addressCountry: 'DE',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Dresden',
          addressCountry: 'DE',
        },
      ],
      hasMap: 'https://maps.google.com/?q=Berlin,Germany',
      containsPlace: [
        {
          '@type': 'Apartment',
          name: 'Cozy Voyage — Stylish 135m² at Ku\'damm',
          url: 'https://cozy-voyage.lodgify.com/de/4578017/cozy-voyage-stylish-135sqm-at-kudamm',
          address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
          floorSize: { '@type': 'QuantitativeValue', value: 135, unitCode: 'MTK' },
        },
        {
          '@type': 'Apartment',
          name: 'Cozy Voyage Frauenkirche 1 — Ruhig und Zentral',
          url: 'https://cozy-voyage.lodgify.com/de/4588121/cozy-voyage-frauenkirche-1-ruhig-und-zentral',
          address: { '@type': 'PostalAddress', addressLocality: 'Dresden', addressCountry: 'DE' },
        },
        {
          '@type': 'Apartment',
          name: 'Cozy Voyage Frauenkirche 2 — Ruhig und Zentral',
          url: 'https://cozy-voyage.lodgify.com/de/4588223/cozy-voyage-frauenkirche-2-ruhig-und-zentral',
          address: { '@type': 'PostalAddress', addressLocality: 'Dresden', addressCountry: 'DE' },
        },
        {
          '@type': 'Apartment',
          name: 'Cozy Voyage — Zentrum der Altstadt für 8 Personen',
          url: 'https://cozy-voyage.lodgify.com/de/4693618/zentrum-der-altstadt-fur-8-personen-cozy-voyage',
          address: { '@type': 'PostalAddress', addressLocality: 'Dresden', addressCountry: 'DE' },
          occupancy: { '@type': 'QuantitativeValue', maxValue: 8 },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='bg-white'>
        <HomeBanner />
        <div className="container mx-auto">
          <Properties />
          <div className='flex justify-center items-center border-b border-gray-400 w-full' />
          <CompanyStandards />
        </div>
        <Gallery />
        <BusinessTravel />
        <TestimonialCarousel />
      </div>
    </>
  );
}
