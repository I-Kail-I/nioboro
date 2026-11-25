import React from 'react';
import { Image } from '@unpic/react';
import { motion } from 'motion/react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CollectionOfRoom() {
  return (
    <section id="rooms" className="relative mt-24 scroll-mt-24 overflow-hidden md:mt-40 lg:mt-40">
      {/* Upper overlay */}
      <div className="pointer-events-none absolute top-0 z-10 h-40 w-full bg-linear-to-b from-white to-transparent md:h-56 lg:h-30" />
      <div className="relative mx-auto max-w-360 px-5 sm:px-8 md:px-10 lg:h-220 lg:px-0">
        {/* Section index */}
        <span className="text-foreground/70 font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold tracking-wide tabular-nums lg:absolute lg:top-[36%]">
          [03]
        </span>

        {/* Main heading */}
        <motion.h2
          className="font-heading z-10 mt-16 max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance md:mt-6 lg:absolute lg:inset-x-0 lg:top-[45%] lg:mx-auto lg:mt-0 lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true }}
        >
          A collection of quiet statements
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-muted-foreground border-foreground/20 mt-5 ml-auto max-w-64 border-r pr-4 text-right font-sans text-[clamp(0.875rem,1vw,1rem)] leading-relaxed text-pretty sm:mt-6 lg:absolute lg:top-[37%] lg:right-10 lg:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          viewport={{ once: true }}
        >
          Each space we design speaks in silence
        </motion.p>

        {/* image collection */}
        <div className="mt-10 grid grid-cols-2 items-start gap-x-3 gap-y-8 sm:mt-14 sm:gap-x-5 sm:gap-y-10 md:mt-20 md:gap-x-8 md:gap-y-12 lg:mt-0 lg:block">
          {/* Main landscape image */}
          <motion.figure
            className="group col-span-2 lg:absolute lg:-top-6 lg:-right-10 lg:w-[42%]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/home/2.webp"
                alt="Halaman dan kolam Nioboro di pagi hari"
                className="aspect-16/10 w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:transform-none sm:aspect-video md:aspect-16/8 lg:aspect-video"
              />
            </div>
          </motion.figure>

          {/* Smaller image on the left */}
          <motion.figure
            className="group mt-3 sm:mt-5 md:mt-8 lg:absolute lg:top-[10%] lg:left-[6%] lg:w-[26%]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/home/1.webp"
                alt="Area bersantap Nioboro menghadap kolam"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:transform-none sm:aspect-3/2 md:aspect-4/3 lg:aspect-3/2"
              />
            </div>
          </motion.figure>

          {/* Image on the right with location caption */}
          <motion.figure
            className="group mt-12 sm:mt-16 md:mt-20 lg:absolute lg:top-[52%] lg:right-[7%] lg:w-[26%]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xs bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
              <Image
                layout="fullWidth"
                src="/assets/home/4.webp"
                alt="Ruang tamu Nioboro dengan pencahayaan hangat"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:transform-none sm:aspect-4/3 md:aspect-3/2 lg:aspect-4/3"
              />
            </div>
            <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 font-sans text-xs tracking-wide before:h-px before:w-6 before:bg-current before:opacity-40 sm:text-sm">
              Yogyakarta, Indonesia
            </figcaption>
          </motion.figure>

          {/* Wide image at the bottom of the collage */}
          <motion.figure
            className="group col-span-2 -mx-5 mt-5 sm:mx-0 sm:mt-8 md:mt-12 lg:absolute lg:top-[56%] lg:left-[4%] lg:w-[35%]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden bg-neutral-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)] ring-1 ring-black/5 sm:rounded-xs">
              <Image
                layout="fullWidth"
                src="/assets/home/3.webp"
                alt="Lobi Nioboro dengan sofa dan bar kayu"
                className="aspect-5/3 w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:transform-none sm:aspect-video md:aspect-2/1 lg:aspect-2/1"
              />
            </div>
            <figcaption className="text-muted-foreground mt-3 flex items-center gap-3 px-5 font-sans text-xs tracking-wide before:h-px before:w-6 before:bg-current before:opacity-40 sm:px-0 sm:text-sm">
              Modern Courtyard
            </figcaption>
          </motion.figure>
        </div>
      </div>
      {/* Bottom overlay */}
      <div className="pointer-events-none absolute bottom-0 z-10 h-32 w-full bg-linear-to-t from-white to-transparent sm:h-40 md:h-56 lg:h-90" />
    </section>
  );
}
