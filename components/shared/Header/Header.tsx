import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Navbar shouldHideOnScroll className="bg-white opacity-90 fixed" maxWidth="2xl" height={80}>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4 w-fit h-full">
          <a href='/' className="w-[140px] h-full relative">
            <Image fill src={'/assets/logos/Cozy-Voyage-Logo.svg'} alt="Cozy Voyage" />
          </a>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href={'#properties'}>
              Unterkünfte
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href={'#our-company'}>
              Was wir anbieten
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href={'#gallery'}>
              Galerie
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href={'#testimonials'}>
              Bewertungen
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-10" justify="end">
        <a href="https://wa.me/4915778194349" target="_blank" className="flex gap-3 flex-row items-center">
          <div className="h-8 w-8 relative">
            <Image fill src={'/assets/icons/Whatsapp icon.svg'} alt={'Whatsapp icon'} />
          </div>
          <div className="flex flex-col">
            <span className="text-black text-small">+4915778194349</span>
            <span className="text-gray-500 text-small">Direct via Whatsapp</span>
          </div>
        </a>

        <Link target='_blank' href={'https://cozy-voyage.lodgify.com/de/4578016/alle-objekte'}>
          <Button className="bg-rose-600 text-white rounded-md">
            JETZT BUCHEN
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
