import type { Route } from './+types/route';
import { LayananHeroSection } from './sections/layanan-hero-section';
import { LayananServicesSection } from './sections/layanan-services-section';
import { LayananCtaSection } from './sections/layanan-cta-section';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Layanan - Nioboro' },
    {
      name: 'description',
      content:
        'Layanan desain arsitektural, interior, ruang makan, sketsa desain, dan furniture kustom dari Nioboro di Yogyakarta.',
    },
  ];
}

export default function LayananPage() {
  return (
    <main>
      <LayananHeroSection />
      <LayananServicesSection />
      <LayananCtaSection />
    </main>
  );
}
