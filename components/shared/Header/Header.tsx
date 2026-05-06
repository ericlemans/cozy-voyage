'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/navigation';

export default function Header() {
  const locale = useLocale();
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
          className="object-contain"
        />
      </a>

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
    </header>
  );
}
