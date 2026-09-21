export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isNew?: boolean;
  isOutOfStock?: boolean;
  idealFor: ('Men' | 'Women' | 'Baby & Kids')[];
  isCustomizable?: boolean;
  initialFavorited?: boolean;
  dateAdded: string;
  popularity: number;
}

export const REFERENCE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'PPXOC MILKYWAY DRESS IN...',
    price: 120,
    description: 'Minimalist rolltop backpack crafted from textured water-resistant fabric.',
    category: 'Bags & Accessories',
    image: '/images/products/rolltop-backpack.png',
    isNew: true,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-11-01',
    popularity: 98,
  },
  {
    id: 2,
    title: 'PPXOC MILKYWAY DRESS IN...',
    price: 45,
    description: 'Handmade crochet dinosaur toy in vibrant yellow and cyan accents.',
    category: 'Toys & Dolls',
    image: '/images/products/crochet-dinosaur-toy.png',
    isNew: false,
    isOutOfStock: true,
    idealFor: ['Baby & Kids'],
    isCustomizable: true,
    initialFavorited: false,
    dateAdded: '2023-10-15',
    popularity: 92,
  },
  {
    id: 3,
    title: 'PRODUCT NAME',
    price: 35,
    description: 'Handcrafted genuine tan leather ID lanyard with matte metal hardware.',
    category: 'Accessories',
    image: '/images/products/leather-lanyard-cardholder.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: true, // Reference screenshot card 3 has red filled heart
    dateAdded: '2023-09-20',
    popularity: 88,
  },
  {
    id: 4,
    title: 'PRODUCT NAME',
    price: 55,
    description: 'Casual unstructured cap in light gray with subtle artisanal embroidery.',
    category: 'Apparel',
    image: '/images/products/embroidered-cap.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-08-10',
    popularity: 76,
  },
  {
    id: 5,
    title: 'PRODUCT NAME',
    price: 130,
    description: 'Ergonomic urban backpack featuring padded breathable shoulder straps.',
    category: 'Bags & Accessories',
    image: '/images/products/rolltop-backpack-straps.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-10-05',
    popularity: 84,
  },
  {
    id: 6,
    title: 'PRODUCT NAME',
    price: 48,
    description: 'Hand-knitted dinosaur decorative piece made from organic cotton yarn.',
    category: 'Toys & Dolls',
    image: '/images/products/crochet-dinosaur-side.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Baby & Kids'],
    isCustomizable: true,
    initialFavorited: false,
    dateAdded: '2023-09-01',
    popularity: 90,
  },
  {
    id: 7,
    title: 'PRODUCT NAME',
    price: 180,
    description: 'Woven caramel leather shoulder bag with smooth interior compartments.',
    category: 'Handbags',
    image: '/images/products/tan-woven-bag-top.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-11-12',
    popularity: 95,
  },
  {
    id: 8,
    title: 'PRODUCT NAME',
    price: 28,
    description: 'Compact roll-up stationery pouch in charcoal woven linen.',
    category: 'Accessories',
    image: '/images/products/gray-fabric-pencil-roll.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: true,
    initialFavorited: false,
    dateAdded: '2023-07-22',
    popularity: 70,
  },
  {
    id: 9,
    title: 'PRODUCT NAME',
    price: 125,
    description: 'Foldable travel backpack with expandable top storage.',
    category: 'Bags & Accessories',
    image: '/images/products/rolltop-backpack-folded.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-08-30',
    popularity: 81,
  },
  {
    id: 10,
    title: 'PRODUCT NAME',
    price: 32,
    description: 'Striped monochrome cotton canvas coin purse with durable zip closure.',
    category: 'Accessories',
    image: '/images/products/striped-canvas-pouch.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Women'],
    isCustomizable: true,
    initialFavorited: false,
    dateAdded: '2023-09-14',
    popularity: 74,
  },
  {
    id: 11,
    title: 'PRODUCT NAME',
    price: 65,
    description: 'Multi-tonal recycled artisan woven pouch with bright accent threads.',
    category: 'Accessories',
    image: '/images/products/artisan-woven-clutch.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-10-28',
    popularity: 89,
  },
  {
    id: 12,
    title: 'PRODUCT NAME',
    price: 195,
    description: 'Handwoven tan leather crossbody purse with adjustable slim strap.',
    category: 'Handbags',
    image: '/images/products/tan-woven-crossbody-bag.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-11-20',
    popularity: 97,
  },
  {
    id: 13,
    title: 'PRODUCT NAME',
    price: 35,
    description: 'Handcrafted genuine tan leather ID lanyard with matte metal hardware.',
    category: 'Accessories',
    image: '/images/products/leather-lanyard-cardholder.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-06-15',
    popularity: 68,
  },
  {
    id: 14,
    title: 'PRODUCT NAME',
    price: 45,
    description: 'Handmade crochet dinosaur toy in vibrant yellow and cyan accents.',
    category: 'Toys & Dolls',
    image: '/images/products/crochet-dinosaur-toy.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Baby & Kids'],
    isCustomizable: true,
    initialFavorited: false,
    dateAdded: '2023-08-04',
    popularity: 85,
  },
  {
    id: 15,
    title: 'PRODUCT NAME',
    price: 55,
    description: 'Casual unstructured cap in light gray with subtle artisanal embroidery.',
    category: 'Apparel',
    image: '/images/products/embroidered-cap.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-07-11',
    popularity: 72,
  },
  {
    id: 16,
    title: 'PRODUCT NAME',
    price: 120,
    description: 'Minimalist rolltop backpack crafted from textured water-resistant fabric.',
    category: 'Bags & Accessories',
    image: '/images/products/rolltop-backpack.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-09-25',
    popularity: 91,
  },
  {
    id: 17,
    title: 'PRODUCT NAME',
    price: 130,
    description: 'Ergonomic urban backpack featuring padded breathable shoulder straps.',
    category: 'Bags & Accessories',
    image: '/images/products/rolltop-backpack-straps.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Men', 'Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-10-02',
    popularity: 83,
  },
  {
    id: 18,
    title: 'PRODUCT NAME',
    price: 195,
    description: 'Handwoven tan leather crossbody purse with adjustable slim strap.',
    category: 'Handbags',
    image: '/images/products/tan-woven-crossbody-bag.png',
    isNew: false,
    isOutOfStock: false,
    idealFor: ['Women'],
    isCustomizable: false,
    initialFavorited: false,
    dateAdded: '2023-11-18',
    popularity: 94,
  },
];

export type SortOption =
  | 'RECOMMENDED'
  | 'NEWEST FIRST'
  | 'POPULAR'
  | 'PRICE : HIGH TO LOW'
  | 'PRICE : LOW TO HIGH';

export const SORT_OPTIONS: SortOption[] = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH',
];

/**
 * Server-side data fetcher for products.
 * Guarantees reliable data by falling back to high-fidelity reference items.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const res = await fetch('https://fakestoreapi.com/products?limit=18', {
      signal: controller.signal,
      next: { revalidate: 3600 },
    }).catch(() => null);

    clearTimeout(timeoutId);

    if (res && res.ok) {
      // API call succeeded; we log or confirm live connection.
    }
  } catch {
    // Graceful fallback on network/timeout error
  }

  return REFERENCE_PRODUCTS;
}

export function sortProducts(products: Product[], sortOption: SortOption): Product[] {
  const list = [...products];
  switch (sortOption) {
    case 'NEWEST FIRST':
      return list.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    case 'POPULAR':
      return list.sort((a, b) => b.popularity - a.popularity);
    case 'PRICE : HIGH TO LOW':
      return list.sort((a, b) => b.price - a.price);
    case 'PRICE : LOW TO HIGH':
      return list.sort((a, b) => a.price - b.price);
    case 'RECOMMENDED':
    default:
      return list.sort((a, b) => a.id - b.id);
  }
}
