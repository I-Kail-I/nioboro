import { Image } from '@unpic/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function LayananCtaSection() {
  return (
    <section
      className="bg-foreground text-background mt-24 md:mt-40"
      aria-labelledby="layanan-cta-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between px-6 py-20 sm:px-10 md:py-28 lg:px-16">
          <div className="max-w-xl">
            <span className="text-background/55 font-sans text-sm font-semibold tabular-nums">
              [02]
            </span>
            <h2
              id="layanan-cta-title"
              className="font-heading mt-5 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] font-semibold tracking-tight text-balance"
            >
              Punya ruang yang ingin dibentuk?
            </h2>
            <p className="text-background/65 mt-5 max-w-md font-sans text-base leading-relaxed text-pretty">
              Mulai dari percakapan tentang kebutuhan, tapak, dan cara Anda ingin ruang itu terasa.
              Kami akan membantu membaca kemungkinannya.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              nativeButton={false}
              className="group px-6 py-6"
              render={<Link to="/kontak" />}
              size="lg"
              variant={'default'}
            >
              Hubungi kami
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <Link
              to="/rooms"
              className="text-background/70 hover:text-background font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
            >
              Lihat ruang kami
            </Link>
          </div>
        </div>

        <figure className="relative m-0 min-h-80 lg:min-h-full">
          <Image
            layout="fullWidth"
            src="/assets/layanan/layanan-cta.webp"
            alt="Bangunan Nioboro dan kolam saat malam"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-linear-to-t from-black/55 to-transparent p-5 font-sans text-xs text-white/80 sm:p-6">
            <span className="flex items-center gap-3">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden="true" />
              Nioboro, Yogyakarta
            </span>
            <span>Indonesia</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
