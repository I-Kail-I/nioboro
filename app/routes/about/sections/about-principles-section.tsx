import { Image } from '@unpic/react';
import { Reveal } from '../components/reveal';

const principles = [
  {
    number: '01',
    title: 'Ketenangan yang nyata',
    description:
      'Kami merancang batas antara dunia luar dan ruang istirahat dengan material, pencahayaan, dan akustik yang tenang.',
  },
  {
    number: '02',
    title: 'Ruang yang tidak berteriak',
    description:
      'Setiap area memiliki fungsi yang jelas. Tidak ada ornamen yang hanya mengisi ruang tanpa membantu Anda merasa nyaman.',
  },
  {
    number: '03',
    title: 'Kota sebagai latar',
    description:
      'Yogyakarta tetap hadir, tetapi tidak mengambil alih waktu Anda. Kami menjaga hubungan dengan kota melalui pemandangan dan suasana.',
  },
];

export function AboutPrinciplesSection() {
  return (
    <section className="mx-5 mt-24 sm:mx-10 md:mt-40" aria-labelledby="about-principles-title">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
        <div className="md:col-span-5 lg:sticky lg:top-24 lg:self-start lg:pr-8">
          <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">
            [02]
          </span>
          <h2
            id="about-principles-title"
            className="font-heading mt-5 max-w-xl text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance"
          >
            Nilai yang membentuk setiap sudut.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-sm font-sans text-base leading-relaxed text-pretty">
            Kami tidak mengejar tampilan yang seragam. Kami mencari keseimbangan antara keindahan,
            fungsi, dan perasaan yang ditinggalkan setelah Anda pergi.
          </p>
        </div>

        <ul className="border-border border-t md:col-span-7">
          {principles.map((principle, index) => (
            <li key={principle.number} className="border-border border-b">
              <Reveal
                className="grid grid-cols-[auto_1fr] gap-x-5 py-8 sm:gap-x-8 sm:py-10"
                delay={index * 0.08}
              >
                <span className="text-muted-foreground font-sans text-sm font-semibold tabular-nums">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-md font-sans text-sm leading-relaxed text-pretty sm:text-base">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="mt-16 md:mt-24">
        <figure className="border-border grid grid-cols-1 gap-8 border-t pt-10 md:grid-cols-12 md:items-end md:gap-8">
          <div className="overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5 md:col-span-4">
            <Image
              layout="fullWidth"
              src="/assets/about/about-principles.webp"
              alt="Kamar Nioboro dengan tempat tidur besar dan cahaya alami"
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <blockquote className="m-0 md:col-span-7 md:col-start-6">
            <p className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] leading-snug font-semibold tracking-tight text-balance">
              “Kami ingin tamu pulang dengan ingatan tentang bagaimana rasanya merasa tenang.”
            </p>
            <figcaption className="text-muted-foreground mt-6 font-sans text-sm">
              Tim Nioboro
            </figcaption>
          </blockquote>
        </figure>
      </Reveal>
    </section>
  );
}
