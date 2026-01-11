import { Card } from 'primereact/card';
import Image from 'next/image';

export default function CityCard({city, location, imgSrc}: {city: string, location: string, imgSrc: string}) {
  return (
    <Card className="py-4 rounded-sm" >
      <div className="py-2 px-4 flex-col items-center justify-center text-center gap-2">
        <h4 className="text-black text-2xl uppercase font-bold">{city}</h4>
        <small className="text-large">{location}</small>
      </div>
      <div className="relative overflow-visible py-2 w-[270px] h-[200]">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgSrc}
          objectFit='cover'
          fill
        />
      </div>
    </Card>
  );
}
