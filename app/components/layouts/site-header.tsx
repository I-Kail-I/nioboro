import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

const navigation = [
  { to: '/about', label: 'Tentang' },
  { to: '/rooms', label: 'Ruangan' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/kontak', label: 'Kontak' },
];

const formatIndex = (value: number) => String(value).padStart(2, '0');

export function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = location.pathname.replace(/\/+$/, '') || '/';
  const hasDarkHero = pathname === '/' || pathname === '/kontak';
  const solid = scrolled || menuOpen;

  const textTone = solid || !hasDarkHero ? 'text-foreground' : 'text-background';
  const linkTone =
    solid || !hasDarkHero
      ? 'text-muted-foreground hover:text-foreground'
      : 'text-background/65 hover:text-background';
  const activeTone = solid || !hasDarkHero ? 'text-foreground' : 'text-background';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 48);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-border bg-background' : 'border-transparent bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 transition-colors duration-300 sm:h-20 sm:px-10 ${textTone}`}
      >
        <Link
          to="/"
          aria-label="Nioboro, ke beranda"
          className="font-heading text-xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:text-2xl"
        >
          Nioboro<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {navigation.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-baseline gap-1.5 py-2 font-sans text-sm font-medium transition-colors ${
                  isActive ? activeTone : linkTone
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-[0.625rem] font-semibold tabular-nums opacity-45">
                    {formatIndex(index + 1)}
                  </span>
                  <span
                    className={`relative pb-0.5 ${
                      isActive
                        ? 'after:bg-primary after:absolute after:inset-x-0 after:bottom-0 after:h-px'
                        : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          className="hover:bg-foreground/5 -mr-3 inline-flex size-11 items-center justify-center rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="site-mobile-menu"
          className="border-border bg-background max-h-[calc(100svh-4rem)] overflow-y-auto border-b sm:max-h-[calc(100svh-5rem)] md:hidden"
        >
          <nav className="mx-auto max-w-[1600px] px-5 pt-2 pb-8" aria-label="Navigasi mobile">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.to} className="border-border border-t">
                  <NavLink
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-heading flex items-baseline gap-3 py-4 text-2xl font-semibold tracking-tight transition-colors ${
                        isActive ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                      }`
                    }
                  >
                    <span className="text-muted-foreground font-sans text-[0.625rem] font-semibold tabular-nums">
                      {formatIndex(index + 1)}
                    </span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@nioboro.com"
              className="text-muted-foreground hover:text-foreground mt-6 inline-block font-sans text-sm underline-offset-4 transition-colors hover:underline"
            >
              hello@nioboro.com
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
