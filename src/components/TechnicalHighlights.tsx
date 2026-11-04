import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { herbPath } from '@/data/extracts';

interface Highlight {
  text: string;
  to: string;
  linkLabel: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    text: 'Curcuma longa extract: standardisation and extraction options available on request.',
    to: herbPath('Curcuma longa'),
    linkLabel: 'View turmeric profile',
  },
  {
    text: 'Explore assay, plant-part and application details across our botanical profiles.',
    to: '/products',
    linkLabel: 'Explore profiles',
  },
  {
    text: 'Supercritical CO2 extraction: a solvent-free option for selected botanical actives.',
    to: '/production',
    linkLabel: 'See production',
  },
  {
    text: 'Need a specific assay or documentation package? Speak with our technical team.',
    to: '/contact',
    linkLabel: 'Talk to the team',
  },
];

export default function TechnicalHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HIGHLIGHTS.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + HIGHLIGHTS.length) % HIGHLIGHTS.length);
    setPaused(true);
  };

  const active = HIGHLIGHTS[activeIndex];

  return (
    <aside
      className="fixed inset-x-0 top-0 z-40 border-b border-secondary-800 bg-secondary-900 text-white"
      aria-label="Technical Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="section-container flex min-h-10 items-center gap-3 py-1.5 sm:gap-4">
        <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-200 sm:inline">
          Technical Highlights
        </span>
        <div className="min-w-0 flex-1 overflow-hidden" aria-live="polite">
          <div key={activeIndex} className={`highlight-marquee flex min-w-max items-center gap-2 text-xs sm:text-sm ${paused ? 'is-paused' : ''}`}>
            <Link to={active.to} className="truncate text-neutral-100 underline-offset-4 hover:text-primary-200 hover:underline">
              {active.text}
            </Link>
            <span className="hidden text-primary-300 sm:inline">{active.linkLabel}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button type="button" onClick={() => move(-1)} aria-label="Previous technical highlight" className="rounded-full p-1.5 transition hover:bg-white/10">
            <ArrowLeft size={15} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next technical highlight" className="rounded-full p-1.5 transition hover:bg-white/10">
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? 'Play technical highlights' : 'Pause technical highlights'} className="rounded-full p-1.5 transition hover:bg-white/10">
            {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </aside>
  );
}
