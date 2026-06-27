export type PropertyId = 'berlin' | 'dresdenfk1' | 'dresdenfk2' | 'dresdenaltstadt';

export const PROPERTY_IDS: PropertyId[] = ['berlin', 'dresdenfk1', 'dresdenfk2', 'dresdenaltstadt'];

type PropertyImage = { src: string; alt: string };

export type PropertyConfig = {
  rentalId: string;
  city: 'Berlin' | 'Dresden';
  coverImage: string;
  sqm: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  images: PropertyImage[];
};

const BERLIN_IMAGES: PropertyImage[] = [
  { src: '/assets/images/Berlin/IMG_0628 2.jpeg', alt: 'Living Room' },
  { src: '/assets/images/Berlin/IMG_0721 2.jpeg', alt: 'Kitchen' },
  { src: '/assets/images/Berlin/IMG_3384.jpeg', alt: 'Living Room Detail' },
  { src: '/assets/images/Berlin/e5cab91d-f196-4072-9f41-d03d731e6d8e.jpg', alt: 'Bedroom 1' },
  { src: '/assets/images/Berlin/a1ae049a-4fb8-4e19-838a-e1dd8238e6c6.jpg', alt: 'Bedroom 2' },
  { src: '/assets/images/Berlin/IMG_3406.jpeg', alt: 'Bedroom 3' },
  { src: '/assets/images/Berlin/IMG_0704 2.jpeg', alt: 'Bathroom' },
  { src: '/assets/images/Berlin/c52fbfcd-9dc6-4918-a2ed-e1ea1df784df.jpg', alt: 'Hallway' },
  { src: '/assets/images/Berlin/IMG_3446.jpeg', alt: 'Kitchen Detail' },
  { src: '/assets/images/Berlin/2af9adfa-c22d-4553-9977-d17637251d63.jpg', alt: 'Coffee Station' },
  { src: '/assets/images/Berlin/026d2888-c2a9-4de1-b2f5-1a957e37a27d.jpg', alt: 'Detail' },
  { src: '/assets/images/Berlin/c18d6bca-98b0-4b5a-9a62-ea332917463e.jpg', alt: 'Detail' },
];

const DRESDEN_IMAGES: PropertyImage[] = [
  { src: '/assets/images/Dresden/1494fe87-ff7a-42e9-a3ea-c716fc5eea49.jpeg', alt: 'Living Room' },
  { src: '/assets/images/Dresden/42f52e5a-e8ee-4812-a3fb-180e68a19ebe.jpeg', alt: 'Dining Area' },
  { src: '/assets/images/Dresden/cb252203-0040-4487-91e9-fe7b7ad9f0d6.jpeg', alt: 'Bedroom' },
  { src: '/assets/images/Dresden/d6a23db7-df0c-402a-979b-10bdb6dc5bac.jpeg', alt: 'Bedroom Detail' },
  { src: '/assets/images/Dresden/8d13ac2b-771e-44a0-8fa6-22d05ee23ce1.jpeg', alt: 'Living Area' },
  { src: '/assets/images/Dresden/735463ab-d60a-40e7-8ee2-9e1daa7e57bf.jpeg', alt: 'Living Room' },
  { src: '/assets/images/Dresden/3a1a4f82-058b-40c0-80d6-ae7403aadeeb.jpeg', alt: 'Neighbourhood' },
  { src: '/assets/images/Dresden/14fef9d9-6cab-4fe2-be71-7a9d0e55732a.jpeg', alt: 'Neighbourhood' },
  { src: '/assets/images/Dresden/20498a21-cd69-446a-99ae-4617a381591c.jpeg', alt: 'Detail' },
];

export const PROPERTIES: Record<PropertyId, PropertyConfig> = {
  berlin: {
    rentalId: '658898',
    city: 'Berlin',
    coverImage: '/assets/images/Berlin_cover.jpeg',
    sqm: 135,
    guests: 9,
    bedrooms: 3,
    bathrooms: 2,
    images: BERLIN_IMAGES,
  },
  dresdenfk1: {
    rentalId: '665945', // TODO: fill in Lodgify rental ID
    city: 'Dresden',
    coverImage: '/assets/images/Dresden_cover.jpeg',
    sqm: 55,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    images: DRESDEN_IMAGES,
  },
  dresdenfk2: {
    rentalId: '665964', // TODO: fill in Lodgify rental ID
    city: 'Dresden',
    coverImage: '/assets/images/Dresden_cover.jpeg',
    sqm: 80,
    guests: 6,
    bedrooms: 3,
    bathrooms: 1,
    images: DRESDEN_IMAGES,
  },
  dresdenaltstadt: {
    rentalId: '677896', // TODO: fill in Lodgify rental ID
    city: 'Dresden',
    coverImage: '/assets/images/Dresden_cover.jpeg',
    sqm: 120,
    guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    images: DRESDEN_IMAGES,
  },
};
