import { Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SourcingPage from '@/pages/SourcingPage';
import ProductsPage from '@/pages/ProductsPage';
import HerbProfilePage from '@/pages/HerbProfilePage';
import ResearchPage from '@/pages/ResearchPage';
import QualityPage from '@/pages/QualityPage';
import ProductionPage from '@/pages/ProductionPage';
import ServicesPage from '@/pages/ServicesPage';
import ContactPage from '@/pages/ContactPage';
import EssentialOilsPage from '@/pages/EssentialOilsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sourcing" element={<SourcingPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<HerbProfilePage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="quality" element={<QualityPage />} />
        <Route path="production" element={<ProductionPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="essential-oils" element={<EssentialOilsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
