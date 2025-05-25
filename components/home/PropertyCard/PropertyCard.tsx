import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export default function PropertyCard({city, location, imgSrc}: {city: string, location: string, imgSrc: string}) {
  return (
    <Card className="py-4 rounded-lg">
      <CardHeader className="py-2 px-4 flex-col items-center justify-center text-center gap-2">
        <h4 className="text-2xl uppercase font-bold">{city}</h4>
        <small className="text-large">{location}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgSrc}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
