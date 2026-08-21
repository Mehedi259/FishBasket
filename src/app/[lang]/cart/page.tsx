import { getDictionary } from '@/lib/dictionary';
import CartClient from './CartClient';

export default async function CartPage({ params }: { params: Promise<{ lang: 'en' | 'bn' }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  
  return <CartClient dict={dict} lang={resolvedParams.lang} />;
}
