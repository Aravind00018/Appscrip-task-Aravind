'use client';

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/lib/products';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  isFilterVisible: boolean;
  wishlistIds: Set<number>;
  onToggleWishlist: (id: number) => void;
}

export default function ProductGrid({
  products,
  isFilterVisible,
  wishlistIds,
  onToggleWishlist,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.emptyText}>No products found matching your selected filters.</p>
      </div>
    );
  }

  return (
    <div
      className={`${styles.grid} ${
        isFilterVisible ? styles.gridThreeCols : styles.gridFourCols
      }`}
      role="region"
      aria-label="Product catalogue"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorited={wishlistIds.has(product.id)}
          onToggleFavorite={onToggleWishlist}
          priority={index < 4}
        />
      ))}
    </div>
  );
}
