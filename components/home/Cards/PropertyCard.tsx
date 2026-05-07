'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type PropertyCardProps = {
  title: string;
  location: string;
  city: string;
  guests: number;
  minPrice: number;
  image: string;
  href: string;
  featured?: boolean;
}

const PropertyCard = ({ title, location, city, guests, minPrice, image, href, featured }: PropertyCardProps) => {
  const t = useTranslations('propertyCard');
  return (
    <Link
      href={href}
      target="_blank"
      className={`group relative overflow-hidden block rounded-2xl bg-gray-900 ${featured ? 'md:row-span-2' : ''}`}
      style={{ aspectRatio: featured ? '3/4' : '4/3' }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* City badge */}
      <div className="absolute top-5 left-5">
        <span
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 uppercase"
          style={{ letterSpacing: '0.15em', borderRadius: '2px' }}
        >
          {city}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p
          className="text-rose-400 text-xs uppercase mb-2"
          style={{ letterSpacing: '0.2em' }}
        >
          {city} - {location}
        </p>

        <h3
          className="text-white font-bold leading-tight mb-4"
          style={{letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-white/50 text-xs uppercase" style={{ letterSpacing: '0.1em' }}>
              {t('guests', { count: guests })}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold text-xl">€{minPrice}</span>
              <span className="text-white/50 text-sm">{t('night')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/60 text-sm font-medium group-hover:text-white transition-colors duration-300">
            <span className="uppercase" style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}>{t('book')}</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Accent line */}
        <div className="mt-5 h-px w-8 bg-rose-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
};

export default PropertyCard;