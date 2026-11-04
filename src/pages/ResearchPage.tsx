import { Link } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import usePageTitle from '@/hooks/usePageTitle';

const FOCUS_AREAS = [
  {
    title: 'Formulation support',
    text: 'Our scientists help you choose the right extract, form and assay for your product.',
  },
  {
    title: 'Assay development',
    text: 'We tune standardisation levels to what your formulation and label need.',
  },
  {
    title: 'New extracts',
    text: 'We develop new extracts from botanicals that are not yet in our catalogue.',
  },
];

export default function ResearchPage() {
  usePageTitle('Research & Innovation');

  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Science behind every extract"
        description="Our R&D centre is a modern laboratory where scientists and product developers with long experience in phytochemicals and nutraceuticals shape the range."
        image="https://images.pexels.com/photos/8279470/pexels-photo-8279470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Scientist researching botanical samples in a laboratory"
      />

      <section className="py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mb-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/8512663/pexels-photo-8512663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Scientist observing a botanical experiment"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
              <FlaskConical size={24} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-4xl font-bold text-secondary-700 sm:text-5xl">What our R&amp;D team does</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              We develop new extracts and tune assay levels to what your formulation needs. Our team has over a decade of
              experience in R&amp;D, and we share the data behind every recommendation.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Discuss a project with our team
            </Link>
          </Reveal>

          <ul className="grid gap-4 self-start">
            {FOCUS_AREAS.map((area, index) => (
              <Reveal key={area.title} delay={index * 100}>
                <li className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-primary-300 hover:shadow-md">
                  <h3 className="text-xl font-bold text-neutral-900">{area.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">{area.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary-700 py-20 text-white lg:py-28">
        <div className="section-container grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-200">From observation to specification</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Research that ends in a usable ingredient.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-neutral-100">The best R&amp;D is practical. It turns a promising plant into an extract with a clear marker, a repeatable process and documentation your team can use.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
