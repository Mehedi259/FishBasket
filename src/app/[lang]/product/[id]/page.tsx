import { getDictionary } from '@/lib/dictionary';
import ProductClient from './ProductClient';
import { products } from '@/data/products';

export async function generateStaticParams() {
  const paths: any[] = [];
  
  // For each product and each language, generate a path
  products.forEach(p => {
    paths.push({ lang: 'en', id: p.id });
    paths.push({ lang: 'bn', id: p.id });
  });

  return paths;
}

export default async function ProductPage({ params }: { params: Promise<{ lang: 'en' | 'bn', id: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  
  return <ProductClient dict={dict} lang={resolvedParams.lang} id={resolvedParams.id} />;
}
