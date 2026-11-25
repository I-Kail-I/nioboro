import type { Route } from './+types/route';
import { AboutHeroSection } from './sections/about-hero-section';
import { AboutStorySection } from './sections/about-story-section';
import { AboutPrinciplesSection } from './sections/about-principles-section';
import { AboutJourneySection } from './sections/about-journey-section';
import { AboutCtaSection } from './sections/about-cta-section';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Tentang Kami - Nioboro' },
    {
      name: 'description',
      content:
        'Kenali Nioboro, tempat menginap di Yogyakarta yang dirancang untuk keheningan, kenyamanan, dan waktu yang lebih bermakna.',
    },
  ];
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
