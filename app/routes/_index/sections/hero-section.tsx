import React from 'react';
import { Image } from '@unpic/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export function HeroSection() {
  return (
    <section className="relative isolate h-screen min-h-162.5 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/home/Hero_Image.webp"
        layout="fullWidth"
        alt="Suasana malam indah di Malioboro, Yogyakarta"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/45 to-black/10" />

      {/* Content */}
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-7">
          <span className="inline-block text-sm font-medium tracking-[0.3em] text-white/80 uppercase">
            Welcome to Yogyakarta
          </span>

          <h1 className="font-heading text-4xl leading-[1.15] font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Jangan Lupakan Indahnya Malam Malioboro
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            Nikmati pengalaman menginap yang istimewa di Yogyakarta. Hadirkan kenyamanan, keramahan,
            dan kenangan tak terlupakan di setiap perjalanan Anda.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Button
              nativeButton={false}
              className="group px-6 py-6"
              render={<Link to="/rooms" />}
              size="lg"
              variant={'default'}
            >
              Lihat Ruang
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              nativeButton={false}
              className="px-6 py-6"
              render={<Link to="/about" />}
              size="lg"
              variant="secondary"
            >
              Tentang Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
