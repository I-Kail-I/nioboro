import type { Route } from './+types/route';
import { RoomsHeroSection } from './sections/rooms-hero-section';
import { RoomsCollectionSection } from './sections/rooms-collection-section';
import { RoomsCtaSection } from './sections/rooms-cta-section';
import { seo } from '@/lib/seo';

export function meta(_: Route.MetaArgs) {
  return seo({
    title: 'Ruangan & Kamar',
    description:
      'Lihat kamar, ruang santai, ruang makan, ruang rapat, serta kolam dan taman di Nioboro, Yogyakarta.',
    path: '/rooms',
    image: '/assets/rooms/kamar-hotel-1.webp',
    imageAlt: 'Kamar Nioboro dengan tempat tidur besar dan cahaya alami',
  });
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
