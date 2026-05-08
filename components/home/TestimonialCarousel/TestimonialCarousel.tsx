'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    text: 'Diese Wohnung ist die perfekte Bleibe. Sie liegt direkt hinter der Frauenkirche, zentraler ist kaum zu finden. Alles ist zu Fuß erreichbar. Nachts kann man ruhig schlafen. Gerne wieder!',
    guest: 'Julia',
    country: 'Italien',
    stars: 5,
    listing: 'Dresden Frauenkirche',
  },
  {
    text: 'Very good location. Easy access to everywhere. Clean and modern. Recommended!',
    guest: 'Lin An',
    country: 'China',
    stars: 5,
    listing: 'Dresden Frauenkirche',
  },
  {
    text: "We had a wonderful stay! I can't say enough good things about it. Eric is the absolute best, he made everything perfect!",
    guest: 'Lydia',
    country: 'USA',
    stars: 5,
    listing: "Berlin Ku'damm",
  },
  {
    text: 'Sehr gut ausgestattete, stilvoll eingerichtete Wohnung in bester Zentrumslage. Wir haben unseren Aufenthalt uneingeschränkt genossen. Jederzeit gerne wieder!',
    guest: 'Jürgen',
    country: 'Deutschland',
    stars: 5,
    listing: 'Dresden Frauenkirche',
  },
  {
    text: 'Hat alles super geklappt, die Unterkunft liegt mega zentral und ist sehr schön und sauber. Toll eingerichtetes Apartment, genau wie beschrieben. Wir hatten einen tollen Aufenthalt!',
    guest: 'Jennifer',
    country: 'Deutschland',
    stars: 5,
    listing: 'Dresden Frauenkirche',
  },
  {
    text: 'Outstanding hosting: not only the communication was responsive and very pleasant, but Eric and team were really accommodating and anticipated our needs — that\'s rare!',
    guest: 'Johanna',
    country: 'Schweiz',
    stars: 5,
    listing: "Berlin Ku'damm",
  },
  {
    text: 'Top Unterkunft, mitten in Berlin. Das KaDeWe war in wenigen Minuten fußläufig zu erreichen. Alles war sehr sauber, bequeme Betten und sehr viel Platz. Besten Dank!',
    guest: 'Ben',
    country: 'Deutschland',
    stars: 5,
    listing: "Berlin Ku'damm",
  },
  {
    text: "This flat is right in the heart of Dresden's old town — everything in walking distance. Clean and comfortable with all the conveniences of home!",
    guest: 'Elisse',
    country: 'USA',
    stars: 4,
    listing: 'Dresden Frauenkirche',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? 'text-rose-500' : 'text-white/15'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[number] }) => (
  <div className="flex flex-col bg-[#111] border border-white/[0.07] rounded-sm p-7 h-full">
    <Stars count={testimonial.stars} />
    <p className="text-white/70 text-sm font-light leading-relaxed flex-1 mb-6">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div>
      <div className="h-px w-8 bg-rose-500 mb-4" />
      <p className="text-white text-xs font-semibold uppercase tracking-widest">
        {testimonial.guest} · {testimonial.country}
      </p>
      <p className="text-white/35 text-xs mt-1">{testimonial.listing}</p>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const t = useTranslations('testimonials');
  return (
  <section id="testimonials" className="bg-black px-6 py-24 md:px-10">
    {/* Header */}
    <div className="mx-auto mb-16 max-w-[1200px]">
      <p
        className="text-rose-500 font-medium uppercase mb-4"
        style={{ fontSize: '11px', letterSpacing: '0.25em' }}
      >
        {t('label')}
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2
          className="font-bold leading-none text-white"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          {t('heading1')}<br />{t('heading2')}
        </h2>
        <p className="text-white/70 font-light leading-relaxed md:max-w-sm md:text-right" style={{ fontSize: '18px' }}>
          {t('subtitle')}
        </p>
      </div>
    </div>

    {/* Grid */}
    <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mb-20">
      {testimonials.map((testimonial, i) => (
        <div key={i} className="bg-black p-px">
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </div>

    {/* Badges */}
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
      {[
        { src: '/assets/images/Guest-favourite.png', alt: 'Airbnb Guest Favourite' },
        { src: '/assets/images/Booking-review-1.png', alt: 'Booking.com 9.6' },
        { src: '/assets/images/airbnb-superhost.png', alt: 'Airbnb Superhost' },
      ].map((badge) => (
        <div
          key={badge.alt}
          className="w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full overflow-hidden"
        >
          <Image src={badge.src} width={110} height={110} alt={badge.alt} className="object-contain" />
        </div>
      ))}
    </div>
  </section>
  );
};

export default TestimonialCarousel;
