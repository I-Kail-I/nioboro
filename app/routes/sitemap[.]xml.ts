import { SITE_URL } from '@/lib/seo';

type SitemapPage = {
  path: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: string;
};

const pages: SitemapPage[] = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/rooms', changefreq: 'monthly', priority: '0.9' },
  { path: '/layanan', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'yearly', priority: '0.7' },
  { path: '/kontak', changefreq: 'yearly', priority: '0.6' },
];

export function loader() {
  const urls = pages
    .map(
      ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path === '/' ? '/' : path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
