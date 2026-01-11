'use client'

import React from 'react';
import Image from 'next/image';
import CityCard from '@/components/home/Cards/CityCard';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

const HomeBanner = () => {
  return (
    <div className="bg-black relative">
      <div className="h-[680px] relative w-full z-0">
        <div className="z-10 absolute top-0 h-[680px] w-full left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent to-black from-90% md:from-80% lg:from-70%" />

        <Image className="z-0" style={{ objectFit: 'cover' }} src={'/assets/images/Berlin_Ks_1.jpeg'}
               alt="Berlin Wittenbergplatz" fill />
        <div className="z-10 absolute top-44 h-64 w-full left-1/2 -translate-x-1/2 bg-black opacity-75" />

        <div className="flex flex-col items-center w-full relative md:pt-60 pt-56 z-10">
          <h1>Cozy Voyage</h1>
          <div className="w-52 border-b-2 mb-3" />
          <h3 className="mb-2 text-center">Beautiful and stylish holiday apartments.</h3>
        </div>
      </div>

      <div className="flex-row justify-center flex gap-12 flex-wrap -mt-40 md:-mt-32 mb-14 md:mb-20">
        <Link className="cursor-pointer" target="_blank"
              href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Berlin'}>
          <CityCard key="Berlin" city="Berlin" location="Ku'damm" imgSrc="/assets/images/Berlin.webp" />
        </Link>
        <Link className="cursor-pointer" target="_blank"
              href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Dresden'}>
          <CityCard key="Dresden" city="Dresden" location="Frauenkirche"
                    imgSrc="/assets/images/Dresden.jpeg" />
        </Link>
      </div>

      <div className="w-full flex-row flex justify-center mb-16 md:mb-32">
        <Link className="cursor-pointer" href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'}>
          <button className="bg-rose-600 text-white m-auto rounded-md w-64 py-4 text-semibold" >
            ALLE OBJEKTE
          </button>
        </Link>
      </div>
      <Divider className="w-1/2 mx-auto" />
    </div>
  );
};

export default HomeBanner;
