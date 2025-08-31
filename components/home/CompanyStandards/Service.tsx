import React from 'react';
import Image from 'next/image';

type ServiceType = {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceType) => {
  return (
    <div className="flex flex-row">
      <div className='h24 w-24'>
        <Image src={icon} alt={title} fill />
      </div>
      {description ?? description}
    </div>
  );
};

export default Service;
