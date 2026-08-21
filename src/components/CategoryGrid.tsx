import Image from 'next/image';

export default function CategoryGrid({ dict }: { dict?: any }) {
  const categories = [
    { name: dict?.categories?.riverFish || 'River Fish', image: '/images/rui_generated.jpg' },
    { name: dict?.categories?.seaFish || 'Sea Fish', image: '/images/salmon.jpg' },
    { name: dict?.categories?.dryFish || 'Dry Fish', image: '/images/shrimp.jpg' },
    { name: dict?.categories?.frozen || 'Frozen', image: '/images/bass.jpg' }
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-ocean-dark mb-4">{dict?.categories?.title || 'Shop by Category'}</h2>
          <div className="w-24 h-1 bg-ocean-gradient mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-50 bg-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:border-ocean-accent group-hover:shadow-[0_8px_30px_rgba(0,180,216,0.2)] group-hover:-translate-y-2 relative mb-4">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 128px, 160px"
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
