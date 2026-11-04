import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { herbPath } from '@/data/extracts';

const WITHANIA = 'Withania somnifera';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-accent-100 pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">
            Herbal extracts &middot; CO2 extracts &middot; Essential oils
          </p>
          <h1 className="mt-4 text-5xl font-bold text-secondary-700 sm:text-6xl lg:text-[4.25rem]">
            The Know-How Behind Better Botanicals.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Where plant knowledge becomes better ingredients. Hillberry Life Sciences makes herbal extracts, supercritical
            CO2 extracts and essential oils at its own plant in Nashik for nutraceutical, pharmaceutical and personal-care
            formulations.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">
              Browse Our Extracts
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mb-12 lg:mb-0">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl lg:aspect-[5/4]">
            <img
              src="https://images.pexels.com/photos/3067707/pexels-photo-3067707.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Close-up of fresh green herbal leaves"
              className="h-full w-full object-cover"
            />
          </div>
          <aside
            aria-label="Sample specification"
            className="absolute -bottom-10 left-4 right-4 rounded-2xl border-2 border-primary-600 bg-white p-6 shadow-lg sm:-left-8 sm:right-auto sm:w-[21rem]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">Sample specification</p>
            <Link
              to={herbPath(WITHANIA)}
              className="group mt-2 inline-flex items-center gap-2 text-2xl italic text-secondary-700 hover:underline"
            >
              {WITHANIA}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <p className="text-sm text-neutral-600">Ashwagandha extract</p>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 text-sm">
              <dt className="text-neutral-600">Assay</dt>
              <dd className="font-semibold text-neutral-900">2.5%, 5%, 10%, 15% Withanolides</dd>
              <dt className="text-neutral-600">Method</dt>
              <dd className="font-semibold text-neutral-900">Gravimetry and HPLC</dd>
              <dt className="text-neutral-600">Made in</dt>
              <dd className="font-semibold text-neutral-900">Nashik, Maharashtra</dd>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
