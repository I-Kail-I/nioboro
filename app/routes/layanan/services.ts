export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  scope: string[];
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
};

export const formatIndex = (value: number) => String(value).padStart(2, '0');

export const services: Service[] = [
  {
    slug: 'desain-arsitektural',
    name: 'Desain Arsitektural',
    tagline: 'Dari tapak ke bentuk yang punya alasan.',
    description:
      'Kami membaca tapak, cahaya, dan cara orang bergerak sebelum menggambar bentuk. Hasilnya bukan fasad yang berdiri sendiri, tetapi bangunan yang menyatu dengan iklim dan kebiasaan penghuninya.',
    scope: [
      'Studi tapak dan orientasi',
      'Konsep massa dan fasad',
      'Gambar kerja dan detail',
      'Koordinasi struktur dan MEP',
    ],
    image: '/assets/layanan/desain-arsitektural.webp',
    imageAlt: 'Fasad bangunan Nioboro saat senja',
  },
  {
    slug: 'desain-interior',
    name: 'Desain Interior',
    tagline: 'Suasana ruang lewat material, cahaya, dan proporsi.',
    description:
      'Interior kami disusun dari material, proporsi, dan cahaya. Setiap ruang punya tugas yang jelas: tempat berhenti, tempat berbicara, atau tempat bekerja tanpa terganggu.',
    scope: [
      'Konsep suasana dan layout',
      'Palet material dan warna',
      'Rencana pencahayaan',
      'Tata letak furnitur',
    ],
    image: '/assets/layanan/desain-interior.webp',
    imageAlt: 'Lobi Nioboro dengan langit-langit berukir dan cahaya alami',
  },
  {
    slug: 'tempat-makan',
    name: 'Tempat Makan',
    tagline: 'Ruang makan yang membuat orang tinggal lebih lama.',
    description:
      'Ruang makan adalah panggung yang tenang. Kami mengatur jarak meja, arah cahaya, dan alur pelayanan agar orang betah duduk lebih lama, bukan hanya datang untuk makan.',
    scope: [
      'Tata letak meja dan alur servis',
      'Pencahayaan dan akustik',
      'Material permukaan',
      'Detail area terbuka',
    ],
    image: '/assets/layanan/tempat-makan.webp',
    imageAlt: 'Ruang makan Nioboro dengan meja panjang dan kursi kayu',
  },
  {
    slug: 'sketsa-desain',
    name: 'Sketsa Desain',
    tagline: 'Menguji ide sebelum menjadi keputusan mahal.',
    description:
      'Sebelum semuanya menjadi gambar kerja, kami membuat sketsa untuk menguji ide. Garis sederhana membantu semua pihak melihat ruang yang sama sebelum keputusan besar diambil.',
    scope: ['Sketsa tangan dan diagram', 'Studi proporsi', 'Alternatif massa', 'Visualisasi awal'],
    image: '/assets/layanan/sketsa-desain.webp',
    imageAlt: 'Sketsa denah kamar Nioboro dengan keterangan ruang',
    imageFit: 'contain',
  },
  {
    slug: 'furniture-kustom',
    name: 'Furniture Kustom',
    tagline: 'Furnitur yang mengikuti ruang, bukan katalog.',
    description:
      'Furnitur dibuat untuk ruangnya, bukan untuk katalog. Ukuran, material, dan detail disesuaikan dengan cara ruang itu dipakai setiap hari.',
    scope: [
      'Desain sesuai ukuran ruang',
      'Pemilihan material',
      'Produksi dan perakitan',
      'Finishing dan pemasangan',
    ],
    image: '/assets/layanan/furniture-kustom.webp',
    imageAlt: 'Kamar suite Nioboro dengan furnitur kayu dan kursi biru',
  },
];
