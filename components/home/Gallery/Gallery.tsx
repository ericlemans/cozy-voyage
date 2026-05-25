'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const properties = [
  {
    name: 'Berlin',
    location: "Ku'damm · Wittenbergplatz",
    images: [
      { src: '/assets/images/Berlin/IMG_0641 2.jpeg', alt: 'Berlin Ku\'damm 135m² — Küche' },
      { src: '/assets/images/Berlin/IMG_0721 2.jpeg', alt: 'Berlin Ku\'damm 135m² — Kûche Detail' },
      { src: '/assets/images/Berlin/IMG_0628 2.jpeg', alt: 'Berlin Ku\'damm 135m² — Wohnzimmer' },
      { src: '/assets/images/Berlin/IMG_3384.jpeg', alt: 'Berlin Ku\'damm 135m² — Wohnzimmer Detail' },
      { src: '/assets/images/Berlin/c52fbfcd-9dc6-4918-a2ed-e1ea1df784df.jpg', alt: 'Berlin Ku\'damm 135m² — Flur' },
      { src: '/assets/images/Berlin/e5cab91d-f196-4072-9f41-d03d731e6d8e.jpg', alt: 'Berlin Ku\'damm 135m² — Schlafzimmer 1' },
      { src: '/assets/images/Berlin/a1ae049a-4fb8-4e19-838a-e1dd8238e6c6.jpg', alt: 'Berlin Ku\'damm 135m² — Schlafzimmer 2' },
      { src: '/assets/images/Berlin/IMG_3406.jpeg', alt: 'Berlin Ku\'damm 135m² — Schlafzimmer 3' },
      { src: '/assets/images/Berlin/IMG_0704 2.jpeg', alt: 'Berlin Ku\'damm 135m² — Badezimmer' },
      { src: '/assets/images/Berlin/IMG_3446.jpeg', alt: 'Berlin Ku\'damm 135m² — Foto 10' },
      { src: '/assets/images/Berlin/2af9adfa-c22d-4553-9977-d17637251d63.jpg', alt: 'Berlin Ku\'damm 135m² — Foto 11' },
      { src: '/assets/images/Berlin/026d2888-c2a9-4de1-b2f5-1a957e37a27d.jpg', alt: 'Berlin Ku\'damm 135m² — Foto 12' },
      { src: '/assets/images/Berlin/c18d6bca-98b0-4b5a-9a62-ea332917463e.jpg', alt: 'Berlin Ku\'damm 135m² — Foto 14' },
    ],
  },
  {
    name: 'Dresden — Frauenkirche',
    location: 'Innere Altstadt · Frauenkirche',
    images: [
      { src: '/assets/images/Dresden_big/1494fe87-ff7a-42e9-a3ea-c716fc5eea49.jpeg', alt: 'Dresden Frauenkirche — Esszimmer' },
      { src: '/assets/images/Dresden_small/42f52e5a-e8ee-4812-a3fb-180e68a19ebe.jpeg', alt: 'Dresden Frauenkirche — Esszimmer' },
      { src: '/assets/images/Dresden_small/cb252203-0040-4487-91e9-fe7b7ad9f0d6.jpeg', alt: 'Dresden Frauenkirche — Schlafzimmer' },
      { src: '/assets/images/Dresden_small/8d13ac2b-771e-44a0-8fa6-22d05ee23ce1.avif', alt: 'Dresden Frauenkirche — Wohnzimmer' },
      { src: '/assets/images/Dresden_small/3a1a4f82-058b-40c0-80d6-ae7403aadeeb.jpeg', alt: 'Dresden Frauenkirche — Nachbarschaft' },
      { src: '/assets/images/Dresden_small/dbaf4cd9-b965-4763-ae90-874d9ff69ea4.jpeg', alt: 'Dresden Frauenkirche — Badezimmer' },
      { src: '/assets/images/Dresden_small/55c82376-f541-4f94-996b-672fb8b0cbd2.jpeg', alt: 'Dresden Frauenkirche — Küche' },
      { src: '/assets/images/Dresden_small/04aefb64-ab6e-4f27-a5fa-593e5d6baebb.avif', alt: 'Dresden Frauenkirche — Wohnbereich' },
      { src: '/assets/images/Dresden_small/4f0ab3f8-5f9f-40ad-bfd2-354a842dba93.avif', alt: 'Dresden Frauenkirche — Foto 7' },
    ],
  }
] as const;

type Property = (typeof properties)[number];

interface LightboxState {
  propIdx: number;
  imgIdx: number;
}

const PropertyRow = ({
  property,
  onImageClick,
}: {
  property: Property;
  onImageClick: (imgIdx: number) => void;
}) => {
  const t = useTranslations('gallery');
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    ref.current?.scrollBy({ left: dir === 'right' ? 400 : -400, behavior: 'smooth' });
  };

  return (
    <div className="mb-14">
      <div className="mx-auto mb-5 flex max-w-[1200px] items-end justify-between">
        <div>
          <p
            className="mb-1 text-[0.6rem] font-medium uppercase text-rose-500"
            style={{ letterSpacing: '0.2em' }}
          >
            {property.location}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-white">{property.name}</h3>
        </div>
        <div className="flex gap-2">
          {(['left', 'right'] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={t(dir === 'left' ? 'scrollBack' : 'scrollForward')}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors duration-200 hover:border-white/50 hover:text-white"
            >
              <svg
                className={`h-3.5 w-3.5 ${dir === 'left' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={ref}
        className="-mx-6 flex snap-x snap-mandatory gap-[6px] overflow-x-auto pb-1 pl-6 pr-6 md:-mx-10 md:pl-10 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {property.images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => onImageClick(i)}
            className="group relative h-[190px] w-[260px] flex-none snap-start overflow-hidden md:h-[300px] md:w-[420px] cursor-zoom-in"
            aria-label={t('zoomLabel', { alt: img.alt })}
          >
            <Image
              src={img.src}
              alt={img.alt}
              quality={60}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              sizes="(max-width: 767px) 260px, 420px"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const Lightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: readonly { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const t = useTranslations('gallery');
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
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
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label={t('close')}
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
          loop={images.length > 1}
          className="lightbox-swiper"
        >
          {images.map((img, i) => (
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

const Gallery = () => {
  const t = useTranslations('gallery');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (propIdx: number, imgIdx: number) => setLightbox({ propIdx, imgIdx });
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="bg-black px-6 py-24 md:px-10">
      <div className="mx-auto mb-12 max-w-[1200px]">
        <p
          className="mb-4 text-xs font-medium uppercase text-rose-500"
          style={{ letterSpacing: '0.28em' }}
        >
          {t('label')}
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
            {t('heading1')}<br />{t('heading2')}
          </h2>
          <p className="text-lg font-light leading-relaxed text-white/70 md:max-w-sm">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {properties.map((property, propIdx) => (
        <PropertyRow
          key={property.name}
          property={property}
          onImageClick={(imgIdx) => openLightbox(propIdx, imgIdx)}
        />
      ))}

      {lightbox !== null && (
        <Lightbox
          images={properties[lightbox.propIdx].images}
          initialIndex={lightbox.imgIdx}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Gallery;
