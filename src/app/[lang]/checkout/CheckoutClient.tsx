"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CheckoutClient({ dict, lang }: { dict: any; lang: string }) {
  const [mounted, setMounted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { items, getTotal, clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (!mounted) return null;

  if (isSuccess) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar dict={dict} lang={lang} />
        <div className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center border-t-4 border-ocean-accent">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict?.checkout?.orderSuccess || 'Order Successful!'}</h2>
            <p className="text-gray-600 mb-8">{dict?.checkout?.orderSuccessDesc || 'Thank you for shopping with FishBasket. Your fresh fish is on the way.'}</p>
            <Link href={`/${lang}`} className="bg-ocean-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-ocean-dark transition-colors inline-block w-full">
              {dict?.cart?.continueShopping || 'Continue Shopping'}
            </Link>
          </div>
        </div>
        <Footer dict={dict} />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar dict={dict} lang={lang} />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl font-bold text-ocean-dark mb-8">{dict?.checkout?.title || 'Checkout'}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Checkout Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm h-fit">
            <h2 className="text-xl font-bold border-b pb-4 mb-6">{dict?.checkout?.billingDetails || 'Billing Details'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict?.checkout?.fullName || 'Full Name'} *</label>
                <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-ocean-accent focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict?.checkout?.phone || 'Phone Number'} *</label>
                <input required type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-ocean-accent focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict?.checkout?.address || 'Delivery Address'} *</label>
                <textarea required rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-ocean-accent focus:border-transparent outline-none transition-all"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{dict?.checkout?.city || 'City'} *</label>
                <input required type="text" defaultValue="Dhaka" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-ocean-accent focus:border-transparent outline-none transition-all bg-gray-50" />
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-bold mb-3">{dict?.checkout?.paymentMethod || 'Payment Method'}</h3>
                <label className="flex items-center gap-3 p-4 border border-ocean-accent bg-ocean-accent/5 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-ocean-accent focus:ring-ocean-accent" />
                  <span className="font-semibold">{dict?.checkout?.cashOnDelivery || 'Cash on Delivery'}</span>
                </label>
              </div>

              <button type="submit" className="w-full bg-ocean-accent text-white py-3.5 rounded-lg font-bold hover:bg-ocean-dark transition-colors shadow-md mt-6 text-lg">
                {dict?.checkout?.placeOrder || 'Place Order'}
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="bg-white p-8 rounded-xl shadow-sm h-fit sticky top-24 border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-4 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium">{item.quantity}x</span>
                    <span className="font-medium truncate max-w-[150px] sm:max-w-[200px]">{item.name}</span>
                  </div>
                  <span className="font-semibold">৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>{dict?.cart?.subtotal || 'Subtotal'}</span>
                <span className="font-semibold text-gray-900">৳{getTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between border-t pt-4 text-xl font-bold">
                <span>{dict?.cart?.total || 'Total'}</span>
                <span className="text-ocean-dark">৳{getTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer dict={dict} />
    </main>
  );
}
