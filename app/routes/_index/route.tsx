import React from 'react';
import type { Route } from './+types/route';
import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { CollectionOfRoom } from './sections/collection-rooms-section';
import { OffersSection } from './sections/offers-section';
import { TestimonialSection } from './sections/testimonial-section';

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Nioboro - Penginapan di Yogyakarta' },
    {
      name: 'description',
      content:
        'Nioboro adalah penginapan di Yogyakarta yang dirancang untuk keheningan, kenyamanan, dan waktu yang lebih bermakna.',
    },
  ];
}

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <CollectionOfRoom />
      <OffersSection />
      <TestimonialSection />
    </main>
  );
}
