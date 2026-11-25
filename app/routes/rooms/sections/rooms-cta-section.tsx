import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RoomsCtaSection() {
  return (
    <section
      className="bg-primary text-primary-foreground mt-24 md:mt-40"
      aria-labelledby="rooms-cta-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <span className="text-primary-foreground/60 font-sans text-sm font-semibold tabular-nums">
              [02]
            </span>
            <h2
              id="rooms-cta-title"
              className="font-heading mt-5 text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-tight text-balance"
            >
              Ruang berikutnya bisa jadi milik Anda.
            </h2>
            <p className="text-primary-foreground/75 mt-5 max-w-xl font-sans text-base leading-relaxed text-pretty">
              Setiap ruang punya cerita. Kenali cara kami merawat cahaya, material, dan jeda di
              Nioboro.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              nativeButton={false}
              className="bg-background text-foreground hover:bg-background/90 px-6 py-6"
              render={<Link to="/about" />}
              size="lg"
            >
              Tentang Nioboro
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <Link
              to="/"
              className="text-primary-foreground/80 hover:text-primary-foreground font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
