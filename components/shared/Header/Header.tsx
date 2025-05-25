import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

export default function Header() {
  return (
    <Navbar shouldHideOnScroll className="bg-white opacity-90 fixed" maxWidth='2xl' height={80}>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4 w-fit">
          <img width={140} src={'/assets/logos/Cozy-Voyage-Logo.svg'} alt="Cozy Voyage" />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="secondary" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-10" justify="end">
        <a href="https://wa.me/4915778194349" target="_blank" className="flex gap-3 flex-row items-center">
          <div className="h-8 w-8">
            <img src={'/assets/icons/Whatsapp icon.svg'} alt={'Whatsapp icon'} />
          </div>
          <div className="flex flex-col">
            <span className="text-black text-small">+4915778194349</span>
            <span className="text-gray-500 text-small">Direct via Whatsapp</span>
          </div>
        </a>

        <Button className="bg-rose-600 text-white rounded-md">
          BOOK NOW
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
