import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router';

const footerNavigation = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/rooms', label: 'Ruangan' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/kontak', label: 'Kontak' },
];

const formatIndex = (value: number) => String(value).padStart(2, '0');

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-background/15 overflow-hidden border-t pb-10">
      <div className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-10 sm:pt-20">
        <div className="border-background/15 text-background/45 flex items-center justify-between gap-4 border-b pb-4 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-xs">
          <span>Nioboro — Yogyakarta</span>
          <span>Penginapan &amp; ruang</span>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-background/45 font-sans text-xs font-semibold tracking-[0.18em] uppercase">
              Email
            </p>
            <a
              href="mailto:hello@nioboro.com"
              className="font-heading hover:text-primary mt-4 inline-block text-[clamp(1.75rem,4vw,3.5rem)] leading-none font-semibold tracking-tight transition-colors"
            >
              hello@nioboro.com
            </a>
            <p className="text-background/60 mt-5 max-w-sm font-sans text-sm leading-relaxed">
              Penginapan dan ruang yang dirancang untuk jeda, di tengah Yogyakarta.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <h2 className="text-background/45 font-sans text-xs font-semibold tracking-[0.18em] uppercase">
                Jelajahi
              </h2>
              <nav aria-label="Navigasi footer" className="mt-4">
                <ul className="space-y-2.5">
                  {footerNavigation.map((item, index) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-background/65 hover:text-background flex items-baseline gap-2 font-sans text-sm transition-colors"
                      >
                        <span className="text-[0.625rem] font-semibold tabular-nums opacity-40">
                          {formatIndex(index + 1)}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h2 className="text-background/45 font-sans text-xs font-semibold tracking-[0.18em] uppercase">
                Kontak
              </h2>
              <a
                href="mailto:hello@nioboro.com"
                className="text-background/65 hover:text-background mt-4 block font-sans text-sm underline-offset-4 transition-colors hover:underline"
              >
                hello@nioboro.com
              </a>
              <p className="text-background/45 mt-4 font-sans text-sm leading-relaxed">
                Yogyakarta,
                <br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="border-background/15 text-background/45 mt-16 flex flex-col gap-4 border-t pt-4 font-sans text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Nioboro. Semua hak dilindungi.</span>
          <a
            href="#top"
            className="hover:text-background inline-flex items-center gap-2 transition-colors"
          >
            Kembali ke atas
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        <p
          aria-hidden="true"
          className="font-heading text-background mt-12 text-[clamp(4rem,17vw,15rem)] leading-[0.72] font-semibold tracking-[-0.06em] select-none"
        >
          Nioboro<span className="text-primary">.</span>
        </p>
      </div>
    </footer>
  );
}
