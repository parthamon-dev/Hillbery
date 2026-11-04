import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import { supabase } from '@/lib/supabase';

const REQUEST_TYPES = [
  'Request a quote',
  'Request a sample',
  'Ask a technical question',
  'Discuss custom extraction',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_CLASS =
  'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 transition focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface EnquiryFormProps {
  initialProducts: string;
}

export default function EnquiryForm({ initialProducts }: EnquiryFormProps) {
  const [requestType, setRequestType] = useState(REQUEST_TYPES[0]);
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setRequestType(REQUEST_TYPES[0]);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setProducts('');
    setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      details: products.trim(),
    };

    if (!trimmed.name || !EMAIL_PATTERN.test(trimmed.email) || !trimmed.details) {
      setErrorMessage('Please add your name, a valid email address and the products you need.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const { error } = await supabase.from('enquiries').insert({
      request_type: requestType,
      ...trimmed,
    });

    if (error) {
      setErrorMessage('We could not send your enquiry. Please try again, or email info@hillberrylife.com.');
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  return (
    <section className="bg-primary-800 py-20 pt-36 text-white lg:py-28 lg:pt-40">
      <div className="section-container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="Get in touch"
              title="Request a quote"
              description="Tell us which extracts, assay levels and quantities you need. We reply by email."
            />
            <ul className="mt-10 space-y-5 text-primary-50">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <a href="mailto:info@hillberrylife.com" className="font-medium underline-offset-4 hover:text-white hover:underline">
                  info@hillberrylife.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <a href="tel:+919767713694" className="font-medium underline-offset-4 hover:text-white hover:underline">
                  +91 97677 13694
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-700">
                  <MessageCircle size={20} aria-hidden="true" />
                </span>
                <a
                  href="https://wa.me/919767713694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline-offset-4 hover:text-white hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white p-6 text-neutral-900 shadow-xl sm:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-start gap-4 py-8" role="status">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success-50 text-success-700">
                    <CheckCircle2 size={30} aria-hidden="true" />
                  </span>
                  <h3 className="text-3xl font-bold text-secondary-700">Thank you, your enquiry is in</h3>
                  <p className="text-neutral-600">Our team will reply to you by email.</p>
                  <button type="button" onClick={resetForm} className="btn-outline mt-2">
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                      Name
                      <input
                        required
                        autoComplete="name"
                        maxLength={200}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                      Company
                      <input
                        autoComplete="organization"
                        maxLength={200}
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                      Email
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        maxLength={254}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                      Phone
                      <input
                        type="tel"
                        autoComplete="tel"
                        maxLength={40}
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className={FIELD_CLASS}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                    I would like to
                    <select
                      value={requestType}
                      onChange={(event) => setRequestType(event.target.value)}
                      className={FIELD_CLASS}
                    >
                      {REQUEST_TYPES.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-700">
                    Products and quantities
                    <textarea
                      required
                      rows={5}
                      maxLength={5000}
                      value={products}
                      onChange={(event) => setProducts(event.target.value)}
                      placeholder="For example: Ashwagandha 5% withanolides - quantity: 25 kg"
                      className={FIELD_CLASS}
                    />
                  </label>

                  {status === 'error' && (
                    <p role="alert" className="rounded-xl bg-error-50 px-4 py-3 text-sm font-medium text-error-700">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary-700 px-7 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-secondary-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
                    <Send size={18} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
