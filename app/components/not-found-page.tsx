import { Image } from '@unpic/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[1600px] flex-col px-5 pt-24 pb-8 sm:px-10 sm:pt-28 md:pt-32">
      <div className="border-border text-muted-foreground flex items-center justify-between gap-4 border-b pb-4 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-xs">
        <span>Nioboro — 404</span>
        <span>Halaman tidak ditemukan</span>
      </div>

      <div className="grid flex-1 grid-cols-1 items-center gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <span
            aria-hidden="true"
            className="font-heading text-foreground block text-[clamp(7rem,18vw,16rem)] leading-[0.78] font-semibold tracking-[-0.06em]"
          >
            404<span className="text-primary">.</span>
          </span>

          <h1 className="font-heading mt-8 max-w-xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] font-semibold tracking-tight text-balance">
            Ruang ini belum ada.
          </h1>
          <p className="text-muted-foreground mt-5 max-w-md font-sans text-base leading-relaxed text-pretty">
            Halaman yang Anda cari mungkin sudah dipindahkan, atau belum pernah masuk denah kami.
            Silakan kembali ke tempat yang lebih pasti.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              nativeButton={false}
              className="group px-6 py-6"
              render={<Link to="/" />}
              size="lg"
              variant={'default'}
            >
              Kembali ke Beranda
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Button>
            <Link
              to="/rooms"
              className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
            >
              Lihat Ruangan
            </Link>
          </div>
        </div>

        <figure className="m-0 lg:col-span-5">
          <div className="bg-secondary aspect-4/5 overflow-hidden rounded-xs p-8 ring-1 ring-black/5 sm:p-10">
            <Image
              layout="fullWidth"
              src="/assets/home/Sketch_Design.webp"
              alt="Sketsa denah kamar Nioboro"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
          <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 font-sans text-xs tracking-wide">
            <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
            Denah kamar, studi awal
          </figcaption>
        </figure>
      </div>

      <div className="border-border text-muted-foreground flex flex-wrap items-center justify-between gap-3 border-t pt-4 font-sans text-xs">
        <span>Nioboro, Yogyakarta</span>
        <div className="flex items-center gap-6">
          <Link
            to="/layanan"
            className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Layanan
          </Link>
          <Link
            to="/kontak"
            className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Kontak
          </Link>
        </div>
      </div>
    </main>
  );
}
