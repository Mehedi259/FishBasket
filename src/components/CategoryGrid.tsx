import Image from 'next/image';

const categories = [
  { name: 'River Fish', image: 'https://images.unsplash.com/photo-1511247012975-f37b12d3d0c3?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sea Fish', image: 'https://images.unsplash.com/photo-1580482594056-ed873d63b27b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Shrimp & Prawns', image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=400&q=80' },
  { name: 'Small Fish', image: 'https://images.unsplash.com/photo-1627945037926-e13d9cf4bb46?auto=format&fit=crop&w=400&q=80' },
  { name: 'Premium Fish', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ready to Cook', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=80' },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-ocean-dark mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-50 bg-gray-100 shadow-sm transition-all duration-300 group-hover:border-ocean-accent group-hover:shadow-md relative mb-3">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-ocean-accent transition-colors text-center">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
