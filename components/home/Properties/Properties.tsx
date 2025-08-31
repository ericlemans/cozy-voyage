import React from 'react';
import PropertyCard from '@/components/home/Cards/PropertyCard';

const Properties = () => {

  const properties = [
    {
      title: 'Berlin Ku\'damm 135sqm',
      location: 'Berlin | Wittenbergplatz',
      image: './assets/images/berlin_card .jpeg',
      guests: 4,
      minPrice: 280,
      href: 'https://cozy-voyage.lodgify.com/de/4578017/cozy-voyage-stylish-135sqm-at-kudamm',
    },
    {
      title: 'Dresden 2-4 people',
      location: 'Dresden | Old Town',
      image: './assets/images/dresden small_card.jpeg',
      guests: 4,
      minPrice: 110,
      href: 'https://cozy-voyage.lodgify.com/de/4588121/cozy-voyage-frauenkirche-1-ruhig-und-zentral',
    },
    {
      title: 'Dresden 4-6 people',
      location: 'Dresden | Old Town',
      image: './assets/images/dresden big_card.jpeg',
      guests: 4,
      minPrice: 165,
      href: 'https://cozy-voyage.lodgify.com/de/4588223/cozy-voyage-frauenkirche-2-ruhig-und-zentral',
    },
    {
      title: 'Dresden 8 people',
      location: 'Dresden | Old Town',
      image: './assets/images/dresden 8 people_card.jpeg',
      guests: 4,
      minPrice: 256,
      href: 'https://cozy-voyage.lodgify.com/de/4693618/zentrum-der-altstadt-fur-8-personen-cozy-voyage',
    },
  ];

  return (
    <div className="h-fit mb-10">
      <h2 className="mb-8">Unsere Wohnungen</h2>

      <div className="flex-row justify-start flex gap-6 flex-wrap">
        {properties.map((property, index) => (
          <div key={index}>
            <PropertyCard
              title={property.title}
              location={property.location}
              image={property.image}
              guests={property.guests}
              minPrice={property.minPrice}
              href={property.href}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Properties;
