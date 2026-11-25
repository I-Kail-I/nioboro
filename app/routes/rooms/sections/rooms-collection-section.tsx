import { Image } from '@unpic/react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { Reveal } from '../components/reveal';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RoomPhoto = {
  src: string;
  alt: string;
  /** True when the photo is still a remote placeholder. */
  external?: boolean;
};

type Room = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  features: string[];
  note?: string;
  photos: RoomPhoto[];
};

/**
 * Foto Ruang Rapat masih memakai URL eksternal sebagai contoh.
 * Unduh ketiga foto di bawah, simpan ke public/assets/rooms/ dengan nama
 * ruang-rapat-1.webp, ruang-rapat-2.webp, dan ruang-rapat-3.webp, lalu ganti
 * setiap `src` menjadi path lokal dan hapus `external: true`.
 */
const rooms: Room[] = [
  {
    slug: 'kamar-hotel',
    name: 'Kamar Hotel',
    summary: 'Tempat tidur besar, meja dekat jendela, dan ruang untuk berhenti.',
    description:
      'Kamar di Nioboro dibuat sebagai ruang yang tenang: tempat tidur besar, meja kecil di dekat jendela, dan area duduk yang cukup untuk menunda perjalanan berikutnya. Cahaya alami masuk lewat tirai tipis, sementara panel kayu menjaga ruang tetap hangat.',
    features: [
      'Tempat tidur besar',
      'Area duduk dan meja',
      'Kamar mandi dalam',
      'Pencahayaan alami',
    ],
    photos: [
      {
        src: '/assets/rooms/kamar-hotel-1.webp',
        alt: 'Ruang tamu suite Nioboro dengan sofa dan meja bundar',
      },
      {
        src: '/assets/rooms/kamar-hotel-2.webp',
        alt: 'Kamar Nioboro dengan tempat tidur besar dan jendela tinggi',
      },
      {
        src: '/assets/rooms/kamar-hotel-3.webp',
        alt: 'Kamar suite dengan kursi biru dan tempat tidur king',
      },
      {
        src: '/assets/rooms/kamar-hotel-4.webp',
        alt: 'Kamar Nioboro dengan panel kayu dan meja dekat jendela',
      },
    ],
  },
  {
    slug: 'ruang-santai',
    name: 'Ruang Santai',
    summary: 'Lobi, bar, dan sudut duduk untuk memperlambat langkah.',
    description:
      'Lobi dan ruang duduk kami tidak dirancang untuk dilewati. Ada sofa panjang, bar kayu, dan meja rendah yang mengundang percakapan pelan. Di sore hari, cahaya masuk dari sisi bangunan dan berhenti di lantai.',
    features: [
      'Sofa dan kursi santai',
      'Bar dan meja rendah',
      'Pemandangan taman',
      'Cocok untuk membaca',
    ],
    photos: [
      {
        src: '/assets/rooms/ruang-santai-1.webp',
        alt: 'Bar dan area duduk Ruang Santai Nioboro',
      },
      {
        src: '/assets/rooms/ruang-santai-2.webp',
        alt: 'Ruang duduk dengan sofa panjang dan lampu gantung',
      },
      {
        src: '/assets/rooms/ruang-santai-3.webp',
        alt: 'Lobi Nioboro dengan sofa jingga dan meja kayu',
      },
      {
        src: '/assets/rooms/ruang-santai-4.webp',
        alt: 'Lobi utama Nioboro dengan langit-langit berukir',
      },
    ],
  },
  {
    slug: 'ruang-makan',
    name: 'Ruang Makan',
    summary: 'Meja panjang, cahaya hangat, dan sarapan di tepi kolam.',
    description:
      'Meja-meja panjang dengan taplak putih, dikelilingi kursi kayu di bawah langit-langit tinggi. Sarapan bisa dinikmati di dalam, atau di tepi kolam saat udara pagi masih sejuk.',
    features: [
      'Meja makan bersama',
      'Area tepi kolam',
      'Langit-langit tinggi',
      'Pencahayaan alami',
    ],
    photos: [
      {
        src: '/assets/rooms/ruang-makan-1.webp',
        alt: 'Ruang makan Nioboro dengan meja panjang dan kursi kayu',
      },
      {
        src: '/assets/rooms/ruang-makan-2.webp',
        alt: 'Meja sarapan di tepi kolam Nioboro',
      },
    ],
  },
  {
    slug: 'ruang-rapat',
    name: 'Ruang Rapat',
    summary: 'Ruang lebih tertutup untuk percakapan kerja dan pertemuan kecil.',
    description:
      'Ruang yang lebih tertutup untuk percakapan kerja, presentasi kecil, atau pertemuan keluarga. Meja panjang menjadi pusat ruangan, dengan pencahayaan yang cukup untuk membaca dan menulis.',
    features: ['Meja rapat panjang', 'Layar presentasi', 'Kapasitas kecil', 'Pencahayaan alami'],
    note: 'Foto ruang rapat masih berupa contoh. Galeri ini akan diganti dengan foto asli Nioboro saat sudah tersedia.',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        alt: 'Ruang rapat dengan meja panjang dan kursi',
        external: true,
      },
      {
        src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=80',
        alt: 'Ruang pertemuan kecil dengan layar presentasi',
        external: true,
      },
      {
        src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=80',
        alt: 'Sudut ruang rapat dengan pencahayaan alami',
        external: true,
      },
    ],
  },
  {
    slug: 'kolam-taman',
    name: 'Kolam & Taman',
    summary: 'Air, tanaman, dan langit terbuka di tengah bangunan.',
    description:
      'Kolam menjadi pusat bangunan. Airnya memantulkan langit dan fasad, sementara tanaman tinggi memberi batas alami antara lorong dan area santai. Di malam hari, cahaya dari dalam bangunan ikut jatuh ke permukaan air.',
    features: ['Kolam renang', 'Kursi santai', 'Taman dan pohon', 'Area terbuka'],
    photos: [
      {
        src: '/assets/rooms/kolam-taman-1.webp',
        alt: 'Kolam di tengah bangunan Nioboro dengan kursi santai',
      },
      {
        src: '/assets/rooms/kolam-taman-2.webp',
        alt: 'Kolam Nioboro saat malam dengan cahaya dari dalam bangunan',
      },
      {
        src: '/assets/rooms/kolam-taman-3.webp',
        alt: 'Fasad Nioboro dengan taman dan pepohonan',
      },
    ],
  },
];

const pad = (value: number) => String(value).padStart(2, '0');

function RoomImage({ photo, className }: { photo: RoomPhoto; className?: string }) {
  if (photo.external) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        width={1600}
        height={1067}
        loading="lazy"
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <Image
      layout="fullWidth"
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

function RoomCard({
  room,
  index,
  isActive,
  onSelect,
}: {
  room: Room;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <li className="shrink-0 snap-start">
      <button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? 'true' : undefined}
        className={`group relative block aspect-3/4 w-[62vw] overflow-hidden rounded-xs bg-neutral-100 ring-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:w-[34vw] lg:w-[17vw] ${
          isActive
            ? 'ring-primary ring-offset-background ring-offset-2'
            : 'ring-transparent hover:ring-black/10'
        }`}
      >
        <RoomImage
          photo={room.photos[0]}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03] motion-reduce:transform-none ${
            isActive ? '' : 'opacity-85 group-hover:opacity-100'
          }`}
        />
        <span
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-black/10"
          aria-hidden="true"
        />
        <span className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 font-sans text-[0.625rem] font-semibold tracking-[0.16em] text-white/70 uppercase">
          <span>({pad(index + 1)})</span>
          <span>{room.photos.length} foto</span>
        </span>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left text-white">
          <span className="font-heading block text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
            {room.name}
          </span>
        </span>
      </button>
    </li>
  );
}

function RoomStage({ room, roomNumber }: { room: Room; roomNumber: number }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const reduceMotion = useReducedMotion();
  const photo = room.photos[activePhoto] ?? room.photos[0];
  const thumbnailColumns =
    room.photos.length >= 4
      ? 'grid-cols-4'
      : room.photos.length === 3
        ? 'grid-cols-3'
        : 'grid-cols-2';

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
      <div className="min-w-0 lg:col-span-8">
        <figure className="m-0">
          <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-neutral-100 ring-1 ring-black/5 sm:aspect-16/9">
            <AnimatePresence initial={false}>
              <motion.div
                key={`${room.slug}-${activePhoto}`}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE }}
                className="absolute inset-0"
              >
                <RoomImage photo={photo} className="h-full w-full object-cover" />
              </motion.div>
            </AnimatePresence>

            {photo.external && (
              <span className="bg-background/90 text-foreground absolute top-3 left-3 px-2.5 py-1 font-sans text-[0.625rem] font-semibold tracking-[0.16em] uppercase">
                Foto contoh
              </span>
            )}

            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/75 via-black/20 to-transparent p-5 text-white sm:p-6">
              <span className="font-sans text-xs leading-relaxed font-medium text-white/85 sm:text-sm">
                {photo.alt}
              </span>
              <span className="shrink-0 font-sans text-xs text-white/70 tabular-nums">
                {pad(activePhoto + 1)} / {pad(room.photos.length)}
              </span>
            </figcaption>
          </div>
        </figure>

        <div
          className={`mt-3 grid gap-2 sm:gap-3 ${thumbnailColumns}`}
          role="group"
          aria-label={`Foto ${room.name}`}
        >
          {room.photos.map((item, index) => {
            const isActive = index === activePhoto;

            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setActivePhoto(index)}
                aria-label={`Tampilkan foto ${index + 1}: ${item.alt}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative aspect-4/3 overflow-hidden rounded-xs bg-neutral-100 ring-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 ${
                  isActive
                    ? 'ring-primary ring-offset-background ring-offset-2'
                    : 'ring-transparent hover:ring-black/10'
                }`}
              >
                <RoomImage
                  photo={item}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
                />
                <span
                  className={`absolute inset-0 bg-neutral-950/30 transition-opacity ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-4">
        <span className="text-muted-foreground font-sans text-xs font-semibold tracking-[0.18em] uppercase">
          Ruang {pad(roomNumber)}
        </span>
        <h3 className="font-heading mt-3 text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-balance">
          {room.name}
        </h3>
        <p className="text-muted-foreground mt-5 font-sans text-sm leading-relaxed text-pretty sm:text-base">
          {room.description}
        </p>
        {room.note && (
          <p className="text-muted-foreground mt-4 font-sans text-xs leading-relaxed">
            {room.note}
          </p>
        )}

        <h4 className="border-border text-muted-foreground mt-8 border-t pt-5 font-sans text-xs font-semibold tracking-[0.18em] uppercase">
          Yang terlihat di ruang ini
        </h4>
        <ul className="border-border mt-2 border-t">
          {room.features.map((feature, index) => (
            <li
              key={feature}
              className="border-border text-foreground flex items-baseline gap-4 border-b py-3 font-sans text-sm"
            >
              <span className="text-muted-foreground text-[0.625rem] font-semibold tabular-nums">
                {pad(index + 1)}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RoomsCollectionSection() {
  const [activeRoom, setActiveRoom] = useState(0);
  const room = rooms[activeRoom];

  return (
    <section
      id="koleksi-ruangan"
      className="mx-5 mt-24 scroll-mt-24 sm:mx-10 md:mt-40"
      aria-labelledby="rooms-collection-title"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div>
          <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">
            [01]
          </span>
          <h2
            id="rooms-collection-title"
            className="font-heading mt-5 max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-tight text-balance"
          >
            Setiap pintu membuka suasana yang berbeda.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-xs font-sans text-sm leading-relaxed text-pretty sm:pb-2">
          Kartu di bawah adalah pintu masuknya. Pilih satu, dan galeri di bawahnya akan berganti.
        </p>
      </div>

      <div className="-mx-5 mt-10 [scrollbar-width:none] overflow-x-auto px-5 pt-1 pb-3 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-x-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        <ul
          className="flex w-max gap-3 lg:w-full lg:justify-between lg:gap-4"
          aria-label="Kategori ruang"
        >
          {rooms.map((item, index) => (
            <RoomCard
              key={item.slug}
              room={item}
              index={index}
              isActive={index === activeRoom}
              onSelect={() => setActiveRoom(index)}
            />
          ))}
        </ul>
      </div>

      <p className="text-muted-foreground mt-3 flex items-center gap-2 font-sans text-xs lg:hidden">
        <ArrowRight className="size-3.5" aria-hidden="true" />
        Geser untuk melihat semua ruang
      </p>

      <p className="sr-only" aria-live="polite">
        Menampilkan {room.name}, {room.photos.length} foto.
      </p>

      <Reveal className="mt-12 md:mt-14">
        <RoomStage key={room.slug} room={room} roomNumber={activeRoom + 1} />
      </Reveal>
    </section>
  );
}
