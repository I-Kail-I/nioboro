import { Image } from '@unpic/react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function AboutHeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-28 pb-16 sm:px-10 md:pt-36 lg:min-h-svh lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-16 lg:py-24">
      <div className="lg:col-span-6 xl:col-span-5">
        <h1 className="font-heading max-w-2xl text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02] font-semibold tracking-tight text-balance">
          Ruang untuk berhenti sebentar di tengah kota.
        </h1>
        <p className="text-muted-foreground mt-8 max-w-md font-sans text-base leading-relaxed text-pretty sm:text-lg">
          Kami merancang penginapan di Yogyakarta dengan perhatian pada cahaya, material, dan ritme.
          Nioboro bukan sekadar tempat tidur, tetapi tempat Anda kembali mengatur napas.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button
            nativeButton={false}
            className="group px-6 py-6"
            render={<Link to="/rooms" />}
            size="lg"
            variant={'default'}
          >
            Lihat Ruang
          </Button>
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      <figure className="m-0 lg:col-span-6 xl:col-span-7">
        <div className="overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5">
          <Image
            src="/assets/about/about-hero.webp"
            layout="fullWidth"
            alt="Lorong Nioboro dengan lampu gantung dan panel kayu"
            loading="eager"
            fetchPriority="high"
            className="h-[58svh] w-full object-cover sm:h-[64svh] lg:h-[calc(100svh-12rem)] lg:max-h-192"
          />
        </div>
        <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 font-sans text-xs tracking-wide">
          <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
          Yogyakarta, Indonesia
        </figcaption>
      </figure>
    </section>
  );
}
