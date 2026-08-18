import Image from 'next/image';

const categories = [
  { name: 'River Fish', image: '/images/rui_generated.jpg' },
  { name: 'Sea Fish', image: '/images/salmon.jpg' },
  { name: 'Shrimp & Prawns', image: '/images/shrimp.jpg' },
  { name: 'Small Fish', image: '/images/bass.jpg' },
  { name: 'Premium Fish', image: '/images/hilsa_generated.jpg' },
  { name: 'Ready to Cook', image: '/images/rui_generated.jpg' },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-12">
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
