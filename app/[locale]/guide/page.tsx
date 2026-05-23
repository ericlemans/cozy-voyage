import CityGuide from '@/components/home/CityGuide/CityGuide';

type City = 'berlin' | 'dresden';

export default async function GuidePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;
  const initialCity: City = city === 'dresden' ? 'dresden' : 'berlin';

  return (
    <div className="bg-[#f9f8f6] pt-24">
      <CityGuide initialCity={initialCity} />
    </div>
  );
}
