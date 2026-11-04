import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, Factory, FlaskConical, Handshake, ShieldCheck, Sprout } from 'lucide-react';
import Reveal from '@/components/Reveal';

const DESTINATIONS = [
  {
    icon: FlaskConical,
    title: 'Research & Innovation',
    text: 'How our scientists develop extracts and tune assay levels to your formulation.',
    to: '/research',
  },
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    text: 'The tests, checks and records behind every batch we release.',
    to: '/quality',
  },
  {
    icon: Factory,
    title: 'Production',
    text: 'Our manufacturing unit in Nashik and the equipment that runs it.',
    to: '/production',
  },
  {
    icon: Sprout,
    title: 'Where We Source',
    text: 'Where our herbs come from, and why we buy close to home.',
    to: '/sourcing',
  },
  {
    icon: Handshake,
    title: 'Our Services',
    text: 'Samples, custom assays and documentation for brands and formulators.',
    to: '/services',
  },
  {
    icon: BookOpenCheck,
    title: 'Our Story',
    text: 'Our story, our values and a note from the Director.',
    to: '/about',
  },
];

export default function ExploreLinks() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Explore Hillberry</p>
          <h2 className="mt-3 text-4xl font-bold text-secondary-700 sm:text-5xl">Behind every extract</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((destination, index) => (
            <Reveal key={destination.to} delay={index * 70} className="h-full">
              <Link
                to={destination.to}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <destination.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-neutral-900">{destination.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-neutral-600">{destination.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary-700">
                  Explore
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
