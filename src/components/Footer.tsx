import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer({ dict, lang }: { dict?: any; lang?: string }) {
  return (
    <footer id="contact" className="bg-ocean-dark text-gray-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-light/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white mb-6 group">
              <div className="p-1.5 bg-ocean-accent/20 rounded-xl group-hover:bg-ocean-accent/30 transition-colors">
                <svg className="w-6 h-6 text-ocean-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M20.89 12c0 2.22-1.42 4.41-3.4 5.92-2.18 1.66-5.06 2.8-8.23 2.8C5.2 20.72 2 17.52 2 13.52c0-1.89.9-3.7 2.37-5.08A11.1 11.1 0 0 1 11.83 5.4c2.87-.22 5.67.65 7.6 2.36 1.77 1.57 2.81 3.55 2.81 5.59a.75.75 0 0 1-1.35.45c-.32-.47-.7-.91-1.12-1.31-.38.56-.8 1.1-1.28 1.58.55.45 1.07.96 1.54 1.52-.39.51-.83.99-1.3 1.43a7.87 7.87 0 0 1-1.74-1.26c-.46.54-.97 1.03-1.51 1.49A10.74 10.74 0 0 1 8.5 18c-3.13 0-5.5-2.02-5.5-4.5 0-1.38.71-2.73 2-3.83 1.42-1.21 3.42-2 5.56-2.16 2.3-.17 4.54.54 6.08 1.93 1.08.97 1.75 2.2 1.9 3.43a2.53 2.53 0 0 0-1.63-.59 2.5 2.5 0 1 0 1.98 4.4v-4.66z"/></svg>
              </div>
              FishBasket
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {dict?.footer?.desc || 'Delivering the freshest river and sea fish straight to your doorstep.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-accent hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-accent hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{dict?.footer?.quickLinks || 'Quick Links'}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${lang}#about`} className="hover:text-ocean-accent transition-colors flex items-center gap-2"><span className="text-ocean-accent/50">›</span> {dict?.footer?.about || 'About Us'}</Link></li>
              <li><Link href={`/${lang}#products`} className="hover:text-ocean-accent transition-colors flex items-center gap-2"><span className="text-ocean-accent/50">›</span> {dict?.footer?.products || 'Products'}</Link></li>
              <li><Link href={`/${lang}/cart`} className="hover:text-ocean-accent transition-colors flex items-center gap-2"><span className="text-ocean-accent/50">›</span> {dict?.navbar?.cart || 'Cart'}</Link></li>
              <li><a href="#" className="hover:text-ocean-accent transition-colors flex items-center gap-2"><span className="text-ocean-accent/50">›</span> {dict?.footer?.privacy || 'Privacy Policy'}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{dict?.footer?.contactUs || 'Contact Details'}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-ocean-accent shrink-0 mt-1" />
                <span>{dict?.footer?.address || '123 River Road, Banani, Dhaka 1213'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-ocean-accent shrink-0" />
                <span>+880 1600-000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-ocean-accent shrink-0" />
                <span>contact@fishbasket.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-ocean-accent text-white placeholder-gray-500 transition-colors"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-ocean-accent hover:bg-ocean-light text-white px-4 rounded-lg font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} FishBasket. {dict?.footer?.rights || 'All rights reserved.'}</p>
          <div className="flex gap-4">
            <span className="opacity-50">Secure Payments via</span>
            <span className="font-bold text-white">bKash / COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
