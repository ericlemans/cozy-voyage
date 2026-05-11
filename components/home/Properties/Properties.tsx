'use client';

import React from 'react';
import Link from 'next/link';
import PropertyCard from '@/components/home/Cards/PropertyCard';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const properties = [
  {
    title: 'Stylish 135m² am Ku\'damm',
    location: 'Wittenbergplatz',
    city: 'Berlin',
    image: '/assets/images/berlin_card.jpeg',
    guests: 6,
    minPrice: 280,
    href: 'https://cozy-voyage.lodgify.com/de/4578017/cozy-voyage-stylish-135sqm-at-kudamm',
    featured: true,
  },
  {
    title: 'Frauenkirche — Für 2–4 Personen',
    location: 'Altstadt',
    city: 'Dresden',
    image: '/assets/images/dresden small_card.jpeg',
    guests: 4,
    minPrice: 110,
    href: 'https://cozy-voyage.lodgify.com/de/4588121/cozy-voyage-frauenkirche-1-ruhig-und-zentral',
  },
  {
    title: 'Frauenkirche — Für 4–6 Personen',
    location: 'Altstadt',
    city: 'Dresden',
    image: '/assets/images/dresden big_card.jpeg',
    guests: 6,
    minPrice: 165,
    href: 'https://cozy-voyage.lodgify.com/de/4588223/cozy-voyage-frauenkirche-2-ruhig-und-zentral',
  },
  {
    title: 'Altstadt Zentrum — Für 8 Personen',
    location: 'Altstadt',
    city: 'Dresden',
    image: '/assets/images/dresden 8 people_card.jpeg',
    guests: 8,
    minPrice: 256,
    href: 'https://cozy-voyage.lodgify.com/de/4693618/zentrum-der-altstadt-fur-8-personen-cozy-voyage',
  },
];

const Properties = () => {
  const t = useTranslations('properties');
  const [featured, ...rest] = properties;

  return (
    <section id="properties" className="py-24 md:py-32 px-6 md:px-[30px]">
      {/* Header */}
      <div className="mb-16 md:mb-20">
        <p
          className="text-rose-500 text-xs font-medium uppercase mb-4"
          style={{ letterSpacing: '0.25em' }}
        >
          {t('label')}
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-bold leading-none"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
              color: '#111',
              lineHeight: 1.05,
            }}
          >
            {t('heading1')}<br />{t('heading2')}
          </h2>
          <Link
            href="https://cozy-voyage.lodgify.com/de/4578016/alle-objekte"
            target="_blank"
            className="group inline-flex items-center gap-3 text-gray-500 hover:text-rose-600 text-sm font-medium transition-colors duration-200 self-start md:self-auto"
            style={{ letterSpacing: '0.05em' }}
          >
            {t('viewAll')}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Grid: featured left + 3 stacked right */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Featured card spans 2 rows on large screens */}
        <div className="md:col-span-1 lg:col-span-1 lg:row-span-2">
          <PropertyCard {...featured} featured />
        </div>

        {/* Right: 3 cards in a column on lg, wrapping on md */}
        {rest.map((property, i) => (
          <PropertyCard key={i} {...property} />
        ))}
      </div>

      <div className=' border-b-gray-200 border-b w-80 mx-auto my-20' />

      <h2 className='text-rose-500 font-medium text-center uppercase pb-4'>{t('youCanFindUsAt')}</h2>
      <div className='flex gap-3 flex-col lg:flex-row justify-center items-center mt-10'>
        <Link href="https://www.airbnb.de/users/profile/1465717917818336305"
              target="_blank"
              className="relative h-24 w-60 rounded-xl overflow-hidden "
        >
          <Image src="/assets/logos/Airbnb_logo.png" objectFit='cover' fill alt="Booking.com Logo" />
        </Link>
        <Link href="https://www.booking.com/hotel/de/cozy-voyage-stylish-135m2-for-up-to-9-people.en-gb.html"
              target="_blank"
              className="relative h-24 w-80 rounded overflow-hidden"
        >
          <Image src="/assets/logos/Booking_logo.png" objectFit='cover' fill alt="VRBO Logo" />
        </Link>
        <Link href="https://www.vrbo.com/5622160ha"
              target="_blank"
              className="relative h-24 w-60 rounded overflow-hidden"
        >
          <Image src="/assets/logos/Vrbo_logo.png" objectFit='contain' fill alt="Airbnb Logo" />
        </Link>
      </div>
    </section>
  );
};

export default Properties;