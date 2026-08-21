import { getDictionary } from '@/lib/dictionary';
import CheckoutClient from './CheckoutClient';

export default async function CheckoutPage({ params }: { params: Promise<{ lang: 'en' | 'bn' }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  
  return <CheckoutClient dict={dict} lang={resolvedParams.lang} />;
}
