import React from 'react';
import { Card, CardBody, CardHeader, Image, Link } from '@heroui/react';

type PropertyCardProps = {
  title: string;
  location: string;
  guests: number;
  minPrice: number;
  image: string;
  href: string;
}

const PropertyCard = ({ title, location, guests, minPrice, image, href }: PropertyCardProps) => {
  return (
    <Link className="cursor-pointer" href={href} target="_blank">
      <Card className="py-4" radius="sm">
        <CardHeader className="py-2 px-4 flex-col items-center justify-center text-center gap-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={270}
            height={200}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <h4 className="text-2xl font-bold">{title}</h4>
          <small className="text-large">{location}</small>
          <small className="text-large">Up to {guests} guests</small>
          <small className="text-large">
            from € {minPrice} per night
          </small>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PropertyCard;
