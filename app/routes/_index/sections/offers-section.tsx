import { Image } from '@unpic/react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { type CSSProperties, useRef, useState } from 'react';
import { Link } from 'react-router';
import { type Offer, OfferItem } from '../components/offer-item';

const offers: Offer[] = [
  { text: 'Desain Arsitektural', imageUrl: '/assets/home/Architectural_Design.webp' },
  { text: 'Desain Interior', imageUrl: '/assets/home/Desain_Interior.webp' },
  { text: 'Tempat Makan', imageUrl: '/assets/home/Ruangan_Makan.webp' },
  { text: 'Sketsa Desain', imageUrl: '/assets/home/Sketch_Design.webp' },
  { text: 'Furniture Kustom', imageUrl: '/assets/home/Kustom_Furnitur.webp' },
];

// Numbers are interpreted as pixels; strings accept any valid CSS value
// (e.g. '24rem', '40svh', 'min(60vw, 280px)').
type Size = number | string;
const toCss = (value?: Size) => (typeof value === 'number' ? `${value}px` : value);

type OffersSectionProps = {
  /** Image width. Defaults to full width on mobile and a 24rem maximum on desktop. */
  imageWidth?: Size;
  /** Image height. Defaults to the remaining space within the pinned panel. */
  imageHeight?: Size;
};

export function OffersSection({ imageWidth, imageHeight }: OffersSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress (0 → 1) while the sticky panel is pinned.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Derive the active offer from scroll progress.
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(offers.length - 1, Math.max(0, Math.floor(latest * offers.length)));
    setActiveIndex((prev) => (prev === index ? prev : index));
  });

  // Smoothly scroll to the position at which the selected offer becomes active.
  const scrollToItem = (index: number) => {
    const el = containerRef.current;
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    // Small offset keeps the target safely inside the item's scroll range.
    const target = top + scrollable * ((index + 0.01) / offers.length);

    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    // The outer wrapper defines the total scroll distance. It is driven by CSS variables
    // rather than JavaScript, which avoids hydration mismatches and layout flashes.
    // Mobile: 45vh per item + 10vh tail. Desktop (md+): 80vh per item + 20vh tail.
    <section
      ref={containerRef}
      style={{ '--count': offers.length } as CSSProperties}
      className="relative h-[calc(var(--count)*var(--per-item)+var(--tail))] [--per-item:45vh] [--tail:10vh] md:[--per-item:80vh] md:[--tail:20vh]"
    >
      {/* Sticky panel. The bottom padding respects the iPhone home-indicator safe area on mobile. */}
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden px-5 pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-10 md:h-screen md:pt-24 md:pb-8">
        {/* Mobile: section label on the left, "current / total" counter on the right.
            The counter is hidden on desktop, where the list already shows the numbering. */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">
            [04]
          </span>
          <div className="flex items-center gap-4">
            <Link
              to="/layanan"
              className="text-muted-foreground hover:text-foreground font-sans text-xs font-medium underline-offset-4 transition-colors hover:underline sm:text-sm"
            >
              Lihat layanan
            </Link>
            <span
              aria-hidden="true"
              className="font-sans text-xs font-medium text-neutral-500 tabular-nums md:hidden"
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(offers.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Mobile only: thin progress line that fills as the offers are scrolled through. */}
        <div className="mt-3 h-px w-full bg-neutral-200 md:hidden" aria-hidden="true">
          <motion.div
            className="h-full origin-left bg-neutral-950"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Mobile: single column (heading, image, list). Desktop: two columns. */}
        <div className="mt-4 flex min-h-0 flex-1 flex-col gap-3 md:mt-6 md:grid md:grid-cols-2 md:gap-12">
          {/* `contents` on mobile promotes the heading and image to direct flex children. */}
          <div className="contents md:flex md:min-h-0 md:flex-col md:gap-10">
            <div className="space-y-1.5 md:space-y-4">
              {/* Slightly smaller on mobile so the image and list get more room. */}
              <h1 className="font-heading max-w-md text-[1.625rem] leading-[1.1] font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Penawaran yang kami berikan, dibuat dengan niat
              </h1>
              <p className="text-muted-foreground max-w-xs font-sans text-sm leading-snug sm:max-w-md md:max-w-lg md:text-lg lg:text-xl">
                Dari konsep hingga selesai, setiap ruang dibentuk dengan tujuan.
              </p>
            </div>

            {/* Image container: displayed on all breakpoints and sized via imageWidth / imageHeight. */}
            <div
              className={`relative min-h-40 self-center overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5 md:min-h-0 md:self-start md:rounded-3xl ${
                imageHeight === undefined ? 'flex-1' : 'shrink-0'
              } ${imageWidth === undefined ? 'w-full md:max-w-2xl' : ''}`}
              style={{
                width: toCss(imageWidth),
                height: toCss(imageHeight),
                maxWidth: imageWidth !== undefined ? '100%' : undefined,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12, scale: 1.04 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <Image
                    src={offers[activeIndex].imageUrl}
                    alt={offers[activeIndex].text}
                    layout="fullWidth"
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Offer list: the active item is highlighted. */}
          <div className="flex flex-col justify-end md:justify-between">
            <ul>
              {offers.map((offer, index) => (
                <OfferItem
                  key={offer.text}
                  offer={offer}
                  index={index}
                  isActive={activeIndex === index}
                  onSelect={scrollToItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
