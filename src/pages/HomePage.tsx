import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import ExploreLinks from '@/components/ExploreLinks';
import FeaturedHerbs from '@/components/FeaturedHerbs';
import usePageTitle from '@/hooks/usePageTitle';

export default function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Overview />
      <ExploreLinks />
      <FeaturedHerbs />
    </>
  );
}
