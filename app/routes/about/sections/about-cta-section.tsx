import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutCtaSection() {
  return (
    <section
      className="mx-5 mt-24 pb-24 sm:mx-10 md:mt-40 md:pb-32"
      aria-labelledby="about-cta-title"
    >
      <div className="bg-foreground text-background rounded-xs px-7 py-16 sm:px-12 md:px-16 md:py-24 lg:px-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <span className="text-background/55 font-sans text-sm font-semibold tabular-nums">
              [04]
            </span>
            <h2
              id="about-cta-title"
              className="font-heading mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance"
            >
              Temukan ruang Anda berikutnya.
            </h2>
            <p className="text-background/65 mt-5 max-w-xl font-sans text-base leading-relaxed text-pretty">
              Lihat kamar, pengalaman menginap, dan ruang-ruang yang kami rawat di Nioboro.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              nativeButton={false}
              className="group px-6"
              render={<Link to="/rooms" />}
              size="lg"
            >
              Lihat Ruang
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <Link
              to="/"
              className="text-background/70 hover:text-background font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
