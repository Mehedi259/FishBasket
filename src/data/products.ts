export interface Product {
  id: string;
  nameEn: string;
  nameBn: string;
  price: number;
  image: string;
  category: 'river' | 'sea' | 'dry' | 'frozen' | 'exotic';
  descriptionEn: string;
  descriptionBn: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    nameEn: 'Premium Padma Hilsha',
    nameBn: 'প্রিমিয়াম পদ্মা ইলিশ',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&auto=format&fit=crop&q=80',
    category: 'river',
    descriptionEn: 'Finest silver Hilsha freshly sourced from the Padma river. Unmatched authentic taste.',
    descriptionBn: 'পদ্মা নদীর সেরা তাজা রুপালি ইলিশ। অতুলনীয় খাঁটি স্বাদ।',
    badge: 'Top Seller'
  },
  {
    id: 'p2',
    nameEn: 'Giant Tiger Prawn',
    nameBn: 'গলদা চিংড়ি',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&auto=format&fit=crop&q=80',
    category: 'river',
    descriptionEn: 'Export quality giant tiger prawns. Sweet meat and perfect for grills.',
    descriptionBn: 'রপ্তানি মানের গলদা চিংড়ি। মিষ্টি মাংস এবং গ্রিলের জন্য উপযুক্ত।',
    badge: 'Premium'
  },
  {
    id: 'p3',
    nameEn: 'Fresh Coral (Bhetki)',
    nameBn: 'তাজা কোরাল (ভেটকি)',
    price: 850,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&auto=format&fit=crop&q=80',
    category: 'sea',
    descriptionEn: 'Delicious Coral fish, perfect for boneless fillets and premium curries.',
    descriptionBn: 'সুস্বাদু কোরাল মাছ, কাঁটামুক্ত ফিলে এবং প্রিমিয়াম রান্নার জন্য উপযুক্ত।',
    badge: 'Fresh Catch'
  },
  {
    id: 'p4',
    nameEn: 'Rupchanda (Pomfret)',
    nameBn: 'রূপচাঁদা',
    price: 950,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
    category: 'sea',
    descriptionEn: 'Silver sea pomfret, an absolute delicacy for frying and BBQ parties.',
    descriptionBn: 'সামুদ্রিক রূপচাঁদা, ভাজা এবং বারবিকিউ পার্টির জন্য দারুণ।',
  },
  {
    id: 'p5',
    nameEn: 'Fresh Pabda',
    nameBn: 'তাজা পাবদা',
    price: 600,
    image: 'https://images.unsplash.com/photo-1511247547141-863a01ff6c92?w=800&auto=format&fit=crop&q=80',
    category: 'river',
    descriptionEn: 'Soft and tasty Pabda fish from local sweet waters. A household favorite.',
    descriptionBn: 'মিঠা পানির নরম এবং সুস্বাদু পাবদা মাছ। পরিবারের সবার প্রিয়।',
  },
  {
    id: 'p6',
    nameEn: 'Norwegian Salmon',
    nameBn: 'নরওয়েজিয়ান স্যামন',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=80',
    category: 'frozen',
    descriptionEn: 'Imported fresh frozen Norwegian Salmon fillets. Rich in Omega-3.',
    descriptionBn: 'আমদানিকৃত তাজা হিমায়িত নরওয়েজিয়ান স্যামন ফিলে। ওমেগা-৩ সমৃদ্ধ।',
    badge: 'Imported'
  },
  {
    id: 'p7',
    nameEn: 'Fresh Crab (Kakra)',
    nameBn: 'তাজা কাঁকড়া',
    price: 700,
    image: 'https://images.unsplash.com/photo-1582845607147-3843577d341f?w=800&auto=format&fit=crop&q=80',
    category: 'sea',
    descriptionEn: 'Meaty mud crabs from the coast. Perfect for spicy crab masala.',
    descriptionBn: 'উপকূলের মাংসল কাঁকড়া। মশলাদার কাঁকড়া ভুনা এর জন্য নিখুঁত।',
  },
  {
    id: 'p8',
    nameEn: 'Premium Dry Loitta',
    nameBn: 'প্রিমিয়াম লইট্যা শুটকি',
    price: 650,
    image: 'https://images.unsplash.com/photo-1563283281-9b168661fc8a?w=800&auto=format&fit=crop&q=80',
    category: 'dry',
    descriptionEn: 'Finest quality sun-dried Loitta fish from Cox\'s Bazar. Perfectly processed.',
    descriptionBn: 'কক্সবাজারের সেরা মানের রোদে শুকানো লইট্যা শুটকি। নিখুঁতভাবে প্রক্রিয়াজাত।',
  }
];
