'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPinIcon, UtensilsIcon, ShoppingBagIcon, BikeIcon, ParkingCircleIcon, AccessibilityIcon } from 'lucide-react';

type City = 'berlin' | 'dresden';

const GUIDE = {
  berlin: {
    accessibility: 'Ground floor apartment, accessed directly from the street. Two small steps at the entrance. Suitable for guests with reduced mobility.',
    visit: [
      'Free walking tour',
      'Berlin Unterwelten (underground tours)',
      'East Side Gallery',
      'Tränenspalast',
      'Humboldt Forum',
      'Monkey Bar',
      'Holzmarkt',
      'Siegessäule',
      'Museum Island',
      'Berliner Dom',
      'Pergamon Museum',
      'Jewish Museum',
      'Futurium',
      'Hackescher Markt Höfe',
      'Reichstag (reservation required)',
      'Memorial to the Murdered Jews of Europe',
      'Kulturbrauerei',
    ],
    eat: [
      { name: 'est.', detail: 'Best sushi in Berlin' },
      { name: 'Neni', detail: 'Best views, high quality' },
      { name: 'Chicago Williams BBQ', detail: 'Great grilled ribs' },
      { name: 'Mizumi Restaurant', detail: 'Great sushi' },
      { name: 'Dolores', detail: 'Mexican food' },
      { name: 'Restaurant Mamma Monti', detail: 'Italian' },
      { name: 'Restaurant Phoenicia', detail: 'Lebanese food' },
      { name: 'Annapurna Indian Restaurant', detail: 'Indian' },
      { name: 'The Food Court', detail: 'Breakfast' },
    ],
    shop: [
      { name: 'KaDeWe', detail: 'Designer & luxury' },
      { name: 'Kurfürstendamm', detail: 'Top brand shops' },
      { name: 'Tauentzienstraße', detail: 'Major shopping street' },
      { name: 'Europa-Center', detail: 'Shopping centre' },
      { name: 'Peek & Cloppenburg', detail: 'Multi-brand fashion' },
      { name: 'Shoe City Outlet', detail: 'Brand shoes at discount' },
      { name: 'Hackescher Markt', detail: 'Boutique shops' },
    ],
    bike: {
      name: 'Bike Rent & Bike Tours Berlin',
      address: 'Budapester Str. 43, 10787 Berlin',
      note: 'Access left of Palace Hotel',
    },
    parking: [
      { name: 'Parkhaus Europa-Center', address: 'Nürnberger Str. 5–7, 10787 Berlin', detail: 'Mon–Sun 02:00–21:00 · Max 24h: €20' },
      { name: 'Tiefgarage Am KaDeWe', detail: 'Daily 00:00–24:00 · Max 24h: €30' },
    ],
  },
  dresden: {
    accessibility: 'Ground floor apartment with entrance directly on the street. Fully step-free — no steps at all.',
    visit: [
      { name: 'Zwinger Palace', detail: 'Baroque gardens & Old Masters Gallery' },
      { name: 'Frauenkirche', detail: 'Climb the dome for city views' },
      { name: 'Semperoper', detail: 'See a show or take a tour' },
      { name: 'Residenzschloss', detail: 'Royal residence & Green Vault treasures' },
      { name: 'Moritzburg Castle', detail: 'Baroque palace on a lake — take the historic steam train' },
      { name: "Brühlsche Terrasse", detail: '"Balcony of Europe" — Elbe River views' },
      { name: 'Fürstenzug', detail: 'Giant porcelain tile mural of Saxon rulers' },
      { name: 'Albertinum Museum', detail: 'Romanticism to Modernism — Caspar David Friedrich' },
      { name: 'Pillnitz Palace & Park', detail: 'Chinese-Baroque riverside palace' },
      { name: 'Panometer Dresden', detail: 'Immersive 360° panoramic exhibitions' },
      { name: 'Elbe River Cruise', detail: 'Castles, vineyards & skyline from the water' },
    ],
    eat: [
      { name: 'Sophienkeller im Taschenbergpalais', detail: 'Traditional Saxon cuisine, medieval ambiance' },
      { name: 'Pulverturm an der Frauenkirche', detail: 'Right next door' },
      { name: 'Coselpalais', detail: 'Historic setting' },
      { name: 'Freiberger Schankhaus', detail: 'Local brewery' },
      { name: 'Wilma Wunder Dresden', detail: 'Modern, relaxed' },
      { name: 'Gänsedieb', detail: 'Classic Dresden' },
    ],
    shop: [
      { name: 'Königstraße', detail: 'Major shopping street in the centre' },
      { name: 'Altmarkt-Galerie', detail: 'Modern shopping mall, city centre' },
      { name: 'Neustadt', detail: 'Indie & unique boutiques' },
      { name: 'Schloss-Passage', detail: 'High-end & luxury stores' },
    ],
    bike: {
      name: 'Green Bike Dresden',
      address: 'Neumarkt 2, 01067 Dresden',
      note: 'In the underground of QF Passage',
    },
    parking: null,
  },
};

type EatItem = { name: string; detail?: string };
type ParkingItem = { name: string; address?: string; detail?: string };
type VisitItem = string | { name: string; detail?: string };

function CategoryLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-rose-500">{icon}</span>
      <span className="text-rose-500 font-medium uppercase text-xs" style={{ letterSpacing: '0.2em' }}>
        {label}
      </span>
    </div>
  );
}

function ItemList({ items }: { items: VisitItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const name = typeof item === 'string' ? item : item.name;
        const detail = typeof item === 'string' ? undefined : item.detail;
        return (
          <li key={i} className="flex flex-col">
            <span className="text-gray-800 text-sm font-medium">{name}</span>
            {detail && <span className="text-gray-500 text-xs">{detail}</span>}
          </li>
        );
      })}
    </ul>
  );
}

export default function CityGuide({ initialCity = 'berlin' }: { initialCity?: City }) {
  const t = useTranslations('cityGuide');
  const [city, setCity] = useState<City>(initialCity);
  const guide = GUIDE[city];

  return (
    <section id="city-guide" className="bg-[#f9f8f6] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-rose-500 font-medium uppercase mb-4" style={{ letterSpacing: '0.25em', fontSize: '13px' }}>
            {t('label')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-bold leading-none text-gray-900"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              {t('heading1')}<br />{t('heading2')}
            </h2>
            <p className="text-gray-600 max-w-sm md:text-right leading-relaxed" style={{ fontSize: '16px' }}>
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* City toggle */}
        <div className="flex gap-0 mb-12 border-b border-gray-200">
          {(['berlin', 'dresden'] as City[]).map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`relative px-8 py-4 text-sm font-semibold uppercase transition-colors duration-200 ${
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Places to visit */}
          <div className="bg-white p-7 lg:row-span-2">
            <CategoryLabel icon={<MapPinIcon size={16} />} label={t('visit')} />
            <ItemList items={guide.visit as VisitItem[]} />
          </div>

          {/* Where to eat */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<UtensilsIcon size={16} />} label={t('eat')} />
            <ItemList items={guide.eat as EatItem[]} />
          </div>

          {/* Shopping */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<ShoppingBagIcon size={16} />} label={t('shop')} />
            <ItemList items={guide.shop as VisitItem[]} />
          </div>

          {/* Bike rental */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<BikeIcon size={16} />} label={t('bike')} />
            <div className="space-y-1">
              <p className="text-gray-800 text-sm font-medium">{guide.bike.name}</p>
              <p className="text-gray-500 text-xs">{guide.bike.address}</p>
              {guide.bike.note && <p className="text-gray-400 text-xs italic">{guide.bike.note}</p>}
            </div>
          </div>

          {/* Parking */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<ParkingCircleIcon size={16} />} label={t('parking')} />
            {guide.parking === null ? (
              <p className="text-gray-600 text-sm leading-relaxed">{t('privateParkingNote')}</p>
            ) : (
              <ul className="space-y-4">
                {(guide.parking as ParkingItem[]).map((p, i) => (
                  <li key={i}>
                    <p className="text-gray-800 text-sm font-medium">{p.name}</p>
                    {p.address && <p className="text-gray-500 text-xs">{p.address}</p>}
                    {p.detail && <p className="text-gray-500 text-xs">{p.detail}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accessibility */}
          <div className="bg-white p-7">
            <CategoryLabel icon={<AccessibilityIcon size={16} />} label={t('accessibility')} />
            <p className="text-gray-600 text-sm leading-relaxed">{guide.accessibility}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
