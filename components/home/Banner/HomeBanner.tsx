import React from 'react';
import Image from 'next/image';
import PropertyCard from '@/components/home/PropertyCard/PropertyCard';

const HomeBanner = () => {
  return (
    <div>
      <div className="h-screen relative w-full">
        <Image style={{ objectFit: 'cover' }} src={'/assets/images/Berlin_Ks_1.jpeg'} alt="Berlin Wittenbergplatz"
               fill />
        <div className="absolute top-72 h-80 w-full left-1/2 -translate-x-1/2 bg-black opacity-85">
          <div className="flex flex-col items-center justify-center h-full">
            <h1>Cozy Voyage</h1>
            <h2>A home away from home</h2>
            <div className="w-52 border-b-2" />
            <h2>Beautiful apartments, designed with love.</h2>
          </div>
        </div>
        <div className="absolute top-[580px] h-fit w-fit left-1/2 -translate-x-1/2">
          {/*<LodgifyBookingBar rentalId='658898'/>*/}
          <div className='grid grid-cols-2 gap-8'>
            <PropertyCard city='Berlin' location="Ku'damm" imgSrc='./assets/images/Berlin.webp' />
            <PropertyCard city='Dresden' location='Frauenkirche' imgSrc='./assets/images/Dresden.jpeg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
