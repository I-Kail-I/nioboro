import { ArrowUpRight } from 'lucide-react';
import { CopyEmailButton } from '../components/copy-email';

export function KontakHeroSection() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto flex min-h-[75svh] max-w-[1600px] flex-col px-5 pt-24 pb-14 sm:px-10 sm:pt-28 md:pt-32">
        <div className="border-background/15 text-background/55 flex items-center justify-between gap-4 border-b pb-4 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-xs">
          <span>Nioboro — Kontak</span>
          <span>Yogyakarta, Indonesia</span>
        </div>

        <div className="mt-16 flex flex-1 flex-col justify-center">
          <h1 className="font-heading max-w-3xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-tight text-balance">
            Mari bicara<span className="text-primary">.</span>
          </h1>
          <p className="text-background/65 mt-6 max-w-md font-sans text-base leading-relaxed text-pretty sm:text-lg">
            Untuk pertanyaan tentang ruang, proyek, atau kerja sama, kirim email ke alamat di bawah.
            Semua pesan masuk ke satu tempat yang sama.
          </p>
        </div>

        <div className="mt-16">
          <a
            href="mailto:hello@nioboro.com"
            className="group border-background/20 flex flex-wrap items-center justify-between gap-4 border-t pt-6"
          >
            <span className="font-heading group-hover:text-primary text-[clamp(1.75rem,5.5vw,4.5rem)] leading-none font-semibold tracking-tight transition-colors">
              hello@nioboro.com
            </span>
            <span className="text-background/60 group-hover:text-background flex items-center gap-2 font-sans text-xs font-medium tracking-wide uppercase transition-colors">
              Kirim email
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
            </span>
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-background/50 font-sans text-xs">
              Email adalah satu-satunya kanal kontak kami saat ini.
            </p>
            <CopyEmailButton email="hello@nioboro.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
