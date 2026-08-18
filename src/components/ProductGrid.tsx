import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "Deshi Rui Fish",
        weight: "Size: 1.5kg - 2.5kg",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=800&q=80",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Fresh River Ayre Fish",
        weight: "Size: 1kg - 2kg",
        image: "https://images.unsplash.com/photo-1511247012975-f37b12d3d0c3?auto=format&fit=crop&w=800&q=80",
        badge: "Fresh"
    },
    {
        id: 3,
        name: "Padma Hilsha (Ilish)",
        weight: "Size: 1kg - 1.2kg",
        image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Fresh Sea Shrimp (Golda)",
        weight: "Size: Medium to Large",
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Deshi Koi Fish",
        weight: "Live Deshi Koi",
        image: "https://images.unsplash.com/photo-1580482594056-ed873d63b27b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Katol Fish",
        weight: "Size: 2kg - 4kg",
        image: "https://images.unsplash.com/photo-1534057308991-b3b3e4fd38ea?auto=format&fit=crop&w=800&q=80",
        badge: "Fresh"
    },
    {
        id: 7,
        name: "Mixed Small Fish",
        weight: "Fresh deshi small fish",
        image: "https://images.unsplash.com/photo-1627945037926-e13d9cf4bb46?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Premium Sea Bass",
        weight: "Fresh Catch",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        badge: "Ocean"
    }
];

const WHATSAPP_NUMBER = "8801600000000";

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ocean-dark">Fresh Arrivals</h2>
            <p className="text-gray-500 mt-2">Discover our latest catch of the day, straight from the waters to you.</p>
          </div>
          <Link href="#" className="text-ocean-accent font-semibold hover:underline hidden sm:block">View All</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const message = encodeURIComponent(`Hello FishBasket, I would like to order "${product.name}" (${product.weight}). Could you let me know the price and delivery details?`);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-ocean-accent transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 flex-1">{product.weight}</p>
                  
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 hover:bg-green-500 hover:text-white border border-green-200 hover:border-green-500 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
