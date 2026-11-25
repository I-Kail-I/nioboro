import React from 'react';
import { Image } from '@unpic/react';
import { motion } from 'motion/react';
import RevealText from '../components/reveal-text';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TestimonialSection() {
  return (
    <section className="mx-5 mt-24 pb-24 sm:mx-10 md:mt-40 md:pb-32">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">[05]</span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-12 md:gap-8 lg:gap-12">
        {/* Left rail: client portrait, pagination dots and previous control */}
        <motion.div
          className="flex items-start justify-between gap-6 md:col-span-3 md:flex-col md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true }}
        >
          <div>
            <div className="aspect-square w-20 overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/home/Foto_Orang.webp"
                alt="Staf Nioboro menyiapkan rendaman bunga"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <figure className="m-0 self-center md:col-span-6 md:px-4 lg:px-8">
          <blockquote className="m-0">
            <span
              className="font-heading text-foreground block text-4xl leading-none font-semibold"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <RevealText
              text="From material selection, the design team translated our creative lifestyle into architecture. We couldn't have imagined a more perfect result."
              emphasis={['architecture', 'perfect', 'result']}
              className="font-heading text-foreground mt-6 gap-x-2 text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.25] font-semibold tracking-tight"
            />
          </blockquote>

          <figcaption className="mt-10 flex items-end justify-between gap-6">
            <p className="text-muted-foreground font-sans text-sm">&ndash; Sergio R.</p>
            <span
              className="font-heading text-foreground text-4xl leading-none font-semibold"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </figcaption>
        </figure>

        {/* Right rail: story index, project image and caption */}
        <motion.div
          className="flex flex-col md:col-span-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          viewport={{ once: true }}
        >
          <figure className="group m-0 mt-6">
            <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/home/Side_Foto.webp"
                alt="Fasad Nioboro saat senja"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:transform-none"
              />
            </div>

            <figcaption className="text-muted-foreground mt-3 flex items-center justify-between font-sans text-[0.625rem] tracking-[0.18em] uppercase">
              <span>Yogyakarta</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
