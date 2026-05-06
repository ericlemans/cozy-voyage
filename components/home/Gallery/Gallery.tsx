'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const properties = [
  {
    name: 'Berlin',
    location: "Ku'damm · Wittenbergplatz",
    images: [
      { src: '/assets/images/Berlin.webp', alt: 'Berlin Stylish 135m² — Wohnzimmer' },
      { src: '/assets/images/berlin_card.jpeg', alt: 'Berlin Stylish 135m² — Schlafzimmer' },
      { src: '/assets/images/Berlin_Ks_1.jpeg', alt: 'Berlin Stylish 135m² — Küche' },
      // placeholder — replace src with actual image path
      { src: '/assets/images/Berlin.webp', alt: 'Berlin Stylish 135m² — Foto 4' },
      { src: '/assets/images/Berlin.webp', alt: 'Berlin Stylish 135m² — Foto 5' },
    ],
  },
  {
    name: 'Dresden',
    location: 'Altstadt · Frauenkirche',
    images: [
      { src: '/assets/images/Dresden.jpeg', alt: 'Dresden Frauenkirche — Wohnzimmer' },
      { src: '/assets/images/Dresden.avif', alt: 'Dresden Frauenkirche — Aussicht' },
      { src: '/assets/images/dresden small_card.jpeg', alt: 'Dresden Frauenkirche — Für 2–4 Personen' },
      { src: '/assets/images/dresden big_card.jpeg', alt: 'Dresden Frauenkirche — Für 4–6 Personen' },
      { src: '/assets/images/dresden 8 people_card.jpeg', alt: 'Dresden Altstadt — Für 8 Personen' },
      // placeholder — replace src with actual image path
      { src: '/assets/images/Dresden.jpeg', alt: 'Dresden Frauenkirche — Foto 6' },
      { src: '/assets/images/Dresden.jpeg', alt: 'Dresden Frauenkirche — Foto 7' },
    ],
  },
] as const;

type Property = (typeof properties)[number];

const PropertyRow = ({ property }: { property: Property }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    ref.current?.scrollBy({ left: dir === 'right' ? 400 : -400, behavior: 'smooth' });
  };

  return (
    <div className="mb-14">
      <div className="mx-auto mb-5 flex max-w-[1200px] items-end justify-between">
        <div>
          <p
            className="mb-1 text-[0.6rem] font-medium uppercase text-rose-500"
            style={{ letterSpacing: '0.2em' }}
          >
            {property.location}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-white">{property.name}</h3>
        </div>
        <div className="flex gap-2">
          {(['left', 'right'] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={dir === 'left' ? 'Zurück' : 'Weiter'}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors duration-200 hover:border-white/50 hover:text-white"
            >
              <svg
                className={`h-3.5 w-3.5 ${dir === 'left' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={ref}
        className="-mx-6 flex snap-x snap-mandatory gap-[6px] overflow-x-auto pb-1 pl-6 pr-6 md:-mx-10 md:pl-10 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {property.images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="group relative h-[190px] w-[260px] flex-none snap-start overflow-hidden md:h-[300px] md:w-[420px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              sizes="(max-width: 767px) 260px, 420px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black px-6 py-24 md:px-10">
      <div className="mx-auto mb-12 max-w-[1200px]">
        <p
          className="mb-4 text-xs font-medium uppercase text-rose-500"
          style={{ letterSpacing: '0.28em' }}
        >
          Unsere Wohnungen
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-bold leading-none text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            In<br />Bildern
          </h2>
          <p className="text-sm font-light leading-relaxed text-white/45 md:max-w-sm">
            Mit einer Mischung aus Funktionalität und Design haben wir unsere
            Wohnungen so eingerichtet, dass Sie einen unvergesslichen Aufenthalt
            genießen können.
          </p>
        </div>
      </div>

      {properties.map((property) => (
        <PropertyRow key={property.name} property={property} />
      ))}
    </section>
  );
};

export default Gallery;
