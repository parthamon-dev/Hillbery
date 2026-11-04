import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Beaker,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Gauge,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Truck,
  Wind,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import usePageTitle from '@/hooks/usePageTitle';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Receipt and inspection',
    text: 'Raw material is received, identified and checked before it enters the plant.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Cleaning and size reduction',
    text: 'The botanical material is cleaned and prepared for an even, repeatable extraction.',
    icon: Sprout,
  },
  {
    number: '03',
    title: 'Extraction',
    text: 'The appropriate botanical or supercritical CO2 process is selected for the material and target actives.',
    icon: FlaskConical,
  },
  {
    number: '04',
    title: 'Filtration',
    text: 'The extract is clarified to remove unwanted plant solids before concentration.',
    icon: Wind,
  },
  {
    number: '05',
    title: 'Evaporation and concentration',
    text: 'The extract is concentrated under controlled conditions to reach the required target assay.',
    icon: Gauge,
  },
  {
    number: '06',
    title: 'Drying',
    text: 'The concentrated extract is dried to a stable form suitable for handling and storage.',
    icon: Beaker,
  },
  {
    number: '07',
    title: 'Milling, sieving and blending',
    text: 'The dried material is finished to a consistent particle size and blended where required.',
    icon: Factory,
  },
  {
    number: '08',
    title: 'Testing and release',
    text: 'The finished batch is tested against its specification before it is approved for dispatch.',
    icon: ShieldCheck,
  },
  {
    number: '09',
    title: 'Packing and dispatch',
    text: 'The released material is packed, labelled and prepared for delivery to your team.',
    icon: Truck,
  },
];

const PLANT_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/2760286/pexels-photo-2760286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Extraction vessels',
    text: 'Stainless steel equipment for controlled botanical processing.',
  },
  {
    src: 'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Evaporation section',
    text: 'Industrial systems for concentration before final drying.',
  },
  {
    src: 'https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Production floor',
    text: 'A production environment built around repeatable, documented work.',
  },
];

const CONSISTENCY_POINTS = [
  'Every lot is recorded by batch so the finished material can be traced back to its source.',
  'In-process checks are built into the route, not left only to the final test.',
  'The release plan can include HPLC, UV, GC, gravimetry and titration, depending on the product specification.',
  'Quality documentation can be supplied with the batch for your technical and purchasing teams.',
];

const PACKING_POINTS = [
  { icon: PackageCheck, title: 'Packed for the journey', text: 'We prepare finished material for safe handling, storage and dispatch.' },
  { icon: ClipboardCheck, title: 'Clear identification', text: 'Batch details and product information stay with the material through dispatch.' },
  { icon: Truck, title: 'Flexible order sizes', text: 'Talk to us about trial lots, pilot batches or regular bulk requirements.' },
];

export default function ProductionPage() {
  usePageTitle('Production');

  return (
    <>
      <PageHero
        eyebrow="Production"
        title="Manufacturing in Nashik"
        description="Our manufacturing unit at Chinchkhed, Dindori, is run on established systems and strict procedures for all inputs and final products."
        image="https://images.pexels.com/photos/2760286/pexels-photo-2760286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Stainless steel tanks in a modern production facility"
      />

      <section className="border-y border-neutral-200 bg-white py-8 lg:py-10">
        <div className="section-container grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ['09', 'documented process stages'],
            ['05', 'testing method families'],
            ['02', 'extraction approaches'],
            ['01', 'Nashik manufacturing unit'],
          ].map(([value, label]) => (
            <div key={label} className="border-l-2 border-primary-500 pl-4">
              <p className="font-display text-3xl font-bold text-secondary-700">{value}</p>
              <p className="mt-1 text-sm leading-snug text-neutral-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader
            eyebrow="The batch journey"
            title="From raw material to released product"
            description="Every batch follows the same documented route, from raw material receipt to final release. We check incoming herbs, extract under controlled conditions, concentrate to the target assay, dry to a stable powder, and test before dispatch."
          />
          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-primary-200 lg:block" aria-hidden="true" />
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 45} className="relative h-full">
                <article className="group flex h-full gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary-700 text-white shadow-sm">
                    <step.icon size={19} aria-hidden="true" />
                    <span className="mt-0.5 text-[10px] font-bold tracking-wider text-primary-100">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary-700 py-20 text-white lg:py-28">
        <div className="section-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-200">Inside the plant</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Equipment that makes the route repeatable</h2>
            </div>
            <p className="max-w-md text-neutral-200">The brochure shows the plant in action. These gallery panels are placeholders for the final facility photographs.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANT_IMAGES.map((image, index) => (
              <Reveal key={image.title} delay={index * 90}>
                <figure className="overflow-hidden rounded-2xl bg-white/10">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="text-xl font-bold">{image.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-200">{image.text}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Consistency by design</p>
            <h2 className="mt-3 text-4xl font-bold text-secondary-700 sm:text-5xl">The proof is in the batch record.</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">A reliable ingredient is more than a good first sample. Our process keeps the source, the route and the release decision connected.</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {CONSISTENCY_POINTS.map((point, index) => (
                <li key={point} className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-800">{index + 1}</span>
                  <p className="leading-relaxed text-neutral-700">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Choosing the process</p>
            <h2 className="mt-3 text-4xl font-bold text-secondary-700 sm:text-5xl">Conventional or CO2?</h2>
            <p className="mt-6 leading-relaxed text-neutral-700">The right route depends on the botanical, the target actives and the finished product. We can help you compare the options before you commit to a batch.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Comparison of conventional and supercritical CO2 extraction</caption>
                <thead className="bg-secondary-700 text-white">
                  <tr><th className="px-5 py-4">Conventional extraction</th><th className="px-5 py-4">Supercritical CO2</th></tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr><td className="px-5 py-4">Broadly established botanical process</td><td className="px-5 py-4">Useful for heat-sensitive actives</td></tr>
                  <tr><td className="px-5 py-4">Suitable for many water or solvent-soluble compounds</td><td className="px-5 py-4">Low-residue process with tunable selectivity</td></tr>
                  <tr><td className="px-5 py-4">Often the practical choice for high-volume extracts</td><td className="px-5 py-4">Can concentrate oils and lipophilic compounds</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SectionHeader eyebrow="After release" title="Packed for your next step" description="Once a batch is released, we prepare it for your warehouse, formulation line or distribution partner. Talk to us early if you have special packaging or documentation needs." />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {PACKING_POINTS.map((point) => (
                <div key={point.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <point.icon size={22} className="text-primary-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-neutral-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{point.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl bg-neutral-900 p-8 text-white sm:p-10">
              <MapPin size={28} className="text-primary-300" aria-hidden="true" />
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-primary-300">Visit the plant</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Book a plant visit or audit</h2>
              <p className="mt-5 leading-relaxed text-neutral-300">Bring your technical or quality team to Nashik and walk through the route with us. We will help you understand where your material is received, processed, tested and released.</p>
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">Gat No. 270/271, At/Post Chinchkhed, Tal Dindori, Dist Nashik, Maharashtra 422209</p>
              <Link to="/contact" className="btn-primary mt-8 bg-primary-500 hover:bg-primary-400">
                Request a visit
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
