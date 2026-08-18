import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-4 py-6 md:py-10">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-ocean-dark shadow-xl min-h-[400px] md:min-h-[500px] flex items-center">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1522069169874-c58ec4b76be1?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/95 via-ocean-dark/80 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 max-w-2xl text-white">
            <div className="inline-block bg-ocean-accent/20 border border-ocean-accent/30 text-ocean-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 backdrop-blur-sm">
              100% CHEMICAL FREE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              From Fishermen to <span className="text-ocean-accent">Your Kitchen.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-light">
              Experience the authentic taste of Bangladesh. Premium, freshly caught river and sea fish delivered right to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#products" className="bg-ocean-accent hover:bg-ocean-accent/90 text-ocean-dark font-bold px-8 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 shadow-lg shadow-ocean-accent/30">
                Shop Fresh Arrivals
              </Link>
              <Link href="#categories" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg backdrop-blur-md transition-all">
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
