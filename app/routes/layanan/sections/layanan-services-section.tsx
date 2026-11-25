import { Image } from '@unpic/react';
import { Reveal } from '../components/reveal';
import { formatIndex, services } from '../services';

export function LayananServicesSection() {
  return (
    <section
      id="bidang-layanan"
      className="mx-5 mt-24 scroll-mt-24 sm:mx-10 md:mt-40"
      aria-labelledby="layanan-services-title"
    >
      <div className="max-w-3xl">
        <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">[01]</span>
        <h2
          id="layanan-services-title"
          className="font-heading mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance"
        >
          Dari konsep sampai detail terakhir.
        </h2>
        <p className="text-muted-foreground mt-6 max-w-xl font-sans text-base leading-relaxed text-pretty">
          Setiap bidang punya cara kerja dan hasilnya sendiri. Digabungkan, kelimanya menjaga satu
          hal yang sama: ruang yang terasa utuh, bukan kumpulan bagian yang ditempel.
        </p>
      </div>

      <div className="mt-14 space-y-20 md:mt-24 md:space-y-28">
        {services.map((service, index) => (
          <Reveal key={service.slug}>
            <article id={service.slug} className="scroll-mt-24">
              <div className="border-border flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-muted-foreground font-sans text-sm font-semibold tabular-nums">
                    ({formatIndex(index + 1)})
                  </span>
                  <h3 className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold tracking-tight">
                    {service.name}
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-sm font-sans text-sm leading-relaxed text-pretty sm:text-right">
                  {service.tagline}
                </p>
              </div>

              <figure className="mt-5">
                <div className="aspect-3/2 overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5 sm:aspect-2/1">
                  <Image
                    layout="fullWidth"
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className={
                      service.imageFit === 'contain'
                        ? 'h-full w-full object-contain p-6 sm:p-10'
                        : 'h-full w-full object-cover'
                    }
                  />
                </div>
                <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 font-sans text-xs tracking-wide">
                  <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
                  {service.imageAlt}
                </figcaption>
              </figure>

              <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
                <p className="text-foreground max-w-xl font-sans text-base leading-relaxed text-pretty sm:text-lg md:col-span-6">
                  {service.description}
                </p>

                <div className="md:col-span-5 md:col-start-8">
                  <h4 className="text-muted-foreground font-sans text-xs font-semibold tracking-[0.18em] uppercase">
                    Yang termasuk
                  </h4>
                  <ul className="border-border mt-2 border-t">
                    {service.scope.map((item, scopeIndex) => (
                      <li
                        key={item}
                        className="border-border flex items-baseline gap-4 border-b py-3 font-sans text-sm"
                      >
                        <span className="text-muted-foreground text-[0.625rem] font-semibold tabular-nums">
                          {formatIndex(scopeIndex + 1)}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
