import React from 'react';
import type { Route } from './+types/route';
import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { CollectionOfRoom } from './sections/collection-rooms-section';
import { OffersSection } from './sections/offers-section';
import { TestimonialSection } from './sections/testimonial-section';
import { seo } from '@/lib/seo';

export function meta(_: Route.MetaArgs) {
  return seo({
    title: 'Penginapan & Ruang di Yogyakarta',
    description:
      'Nioboro adalah penginapan di Yogyakarta yang dirancang untuk keheningan, kenyamanan, dan waktu yang lebih bermakna.',
    path: '/',
    image: '/assets/home/Hero_Image.webp',
    imageAlt: 'Suasana Nioboro di Yogyakarta saat senja',
  });
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
