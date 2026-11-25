import type { Route } from './+types/route';
import { KontakHeroSection } from './sections/kontak-hero-section';
import { KontakTopicsSection } from './sections/kontak-topics-section';
import { KontakClosingSection } from './sections/kontak-closing-section';
import { seo } from '@/lib/seo';

export function meta(_: Route.MetaArgs) {
  return seo({
    title: 'Kontak',
    description:
      'Hubungi Nioboro melalui email hello@nioboro.com untuk pertanyaan tentang ruang, proyek, dan kerja sama.',
    path: '/kontak',
    image: '/assets/home/Hero_Image.webp',
    imageAlt: 'Suasana Nioboro di Yogyakarta saat senja',
  });
}

export default function KontakPage() {
  return (
    <main>
      <KontakHeroSection />
      <KontakTopicsSection />
      <KontakClosingSection />
    </main>
  );
}
