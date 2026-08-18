import { Search, ShoppingBag, User, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-ocean-dark text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-ocean-accent" /> +880 1600-000000</span>
            <span className="flex items-center gap-1.5 hidden sm:flex"><Mail size={14} className="text-ocean-accent" /> order@fishbasket.com</span>
          </div>
          <div className="text-gray-300 font-medium">
            100% Chemical Free | Free Delivery over ৳2000
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-ocean-dark">
            <svg className="w-8 h-8 text-ocean-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M20.89 12c0 2.22-1.42 4.41-3.4 5.92-2.18 1.66-5.06 2.8-8.23 2.8C5.2 20.72 2 17.52 2 13.52c0-1.89.9-3.7 2.37-5.08A11.1 11.1 0 0 1 11.83 5.4c2.87-.22 5.67.65 7.6 2.36 1.77 1.57 2.81 3.55 2.81 5.59a.75.75 0 0 1-1.35.45c-.32-.47-.7-.91-1.12-1.31-.38.56-.8 1.1-1.28 1.58.55.45 1.07.96 1.54 1.52-.39.51-.83.99-1.3 1.43a7.87 7.87 0 0 1-1.74-1.26c-.46.54-.97 1.03-1.51 1.49A10.74 10.74 0 0 1 8.5 18c-3.13 0-5.5-2.02-5.5-4.5 0-1.38.71-2.73 2-3.83 1.42-1.21 3.42-2 5.56-2.16 2.3-.17 4.54.54 6.08 1.93 1.08.97 1.75 2.2 1.9 3.43a2.53 2.53 0 0 0-1.63-.59 2.5 2.5 0 1 0 1.98 4.4v-4.66z"/></svg>
            FishBasket
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl items-center border-2 border-gray-100 rounded-full bg-gray-50 overflow-hidden focus-within:border-ocean-accent focus-within:bg-white transition-colors duration-200">
            <input 
              type="text" 
              placeholder="Search for fresh river fish, sea fish, shrimp..." 
              className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none text-gray-700"
            />
            <button className="bg-ocean-accent text-white px-5 py-2.5 hover:bg-ocean-mid transition-colors duration-200 flex items-center gap-2 font-medium text-sm">
              <Search size={18} /> Search
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-ocean-accent transition-colors">
              <User size={22} />
              <span className="text-[10px] font-medium hidden sm:block">Account</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-ocean-accent transition-colors relative">
              <div className="relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">0</span>
              </div>
              <span className="text-[10px] font-medium hidden sm:block">Cart</span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden flex items-center border-2 border-gray-100 rounded-full bg-gray-50 overflow-hidden focus-within:border-ocean-accent focus-within:bg-white transition-colors duration-200">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
          />
          <button className="bg-ocean-accent text-white px-4 py-2 hover:bg-ocean-mid transition-colors duration-200">
            <Search size={16} />
          </button>
        </div>
      </header>

      {/* Nav Links */}
      <nav className="border-t border-gray-100 bg-white hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-8 py-3">
            <li><Link href="/" className="text-ocean-accent font-semibold text-sm tracking-wide">Home</Link></li>
            <li><Link href="#categories" className="text-gray-600 hover:text-ocean-accent font-medium text-sm tracking-wide transition-colors">Categories</Link></li>
            <li><Link href="#products" className="text-gray-600 hover:text-ocean-accent font-medium text-sm tracking-wide transition-colors">Fresh Arrivals</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-ocean-accent font-medium text-sm tracking-wide transition-colors">Today's Deals <span className="ml-1 bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">HOT</span></Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-ocean-accent font-medium text-sm tracking-wide transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
