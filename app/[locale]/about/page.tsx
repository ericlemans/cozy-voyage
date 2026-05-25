import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { LODGIFY } from '@/lib/lodgify';

const SITE_URL = 'https://cozy-voyage.com';

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEN = locale === 'en';
  return {
    title: isEN ? 'About Us | Cozy Voyage' : 'Über uns | Cozy Voyage',
    description: isEN
      ? 'Susi & Eric — two travellers who turned their love of beautiful spaces into Cozy Voyage. Design apartments in Berlin & Dresden, run with personal care.'
      : 'Susi & Eric — zwei Reisende, die ihre Liebe zu schönen Orten in Cozy Voyage verwandelt haben. Designwohnungen in Berlin & Dresden, persönlich betreut.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        de: `${SITE_URL}/de/about`,
        en: `${SITE_URL}/en/about`,
        'x-default': `${SITE_URL}/de/about`,
      },
    },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations('about');

  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full overflow-hidden bg-black">
        <Image
          src="/assets/images/Berlin_Keithstr_bg.webp"
          alt="Cozy Voyage Berlin"
          fill
          className="object-cover opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/85" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16 max-w-5xl mx-auto">
          <p
            className="text-rose-400 font-medium uppercase mb-4"
            style={{ letterSpacing: '0.25em', fontSize: '13px' }}
          >
            {t('eyebrow')}
          </p>
          <h1
            className="text-white font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.0 }}
          >
            {t('heroLine1')}<br />
            <span className="text-rose-400">{t('heroLine2')}</span><br />
            {t('heroLine3')}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          {t('intro1')}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-16">
          {t('intro2')}
        </p>

        {/* What drives us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6" style={{ letterSpacing: '-0.01em' }}>
            {t('drivesHeading')}
          </h2>
          <div className="space-y-14">
            <div className="flex gap-6">
              <div className="relative shrink-0 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/Berlin/IMG_3406.jpeg"
                  alt="Our Berlin Ku'damm apartment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-auto border-l-2 border-rose-500 pl-6 flex flex-col">
                <h3 className="font-semibold text-black mb-2">{t('pillar1Title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('pillar1Body')}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="border-r-2 border-rose-500 pl-6">
                <h3 className="font-semibold text-black mb-2">{t('pillar2Title')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('pillar2Body')}</p>
              </div>
              <div className="relative shrink-0 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/Berlin/IMG_0721 2.jpeg"
                  alt="Our Berlin Ku'damm apartment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

           <div className="flex gap-6">
              <div className="relative shrink-0 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/Berlin/IMG_3384.jpeg"
                  alt="Our Berlin Ku'damm apartment"
                  fill
                  className="object-cover"
                />
              </div>
             <div className="border-l-2 border-rose-500 pl-6">
               <h3 className="font-semibold text-black mb-2">{t('pillar3Title')}</h3>
               <p className="text-gray-600 leading-relaxed">{t('pillar3Body')}</p>
             </div>
            </div>
          </div>
        </div>


        {/* Quote */}
        <blockquote className="border border-gray-200 p-8 mb-16 relative">
          <div className="absolute -top-3 left-8 bg-white px-2">
            <span className="text-rose-500 font-medium uppercase text-xs" style={{ letterSpacing: '0.2em' }}>
              {t('quoteLabel')}
            </span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
            &ldquo;{t('quote')}&rdquo;
          </p>
          <footer className="text-gray-500 text-sm font-medium not-italic">{t('quoteFooter')}</footer>
        </blockquote>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-3" style={{ letterSpacing: '-0.01em' }}>
            {t('ctaHeading')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('ctaSubtext')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={LODGIFY.all(locale)}
              target="_blank"
              className="group inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 text-sm font-semibold uppercase transition-all duration-300"
              style={{ letterSpacing: '0.12em' }}
            >
              {t('ctaBook')}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                   stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@cozy-voyage.com"
              className="inline-flex items-center gap-3 border border-gray-300 hover:border-rose-500 hover:text-rose-600 text-gray-700 px-8 py-4 text-sm font-semibold uppercase transition-all duration-300"
              style={{ letterSpacing: '0.12em' }}
            >
              {t('ctaContact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}