import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Truck, ShieldCheck, Leaf, Clock } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'bn' }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} lang={resolvedParams.lang} />
      
      <div className="flex-1">
        <Hero dict={dict} lang={resolvedParams.lang} />
        
        {/* Features Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-ocean-bg rounded-full flex items-center justify-center text-ocean-accent mb-4 group-hover:scale-110 transition-transform">
                  <Truck size={28} />
                </div>
                <h3 className="font-semibold text-ocean-dark">{dict?.features?.fastDelivery || 'Fast Delivery'}</h3>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-ocean-bg rounded-full flex items-center justify-center text-ocean-accent mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-semibold text-ocean-dark">{dict?.features?.secure || 'Secure Payment'}</h3>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-ocean-bg rounded-full flex items-center justify-center text-ocean-accent mb-4 group-hover:scale-110 transition-transform">
                  <Leaf size={28} />
                </div>
                <h3 className="font-semibold text-ocean-dark">{dict?.features?.fresh || '100% Fresh'}</h3>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-ocean-bg rounded-full flex items-center justify-center text-ocean-accent mb-4 group-hover:scale-110 transition-transform">
                  <Clock size={28} />
                </div>
                <h3 className="font-semibold text-ocean-dark">{dict?.features?.support || '24/7 Support'}</h3>
              </div>
            </div>
          </div>
        </section>

        <CategoryGrid dict={dict} />
        <WhyChooseUs dict={dict} />
        <ProductGrid dict={dict} lang={resolvedParams.lang} />
        <Testimonials dict={dict} lang={resolvedParams.lang} />
      </div>

      <Footer dict={dict} lang={resolvedParams.lang} />
    </main>
  );
}
