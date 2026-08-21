"use client";

import { Search, ShoppingBag, User, Phone, Mail, Globe, Menu } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-white shadow-sm'}`}>
      {/* Top Bar */}
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 bg-ocean-dark text-white text-xs md:text-sm py-2 px-4'}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 h-full">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 hover:text-ocean-accent transition-colors cursor-pointer"><Phone size={14} className="text-ocean-accent" /> +880 1600-000000</span>
            <span className="flex items-center gap-1.5 hidden sm:flex hover:text-ocean-accent transition-colors cursor-pointer"><Mail size={14} className="text-ocean-accent" /> order@fishbasket.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 font-medium">
            <span className="hidden md:inline-block tracking-wide">100% Chemical Free | Free Delivery over ৳2000</span>
            <div className="flex items-center gap-2 ml-4 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm border border-white/5">
              <Globe size={14} className="text-ocean-accent" />
              <Link href="/en" className={`hover:text-white transition-colors ${lang === 'en' ? 'text-white font-bold' : ''}`}>EN</Link>
              <span className="text-white/30">|</span>
              <Link href="/bn" className={`hover:text-white transition-colors ${lang === 'bn' ? 'text-white font-bold' : ''}`}>বাং</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-ocean-dark group">
            <div className="p-2 bg-ocean-accent/10 rounded-xl group-hover:bg-ocean-accent/20 transition-colors">
              <svg className="w-7 h-7 text-ocean-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M20.89 12c0 2.22-1.42 4.41-3.4 5.92-2.18 1.66-5.06 2.8-8.23 2.8C5.2 20.72 2 17.52 2 13.52c0-1.89.9-3.7 2.37-5.08A11.1 11.1 0 0 1 11.83 5.4c2.87-.22 5.67.65 7.6 2.36 1.77 1.57 2.81 3.55 2.81 5.59a.75.75 0 0 1-1.35.45c-.32-.47-.7-.91-1.12-1.31-.38.56-.8 1.1-1.28 1.58.55.45 1.07.96 1.54 1.52-.39.51-.83.99-1.3 1.43a7.87 7.87 0 0 1-1.74-1.26c-.46.54-.97 1.03-1.51 1.49A10.74 10.74 0 0 1 8.5 18c-3.13 0-5.5-2.02-5.5-4.5 0-1.38.71-2.73 2-3.83 1.42-1.21 3.42-2 5.56-2.16 2.3-.17 4.54.54 6.08 1.93 1.08.97 1.75 2.2 1.9 3.43a2.53 2.53 0 0 0-1.63-.59 2.5 2.5 0 1 0 1.98 4.4v-4.66z"/></svg>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ocean-dark to-ocean-light">FishBasket</span>
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 bg-gray-50/80 px-6 py-2.5 rounded-full border border-gray-100 shadow-sm backdrop-blur-md">
            <Link href={`/${lang}`} className="text-ocean-dark font-semibold text-sm hover:text-ocean-accent transition-colors">{dict?.navbar?.home || 'Home'}</Link>
            <Link href={`/${lang}#categories`} className="text-gray-600 font-medium text-sm hover:text-ocean-accent transition-colors">{dict?.navbar?.products || 'Products'}</Link>
            <Link href={`/${lang}#about`} className="text-gray-600 font-medium text-sm hover:text-ocean-accent transition-colors">{dict?.navbar?.about || 'About'}</Link>
            <Link href={`/${lang}#contact`} className="text-gray-600 font-medium text-sm hover:text-ocean-accent transition-colors">{dict?.navbar?.contact || 'Contact'}</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-ocean-accent hover:text-white text-gray-600 transition-all shadow-sm border border-gray-100">
              <Search size={18} />
            </button>
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-ocean-accent hover:text-white text-gray-600 transition-all shadow-sm border border-gray-100">
              <User size={18} />
            </button>
            <Link href={`/${lang}/cart`} className="flex items-center gap-2 bg-ocean-dark hover:bg-ocean-mid text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all shadow-md hover:shadow-lg group">
              <div className="relative">
                <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                {mounted && cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-ocean-dark">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold hidden sm:block">{dict?.navbar?.cart || 'Cart'}</span>
              {mounted && cartItemCount > 0 && (
                <span className="text-sm font-bold bg-white/20 px-2 py-0.5 rounded-full ml-1">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button className="lg:hidden text-gray-700 hover:text-ocean-accent transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
