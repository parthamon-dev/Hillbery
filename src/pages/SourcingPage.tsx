import { Link } from 'react-router-dom';
import { CalendarRange, ClipboardCheck, Truck, Users, Leaf } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import usePageTitle from '@/hooks/usePageTitle';
import { EXTRACTS, herbPath } from '@/data/extracts';

const BENEFITS = [
  { icon: Leaf, title: 'Fresher herb', text: 'Shorter transport means less time for aroma and actives to degrade.' },
  { icon: ClipboardCheck, title: 'Traceable batches', text: 'We know where each lot came from and when it arrived.' },
  { icon: CalendarRange, title: 'Steadier supply', text: 'Close relationships with growers help us plan around seasons.' },
  { icon: Users, title: 'Local livelihoods', text: 'Buying nearby keeps income in farming and collecting communities.' },
];

const STEPS = [
  { title: 'Identify.', text: 'We confirm the botanical and the plant part before we buy.' },
  { title: 'Buy near.', text: 'We purchase from nearby growers and collectors.' },
  { title: 'Test on arrival.', text: 'Incoming material is checked before it enters production.' },
  { title: 'Store and record.', text: 'Each lot is stored and tracked by batch through to the final extract.' },
];

const INDIAN_HERBS = [
  'Ashwagandha', 'Shatavari', 'Brahmi', 'Neem', 'Amla', 'Turmeric', 'Tulsi', 'Guduchi',
  'Arjuna', 'Gudmar', 'Kalmegh', 'Haritaki', 'Baheda', 'Moringa', 'Fenugreek', 'Black pepper', 'Long pepper',
];

const findHerbByName = (name: string) =>
  EXTRACTS.find((extract) => extract.commonName.toLowerCase().includes(name.toLowerCase()));

export default function SourcingPage() {
  usePageTitle('Where We Source');

  return (
    <>
      <PageHero
        eyebrow="Where We Source"
        title="Locally sourced raw materials"
        description="Quality starts in the field. Wherever a herb grows well in India, we buy it from growers and collectors nearby, then carry it a short way to our plant in Nashik."
        image="https://images.pexels.com/photos/20223766/pexels-photo-20223766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Herb workers sorting plants outdoors in India"
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Why local" title="What close sourcing gives you" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <benefit.icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-neutral-900">{benefit.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">From field to extract</h2>
            <ol className="mt-8 space-y-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-neutral-700">
                    <span className="font-bold text-neutral-900">{step.title}</span> {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">Native to India</h2>
            <p className="mt-6 text-lg text-neutral-700">Many herbs in our range are Indian crops and wild plants:</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {INDIAN_HERBS.map((herb) => {
                const match = findHerbByName(herb);
                return (
                  <li key={herb}>
                    {match ? (
                      <Link
                        to={herbPath(match.latinName)}
                        className="inline-block rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-sm font-medium text-primary-800 transition hover:border-primary-500 hover:bg-primary-50"
                      >
                        {herb}
                      </Link>
                    ) : (
                      <span className="inline-block rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-sm font-medium text-primary-800">
                        {herb}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-10 text-2xl font-bold text-secondary-700">Brought in from their home regions</h3>
            <div className="mt-4 flex gap-3 leading-relaxed text-neutral-700">
              <Truck size={22} className="mt-1 shrink-0 text-primary-700" aria-hidden="true" />
              <p>
                Some botanicals grow best elsewhere, such as Maca from the Andes, Tongkat Ali from South-East Asia and Panax
                Ginseng. For these we use the finest source available and apply the same checks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
