'use client';

import React from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import './gallery.scss';
import Image from 'next/image';
import { ChevronLeftIcon } from 'primereact/icons/chevronleft';
import { ChevronRightIcon } from 'primereact/icons/chevronright';

const Gallery = () => {
  const images: { src: string }[] = [
    { src: '/assets/images/berlin_card .jpeg' },
    { src: '/assets/images/Dresden.jpeg' },
    { src: '/assets/images/berlin_card .jpeg' },
    { src: '/assets/images/berlin_card .jpeg' },
    { src: '/assets/images/berlin_card .jpeg' },
    { src: '/assets/images/berlin_card .jpeg' },
  ];

  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  const itemTemplate = (item: { src: string }) => {
    return (
      <div className="relative w-full h-[480px]">
        <Image src={item.src} alt={'Item template'} fill objectFit="cover" />
      </div>
    );
  };

  const thumbnailTemplate = (item: {src: string}) => {
    return (
      <div className="relative w-36 h-24">
        <Image src={item.src} alt={'Item template'} fill objectFit="cover" />
      </div>);
  };

  return (
    <div id='gallery' className="bg-black py-24 md:px-10 px-5">
      <div className="text-center mx-auto text-white max-w-[640px] mb-8">
        <h2 className="mb-3 text-white uppercase">Unsere Wohnungen in Bildern</h2>
        <h4>
          Mit einer Mischung aus Funktionalität und Design haben wir unsere Wohnungen so eingerichtet, dass
          Sie einen entspannten und unvergesslichen Aufenthalt genießen können.
        </h4>
      </div>

      <div className='pb-20 border-t-white border-t-1 w-1/2 mx-auto'></div>

      <Galleria
        className="mx-auto max-w-[640px]"
        prevThumbnailIcon={() => <ChevronLeftIcon color="white" />}
        nextThumbnailIcon={() => <ChevronRightIcon color="white" />}
        value={images}
        showItemNavigators
        itemNextIcon={() => <div className="z-10 bg-white rounded-full p-2 active:scale-75 transition"><ChevronRightIcon
          fontSize={24} /></div>}
        itemPrevIcon={() => <div className="z-10 bg-white rounded-full p-2 active:scale-75 transition"><ChevronLeftIcon
          fontSize={24} /></div>}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        item={itemTemplate}
        thumbnail={thumbnailTemplate} />
    </div>
  );
};

export default Gallery;
