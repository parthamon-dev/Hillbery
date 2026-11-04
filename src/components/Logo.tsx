interface LogoProps {
  compact?: boolean;
  wordmark?: boolean;
}

export default function Logo({ compact = false, wordmark = false }: LogoProps) {
  if (compact) {
    return (
      <img
        src="/assets/logos/hillberry-tree-only-hq.png"
        alt="Hillberry Life Sciences"
        className="h-12 w-12 object-contain"
      />
    );
  }

  return (
    <img
      src={wordmark ? '/assets/logos/hillberry-wordmark-only-hq.png' : '/assets/logos/hillberry-life-sciences-logo-hq.png'}
      alt="Hillberry Life Sciences"
      className={wordmark ? 'h-9 w-auto max-w-[15rem] object-contain' : 'h-14 w-auto max-w-[18rem] object-contain sm:h-16'}
    />
  );
}
