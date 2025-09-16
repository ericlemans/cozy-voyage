'use client';

import React from 'react';
import { Card, CardBody, CardFooter } from '@heroui/react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const TestimonialCarousel = () => {
  const testimonialCards = [
    {
      text: 'Diese Wohnung ist die perfekte Bleibe. Sie liegt direkt hinter der Frauenkirche, zentraler ist kaum zu finden. Alles ist zu Fuß erreichbar. Nachts kann man ruhig schlafen. Gerne wieder 😊!',
      guest: 'Julia',
      country: 'Italien',
      stars: 5,
      listing: 'Dresden Frauenkirche 1',
    },
    {
      text: 'Very good location. Easy access to everywhere. Clean and modern. Recommended!',
      guest: 'Lin An',
      country: 'China',
      stars: 5,
      listing: 'Dresden Frauenkirche 2',
    },
    {
      text: 'We had a wonderful stay! I can’t say enough good things about it. Eric is the absolute best, he made everything perfect!',
      guest: 'Lydia',
      country: 'USA',
      stars: 5,
      listing: 'Berlin Ku\'damm',
    },
    {
      text: 'Sehr gut ausgestattete, stilvoll eingerichtete Wohnung in bester Zentrumslage. Wir haben unseren Aufenthalt uneingeschränkt genossen. Jederzeit gerne wieder!',
      guest: 'Jürgen',
      country: 'Deutschland',
      stars: 5,
      listing: 'Dresden Frauenkirche 2',
    },
    {
      text: 'Hat alles super geklappt, die Unterkunft liegt Mega zentral und ist sehr schön und sauber. Toll eingerichtetes Apartment, genau wie beschrieben und auf den Fotos zu sehen. Die Öffis sind auch schnell zu Fuß zu erreichen. Wir hatten einen tollen Aufenthalt :)',
      guest: 'Jennifer',
      country: 'Deutschland',
      stars: 5,
      listing: 'Dresden Frauenkirche 2',
    },
    {
      text: 'Outstanding hosting: not only the communication was responsive and very pleasant but Eric and team were really accommodating to our requests and anticipated our needs i.e. no need to ask for check in details or else, everything is sent well in advance - that’s rare!',
      guest: 'Johanna',
      country: 'Schweiz',
      stars: 5,
      listing: 'Berlin Ku\'damm',
    },
    {
      text: 'Top Unterkunft, mitten in Berlin. Das KaDeWe war in wenigen Minuten fußläufig zu erreichen. Alles war sehr sauber, bequeme Betten und sehr viel Platz. Besten Dank für den Aufenthalt :)',
      guest: 'Ben',
      country: 'Deutschland',
      stars: 5,
      listing: 'Berlin Ku\'damm',
    },
    {
      text: 'This conveniently located flat is right in the heart of Dresden’s old town. Everything is right there in walking distance. We saw the Frauenkirche, the Green Vault, the Christmas stores, the Elbe, and lots of shopping. Because of the great location, we were able to return to the flat several times to drop off packages and use the toilet. It is a clean and comfortable place with all the conveniences of home!',
      guest: 'Elisse',
      country: 'USA',
      stars: 5,
      listing: 'Dresden Frauenkirche 2',
    },
  ];

  return (
    <div id='testimonials' className="bg-black py-20 md:px-10 px-5">
      <h2 className="text-white uppercase px-14 text-center mb-3">Was unsere Gäste über uns sagen</h2>
      <h4 className="max-w-[840px] text-center mx-auto">
        Mit einer Mischung aus Funktionalität und Design haben wir unsere Wohnungen so eingerichtet, dass
        Sie einen entspannten und unvergesslichen Aufenthalt genießen können.
      </h4>
      <div className="w-1/2 border-white border-t-1 mx-auto mb-14 mt-8" />

      <Swiper
        modules={[EffectFade, Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          840: {
            autoplay: {
              delay: 0,
              disableOnInteraction: true,
            },
            speed: 8000,
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {testimonialCards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card isFooterBlurred className="border-none bg-white h-fit w-full max-w- px-3" radius="lg">
              <CardBody>
                <div className="h-14 w-14 relative mb-3">
                  <Image src="/assets/icons/quotes-icon.png" alt="Testimonial quotes" fill />
                </div>
                <div className="flex flex-row justify-start gap-2 mb-4">
                  {Array.from(Array(card.stars)).map((_, index) => (
                    <div className="relative h-6 w-6" key={index}>
                      <Image src="/assets/icons/star-icon.png" alt="Testimonial quotes" fill />
                    </div>
                  ))}
                </div>
                <p className="mb-3 font-light">
                  {card.text}
                </p>
              </CardBody>
              <CardFooter className="border-t-1 flex-col items-start">
                <p className="uppercase font-semibold text-red-500">{card.guest} aus {card.country}</p>
                <p className="">{card.listing}</p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pt-10 flex md:flex-row flex-col justify-center items-center gap-12">
        <div className="w-[240px] h-[240px] justify-center flex items-center bg-white rounded-full overflow-hidden">
          <Image src={'/assets/images/Guest-favourite.png'} height={300} width={244} alt="Airbnb Guest Favourite" />
        </div>
        <div className="w-[240px] h-[240px] justify-center flex items-center bg-white rounded-full overflow-hidden">
          <Image src={'/assets/images/Booking-review-1.png'} height={300} width={244} alt="Airbnb Guest Favourite" />
        </div>
        <div className="w-[240px] h-[240px] justify-center flex items-center bg-white rounded-full overflow-hidden">
          <Image src={'/assets/images/airbnb-superhost.png'} height={300} width={244} alt="Airbnb Guest Favourite" />
        </div>
      </div>
    </div>
  )
    ;
};

export default TestimonialCarousel;
