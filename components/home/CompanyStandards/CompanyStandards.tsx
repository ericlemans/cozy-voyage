import React from 'react';
import { Divider } from '@heroui/react';
import Image from 'next/image';
import style from './company-standards.module.scss';

const CompanyStandards = () => {
  return (
    <div className={`${style.companyStandards} h-fit mx-4 bg-white`}>
      <div className='p-4'>
      <h2 className='mb-3'>WAS DU ERWARTEN KANNST</h2>
      <h4 className="mb-8">
        Wir stellen sicher, dass jeder Aufenthalt unseren hohen Standards entspricht - damit du dich einfach entspannen
        und deine Zeit in Berlin oder Dresden genießen kannst.
      </h4>
      </div>

      <Divider style={{marginBottom: 20}} />

      <div className="flex flex-col items-start justify-center mb-8">
        <div className="flex flex-row justify-start relative gap-2">
          <div className="h-16 w-16 relative mx-4">
            <Image src="/assets/icons/wifi-logo.png" objectFit='cover' alt="Internet" fill />
          </div>
          <div className="flex flex-col w-2/3">
            <h3>Schneller Wi-Fi-Zugang</h3>
            <p>Ideal für Streaming, Videoanrufe und mehrere Verbindungen gleichzeitig</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mb-8">
        <div className="flex flex-row justify-start relative gap-2">
          <div className="h-16 w-16 relative mx-4">
            <Image src="/assets/icons/self-checkin-logo.png" alt="Self checkin" fill />
            </div>
            <div className="flex flex-col w-2/3">
              <h3>Self Check-In zu jeder Stunde</h3>
              <p>Alle Check-ins werden mit einem einzigartigen Code verwaltet, der für deinen Aufenthalt erstellt wird.
                Du kannst auch deine Ankunftszeit für späte Check-ins verwalten.</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mb-8">
        <div className="flex justify-start">
          <div className="flex flex-row justify-start relative gap-2">
            <div className="h-16 w-16 relative mx-4">
              <Image src="/assets/icons/furniture-logo.png" alt="Furnished" fill />
            </div>
            <div className="flex flex-col w-2/3">
              <h3>Mit Liebe gestaltete Wohnungen</h3>
              <p>"Cozy" ist in unserer DNA. Wir sorgen dafür, dass du einen schönen und funktionalen Aufenthalt hast.
                Unser oberstes Ziel ist es, unseren Gästen einen unvergesslichen Urlaub zu bereiten.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mb-8">
        <div className="flex justify-start">
          <div className="flex flex-row justify-start relative gap-2">
            <div className="h-16 w-16 relative mx-4">
              <Image src="/assets/icons/sheets-logo.png" alt="Sheets" fill />
            </div>
            <div className="flex flex-col w-2/3">
              <h3>Bettwäsche und Handtücher</h3>
              <p>Alle unsere Buchungen beinhalten Bettwäsche, Handtücher, Duschtücher, Handtücher für den
                Badezimmerboden und Küchenhandtücher.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center mb-8">
        <div className="flex justify-start">
          <div className="flex flex-row justify-start relative gap-2">
            <div className="h-16 w-16 relative mx-4">
              <Image src="/assets/icons/reinigung-logo.png" alt="Cleaning" fill />
            </div>
            <div className="flex flex-col w-2/3">
              <h3>Tiefenreinigung - jedes Mal</h3>
              <p>Wir nehmen higene ernst, und wir erwarten, dass unsere Gäste in eine makellose Wohnung kommen. Unsere
                Bewertungen sprechen für uns!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStandards;
