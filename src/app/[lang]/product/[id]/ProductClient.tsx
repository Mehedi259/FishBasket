"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { ShoppingBag, Check, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductClient({ dict, lang, id }: { dict: any; lang: string; id: string }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar dict={dict} lang={lang} />
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
        <Footer dict={dict} />
      </main>
    );
  }

  const name = lang === 'bn' ? product.nameBn : product.nameEn;
  const description = lang === 'bn' ? product.descriptionBn : product.descriptionEn;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar dict={dict} lang={lang} />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href={`/${lang}`} className="hover:text-ocean-accent">Home</Link>
          <span>/</span>
          <Link href={`/${lang}#categories`} className="hover:text-ocean-accent capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image 
                src={product.image} 
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block bg-ocean-accent/10 text-ocean-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">{name}</h1>
              <div className="text-3xl font-bold text-ocean-dark mt-4">
                ৳{product.price} <span className="text-lg font-normal text-gray-500">{dict?.products?.perKg || '/kg'}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg my-6 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check size={16} />
                </div>
                <span>{dict?.features?.fresh || '100% Fresh & Formalin Free'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Truck size={16} />
                </div>
                <span>{dict?.features?.fastDelivery || 'Fast Delivery'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <span>{dict?.features?.secure || 'Secure Payment (COD Available)'}</span>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                  added 
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-ocean-accent text-white hover:bg-ocean-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                }`}
              >
                {added ? (
                  <>
                    <Check size={24} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={24} /> {dict?.products?.addToCart || 'Add to Cart'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer dict={dict} />
    </main>
  );
}
