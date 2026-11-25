import { Link } from 'react-router';

export function KontakClosingSection() {
  return (
    <section className="mx-5 mt-24 pb-24 sm:mx-10 md:mt-40 md:pb-32">
      <div className="border-border flex flex-col gap-8 border-t pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-16">
        <p className="font-heading max-w-lg text-[clamp(1.5rem,3vw,2.5rem)] leading-snug font-semibold tracking-tight text-balance">
          Sambil menunggu balasan, lihat ruang yang sudah kami bentuk.
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            to="/rooms"
            className="text-foreground hover:text-muted-foreground font-sans text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Ruangan
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-foreground font-sans text-sm font-medium underline-offset-4 transition-colors hover:underline"
          >
            Tentang Nioboro
          </Link>
        </div>
      </div>
    </section>
  );
}
