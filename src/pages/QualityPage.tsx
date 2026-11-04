import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Atom, Beaker, CheckCircle2, FlaskConical, Microscope, Scale, ShieldCheck, Wind, X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import usePageTitle from '@/hooks/usePageTitle';

const TESTS = [
  { icon: Beaker, title: 'HPLC', text: 'Marker compounds such as curcuminoids, piperine and withanolides.' },
  { icon: Atom, title: 'UV spectrophotometry', text: 'Total polyphenols, flavonoids and similar groups.' },
  { icon: Wind, title: 'Gas chromatography', text: 'Volatile actives such as allicin.' },
  { icon: Scale, title: 'Gravimetry and titration', text: 'Saponins, bitters and tannins.' },
];

const CHECKPOINTS = [
  'Incoming raw material is identified and tested before it enters production.',
  'Each batch is released only when it meets the stated specification.',
  'Every result is recorded against the batch so it can be traced back to its source.',
];

type CertificationGroup = 'Licences & Registrations' | 'Management-System Certifications' | 'Product & Market Certifications';

interface Certification {
  name: string;
  group: CertificationGroup;
  description: string;
}

const CERTIFICATIONS: Certification[] = [
  { name: 'FSSAI', group: 'Licences & Registrations', description: 'Food safety registration or licence details.' },
  { name: 'FDA Registration', group: 'Licences & Registrations', description: 'Registration details for applicable market access.' },
  { name: 'ISO 9001:2015', group: 'Management-System Certifications', description: 'Quality management system certification details.' },
  { name: 'GMP', group: 'Management-System Certifications', description: 'Good manufacturing practice documentation.' },
  { name: 'HACCP', group: 'Management-System Certifications', description: 'Hazard analysis and critical control point documentation.' },
  { name: 'Halal', group: 'Product & Market Certifications', description: 'Halal certification details for applicable products.' },
  { name: 'Kosher', group: 'Product & Market Certifications', description: 'Kosher certification details for applicable products.' },
];

const CERTIFICATION_GROUPS: CertificationGroup[] = [
  'Licences & Registrations',
  'Management-System Certifications',
  'Product & Market Certifications',
];

export default function QualityPage() {
  usePageTitle('Quality You Can Trust');
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Quality You Can Trust"
        title="Tested before it leaves the plant"
        description="Every extract is released against a stated assay and a documented method, so the number on the certificate is the number in the drum."
        image="https://images.pexels.com/photos/8851412/pexels-photo-8851412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        imageAlt="Scientist testing plant specimens in a laboratory"
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our laboratory methods"
            title="How we test"
            description="Each extract is released against a stated assay and method."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTS.map((test, index) => (
              <Reveal key={test.title} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-800">
                    <test.icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-neutral-900">{test.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-600">{test.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-50 py-20 lg:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mb-8 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Scientist examining a plant sample in a laboratory"
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-secondary-700 sm:text-5xl">Our checkpoints</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Quality is checked at every stage, not only at the end. We supervise closely, so only the best products reach
              our customers.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="space-y-4">
              {CHECKPOINTS.map((point, index) => (
                <li key={point} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-neutral-700">{point}</p>
                </li>
              ))}
            </ol>
            <Link to="/contact" className="btn-outline mt-8">
              <Microscope size={18} aria-hidden="true" />
              Request a certificate of analysis
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <SectionHeader
            eyebrow="Verification library"
            title="Certifications, Licences & Compliance"
            description="We keep certification information organised by the kind of assurance it provides. Every item below is marked for verification until the current document is supplied."
          />
          <div className="mt-12 space-y-12">
            {CERTIFICATION_GROUPS.map((group) => (
              <div key={group}>
                <h3 className="text-2xl font-bold text-secondary-700">{group}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {CERTIFICATIONS.filter((certification) => certification.group === group).map((certification, index) => (
                    <Reveal key={certification.name} delay={index * 60} className="h-full">
                      <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-sm font-black tracking-tight text-primary-800">
                            {certification.name === 'ISO 9001:2015' ? 'ISO' : certification.name.split(' ')[0].slice(0, 4).toUpperCase()}
                          </div>
                          <span className="rounded-full bg-warning-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-warning-800">
                            Verify first
                          </span>
                        </div>
                        <h4 className="mt-5 text-xl font-bold text-neutral-900">{certification.name}</h4>
                        <p className="mt-2 flex-1 leading-relaxed text-neutral-600">{certification.description}</p>
                        <button
                          type="button"
                          onClick={() => setSelectedCertification(certification)}
                          className="btn-outline mt-5 w-full border-primary-700 px-4 py-2.5 text-sm text-primary-800 hover:bg-primary-700"
                        >
                          View certificate
                        </button>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 flex items-center gap-2 text-sm font-medium text-neutral-600">
            <CheckCircle2 size={18} className="text-primary-700" aria-hidden="true" />
            Certificates and registrations are available for verification on request.
          </p>
        </div>
      </section>

      <section className="bg-secondary-700 py-20 text-white lg:py-24">
        <div className="section-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-200">Need technical proof?</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Talk to our quality team.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-200">Request a certificate of analysis or ask us about the documents available for a specific product and market.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0 bg-primary-500 hover:bg-primary-400">
            Request documents
          </Link>
        </div>
      </section>

      {selectedCertification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/60 p-5" role="presentation" onMouseDown={() => setSelectedCertification(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Certificate preview</p>
                <h2 id="certificate-modal-title" className="mt-2 text-3xl font-bold text-secondary-700">{selectedCertification.name}</h2>
              </div>
              <button type="button" onClick={() => setSelectedCertification(null)} aria-label="Close certificate preview" className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900">
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-7 grid gap-4 rounded-2xl bg-neutral-50 p-5 text-sm sm:grid-cols-2">
              {[
                ['Issuer', 'To be verified / upload certificate'],
                ['Certificate number', 'To be verified / upload certificate'],
                ['Scope', 'To be verified / upload certificate'],
                ['Validity date', 'To be verified / upload certificate'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-bold text-neutral-900">{label}</p>
                  <p className="mt-1 leading-relaxed text-neutral-600">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-600">This preview is intentionally marked pending. No certification or accreditation claim is being made until the current document is uploaded and verified.</p>
            <button type="button" disabled className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-neutral-200 px-6 py-3 font-bold text-neutral-500">
              Download PDF
              <span className="text-xs font-medium">Not uploaded</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
