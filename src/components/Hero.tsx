import Image from 'next/image';

export default function Hero() {
  return (
    <section className="px-4 py-6 md:py-10">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full bg-white">
          <Image 
            src="/images/custom_hero_banner.png" 
            alt="FishBasket Premium Seafood & Fish Banner" 
            width={1600} 
            height={600} 
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
