import { Image } from '@unpic/react';
import { ArrowDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { formatIndex, services } from '../services';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function LayananHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = services[activeIndex];

  return (
    <section className="pt-24 sm:pt-28 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="border-border text-muted-foreground flex items-center justify-between gap-4 border-b pb-4 font-sans text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-xs">
          <span>Nioboro — Layanan</span>
          <span>{formatIndex(services.length)} bidang</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h1 className="font-heading text-[clamp(2.75rem,6.2vw,5.5rem)] leading-[1.02] font-semibold tracking-tight text-balance lg:col-span-8">
            Lima disiplin, satu ruang yang utuh.
          </h1>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-muted-foreground max-w-sm font-sans text-base leading-relaxed text-pretty sm:text-lg">
              Kami bekerja dari skala bangunan sampai detail furnitur. Setiap bidang bisa berdiri
              sendiri, tetapi paling baik dibaca sebagai satu rangkaian.
            </p>
            <Button
              nativeButton={false}
              className="group mt-6 px-5 py-6"
              render={<a href="#bidang-layanan" />}
              size="lg"
              variant={'default'}
            >
              Lihat bidang
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-1 motion-reduce:transform-none" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ul className="border-border border-t" aria-label="Daftar layanan">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={service.slug} className="border-border border-b">
                    <a
                      href={`#${service.slug}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      aria-current={isActive ? 'true' : undefined}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:gap-x-6 sm:py-6"
                    >
                      <span
                        className={`font-sans text-xs font-semibold tabular-nums transition-colors sm:text-sm ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        ({formatIndex(index + 1)})
                      </span>
                      <span
                        className={`font-heading text-[clamp(1.5rem,3.5vw,2.75rem)] leading-tight font-semibold tracking-tight transition-colors ${
                          isActive
                            ? 'text-foreground'
                            : 'text-foreground/45 group-hover:text-foreground/75'
                        }`}
                      >
                        {service.name}
                      </span>
                      <span className="text-muted-foreground hidden max-w-40 text-right font-sans text-xs leading-relaxed sm:block">
                        {service.tagline}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="text-muted-foreground mt-3 font-sans text-xs lg:hidden">
              Ketuk layanan untuk melihat detail.
            </p>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active.slug}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.4, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      layout="fullWidth"
                      src={active.image}
                      alt={active.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4 font-sans text-xs">
                <span className="text-foreground font-medium">{active.name}</span>
                <span className="text-muted-foreground tabular-nums">
                  {formatIndex(activeIndex + 1)} / {formatIndex(services.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
