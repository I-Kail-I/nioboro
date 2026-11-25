import { Image } from '@unpic/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

const heroPhotos = [
  {
    src: '/assets/rooms/ruang-santai-4.webp',
    alt: 'Lobi utama Nioboro dengan langit-langit berukir',
    className: 'sm:col-span-7 sm:row-span-2',
  },
  {
    src: '/assets/rooms/kamar-hotel-1.webp',
    alt: 'Ruang tamu suite Nioboro dengan sofa dan meja bundar',
    className: 'sm:col-span-5',
  },
  {
    src: '/assets/rooms/kolam-taman-2.webp',
    alt: 'Kolam Nioboro saat malam dengan cahaya dari dalam bangunan',
    className: 'sm:col-span-5',
  },
];

export function RoomsHeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="border-border text-muted-foreground flex items-center justify-between gap-4 border-b pb-4 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-xs">
          <span>Nioboro — Yogyakarta</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="font-heading text-[clamp(4rem,13vw,10rem)] leading-[0.82] font-semibold tracking-[-0.05em] lg:col-span-8">
            Ruangan<span className="text-primary">.</span>
          </h1>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-muted-foreground max-w-sm font-sans text-base leading-relaxed text-pretty sm:text-lg">
              Lima suasana di satu bangunan. Dari kamar yang tenang sampai kolam yang memantulkan
              langit sore.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button
                nativeButton={false}
                className="group px-6 py-6"
                render={<a href="#koleksi-ruangan" />}
                size="lg"
                variant={'default'}
              >
                Jelajahi ruangan
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-1 motion-reduce:transform-none" />
              </Button>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
              >
                Kenali Nioboro
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-2 overflow-x-auto px-2 pb-2 sm:mt-14 sm:grid sm:h-[62svh] sm:max-h-176 sm:min-h-120 sm:grid-cols-12 sm:grid-rows-2 sm:gap-3 sm:overflow-visible sm:px-3 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {heroPhotos.map((photo, index) => (
          <figure
            key={photo.src}
            className={`aspect-4/5 w-[82vw] shrink-0 snap-start overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5 sm:aspect-auto sm:h-full sm:w-auto ${photo.className}`}
          >
            <Image
              layout="fullWidth"
              src={photo.src}
              alt={photo.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="text-muted-foreground mx-auto mt-4 flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 font-sans text-xs tracking-wide sm:px-10">
        <span>Lobi, kamar, dan kolam Nioboro</span>
        <span>Yogyakarta, Indonesia</span>
      </div>
    </section>
  );
}
