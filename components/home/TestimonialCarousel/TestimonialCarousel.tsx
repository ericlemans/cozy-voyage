'use client';

import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, CardFooter } from '@heroui/react';

const testimonialCards = [
  {
    stars: 5,
    text: "test lorem ipsum dolor",
    platform: "Airbnb",
    guest: "Nino",
    listing: "Berlin"
  },
  {
    stars: 5,
    text: "test lorem ipsum dolor",
    platform: "Airbnb",
    guest: "Nino",
    listing: "Berlin"
  },
  {
    stars: 5,
    text: "test lorem ipsum dolor",
    platform: "Airbnb",
    guest: "Nino",
    listing: "Berlin"
  },
  {
    stars: 5,
    text: "test lorem ipsum dolor",
    platform: "Airbnb",
    guest: "Nino",
    listing: "Berlin"
  }
]

const TestimonialCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      speed={1000}
      loop={true}
      autoplay={true}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testimonialCards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card isFooterBlurred className="border-none bg-white h-72 w-64" radius="lg">
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default TestimonialCarousel;
