import type { Route } from './+types/route';
import { LayananHeroSection } from './sections/layanan-hero-section';
import { LayananServicesSection } from './sections/layanan-services-section';
import { LayananCtaSection } from './sections/layanan-cta-section';
import { seo } from '@/lib/seo';

export function meta(_: Route.MetaArgs) {
  return seo({
    title: 'Layanan Desain & Furniture',
    description:
      'Layanan desain arsitektural, interior, ruang makan, sketsa desain, dan furniture kustom dari Nioboro di Yogyakarta.',
    path: '/layanan',
    image: '/assets/layanan/layanan-cta.webp',
    imageAlt: 'Bangunan Nioboro dan kolam saat malam',
  });
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
