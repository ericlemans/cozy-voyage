'use client'

import React from 'react';
import { useTranslations } from 'next-intl';
import { Accessibility, HouseHeartIcon, KeyRoundIcon, SparkleIcon, TowelRackIcon, WifiIcon } from 'lucide-react';

const features: { key: string; icon: React.ReactNode }[] = [
  {
    key: 'wifi',
    icon: <WifiIcon size={48}/>,
  },
  {
    key: 'checkin',
    icon: <KeyRoundIcon size={48} />
  },
  {
    key: 'accessible',
    icon: <Accessibility size={48} />
  },
  {
    key: 'design',
    icon: <HouseHeartIcon size={48} />
  },
  {
    key: 'bedding',
    icon: <TowelRackIcon size={48}/>,
  },
  {
    key: 'cleaning',
    icon: <SparkleIcon size={48}/>,
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
          <p className="text-gray-600 max-w-sm md:text-right leading-relaxed" style={{ fontSize: '16px' }}>
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
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
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