import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import NotFoundPage from '@/pages/NotFoundPage';
import usePageTitle from '@/hooks/usePageTitle';
import { AREAS, AREA_IMAGES, findExtractBySlug } from '@/data/extracts';
import { HERB_PROFILES } from '@/data/herbProfiles';

export default function HerbProfilePage() {
  const { slug = '' } = useParams();
  const extract = findExtractBySlug(slug);
  const profile = extract ? HERB_PROFILES[extract.latinName] : undefined;

  usePageTitle(extract?.commonName);

  if (!extract) {
    return <NotFoundPage />;
  }

  const enquireTo = `/contact?product=${encodeURIComponent(`${extract.commonName} (${extract.latinName}), ${extract.assay}`)}`;

  return (
    <>
      <PageHero
        eyebrow="Herb profile"
        title={extract.commonName}
        description={extract.latinName}
        breadcrumb={
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
            <Link to="/products" className="hover:text-primary-700 hover:underline">
              Products
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-neutral-900">{extract.commonName}</span>
          </nav>
        }
      />

      <section className="py-16 lg:py-20">
        <div className="section-container grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <article>
            <div className="mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-md">
              <img
                src={AREA_IMAGES[extract.area]}
                alt={`${extract.commonName} extract`}
                className="h-full w-full object-cover"
              />
            </div>
            {profile ? (
              <>
                <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl">About this herb</h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral-700">{profile.summary}</p>
              </>
            ) : (
              <p className="text-lg leading-relaxed text-neutral-700">
                A curated profile for this herb is being prepared. Ask our team for the full specification in the meantime.
              </p>
            )}
          </article>

          <aside className="h-fit rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-wider text-neutral-600">Specification</p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm text-neutral-600">Standardised assay</dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary-800">{extract.assay}</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-600">Typical use</dt>
                <dd className="mt-1 font-semibold text-neutral-900">{AREAS[extract.area]}</dd>
              </div>
              {profile && (
                <>
                  <div>
                    <dt className="text-sm text-neutral-600">Family</dt>
                    <dd className="mt-1 font-semibold text-neutral-900">{profile.family}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-600">Plant part used</dt>
                    <dd className="mt-1 font-semibold text-neutral-900">{profile.plantPart}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-600">Native region</dt>
                    <dd className="mt-1 font-semibold text-neutral-900">{profile.nativeRegion}</dd>
                  </div>
                </>
              )}
            </dl>
            <Link to={enquireTo} className="btn-primary mt-8 w-full">
              Enquire about this extract
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:underline">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to all products
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
