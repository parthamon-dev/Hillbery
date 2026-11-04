import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import usePageTitle from '@/hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <section className="flex min-h-[70vh] items-center py-32">
      <div className="section-container max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Error 404</p>
        <h1 className="mt-4 text-5xl font-bold text-secondary-700">This page could not be found.</h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          The link may be out of date, or the page may have moved. You can return to the home page or browse our
          extract catalogue.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
          <Link to="/products" className="btn-outline">
            Browse extracts
          </Link>
        </div>
      </div>
    </section>
  );
}
