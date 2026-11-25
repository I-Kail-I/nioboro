import React from 'react';
import RevealText from '../components/reveal-text';
import { Image } from '@unpic/react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="mx-5 mt-24 sm:mx-10 md:mt-40">
      <div>
        <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">[02]</span>

        <h1 className="font-heading mt-5 text-[clamp(1.875rem,4.5vw,3.75rem)] leading-[1.15] font-semibold tracking-tight md:mt-7">
          <RevealText text="Kami adalah Nioboro. Kami merancang ketenangan, bukan sekadar tempat singgah. Setiap ruang adalah perpaduan hangat antara cahaya, kenyamanan, dan waktu." />
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-24 md:grid-cols-2 lg:gap-12">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground max-w-2xl font-sans text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed">
            Nioboro adalah ruang peristirahatan yang lahir dari ketenangan, di mana setiap sudutnya
            dirancang untuk memperlambat langkah Anda. Kami menyaring kebisingan kota dan menyisakan
            hal yang paling esensial: cahaya alami, material yang hangat, dan jeda yang menenangkan.
          </p>

          <Button className="mt-8 w-48" size="lg" variant="default">
            Learn More
          </Button>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Image
            layout="fullWidth"
            src="/assets/home/Ruangan_Hotel.webp"
            alt="Ruangan Hotel Nioboro"
            className="h-72 w-full object-cover sm:h-96 lg:h-128"
          />
        </motion.div>
      </div>
    </section>
  );
}
