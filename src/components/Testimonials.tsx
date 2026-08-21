import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Rahim Uddin',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    textEn: 'The quality of the Hilsha is unmatched. My customers always compliment the freshness. Highly recommended!',
    textBn: 'ইলিশের মান অতুলনীয়। আমার গ্রাহকরা সবসময় সতেজতার প্রশংসা করে। আমি অবশ্যই সুপারিশ করছি!'
  },
  {
    id: 2,
    name: 'Tania Akter',
    role: 'Home Chef',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80',
    textEn: 'I have been buying from FishBasket for 6 months. Delivery is always on time, and the fish is perfectly clean.',
    textBn: 'আমি ৬ মাস ধরে FishBasket থেকে কিনছি। ডেলিভারি সবসময় সময়মতো হয় এবং মাছ পুরোপুরি পরিষ্কার থাকে।'
  },
  {
    id: 3,
    name: 'Zayed Khan',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    textEn: 'The tiger prawns were huge and tasted amazing when grilled. Definitely the best seafood supplier in town.',
    textBn: 'গলদা চিংড়িগুলো বিশাল ছিল এবং গ্রিল করার পর দারুণ স্বাদ ছিল। নিঃসন্দেহে শহরের সেরা সামুদ্রিক খাবারের সরবরাহকারী।'
  }
];

export default function Testimonials({ dict, lang }: { dict?: any; lang: string }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-dark mb-4">{dict?.testimonials?.title || 'What Our Customers Say'}</h2>
          <div className="w-24 h-1 bg-ocean-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">Don't just take our word for it. Here is what our community of seafood lovers has to say about our quality and service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-ocean-bg p-8 rounded-3xl relative mt-10 hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-gray-100">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-10 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{lang === 'bn' ? testimonial.textBn : testimonial.textEn}"
                </p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <span className="text-sm text-ocean-accent font-medium">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
