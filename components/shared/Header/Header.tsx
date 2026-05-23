'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from '@/navigation';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/navigation';
import { LODGIFY } from '@/lib/lodgify';

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/30 backdrop-blur-sm">
      <a href="/" className="relative w-[120px] h-[36px]">
        <Image
          src="/assets/logos/Cozy-Voyage-Logo.svg"
          alt="Cozy Voyage"
          fill
          className="object-contain brightness-0 invert"
        />
      </a>

      <div className="flex items-center gap-4">
        {/* Home */}
        <Link
          href="/"
          className="hidden md:block text-white/70 hover:text-white text-xs font-semibold uppercase transition-colors duration-200"
          style={{ letterSpacing: '0.12em' }}
        >
          {t('home')}
        </Link>

        {/* About */}
        <Link
          href="/about"
          className="hidden md:block text-white/70 hover:text-white text-xs font-semibold uppercase transition-colors duration-200"
          style={{ letterSpacing: '0.12em' }}
        >
          {t('about')}
        </Link>

        {/* City Guide dropdown */}
        <div className="relative group hidden md:block">
          <button
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-semibold uppercase transition-colors duration-200 cursor-default"
            style={{ letterSpacing: '0.12em' }}
            tabIndex={0}
          >
            {t('guide')}
            <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full -left-4 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
            <div className="bg-black/95 backdrop-blur-sm border border-white/10 py-1 min-w-[140px]">
              <Link
                href="/guide?city=berlin"
                className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-xs font-semibold uppercase transition-colors duration-150"
                style={{ letterSpacing: '0.12em' }}
              >
                Berlin
              </Link>
              <Link
                href="/guide?city=dresden"
                className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-xs font-semibold uppercase transition-colors duration-150"
                style={{ letterSpacing: '0.12em' }}
              >
                Dresden
              </Link>
            </div>
          </div>
        </div>

        {/* Locale switcher */}
        <div className="flex items-center gap-1">
          {locales.map((l, i) => (
            <React.Fragment key={l}>
              {i > 0 && <span className="text-white/30 text-sm">|</span>}
              <button
                onClick={() => switchLocale(l)}
                className={`px-2 py-1 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                  locale === l
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {l.toUpperCase()}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={LODGIFY.all(locale)}
          target="_blank"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase px-4 py-2.5 transition-colors duration-200"
          style={{ letterSpacing: '0.12em' }}
        >
          {t('cta')}
        </Link>
      </div>
    </header>
  );
}
