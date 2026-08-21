"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

// Normally you would pass the dictionary from server, but for client component we can either pass it or fetch.
// Since it's a client page in app router, let's just fetch it in a useEffect or use standard fetch.
// Better yet, we can wrap the Cart content in a Server Component page and pass the dict.
// But to keep it simple, I'll export a default async Server Component and place the client cart inside it.

// Wait, the file is currently marked "use client", which means it cannot be async and fetch dict from server.
// I'll write the cart as a Client Component and wrap it in a Server page.

export default function CartClient({ dict, lang }: { dict: any; lang: string }) {
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar dict={dict} lang={lang} />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-ocean-dark mb-8">{dict?.cart?.title || 'Your Shopping Cart'}</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h2 className="text-2xl text-gray-500 mb-6">{dict?.cart?.empty || 'Your cart is empty'}</h2>
            <Link href={`/${lang}`} className="bg-ocean-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-dark transition-colors">
              {dict?.cart?.continueShopping || 'Continue Shopping'}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-24 h-24 relative rounded-md overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                    <p className="text-ocean-dark font-semibold mt-1">৳{item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-ocean-accent">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-ocean-accent">
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="font-bold text-lg w-24 text-center sm:text-right">
                    ৳{item.price * item.quantity}
                  </div>
                  
                  <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm h-fit sticky top-24">
              <h3 className="text-xl font-bold border-b pb-4 mb-4">{dict?.cart?.subtotal || 'Subtotal'}</h3>
              
              <div className="flex justify-between mb-4 text-gray-600">
                <span>{dict?.cart?.subtotal || 'Subtotal'}</span>
                <span className="font-semibold text-gray-900">৳{getTotal()}</span>
              </div>
              
              <div className="flex justify-between mb-6 text-gray-600">
                <span>Delivery</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              
              <div className="flex justify-between border-t pt-4 mb-8 text-lg font-bold">
                <span>{dict?.cart?.total || 'Total'}</span>
                <span className="text-ocean-dark">৳{getTotal()}</span>
              </div>
              
              <Link href={`/${lang}/checkout`} className="w-full block text-center bg-ocean-accent text-white py-3 rounded-lg font-bold hover:bg-ocean-dark transition-colors shadow-md">
                {dict?.cart?.checkout || 'Proceed to Checkout'}
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer dict={dict} />
    </main>
  );
}
