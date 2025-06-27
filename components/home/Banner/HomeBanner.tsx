import React from 'react';
import Image from 'next/image';
import PropertyCard from '@/components/home/PropertyCard/PropertyCard';
import { Link } from '@heroui/react';

const HomeBanner = () => {
  return (
    <div>
      <div className="h-screen relative w-full">
        <Image className="z-0" style={{ objectFit: 'cover' }} src={'/assets/images/Berlin_Ks_1.jpeg'}
               alt="Berlin Wittenbergplatz"
               fill />
        <div className="z-10 absolute top-44 h-64 w-full left-1/2 -translate-x-1/2 bg-black opacity-75" />
        <div className="z-20 top-[235px] absolute w-full flex flex-col items-center justify-center h-fit gap-3">
          <h1>Cozy Voyage</h1>
          <div className="w-52 border-b-2" />
          <h3 className="mb-2">Beautiful and stylish holiday apartments.</h3>
          {/*<CozyButton href="/home" size="lg" className="bg-rose-600">*/}
          {/*  <span className="text-large font-medium text-white">All Properties</span>*/}
          {/*</CozyButton>*/}
          <div className="absolute top-[280px] h-fit w-full mx-auto mt-16 mb-10">
            {/*<LodgifyBookingBar rentalId='658898'/>*/}
            <div className="flex-row justify-center flex gap-12">
              <Link className="cursor-pointer" href={'/home'}>
                <PropertyCard key='Berlin' city="Berlin" location="Ku'damm" imgSrc="./assets/images/Berlin.webp" />
              </Link>
              <Link className="cursor-pointer" href={'/home'}>
                <PropertyCard key='Dresden' city="Dresden" location="Frauenkirche" imgSrc="./assets/images/Dresden.jpeg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeBanner;
