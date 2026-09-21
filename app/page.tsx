import React from 'react';
import type { Metadata } from 'next';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import PLPContainer from './PLPContainer';
import Footer from '@/components/Footer/Footer';
import { getProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Discover Our Products | mettā muse',
  description:
    'Explore our curated collection of artisanal bags, lifestyle accessories, and hand-crafted pieces. Discover quality craftsmanship at mettā muse.',
  keywords: ['accessories', 'artisanal', 'bags', 'handcrafted', 'mettā muse', 'fashion'],
  openGraph: {
    title: 'Discover Our Products | mettā muse',
    description:
      'Explore our curated collection of artisanal bags, lifestyle accessories, and hand-crafted pieces.',
    type: 'website',
    url: 'https://mettamuse.com/shop',
  },
  alternates: {
    canonical: 'https://mettamuse.com/shop',
  },
};

export default async function Page() {
  // Server-side fetch
  const products = await getProducts();

  // Structured Data Schema (JSON-LD) for CollectionPage & ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Discover Our Products',
    description:
      'Explore our curated collection of artisanal bags, lifestyle accessories, and hand-crafted pieces.',
    url: 'https://mettamuse.com/shop',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          description: product.description,
          image: `https://mettamuse.com${product.image}`,
          category: product.category,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: product.price,
            availability: product.isOutOfStock
              ? 'https://schema.org/OutOfStock'
              : 'https://schema.org/InStock',
          },
        },
      })),
    },
  };

  return (
    <>
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Client Interactive PLP Container */}
      <PLPContainer initialProducts={products} />

      {/* Bottom Footer */}
      <Footer />
    </>
  );
}
