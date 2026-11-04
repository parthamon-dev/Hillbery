import { Link } from 'react-router-dom';
import { Factory, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const EXPLORE_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Where We Source', to: '/sourcing' },
  { label: 'Production', to: '/production' },
  { label: 'Quality You Can Trust', to: '/quality' },
  { label: 'Research & Innovation', to: '/research' },
  { label: 'Our Services', to: '/services' },
  { label: 'Join Us', to: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 py-14 text-neutral-700">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 flex gap-3 leading-relaxed">
              <MapPin size={20} className="mt-0.5 shrink-0 text-primary-700" aria-hidden="true" />
              <span>
                <span className="block font-bold text-neutral-900">Registered office</span>
                RH11, Geeta Villa, Geeta Nagar, Dindori Road, Nashik 422004
              </span>
            </p>
          </div>

          <div className="flex gap-3 leading-relaxed">
            <Factory size={20} className="mt-0.5 shrink-0 text-primary-700" aria-hidden="true" />
            <div>
              <p className="font-bold text-neutral-900">Factory</p>
              <p>Gat No. 270/271, At/Post Chinchkhed, Tal Dindori, Dist Nashik, Maharashtra 422209</p>
            </div>
          </div>

          <div>
            <p className="font-bold text-neutral-900">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary-700 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-neutral-900">Contact</p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-700" aria-hidden="true" />
                <a href="mailto:info@hillberrylife.com" className="hover:text-primary-700 hover:underline">
                  info@hillberrylife.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-700" aria-hidden="true" />
                <a href="tel:+919767713694" className="hover:text-primary-700 hover:underline">
                  +91 97677 13694
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-neutral-200 pt-8 text-sm leading-relaxed text-neutral-600">
          <p>
            These statements have not been evaluated by regulatory authorities. Products are ingredients and are not
            intended to diagnose, treat, cure or prevent any disease.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Hillberry Life Sciences Pvt. Ltd. All rights reserved.</p>
            <Logo wordmark />
          </div>
        </div>
      </div>
    </footer>
  );
}
