import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Truck, ShieldCheck, Leaf, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-xl border border-transparent hover:border-ocean-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ocean-accent/10 flex items-center justify-center text-ocean-accent mb-4">
                  <Truck size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-gray-500 text-sm">Safe and fresh delivery right to your doorstep.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-xl border border-transparent hover:border-ocean-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ocean-accent/10 flex items-center justify-center text-ocean-accent mb-4">
                  <Leaf size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">100% Fresh</h4>
                <p className="text-gray-500 text-sm">Chemical-free and sourced directly from fishermen.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-xl border border-transparent hover:border-ocean-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ocean-accent/10 flex items-center justify-center text-ocean-accent mb-4">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h4>
                <p className="text-gray-500 text-sm">Cash on delivery and secure online payment available.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-xl border border-transparent hover:border-ocean-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-ocean-accent/10 flex items-center justify-center text-ocean-accent mb-4">
                  <Clock size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-500 text-sm">We are always here to help you.</p>
              </div>
            </div>
          </div>
        </section>

        <CategoryGrid />
        <ProductGrid />
      </div>

      <Footer />
    </main>
  );
}
