"use client";

import Image from 'next/image';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

export default function ProductGrid({ dict, lang }: { dict?: any; lang: string }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: lang === 'bn' ? product.nameBn : product.nameEn,
      price: product.price,
      image: product.image,
    });
    // Optional: add a toast notification here
  };

  return (
    <section id="products" className="py-20 bg-ocean-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-ocean-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-ocean-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-dark mb-4">{dict?.products?.title || 'Exclusive Selection'}</h2>
            <div className="w-24 h-1 bg-ocean-gradient rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-xl">Discover our latest catch of the day, straight from the waters to you. Highest quality guaranteed.</p>
          </div>
          <Link href={`/${lang}/products`} className="text-ocean-accent font-semibold hover:text-ocean-dark transition-colors flex items-center gap-1 mt-4 md:mt-0 group">
            View All <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.map((product) => {
            const name = lang === 'bn' ? product.nameBn : product.nameEn;
            const description = lang === 'bn' ? product.descriptionBn : product.descriptionEn;
            
            return (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,180,216,0.1)] border border-gray-100 transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full relative">
                
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-ocean-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                      {product.badge}
                    </span>
                  </div>
                )}

                <div className="relative h-64 w-full overflow-hidden bg-gray-50 block">
                  <Link href={`/${lang}/product/${product.id}`}>
                    <Image 
                      src={product.image} 
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </Link>
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-ocean-dark/0 group-hover:bg-ocean-dark/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/${lang}/product/${product.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-ocean-accent transition-colors">{name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">{description}</p>
                  
                  <div className="flex items-end justify-between mb-5">
                    <div className="text-2xl font-bold text-ocean-dark">
                      ৳{product.price} <span className="text-sm font-normal text-gray-500">{dict?.products?.perKg || '/kg'}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-ocean-gradient text-ocean-dark hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-gray-200 hover:border-transparent group/btn shadow-sm hover:shadow-md"
                  >
                    <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" />
                    {dict?.products?.addToCart || 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
