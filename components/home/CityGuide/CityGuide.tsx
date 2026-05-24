'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPinIcon, UtensilsIcon, ShoppingBagIcon, BikeIcon, ParkingCircleIcon, AccessibilityIcon, ExternalLinkIcon } from 'lucide-react';

type City = 'berlin' | 'dresden';
type GuideItem = string | { name: string; detail?: string; url?: string };

const GUIDE: Record<City, {
  image: string;
  accessibility: string;
  visit: GuideItem[];
  eat: GuideItem[];
  shop: GuideItem[];
  bike: { name: string; address: string; note?: string; url?: string };
  parking: { name: string; address?: string; detail?: string }[] | null;
}> = {
  berlin: {
    image: '/assets/images/Berlin.webp',
    accessibility: 'Ground floor apartment, accessed directly from the street. Two small steps at the entrance. Suitable for guests with reduced mobility.',
    visit: [
      { name: 'Free Walking Tour', url: 'https://www.neweuropetours.eu/berlin/' },
      { name: 'Berlin Unterwelten', detail: 'Underground tours', url: 'https://www.berliner-unterwelten.de/' },
      { name: 'East Side Gallery', url: 'https://www.eastsidegallery-berlin.de/' },
      { name: 'Tränenspalast', url: 'https://www.hdg.de/traenenpalast/' },
      { name: 'Humboldt Forum', url: 'https://www.humboldtforum.org/' },
      { name: 'Monkey Bar', detail: 'Rooftop bar', url: 'https://www.google.com/maps/search/?q=Monkey+Bar+Berlin' },
      { name: 'Holzmarkt', url: 'https://www.holzmarkt.com/' },
      { name: 'Siegessäule', url: 'https://www.google.com/maps/search/?q=Siegessaule+Berlin' },
      { name: 'Museum Island', url: 'https://www.smb.museum/museen-einrichtungen/museumsinsel-berlin/' },
      { name: 'Berliner Dom', url: 'https://www.berliner-dom.de/' },
      { name: 'Pergamon Museum', url: 'https://www.smb.museum/museen-einrichtungen/pergamonmuseum/' },
      { name: 'Jewish Museum', url: 'https://www.jmberlin.de/' },
      { name: 'Futurium', url: 'https://futurium.de/' },
      { name: 'Hackescher Markt Höfe', detail: 'Historic inner courtyards', url: 'https://www.google.com/maps/search/?q=Hackescher+Markt+Höfe+Berlin' },
      { name: 'Reichstag', detail: 'Reservation required', url: 'https://www.bundestag.de/besuche/architektur/reichstagsgebaeude' },
      { name: 'Memorial to the Murdered Jews', detail: 'Free museum underneath', url: 'https://www.stiftung-denkmal.de/' },
      { name: 'Kulturbrauerei', url: 'https://kulturbrauerei.de/' },
    ],
    eat: [
      { name: 'est.', detail: 'Best sushi in Berlin', url: 'https://www.google.com/maps/search/?q=est.+restaurant+Berlin' },
      { name: 'Neni', detail: 'Best views, high quality', url: 'https://neni.at/restaurant/berlin/' },
      { name: 'Chicago Williams BBQ', detail: 'Great grilled ribs', url: 'https://www.google.com/maps/search/?q=Chicago+Williams+BBQ+Berlin' },
      { name: 'Mizumi Restaurant', detail: 'Great sushi', url: 'https://www.google.com/maps/search/?q=Mizumi+Restaurant+Berlin' },
      { name: 'Dolores', detail: 'Mexican food', url: 'https://www.dolores-online.de/' },
      { name: 'Restaurant Mamma Monti', detail: 'Italian', url: 'https://www.google.com/maps/search/?q=Mamma+Monti+Berlin' },
      { name: 'Restaurant Phoenicia', detail: 'Lebanese food', url: 'https://www.google.com/maps/search/?q=Restaurant+Phoenicia+Berlin' },
      { name: 'Annapurna Indian Restaurant', detail: 'Indian', url: 'https://www.google.com/maps/search/?q=Annapurna+Indian+Restaurant+Berlin' },
      { name: 'The Food Court', detail: 'Breakfast', url: 'https://www.google.com/maps/search/?q=The+Food+Court+Berlin' },
    ],
    shop: [
      { name: 'KaDeWe', detail: 'Designer & luxury', url: 'https://www.kadewe.com/' },
      { name: 'Kurfürstendamm', detail: 'Top brand shops', url: 'https://www.google.com/maps/search/?q=Kurfürstendamm+Berlin' },
      { name: 'Tauentzienstraße', detail: 'Major shopping street', url: 'https://www.google.com/maps/search/?q=Tauentzienstraße+Berlin' },
      { name: 'Europa-Center', detail: 'Shopping centre', url: 'https://www.europa-center-berlin.de/' },
      { name: 'Peek & Cloppenburg', detail: 'Multi-brand fashion', url: 'https://www.google.com/maps/search/?q=Peek+Cloppenburg+Kurfürstendamm+Berlin' },
      { name: 'Shoe City Outlet', detail: 'Brand shoes at discount', url: 'https://www.google.com/maps/search/?q=Shoe+City+Berlin' },
      { name: 'Hackescher Markt', detail: 'Boutique shops', url: 'https://www.google.com/maps/search/?q=Hackescher+Markt+Berlin' },
    ],
    bike: {
      name: 'Bike Rent & Bike Tours Berlin',
      address: 'Budapester Str. 43, 10787 Berlin',
      note: 'Access left of Palace Hotel',
      url: 'https://www.google.com/maps/search/?q=Bike+Rent+Bike+Tours+Berlin+Budapester+Str',
    },
    parking: [
      { name: 'Parkhaus Europa-Center', address: 'Nürnberger Str. 5–7, 10787 Berlin', detail: 'Mon–Sun 02:00–21:00 · Max 24h: €20' },
      { name: 'Tiefgarage Am KaDeWe', detail: 'Daily 00:00–24:00 · Max 24h: €30' },
    ],
  },
  dresden: {
    image: '/assets/images/Dresden.jpeg',
    accessibility: 'Ground floor apartment with entrance directly on the street. Fully step-free — no steps at all.',
    visit: [
      { name: 'Zwinger Palace', detail: 'Baroque gardens & Old Masters Gallery', url: 'https://www.skd.museum/en/museums-institutions/zwinger/' },
      { name: 'Frauenkirche', detail: 'Climb the dome for city views', url: 'https://www.frauenkirche-dresden.de/' },
      { name: 'Semperoper', detail: 'See a show or take a tour', url: 'https://www.semperoper.de/' },
      { name: 'Residenzschloss', detail: 'Royal residence & Green Vault treasures', url: 'https://www.skd.museum/en/museums-institutions/dresden-castle/' },
      { name: 'Moritzburg Castle', detail: 'Baroque palace on a lake — historic steam train', url: 'https://www.schloss-moritzburg.de/' },
      { name: 'Brühlsche Terrasse', detail: '"Balcony of Europe" — Elbe River views', url: 'https://www.google.com/maps/search/?q=Brühlsche+Terrasse+Dresden' },
      { name: 'Fürstenzug', detail: 'Giant porcelain tile mural of Saxon rulers', url: 'https://www.google.com/maps/search/?q=Fürstenzug+Dresden' },
      { name: 'Albertinum Museum', detail: 'Romanticism to Modernism — Caspar David Friedrich', url: 'https://www.skd.museum/en/museums-institutions/albertinum/' },
      { name: 'Pillnitz Palace & Park', detail: 'Chinese-Baroque riverside palace', url: 'https://www.schloss-pillnitz.de/' },
      { name: 'Panometer Dresden', detail: 'Immersive 360° panoramic exhibitions', url: 'https://www.panometer.de/' },
      { name: 'Elbe River Cruise', detail: 'Castles, vineyards & skyline from the water', url: 'https://www.saechsische-dampfschiffahrt.de/' },
    ],
    eat: [
      { name: 'Sophienkeller im Taschenbergpalais', detail: 'Traditional Saxon, medieval ambiance', url: 'https://www.sophienkeller-dresden.de/' },
      { name: 'Pulverturm an der Frauenkirche', detail: 'Right next door', url: 'https://www.pulverturm-dresden.de/' },
      { name: 'Coselpalais', detail: 'Historic setting', url: 'https://www.coselpalais-restaurant.de/' },
      { name: 'Freiberger Schankhaus', detail: 'Local brewery', url: 'https://www.google.com/maps/search/?q=Freiberger+Schankhaus+Dresden' },
      { name: 'Wilma Wunder Dresden', detail: 'Modern, relaxed', url: 'https://www.google.com/maps/search/?q=Wilma+Wunder+Dresden' },
      { name: 'Gänsedieb', detail: 'Classic Dresden', url: 'https://www.gaensedieb.de/' },
    ],
    shop: [
      { name: 'Königstraße', detail: 'Major shopping street', url: 'https://www.google.com/maps/search/?q=Königstraße+Dresden' },
      { name: 'Altmarkt-Galerie', detail: 'Modern shopping mall, city centre', url: 'https://www.altmarkt-galerie-dresden.de/' },
      { name: 'Neustadt', detail: 'Indie & unique boutiques', url: 'https://www.google.com/maps/search/?q=Neustadt+Dresden+shopping' },
      { name: 'Schloss-Passage', detail: 'High-end & luxury stores', url: 'https://www.google.com/maps/search/?q=Schloss-Passage+Dresden' },
    ],
    bike: {
      name: 'Green Bike Dresden',
      address: 'Neumarkt 2, 01067 Dresden',
      note: 'In the underground of QF Passage',
      url: 'https://www.google.com/maps/search/?q=Green+Bike+Dresden+Neumarkt',
    },
    parking: null,
  },
};

function CategoryLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-rose-500">{icon}</span>
      <span className="text-rose-500 font-medium uppercase text-xs" style={{ letterSpacing: '0.2em' }}>
        {label}
      </span>
    </div>
  );
}

function ItemList({ items }: { items: GuideItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const name = typeof item === 'string' ? item : item.name;
        const detail = typeof item === 'string' ? undefined : item.detail;
        const url = typeof item === 'string' ? undefined : item.url;

        const content = (
          <li key={i} className="group/item flex flex-col">
            <span className={`text-sm font-medium flex items-center gap-1.5 ${url ? 'text-gray-800 group-hover/item:text-rose-600 transition-colors duration-150' : 'text-gray-800'}`}>
              {name}
              {url && <ExternalLinkIcon size={11} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 flex-shrink-0" />}
            </span>
            {detail && <span className="text-gray-500 text-xs mt-0.5">{detail}</span>}
          </li>
        );

        return url ? (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block">
            {content}
          </a>
        ) : (
          <React.Fragment key={i}>{content}</React.Fragment>
        );
      })}
    </ul>
  );
}

export default function CityGuide({ initialCity = 'berlin' }: { initialCity?: City }) {
  const t = useTranslations('cityGuide');
  const [city, setCity] = useState<City>(initialCity);
  const guide = GUIDE[city];

  useEffect(() => {
    setCity(initialCity)
  }, [initialCity]);

  return (
    <section id="city-guide" className="bg-[#f9f8f6]">

      {/* City hero banner */}
      <div className="relative h-[45vh] min-h-[280px] max-h-[480px] overflow-hidden">
        <Image
          key={city}
          src={guide.image}
          alt={city === 'berlin' ? 'Berlin' : 'Dresden'}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* City name overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-12 max-w-[1200px] mx-auto">
          <p className="text-rose-400 font-medium uppercase mb-2" style={{ letterSpacing: '0.25em', fontSize: '12px' }}>
            {t('label')}
          </p>
          <h1
            className="text-white font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: 1.0 }}
          >
            {city === 'berlin' ? 'Berlin' : 'Dresden'}
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* Subtitle */}
        <p className="text-gray-600 leading-relaxed mb-10 max-w-xl" style={{ fontSize: '16px' }}>
          {t('subtitle')}
        </p>

        {/* City toggle */}
        <div className="flex gap-0 mb-10 border-b border-gray-200">
          {(['berlin', 'dresden'] as City[]).map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`relative px-8 py-3.5 text-sm font-semibold uppercase transition-colors duration-200 ${
                city === c ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
              style={{ letterSpacing: '0.15em' }}
            >
              {c === 'berlin' ? 'Berlin' : 'Dresden'}
              {city === c && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500" />
              )}
            </button>
          ))}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Places to visit — spans 2 rows */}
          <div className="bg-white p-7 lg:row-span-2">
            <CategoryLabel icon={<MapPinIcon size={15} />} label={t('visit')} />
            <ItemList items={guide.visit} />
          </div>

          {/* Where to eat */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<UtensilsIcon size={15} />} label={t('eat')} />
            <ItemList items={guide.eat} />
          </div>

          {/* Shopping */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<ShoppingBagIcon size={15} />} label={t('shop')} />
            <ItemList items={guide.shop} />
          </div>

          {/* Bike rental */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<BikeIcon size={15} />} label={t('bike')} />
            {guide.bike.url ? (
              <a href={guide.bike.url} target="_blank" rel="noopener noreferrer" className="group/bike block space-y-1">
                <p className="text-sm font-medium text-gray-800 group-hover/bike:text-rose-600 transition-colors duration-150 flex items-center gap-1.5">
                  {guide.bike.name}
                  <ExternalLinkIcon size={11} className="opacity-0 group-hover/bike:opacity-100 transition-opacity duration-150" />
                </p>
                <p className="text-gray-500 text-xs">{guide.bike.address}</p>
                {guide.bike.note && <p className="text-gray-400 text-xs italic">{guide.bike.note}</p>}
              </a>
            ) : (
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">{guide.bike.name}</p>
                <p className="text-gray-500 text-xs">{guide.bike.address}</p>
                {guide.bike.note && <p className="text-gray-400 text-xs italic">{guide.bike.note}</p>}
              </div>
            )}
          </div>

          {/* Parking */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<ParkingCircleIcon size={15} />} label={t('parking')} />
            {guide.parking === null ? (
              <p className="text-gray-600 text-sm leading-relaxed">{t('privateParkingNote')}</p>
            ) : (
              <ul className="space-y-4">
                {guide.parking.map((p, i) => (
                  <li key={i}>
                    <p className="text-gray-800 text-sm font-medium">{p.name}</p>
                    {p.address && <p className="text-gray-500 text-xs mt-0.5">{p.address}</p>}
                    {p.detail && <p className="text-gray-500 text-xs">{p.detail}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accessibility */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<AccessibilityIcon size={15} />} label={t('accessibility')} />
            <p className="text-gray-600 text-sm leading-relaxed">{guide.accessibility}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
