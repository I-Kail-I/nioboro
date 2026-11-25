import type { MetaDescriptor } from 'react-router';

const FALLBACK_SITE_URL = 'https://nioboro.com';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, '');
export const SITE_NAME = 'Nioboro';
export const SITE_EMAIL = 'hello@nioboro.com';
export const DEFAULT_OG_IMAGE = '/assets/og-image.jpg';
export const DEFAULT_DESCRIPTION =
  'Nioboro adalah penginapan dan ruang di Yogyakarta yang dirancang untuk ketenangan, kenyamanan, dan waktu yang lebih bermakna.';

const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).toString();

type SeoOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  /**
   * Override the generated robots value. Set to `false` to omit the tag when
   * another part of the page already sets it (for example the 404 page).
   */
  robots?: string | false;
};

export function seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_NAME,
  type = 'website',
  noIndex = false,
  robots,
}: SeoOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const robotsContent =
    robots === false
      ? undefined
      : (robots ?? (noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'));

  return [
    { title: fullTitle },
    { name: 'description', content: description },
    ...(robotsContent ? [{ name: 'robots', content: robotsContent }] : []),
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
  ];
}

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: 'id-ID',
      publisher: { '@id': `${SITE_URL}/#lodging` },
    },
    {
      '@type': 'LodgingBusiness',
      '@id': `${SITE_URL}/#lodging`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: DEFAULT_DESCRIPTION,
      image: [absoluteUrl(DEFAULT_OG_IMAGE), absoluteUrl('/assets/home/Hero_Image.webp')],
      logo: absoluteUrl('/assets/icon.png'),
      email: SITE_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yogyakarta',
        addressRegion: 'Daerah Istimewa Yogyakarta',
        addressCountry: 'ID',
      },
      areaServed: { '@type': 'City', name: 'Yogyakarta' },
    },
  ],
};
