import { Image } from '@unpic/react';
import RevealText from '../../_index/components/reveal-text';
import { Reveal } from '../components/reveal';

export function AboutStorySection() {
  return (
    <section className="mx-5 mt-24 sm:mx-10 md:mt-40" aria-labelledby="about-story-title">
      <div>
        <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">[01]</span>
        <h2
          id="about-story-title"
          className="font-heading mt-5 max-w-5xl text-[clamp(1.875rem,4.5vw,3.75rem)] leading-[1.15] font-semibold tracking-tight md:mt-7"
        >
          <RevealText
            text="Tempat menginap harus lebih dari sekadar gerbang antara satu kota dan perjalanan berikutnya."
            emphasis={['tempat', 'lebih']}
          />
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:items-end lg:gap-12">
        <Reveal className="lg:col-span-4">
          <p className="text-foreground max-w-md font-sans text-base leading-relaxed text-pretty sm:text-lg">
            Nioboro lahir dari keyakinan bahwa perjalanan terbaik dimulai ketika Anda diberi ruang
            untuk hadir. Kami memilih suasana Yogyakarta sebagai titik awal, lalu merawat setiap
            detail agar ketenangan terasa autentik, bukan dibuat-buat.
          </p>
          <p className="text-muted-foreground mt-6 max-w-md font-sans text-sm leading-relaxed text-pretty sm:text-base">
            Dari suara di luar jendela sampai cahaya yang masuk ke kamar, kami ingin setiap tamu
            merasa bahwa kota dapat menunggu. Mereka punya waktu untuk beristirahat, membaca,
            berbicara, atau sekadar diam.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
          <figure className="m-0">
            <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/about/about-story.webp"
                alt="Lobi Nioboro dengan sofa kayu dan cahaya alami"
                loading="lazy"
                decoding="async"
                className="aspect-3/2 w-full object-cover"
              />
            </div>
            <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 font-sans text-xs tracking-wide">
              <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
              Ruang utama Nioboro, dirancang untuk percakapan dan keheningan.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
