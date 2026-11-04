import { Link } from 'react-router-dom';
import { FlaskConical, Droplets, Sprout, Map, Leaf, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { EXTRACTS } from '@/data/extracts';

const STATS = [
  { value: `${EXTRACTS.length}`, label: 'standardised extracts' },
  { value: '3', label: 'product lines' },
  { value: '10+ years', label: 'of R&D experience' },
  { value: '1', label: 'manufacturing unit, Nashik' },
];

const PRODUCT_LINES = [
  {
    icon: Sprout,
    title: 'Herbal extracts',
    text: 'Standardised powders from Ayurvedic and global botanicals, with assay and test method stated.',
    borderClass: 'border-t-primary-600',
    iconClass: 'bg-primary-50 text-primary-700',
    cta: 'Browse the catalogue',
    to: '/products',
  },
  {
    icon: FlaskConical,
    title: 'CO2 extracts',
    text: 'Supercritical CO2 plant extracts for clean, solvent-free profiles.',
    borderClass: 'border-t-secondary-700',
    iconClass: 'bg-secondary-50 text-secondary-700',
    cta: 'Ask about availability',
    to: '/contact?product=CO2%20extracts',
  },
  {
    icon: Droplets,
    title: 'Essential oils',
    text: 'Plant-derived oils for personal care, flavour and wellness products.',
    borderClass: 'border-t-accent-500',
    iconClass: 'bg-accent-100 text-accent-800',
    cta: 'Ask about availability',
    to: '/contact?product=Essential%20oils',
  },
];

export default function Overview() {
  return (
    <>
      <section className="pb-8">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-secondary-700 sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-snug text-neutral-600">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader
            eyebrow="What we make"
            title="Three product lines"
            description="One manufacturer for your botanical actives, whichever extraction method your formulation needs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRODUCT_LINES.map((line, index) => (
              <Reveal key={line.title} delay={index * 100} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-2xl border border-t-4 border-neutral-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${line.borderClass}`}
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${line.iconClass}`}>
                    <line.icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-neutral-900">{line.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-neutral-600">{line.text}</p>
                  <Link
                    to={line.to}
                    className="group mt-6 inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800"
                  >
                    {line.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">Our purpose</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              To bring the best of plants into everyday health, through ingredients that are consistent, traceable and
              made with care.
            </p>
            <Link to="/about" className="btn-outline mt-8">
              Read our story
              <Leaf size={18} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">Grown close to home</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              We prefer Indian herbs from nearby growers and collectors, and bring in rare botanicals from their native
              regions only when we must.
            </p>
            <Link to="/sourcing" className="btn-outline mt-8">
              See how we source
              <Map size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
