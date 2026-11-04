import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import TechnicalHighlights from '@/components/TechnicalHighlights';
import WhatsAppButton from '@/components/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  const hasHighlights = pathname === '/';

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <ScrollToTop />
      {hasHighlights && <TechnicalHighlights />}
      <SiteHeader hasHighlights={hasHighlights} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
