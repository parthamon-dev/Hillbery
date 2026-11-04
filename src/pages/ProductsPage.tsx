import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ExtractCatalogue from '@/components/ExtractCatalogue';
import PageHero from '@/components/PageHero';
import usePageTitle from '@/hooks/usePageTitle';
import { EXTRACTS } from '@/data/extracts';
import { ESSENTIAL_OILS } from '@/data/essentialOils';

export default function ProductsPage() {
  usePageTitle('Products');

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={`${EXTRACTS.length} standardised herbal extracts`}
        description="Search by name, or filter by the area each extract is typically used for. Open any herb for its curated profile. CO2 extracts and essential oils are available on request."
        image="https://images.pexels.com/photos/8329335/pexels-photo-8329335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Dried herbs and spices prepared for botanical extracts"
      />
      <ExtractCatalogue />

      <section className="pb-20 lg:pb-28">
        <div className="section-container">
          <Link
            to="/essential-oils"
            className="group flex flex-col gap-5 rounded-3xl bg-primary-800 p-8 text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-100">Also in our range</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{ESSENTIAL_OILS.length} essential oils</h2>
              <p className="mt-2 max-w-xl text-primary-50">Botanical names, plant parts and extraction methods for every oil we supply.</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-primary-800">
              View the oil list
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
