import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ eyebrow, title, description, breadcrumb, children, image, imageAlt = '' }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-accent-50 to-neutral-50 pb-14 pt-28 lg:pb-20 lg:pt-36">
      <div className="section-container">
        {breadcrumb}
        <div className={image ? 'grid items-center gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-16' : ''}>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold text-secondary-700 sm:text-6xl lg:text-7xl">{title}</h1>
            {description && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">{description}</p>}
            {children}
          </div>
          {image && (
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl lg:mt-0">
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-900/30 via-transparent to-white/10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
