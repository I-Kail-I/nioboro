import { NotFoundPage } from '@/components/not-found-page';
import { seo } from '@/lib/seo';

export function meta() {
  return seo({
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak ditemukan di Nioboro.',
    path: '/404',
    robots: false,
  });
}

export default function FourOhFourPage() {
  return <NotFoundPage />;
}
