import type { Route } from './+types/route';
import { RoomsHeroSection } from './sections/rooms-hero-section';
import { RoomsCollectionSection } from './sections/rooms-collection-section';
import { RoomsCtaSection } from './sections/rooms-cta-section';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Ruangan - Nioboro' },
    {
      name: 'description',
      content:
        'Lihat kamar, ruang santai, ruang makan, ruang rapat, serta kolam dan taman di Nioboro, Yogyakarta.',
    },
  ];
}

export default function RoomsPage() {
  return (
    <main>
      <RoomsHeroSection />
      <RoomsCollectionSection />
      <RoomsCtaSection />
    </main>
  );
}
