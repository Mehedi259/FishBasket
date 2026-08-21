import { ShieldCheck, Truck, Clock, Anchor } from 'lucide-react';

export default function WhyChooseUs({ dict }: { dict?: any }) {
  const features = [
    {
      icon: <Anchor size={32} />,
      title: dict?.whyChooseUs?.f1?.title || 'Direct from Catch',
      desc: dict?.whyChooseUs?.f1?.desc || 'We source directly from local fishermen ensuring the highest quality.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: dict?.whyChooseUs?.f2?.title || '100% Chemical Free',
      desc: dict?.whyChooseUs?.f2?.desc || 'No formalin or harmful preservatives. Certified organic seafood.'
    },
    {
      icon: <Truck size={32} />,
      title: dict?.whyChooseUs?.f3?.title || 'Fast Temperature Controlled Delivery',
      desc: dict?.whyChooseUs?.f3?.desc || 'Delivered in specially designed cooling boxes to maintain freshness.'
    },
    {
      icon: <Clock size={32} />,
      title: dict?.whyChooseUs?.f4?.title || '24/7 Support',
      desc: dict?.whyChooseUs?.f4?.desc || 'Our dedicated customer service team is always here to help you.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-ocean-dark text-white">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ocean-accent rounded-l-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-tr-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {dict?.whyChooseUs?.title || 'Why Choose FishBasket?'}
            </h2>
            <div className="w-20 h-1 bg-ocean-accent mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {dict?.whyChooseUs?.subtitle || 'We are committed to bringing the ocean\'s best straight to your table. Experience unmatched freshness and premium quality.'}
            </p>
            <button className="px-8 py-4 bg-ocean-accent hover:bg-white hover:text-ocean-dark transition-colors duration-300 font-bold rounded-xl shadow-lg">
              {dict?.whyChooseUs?.cta || 'Learn More About Us'}
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-ocean-accent/20 rounded-2xl flex items-center justify-center text-ocean-accent mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
