import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ocean-dark text-gray-300 pt-16">
      <div className="container mx-auto px-4 pb-12 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <svg className="w-8 h-8 text-ocean-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M20.89 12c0 2.22-1.42 4.41-3.4 5.92-2.18 1.66-5.06 2.8-8.23 2.8C5.2 20.72 2 17.52 2 13.52c0-1.89.9-3.7 2.37-5.08A11.1 11.1 0 0 1 11.83 5.4c2.87-.22 5.67.65 7.6 2.36 1.77 1.57 2.81 3.55 2.81 5.59a.75.75 0 0 1-1.35.45c-.32-.47-.7-.91-1.12-1.31-.38.56-.8 1.1-1.28 1.58.55.45 1.07.96 1.54 1.52-.39.51-.83.99-1.3 1.43a7.87 7.87 0 0 1-1.74-1.26c-.46.54-.97 1.03-1.51 1.49A10.74 10.74 0 0 1 8.5 18c-3.13 0-5.5-2.02-5.5-4.5 0-1.38.71-2.73 2-3.83 1.42-1.21 3.42-2 5.56-2.16 2.3-.17 4.54.54 6.08 1.93 1.08.97 1.75 2.2 1.9 3.43a2.53 2.53 0 0 0-1.63-.59 2.5 2.5 0 1 0 1.98 4.4v-4.66z"/></svg>
              FishBasket
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted online fish market in Bangladesh. Delivering fresh, chemical-free fish directly from the river to your kitchen.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ocean-accent hover:text-ocean-dark transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ocean-accent hover:text-ocean-dark transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ocean-accent hover:text-ocean-dark transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">River Fish</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Sea Fish</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Shrimp</Link></li>
              <li><Link href="#" className="hover:text-ocean-accent transition-colors">Small Fish</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ocean-accent shrink-0 mt-0.5" />
                <span>Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-ocean-accent shrink-0" />
                <span>+880 1600-000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ocean-accent shrink-0" />
                <span>support@fishbasket.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-[#0a151a] py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} FishBasket. All rights reserved.</p>
      </div>
    </footer>
  );
}
