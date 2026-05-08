'use client'

import React from 'react';
import { useTranslations } from 'next-intl';

const features: { key: string; icon: React.ReactNode }[] = [
  {
    key: 'wifi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    key: 'checkin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01M12 19h.01" />
      </svg>
    ),
  },
  {
    key: 'accessible',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="14.5" cy="3.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 5L9 12.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l3.5 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7v5.5h8M17 12.5v5" />
        <circle cx="9" cy="20" r="3" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    ),
  },
  {
    key: 'design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    key: 'bedding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5h19.5M2.25 19.5V9a.75.75 0 01.75-.75h18a.75.75 0 01.75.75v10.5M2.25 19.5H.75M21.75 19.5h1.5M6 9.75V19.5m12-9.75V19.5M6.75 6h10.5a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75z" />
      </svg>
    ),
  },
  {
    key: 'cleaning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

const CompanyStandards = () => {
  const t = useTranslations('companyStandards');
  return (
    <section id="our-company" className="py-24 md:py-32 px-6 md:px-10">
      {/* Section header */}
      <div className="mb-16 md:mb-20">
        <p
          className="text-rose-500 font-medium uppercase mb-4"
          style={{ letterSpacing: '0.25em', fontSize: '16px' }}
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
          <p className="text-gray-500 font-light max-w-sm md:text-right leading-relaxed" style={{ fontSize: '16px' }}>
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group shadow-xl bg-white p-8 md:p-10 flex flex-col gap-5 hover:bg-gray-50 transition-colors duration-300"
          >
            {/* Icon + number */}
            <div className="flex items-start justify-between">
              <div className="text-rose-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                {feature.icon}
              </div>
              <span
                className="text-gray-300 font-bold select-none"
                style={{ fontSize: '3rem', lineHeight: 1, letterSpacing: '-0.04em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3
                className="font-semibold text-gray-900 leading-snug"
                style={{ fontSize: '1.4rem', color: '#111' }}
              >
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: '16px', color: '#6b7280' }}>
                {t(`${feature.key}.description`)}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="mt-auto pt-4">
              <div className="h-px w-8 bg-rose-500 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStandards;