import { Microscope, Heart, Compass, ShieldCheck, Smile, Sprout, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import usePageTitle from '@/hooks/usePageTitle';

const FACTS = [
  {
    icon: Heart,
    title: 'Purpose',
    text: 'To bring the best of plants into everyday health, through consistent, traceable ingredients.',
  },
  {
    icon: Compass,
    title: 'Vision',
    text: 'To be the supplier that brands trust first for standardised botanical actives.',
  },
  {
    icon: Sprout,
    title: 'Mission',
    text: 'To offer global-quality extracts and oils, backed by research and by service that puts the customer first.',
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Quality first',
    text: 'Every input and every batch is checked against a stated specification.',
  },
  {
    icon: Microscope,
    title: 'Science led',
    text: 'Our range comes from scientists with long experience in phytochemicals and nutraceuticals.',
  },
  {
    icon: Smile,
    title: 'Customer delight',
    text: 'We work with you on assays, samples and timelines until the ingredient fits your product.',
  },
  {
    icon: Sprout,
    title: 'Respect for growers',
    text: 'Short supply chains and fair dealing with the people who grow and collect our herbs.',
  },
];

export default function AboutPage() {
  usePageTitle('Our Story');

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Who we are"
        description="A research-based company that manufactures botanical plant extracts, essential oils and supercritical CO2 extracts."
        image="https://images.pexels.com/photos/5480162/pexels-photo-5480162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Dried botanicals arranged on a wooden table"
      />

      <section className="py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Hillberry is a research-based company run by professionals with over a decade of experience in R&amp;D.
                We manufacture botanical plant extracts, essential oils and supercritical CO2 extracts.
              </p>
              <p>
                We stand on two pillars: products that meet global quality expectations, and a team that works until the
                customer is delighted.
              </p>
              <p>
                We supervise quality closely, so only the best products reach our customers. Our market knowledge gives us
                access to some of the rarest and most powerful herbs in the world.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-4 self-start">
            {FACTS.map((fact, index) => (
              <Reveal key={fact.title} delay={index * 100}>
                <li className="flex gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-primary-300 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <fact.icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold text-secondary-700">{fact.title}</p>
                    <p className="mt-1 leading-relaxed text-neutral-600">{fact.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Our principles" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-800">
                    <value.icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-neutral-900">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <Reveal>
            <figure className="mx-auto max-w-4xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12">
              <Quote size={40} className="text-accent-600" aria-hidden="true" />
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-primary-700">A note from the Director</p>
              <blockquote className="mt-6 space-y-5 font-display text-xl leading-relaxed text-neutral-800 sm:text-2xl">
                <p>
                  When we started Hillberry, we asked a simple question: why should a good herb lose its value on the way to
                  a finished product? Our answer was research, discipline and honesty about what is in every kilogram we ship.
                </p>
                <p>
                  Today our scientists and production teams work side by side in Nashik, close to the herbs we use. We
                  measure what matters, we share the numbers, and we treat each customer&rsquo;s product as if it were our own.
                </p>
                <p>Thank you for considering Hillberry as your partner in natural health.</p>
              </blockquote>
              <figcaption className="mt-8 border-t border-neutral-200 pt-6 text-neutral-600">
                <span className="font-bold text-neutral-900">Director</span>
                <br />
                Hillberry Life Sciences Pvt. Ltd.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
