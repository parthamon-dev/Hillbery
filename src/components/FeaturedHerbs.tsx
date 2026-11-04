import { useRef, useState, type PointerEvent, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { AREA_IMAGES, EXTRACTS, herbPath } from '@/data/extracts';

const FEATURED_LATIN_NAMES = [
  'Withania somnifera',
  'Curcuma longa',
  'Bacopa monnieri',
  'Asparagus racemosus',
  'Moringa oleifera',
  'Piper nigrum',
];

export default function FeaturedHerbs() {
  const featured = EXTRACTS.filter((extract) => FEATURED_LATIN_NAMES.includes(extract.latinName));
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const moveCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * carouselRef.current.clientWidth * 0.78, behavior: 'smooth' });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragStart(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
    const distance = event.clientX - dragStart;
    if (Math.abs(distance) > 50) moveCarousel(distance > 0 ? -1 : 1);
    setDragStart(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      moveCarousel(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Featured Extracts"
            title="A closer look at the catalogue"
            description="Explore selected botanical profiles with their plant part, application area and current standardisation information."
          />
          <div className="flex shrink-0 items-center gap-3">
            <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous featured extract" className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-700 text-secondary-700 transition hover:bg-secondary-700 hover:text-white">
              <ArrowLeft size={19} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveCarousel(1)} aria-label="Next featured extract" className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary-700 text-secondary-700 transition hover:bg-secondary-700 hover:text-white">
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label="Featured extracts carousel"
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => setDragStart(null)}
          className="mt-12 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-5 outline-none scrollbar-none active:cursor-grabbing focus-visible:ring-4 focus-visible:ring-primary-100"
        >
          {featured.map((extract, index) => (
            <Reveal key={extract.slug} delay={index * 60} className="h-auto min-w-[calc(100%-2rem)] snap-start sm:min-w-[calc(50%-0.625rem)] lg:min-w-[calc(33.333%-0.875rem)]">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-white hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={AREA_IMAGES[extract.area]} alt={`${extract.commonName} botanical ingredients`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-2xl font-bold text-neutral-900">{extract.commonName}</p>
                  <p className="mt-1 text-sm italic text-neutral-600">{extract.latinName}</p>
                  <p className="mt-4 text-sm font-semibold text-primary-800">{extract.assay}</p>
                  <Link to={herbPath(extract.latinName)} className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-primary-700 hover:text-primary-800">
                    View Product
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/products" className="btn-primary">
            Explore All Products
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
