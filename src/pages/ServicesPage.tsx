import { Link } from 'react-router-dom';
import { ChevronDown, Pill, Stethoscope, Sparkles, Coffee, Dumbbell, FileText, FlaskRound, MessageSquareQuote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import usePageTitle from '@/hooks/usePageTitle';
import { EXTRACTS } from '@/data/extracts';

const INDUSTRIES = [
  { icon: Pill, title: 'Nutraceuticals', text: 'Capsule, tablet and powder actives.' },
  { icon: Stethoscope, title: 'Pharma and Ayurveda', text: 'Standardised herbal actives for formulations.' },
  { icon: Sparkles, title: 'Personal care', text: 'Hair, skin and cosmetic botanicals.' },
  { icon: Coffee, title: 'Food and beverage', text: 'Flavour, colour and functional ingredients.' },
  { icon: Dumbbell, title: 'Sports nutrition', text: 'Energy, recovery and weight management.' },
];

const WAYS_WE_WORK = [
  { icon: FlaskRound, title: 'Samples', text: 'Ask for a sample to test in your formulation.' },
  { icon: MessageSquareQuote, title: 'Custom assays', text: 'Tell us the marker and percentage you need.' },
  { icon: FileText, title: 'Documentation', text: 'Request a certificate of analysis with each enquiry.' },
];

const FAQS = [
  {
    question: 'Which extracts can you supply?',
    answer: `The catalogue lists ${EXTRACTS.length} standardised herbal extracts. We also work in CO2 extracts and essential oils.`,
  },
  {
    question: 'Can you change the assay level?',
    answer: 'Many extracts already come in a range. Tell us what you need and our R&D team will advise.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Send the product names, assay levels and quantities through our contact page.',
  },
];

export default function ServicesPage() {
  usePageTitle('Our Services');

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A partner, not just a vendor"
        description="We work with startups, formulators and established brands to find the right extract for the product, from the first sample to repeat orders."
        image="https://images.pexels.com/photos/8903707/pexels-photo-8903707.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Natural skincare product surrounded by botanical ingredients"
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Who we work with" title="Industries we serve" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 60} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <industry.icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-neutral-900">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{industry.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">How we help</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Our R&amp;D team can adjust assay levels and advise on the best form for your formulation.
            </p>
            <ul className="mt-8 space-y-4">
              {WAYS_WE_WORK.map((item) => (
                <li key={item.title} className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary-50 text-secondary-700">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-neutral-900">{item.title}</p>
                    <p className="text-neutral-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl">Common questions</h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group rounded-2xl bg-white p-5 shadow-sm open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-neutral-900">
                    {faq.question}
                    <ChevronDown size={20} aria-hidden="true" className="shrink-0 text-primary-700 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-neutral-600">{faq.answer}</p>
                </details>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8">
              Go to the enquiry form
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
