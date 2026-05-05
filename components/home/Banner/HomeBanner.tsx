'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  {
    city: 'Berlin',
    location: "Ku'damm",
    imgSrc: '/assets/images/Berlin.webp',
    href: 'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Berlin',
  },
  {
    city: 'Dresden',
    location: 'Frauenkirche',
    imgSrc: '/assets/images/Dresden.jpeg',
    href: 'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Dresden',
  },
];

const HomeBanner = () => {
  return (
    <section className="relative bg-black">
      {/* Hero image */}
      <div className="relative h-screen min-h-[640px] max-h-[900px] w-full overflow-hidden">
        <Image
          className="object-cover scale-105"
          src="/assets/images/Berlin_Ks_1.jpeg"
          alt="Berlin Wittenbergplatz"
          fill
          priority
          sizes="100vw"
        />

        {/* Cinematic gradient overlay — no harsh opacity boxes */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="container mx-auto px-6 md:px-12">

            {/* Eyebrow */}
            <p
              className="text-rose-400 text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-4"
              style={{ letterSpacing: '0.25em' }}
            >
              Stilvolle Ferienunterkünfte
            </p>

            {/* Headline */}
            <h1
              className="text-white font-bold leading-none mb-4"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
              }}
            >
              Cozy<br />
              <span className="text-rose-400">Voyage</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-md">
              Wohnungen mit Charakter — mitten in Berlin und Dresden.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="https://cozy-voyage.lodgify.com/de/4578016/alle-objekte"
                target="_blank"
                className="group inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{ letterSpacing: '0.12em' }}
              >
                Alle Objekte
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <span className="hidden sm:block w-px h-8 bg-white/20" />

              <div className="flex gap-6">
                {destinations.map((d) => (
                  <Link
                    key={d.city}
                    href={d.href}
                    target="_blank"
                    className="text-white/60 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors duration-200 underline-offset-4 hover:underline"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {d.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </div>

      {/* Destination cards */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {destinations.map((d) => (
            <Link
              key={d.city}
              href={d.href}
              target="_blank"
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={d.imgSrc}
                alt={d.city}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Card gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-rose-400 text-xs tracking-widest uppercase mb-2" style={{ letterSpacing: '0.2em' }}>
                  {d.location}
                </p>
                <h2
                  className="text-white font-bold leading-none mb-4"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', color: 'white' }}
                >
                  {d.city}
                </h2>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                  <span>Entdecken</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-rose-500 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;