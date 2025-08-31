import React from 'react';
import Image from 'next/image';
import { Button, Divider, Link } from '@heroui/react';
import CityCard from '@/components/home/Cards/CityCard';

const HomeBanner = () => {
  return (
    <div className="mb-80">
      <div className="h-screen relative w-full">
        <Image className="z-0" style={{ objectFit: 'cover' }} src={'/assets/images/Berlin_Ks_1.jpeg'}
               alt="Berlin Wittenbergplatz"
               fill />
        <div className="z-10 absolute top-44 h-64 w-full left-1/2 -translate-x-1/2 bg-black opacity-75" />
        <div className="z-20 top-[230px] absolute w-full flex flex-col items-center justify-center h-fit gap-3">
          <h1>Cozy Voyage</h1>
          <div className="w-52 border-b-2 mb-1" />
          <h3 className="mb-2 text-center">Beautiful and stylish holiday apartments.</h3>
          {/*<CozyButton href="/home" size="lg" className="bg-rose-600">*/}
          {/*  <span className="text-large font-medium text-white">All Properties</span>*/}
          {/*</CozyButton>*/}
          <div className="absolute top-[220px] h-fit w-full mx-auto mt-16 mb-10">
            {/*<LodgifyBookingBar rentalId='658898'/>*/}
            <div className="flex-row justify-center flex gap-12 flex-wrap mb-10">
              <Link className="cursor-pointer" target='_blank' href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Berlin'}>
                <CityCard key="Berlin" city="Berlin" location="Ku'damm" imgSrc="./assets/images/Berlin.webp" />
              </Link>
              <Link className="cursor-pointer" target='_blank' href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte?adults=1&sort=price&city=Dresden'}>
                <CityCard key="Dresden" city="Dresden" location="Frauenkirche" imgSrc="./assets/images/Dresden.jpeg" />
              </Link>
            </div>
            <div className="w-full flex-row flex justify-center mb-10">
              <Link className="cursor-pointer" href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'}>
                <Button className="bg-rose-600 text-white rounded-md" size="lg">
                  ALLE OBJEKTE
                </Button>
              </Link>
            </div>
            <Divider className='w-1/2 mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
