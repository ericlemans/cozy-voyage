'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/assets/images/Berlin.webp',
    alt: 'Berlin Stylish 135m²',
    city: 'Berlin',
    neighborhood: "Ku'damm",
    label: 'Stylish 135m²',
  },
  {
    src: '/assets/images/Dresden.jpeg',
    alt: 'Dresden Frauenkirche',
    city: 'Dresden',
    neighborhood: 'Altstadt',
    label: 'Frauenkirche',
  },
  {
    src: '/assets/images/berlin_card .jpeg',
    alt: 'Berlin Wohnzimmer',
    city: 'Berlin',
    neighborhood: 'Wittenbergplatz',
    label: 'Wohnzimmer',
  },
] as const;

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black py-24 px-6 md:px-10">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-[1200px]">
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

      {/* Editorial grid */}
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[10px] md:grid-cols-[1.4fr_1fr] md:[grid-template-rows:340px_340px]"
      >
        {images.map(({ src, alt, city, neighborhood, label }, index) => (
          <div
            key={src}
            className={`group relative overflow-hidden ${
              index === 0
                ? 'aspect-[3/4] md:aspect-auto md:row-span-2'
                : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              sizes={
                index === 0
                  ? '(max-width: 768px) 100vw, 58vw'
                  : '(max-width: 768px) 100vw, 42vw'
              }
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* Location label */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p
                className="mb-1 text-xs font-medium uppercase text-rose-400"
                style={{ letterSpacing: '0.2em' }}
              >
                {city} · {neighborhood}
              </p>
              <p className="font-bold tracking-tight text-white">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
