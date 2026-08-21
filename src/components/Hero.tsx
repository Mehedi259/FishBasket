"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero({ dict, lang }: { dict?: any; lang?: string }) {
  return (
    <section className="px-4 py-6 md:py-8 lg:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full bg-ocean-dark min-h-[500px] lg:min-h-[600px] flex items-center group">
          {/* Background Image with Parallax-like scale effect */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="https://images.unsplash.com/photo-1599839619722-39751411ea63?w=1600&auto=format&fit=crop&q=80" 
              alt="Fresh Premium Seafood" 
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[20s] ease-out"
              priority
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/95 via-ocean-dark/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full lg:w-2/3 xl:w-1/2 p-8 md:p-16 lg:p-20 text-white animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-ocean-accent/20 border border-ocean-accent/30 rounded-full backdrop-blur-sm mb-6 text-ocean-accent font-semibold text-sm tracking-wide">
              {dict?.hero?.badge || 'Premium Quality Guaranteed'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {dict?.hero?.title || 'Fresh River Fish Delivered to You'}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              {dict?.hero?.subtitle || '100% organic and fresh fish sourced straight from the rivers of Bangladesh. Taste the freshness in every bite.'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link 
                href={`/${lang}#products`} 
                className="w-full sm:w-auto px-8 py-4 bg-ocean-gradient hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] hover:-translate-y-1 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {dict?.hero?.shopNow || 'Shop Now'} <ArrowRight size={20} />
              </Link>
              
              <Link 
                href={`/${lang}#about`} 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} className="fill-white" /> {dict?.hero?.learnMore || 'Watch Video'}
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-ocean-accent/20 to-transparent mix-blend-overlay pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
