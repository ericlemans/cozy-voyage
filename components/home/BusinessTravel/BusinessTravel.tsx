'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FileTextIcon, WifiIcon, MonitorIcon, UsersIcon } from 'lucide-react';

const features: { key: string; icon: React.ReactNode }[] = [
  { key: 'invoice', icon: <FileTextIcon size={32} /> },
  { key: 'wifi', icon: <WifiIcon size={32} /> },
  { key: 'teams', icon: <UsersIcon size={32} /> },
];

const BusinessTravel = () => {
  const t = useTranslations('businessTravel');

  return (
    <section id="business-travel" className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            className="text-rose-500 font-medium uppercase mb-4"
            style={{ letterSpacing: '0.25em', fontSize: '13px' }}
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
              {t('heading1')}<br />
              <span className="text-rose-400">{t('heading2')}</span>
            </h2>
            <p
              className="text-white/75 font-light leading-relaxed md:max-w-sm md:text-right"
              style={{ fontSize: '16px' }}
            >
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white/[0.05] border border-white/[0.10] p-8 flex flex-col gap-5 hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div className="text-rose-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  className="font-semibold text-white leading-snug"
                  style={{ fontSize: '1.1rem' }}
                >
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-white/70 leading-relaxed" style={{ fontSize: '15px' }}>
                  {t(`${feature.key}.description`)}
                </p>
              </div>
              <div className="h-px w-8 bg-rose-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Extended stay note */}
        <p
          className="text-white/55 text-sm text-center mb-10"
          style={{ letterSpacing: '0.05em' }}
        >
          {t('extended')}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@cozy-voyage.com?subject=Corporate%20Inquiry"
            className="group inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{ letterSpacing: '0.12em' }}
          >
            {t('cta')}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-white/55 text-sm" style={{ letterSpacing: '0.03em' }}>
            {t('ctaNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessTravel;
