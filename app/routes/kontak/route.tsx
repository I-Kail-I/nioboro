import type { Route } from './+types/route';
import { KontakHeroSection } from './sections/kontak-hero-section';
import { KontakTopicsSection } from './sections/kontak-topics-section';
import { KontakClosingSection } from './sections/kontak-closing-section';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Kontak - Nioboro' },
    {
      name: 'description',
      content:
        'Hubungi Nioboro melalui email hello@nioboro.com untuk pertanyaan tentang ruang, proyek, dan kerja sama.',
    },
  ];
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
