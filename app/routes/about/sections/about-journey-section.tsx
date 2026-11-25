import { Image } from '@unpic/react';
import { Reveal } from '../components/reveal';

const journey = [
  {
    year: 'Awal',
    title: 'Mengamati kota',
    description:
      'Kami mulai dengan mendengarkan ritme Yogyakarta: pasar di pagi hari, jalan kecil yang tenang, dan cahaya sore yang masuk ke ruang interior.',
    image: '/assets/home/Hero_Image.webp',
    alt: 'Bangunan penginapan dengan kolam renang di waktu senja',
    aspect: 'aspect-16/10',
    imageClass: 'lg:order-1 lg:col-span-7',
    textClass: 'lg:order-2 lg:col-span-4 lg:col-start-9',
  },
  {
    year: 'Pertumbuhan',
    title: 'Membangun suasana',
    description:
      'Material dipilih untuk menahan waktu, bukan mengikuti tren. Furnitur dibuat dengan fungsi harian yang sederhana dan nyaman.',
    image: '/assets/home/4.webp',
    alt: 'Ruang dengan panel kayu dan pencahayaan hangat',
    aspect: 'aspect-4/3',
    imageClass: 'lg:order-2 lg:col-span-7 lg:col-start-6',
    textClass: 'lg:order-1 lg:col-span-4',
  },
  {
    year: 'Sekarang',
    title: 'Menjaga jeda',
    description:
      'Setiap tamu membawa cerita sendiri. Tugas kami adalah menjaga ruang tetap tenang, rapi, dan siap menyambut mereka.',
    image: '/assets/home/1.webp',
    alt: 'Area bersantap di tepi kolam pada sore hari',
    aspect: 'aspect-16/10',
    imageClass: 'lg:order-1 lg:col-span-6',
    textClass: 'lg:order-2 lg:col-span-5 lg:col-start-8',
  },
];

export function AboutJourneySection() {
  return (
    <section className="mx-5 mt-24 sm:mx-10 md:mt-40" aria-labelledby="about-journey-title">
      <div className="max-w-3xl">
        <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">[03]</span>
        <h2
          id="about-journey-title"
          className="font-heading mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance"
        >
          Sebuah perjalanan yang tetap sederhana.
        </h2>
      </div>

      <ol className="mt-14 space-y-20 md:mt-24 md:space-y-28">
        {journey.map((item) => (
          <li key={item.title}>
            <Reveal className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
              <div className={item.imageClass}>
                <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                  <Image
                    layout="fullWidth"
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className={`${item.aspect} w-full object-cover`}
                  />
                </div>
              </div>
              <div className={item.textClass}>
                <span className="text-muted-foreground font-sans text-sm font-semibold tabular-nums">
                  {item.year}
                </span>
                <h3 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-4 max-w-md font-sans text-base leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
