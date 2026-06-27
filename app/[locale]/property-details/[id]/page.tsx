'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  WifiIcon,
  KeyRoundIcon,
  SparkleIcon,
  MonitorIcon,
  UsersIcon,
  HouseHeartIcon,
  BriefcaseIcon,
  TowelRackIcon,
  UtensilsIcon,
} from 'lucide-react';
import LodgifyCalendarWidget from '@/components/shared/Lodgify/LodgifyCalendarWidget/LodgifyCalendarWidget';

const IMAGES = [
  { src: '/assets/images/Berlin/IMG_0628 2.jpeg', alt: 'Living Room' },
  { src: '/assets/images/Berlin/IMG_0721 2.jpeg', alt: 'Kitchen' },
  { src: '/assets/images/Berlin/IMG_3384.jpeg', alt: 'Living Room Detail' },
  { src: '/assets/images/Berlin/e5cab91d-f196-4072-9f41-d03d731e6d8e.jpg', alt: 'Bedroom 1' },
  { src: '/assets/images/Berlin/a1ae049a-4fb8-4e19-838a-e1dd8238e6c6.jpg', alt: 'Bedroom 2' },
  { src: '/assets/images/Berlin/IMG_3406.jpeg', alt: 'Bedroom 3' },
  { src: '/assets/images/Berlin/IMG_0704 2.jpeg', alt: 'Bathroom' },
  { src: '/assets/images/Berlin/c52fbfcd-9dc6-4918-a2ed-e1ea1df784df.jpg', alt: 'Hallway' },
  { src: '/assets/images/Berlin/IMG_3446.jpeg', alt: 'Kitchen Detail' },
  { src: '/assets/images/Berlin/2af9adfa-c22d-4553-9977-d17637251d63.jpg', alt: 'Coffee Station' },
  { src: '/assets/images/Berlin/026d2888-c2a9-4de1-b2f5-1a957e37a27d.jpg', alt: 'Detail' },
  { src: '/assets/images/Berlin/c18d6bca-98b0-4b5a-9a62-ea332917463e.jpg', alt: 'Detail' },
] as const;

const HIGHLIGHT_ICONS = [
  (
    <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  (
    <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  (
    <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
];

const Lightbox = ({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-full max-w-5xl px-12">
        <Swiper
          modules={[Navigation, Keyboard]}
          navigation
          keyboard={{ enabled: true }}
          initialSlide={initialIndex}
          loop={IMAGES.length > 1}
          className="lightbox-swiper"
        >
          {IMAGES.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex items-center justify-center" style={{ height: '80vh' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority={i === initialIndex}
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/50">{img.alt}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default function PropertyPage() {
  const locale = useLocale();
  const t = useTranslations('propertyDetails');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const AMENITIES = [
    { icon: <WifiIcon size={18} />, label: t('amenity0') },
    { icon: <KeyRoundIcon size={18} />, label: t('amenity1') },
    { icon: <UtensilsIcon size={18} />, label: t('amenity2') },
    { icon: <MonitorIcon size={18} />, label: t('amenity3') },
    { icon: <TowelRackIcon size={18} />, label: t('amenity4') },
    { icon: <BriefcaseIcon size={18} />, label: t('amenity5') },
    { icon: <SparkleIcon size={18} />, label: t('amenity6') },
    { icon: <HouseHeartIcon size={18} />, label: t('amenity7') },
    { icon: <UsersIcon size={18} />, label: t('amenity8') },
  ];

  const HIGHLIGHTS = [
    { icon: HIGHLIGHT_ICONS[0], title: t('highlight0Title'), body: t('highlight0Body') },
    { icon: HIGHLIGHT_ICONS[1], title: t('highlight1Title'), body: t('highlight1Body') },
    { icon: HIGHLIGHT_ICONS[2], title: t('highlight2Title'), body: t('highlight2Body') },
  ];

  const STATS = [
    { value: '135m²', label: t('statSize') },
    { value: '9', label: t('statGuests') },
    { value: '3', label: t('statBedrooms') },
    { value: '2', label: t('statBathrooms') },
  ];

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <Image
          src="/assets/images/Berlin_cover.jpeg"
          alt="Cozy Voyage Berlin Ku'damm"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 md:left-12 z-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/50 hover:text-white text-xs uppercase transition-colors duration-200"
            style={{ letterSpacing: '0.1em' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('back')}
          </Link>
        </div>

        {/* Two-column content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-36 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">

              {/* Left: title + stats + CTAs */}
              <div>
                <p
                  className="text-rose-400 font-medium uppercase mb-3"
                  style={{ letterSpacing: '0.25em', fontSize: '12px' }}
                >
                  Ku&#39;damm · Wittenbergplatz · Berlin
                </p>

                <h1
                  className="text-white font-bold leading-none mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.0 }}
                >
                  {t('heroTitle1')}<br />
                  <span className="text-rose-400">{t('heroTitle2')}</span>
                </h1>

                <div className="flex flex-wrap gap-3 mb-8">
                  {STATS.map(({ value, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5"
                    >
                      <span className="text-white font-bold text-lg leading-none">{value}</span>
                      <span className="text-white/60 text-[10px] uppercase mt-0.5" style={{ letterSpacing: '0.12em' }}>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    onClick={() => setLightboxIndex(0)}
                    className="cursor-pointer flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 text-sm font-semibold uppercase transition-colors duration-200"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {t('viewPhotos')}
                  </button>
                </div>
              </div>

              {/* Right: booking widget */}
              <div>
                <h2 className="text-white font-bold">
                  {t('bookNow')}
                </h2>
                <LodgifyCalendarWidget />
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>{t('scroll')}</span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section id="photos" className="bg-black px-6 py-20 md:px-10">
        <div className="mx-auto mb-8 max-w-[1200px] flex items-end justify-between">
          <div>
            <p className="mb-1 text-[0.6rem] font-medium uppercase text-rose-500" style={{ letterSpacing: '0.2em' }}>
              Ku&#39;damm · Wittenbergplatz
            </p>
            <h2
              className="font-bold leading-none text-white"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', letterSpacing: '-0.01em' }}
            >
              {t('galleryHeading')}
            </h2>
          </div>
          <span className="text-white/30 text-sm">{t('galleryCount', { count: IMAGES.length })}</span>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-[6px] overflow-x-auto pb-1 pl-6 pr-6 md:-mx-10 md:pl-10 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="group relative h-[190px] w-[260px] flex-none snap-start overflow-hidden md:h-[300px] md:w-[420px] cursor-zoom-in"
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={60}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 767px) 260px, 420px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </section>

      {/* ── DESCRIPTION + AMENITIES ── */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <p className="text-rose-500 font-medium uppercase mb-4" style={{ letterSpacing: '0.25em', fontSize: '13px' }}>
              {t('apartmentLabel')}
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                className="font-bold leading-none"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: '#111', lineHeight: 1.05 }}
              >
                {t('apartmentHeading1')}<br />{t('apartmentHeading2')}
              </h2>
              <p className="text-gray-600 max-w-sm md:text-right leading-relaxed" style={{ fontSize: '16px' }}>
                {t('apartmentSubtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">{t('apartmentDesc1')}</p>
              <p className="text-gray-600 leading-relaxed">{t('apartmentDesc2')}</p>
              <p className="text-gray-600 leading-relaxed">{t('apartmentDesc3')}</p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-gray-400 uppercase text-xs font-semibold mb-5" style={{ letterSpacing: '0.2em' }}>
                {t('amenitiesLabel')}
              </p>
              <div className="divide-y divide-gray-100">
                {AMENITIES.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 py-3.5">
                    <span className="text-rose-500 flex-none">{icon}</span>
                    <span className="text-gray-800 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-[#0f0f0f] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 md:mb-20">
            <p className="text-rose-500 font-medium uppercase mb-4" style={{ letterSpacing: '0.25em', fontSize: '13px' }}>
              {t('highlightsLabel')}
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                className="font-bold leading-none text-white"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
              >
                {t('highlightsHeading1')}<br />
                <span className="text-rose-400">{t('highlightsHeading2')}</span>
              </h2>
              <p className="text-white/70 font-light leading-relaxed md:max-w-sm md:text-right" style={{ fontSize: '16px' }}>
                {t('highlightsSubtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="group bg-white/[0.05] border border-white/[0.10] p-8 flex flex-col gap-5 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="text-rose-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {h.icon}
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-semibold text-white leading-snug" style={{ fontSize: '1.15rem' }}>
                    {h.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed" style={{ fontSize: '15px' }}>
                    {h.body}
                  </p>
                </div>
                <div className="h-px w-8 bg-rose-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FALLBACK ── */}
      <section className="bg-[#0f0f0f] py-16 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm leading-relaxed">
            {t('contactQuestion')}
          </p>
          <a
            href="mailto:info@cozy-voyage.com"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold uppercase transition-colors duration-200"
            style={{ letterSpacing: '0.08em' }}
          >
            info@cozy-voyage.com
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox initialIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </div>
  );
}
