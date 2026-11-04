import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { AREAS, AREA_IMAGES, EXTRACTS, herbPath, type AreaKey } from '@/data/extracts';

type AreaFilter = AreaKey | 'all';

const AREA_KEYS = Object.keys(AREAS) as AreaKey[];

export default function ExtractCatalogue() {
  const [query, setQuery] = useState('');
  const [area, setArea] = useState<AreaFilter>('all');

  const visibleExtracts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return EXTRACTS.filter(
      (extract) =>
        (area === 'all' || extract.area === area) &&
        (!term || `${extract.commonName} ${extract.latinName}`.toLowerCase().includes(term)),
    );
  }, [query, area]);

  const filters: { key: AreaFilter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: EXTRACTS.length },
    ...AREA_KEYS.map((key) => ({
      key,
      label: AREAS[key],
      count: EXTRACTS.filter((extract) => extract.area === key).length,
    })),
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="section-container">
        <Reveal>
          <div className="flex flex-col gap-5">
            <label className="relative block">
              <span className="sr-only">Search extracts</span>
              <Search size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by botanical or common name"
                className="w-full rounded-full border border-neutral-200 bg-white py-3.5 pl-12 pr-5 text-neutral-900 placeholder:text-neutral-400 transition focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
              />
            </label>

            <div role="group" aria-label="Filter by area" className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = filter.key === area;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setArea(filter.key)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                      active
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-primary-400 hover:text-primary-800'
                    }`}
                  >
                    {filter.label}
                    <span className={`ml-1.5 ${active ? 'text-primary-100' : 'text-neutral-500'}`}>{filter.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p aria-live="polite" className="mt-6 text-sm text-neutral-600">
            Showing {visibleExtracts.length} of {EXTRACTS.length} extracts
          </p>

          <ul className="mt-3 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            {visibleExtracts.map((extract) => (
              <li key={extract.latinName} className="transition-colors duration-200 hover:bg-primary-50/60">
                <Link
                  to={herbPath(extract.latinName)}
                  className="group grid gap-4 p-5 sm:grid-cols-[4rem_1fr] md:grid-cols-[4rem_1.4fr_1fr_1.3fr_auto] md:items-center md:gap-6"
                >
                  <img
                    src={AREA_IMAGES[extract.area]}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div>
                    <p className="font-display text-lg font-bold text-neutral-900 group-hover:text-primary-700">
                      {extract.commonName}
                    </p>
                    <p className="text-sm italic text-neutral-600">{extract.latinName}</p>
                  </div>
                  <p className="text-sm text-neutral-700">{AREAS[extract.area]}</p>
                  <p className="font-semibold text-primary-800">{extract.assay}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 md:justify-self-end">
                    View profile
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {visibleExtracts.length === 0 && (
            <div className="rounded-b-2xl border border-t-0 border-neutral-200 bg-white p-8 text-center text-neutral-600">
              No extracts match your search. <Link to="/contact" className="font-bold text-primary-700 underline">Ask us about custom development.</Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
