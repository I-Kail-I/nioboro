import type { Route } from './+types/route';
import { AboutHeroSection } from './sections/about-hero-section';
import { AboutStorySection } from './sections/about-story-section';
import { AboutPrinciplesSection } from './sections/about-principles-section';
import { AboutJourneySection } from './sections/about-journey-section';
import { AboutCtaSection } from './sections/about-cta-section';
import { seo } from '@/lib/seo';

export function meta(_: Route.MetaArgs) {
  return seo({
    title: 'Tentang Kami',
    description:
      'Kenali Nioboro, tempat menginap dan ruang di Yogyakarta yang dirancang untuk keheningan, kenyamanan, dan waktu yang lebih bermakna.',
    path: '/about',
    image: '/assets/about/about-hero.webp',
    imageAlt: 'Lorong Nioboro dengan lampu gantung dan panel kayu',
  });
}

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutPrinciplesSection />
      <AboutJourneySection />
      <AboutCtaSection />
    </main>
  );
}
