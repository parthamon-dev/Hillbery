import { useSearchParams } from 'react-router-dom';
import EnquiryForm from '@/components/EnquiryForm';
import usePageTitle from '@/hooks/usePageTitle';

export default function ContactPage() {
  usePageTitle('Join Us');
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product') ?? '';

  return <EnquiryForm key={product} initialProducts={product} />;
}
