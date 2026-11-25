import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';

import type { Route } from './+types/root';
import { SiteFooter } from './components/layouts/site-footer';
import { SiteHeader } from './components/layouts/site-header';
import { NotFoundPage } from './components/not-found-page';
import { DEFAULT_DESCRIPTION, siteJsonLd } from './lib/seo';
import './app.css';

export function meta(_: Route.MetaArgs) {
  return [{ name: 'description', content: DEFAULT_DESCRIPTION }];
}

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
  { rel: 'icon', href: '/assets/icon.png', type: 'image/png', sizes: '1254x1254' },
  { rel: 'apple-touch-icon', href: '/assets/icon.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="l91rwxV9_qY8RnJo7yhFki50CmGXy6k9R8SN_LEq1yc"
        />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body>
        <ReactLenis root>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ScrollRestoration />
        </ReactLenis>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <>
        <title>Halaman Tidak Ditemukan | Nioboro</title>
        <NotFoundPage />
      </>
    );
  }

  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = 'Error';
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <title>Terjadi Kesalahan | Nioboro</title>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
