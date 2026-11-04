import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import usePageTitle from '@/hooks/usePageTitle';
import { ESSENTIAL_OILS } from '@/data/essentialOils';

export default function EssentialOilsPage() {
  usePageTitle('Essential oils');

  return (
    <>
      <PageHero
        eyebrow="Essential oils"
        title={`${ESSENTIAL_OILS.length} essential oils`}
        description="Steam distilled, cold pressed and solvent extracted oils from the plant parts listed below. Ask us about availability and specifications for any oil."
        image="https://images.pexels.com/photos/6694179/pexels-photo-6694179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Essential oil bottles surrounded by dried herbs"
      />

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Essential oils: name, botanical name, plant part used and extraction method</caption>
                <thead className="bg-primary-50 text-xs font-bold uppercase tracking-wider text-primary-800">
                  <tr>
                    <th scope="col" className="px-5 py-4">No.</th>
                    <th scope="col" className="px-5 py-4">Name of oil</th>
                    <th scope="col" className="px-5 py-4">Botanical name</th>
                    <th scope="col" className="px-5 py-4">Plant part used</th>
                    <th scope="col" className="px-5 py-4">Extraction method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {ESSENTIAL_OILS.map((oil, index) => (
                    <tr key={`${oil.name}-${index}`} className="transition-colors hover:bg-primary-50/50">
                      <td className="px-5 py-3.5 text-neutral-500">{index + 1}</td>
                      <td className="px-5 py-3.5 font-semibold text-neutral-900">{oil.name}</td>
                      <td className="px-5 py-3.5 italic text-neutral-700">{oil.botanicalName}</td>
                      <td className="px-5 py-3.5 text-neutral-700">{oil.plantPart}</td>
                      <td className="px-5 py-3.5 text-neutral-700">{oil.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
