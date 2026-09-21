'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  isFavorited: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ProductCard({
  product,
  isFavorited,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <article className={styles.card}>
      {/* Product Image Container */}
      <div className={styles.imageContainer}>
        {product.isNew && (
          <span className={styles.newBadge}>NEW PRODUCT</span>
        )}

        <Image
          src={product.image}
          alt={product.description || product.title}
          width={300}
          height={399}
          className={`${styles.image} ${product.isOutOfStock ? styles.outOfStockImage : ''}`}
          loading="lazy"
        />

        {product.isOutOfStock && (
          <div className={styles.outOfStockBanner} aria-label="Out of Stock">
            <span className={styles.outOfStockText}>OUT OF STOCK</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className={styles.content}>
        <h2 className={styles.title}>{product.title}</h2>

        <div className={styles.pricingRow}>
          <p className={styles.pricingPrompt}>
            <span className={styles.underlineLink}>Sign in</span> or Create an account to see pricing
          </p>

          <button
            type="button"
            className={`${styles.wishlistButton} ${isFavorited ? styles.favorited : ''}`}
            onClick={() => onToggleFavorite(product.id)}
            aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isFavorited ? (
              <svg
                className={styles.heartFilled}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#EB4C6B"
                stroke="#EB4C6B"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            ) : (
              <svg
                className={styles.heartOutline}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
