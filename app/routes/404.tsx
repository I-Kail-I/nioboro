import { NotFoundPage } from '@/components/not-found-page';

export function meta() {
  return [{ title: '404 - Nioboro' }];
}

export default function FourOhFourPage() {
  return <NotFoundPage />;
}
