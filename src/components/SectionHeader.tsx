interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}

export default function SectionHeader({ eyebrow, title, description, tone = 'light' }: SectionHeaderProps) {
  const isDark = tone === 'dark';

  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${isDark ? 'text-accent-300' : 'text-primary-700'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-secondary-700'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${isDark ? 'text-primary-50' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
