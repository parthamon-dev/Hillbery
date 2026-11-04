import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

interface SiteHeaderProps {
  hasHighlights?: boolean;
}

const NAV_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Where We Source', to: '/sourcing' },
  { label: 'Production', to: '/production' },
  { label: 'Quality You Can Trust', to: '/quality' },
  { label: 'Research & Innovation', to: '/research' },
  { label: 'Our Services', to: '/services' },
  { label: 'Join Us', to: '/contact' },
];

export default function SiteHeader({ hasHighlights = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${hasHighlights ? 'top-10' : 'top-0'} fixed inset-x-0 z-30 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-neutral-200 bg-neutral-50/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <Link to="/" aria-label="Hillberry Life Sciences home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent-500 after:transition-all after:duration-300 hover:text-primary-700 ${
                  isActive ? 'text-primary-700 after:w-full' : 'text-neutral-700 after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
            Join Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 transition hover:bg-neutral-100 xl:hidden"
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="section-container flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto border-t border-neutral-200 pb-5 pt-3 xl:hidden"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3 font-medium transition hover:bg-primary-50 hover:text-primary-700 ${
                  isActive ? 'bg-primary-50 text-primary-700' : 'text-neutral-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-3">
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
}
