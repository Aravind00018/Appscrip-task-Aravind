'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import ProductToolbar from '@/components/ProductToolbar/ProductToolbar';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { Product, SortOption, sortProducts } from '@/lib/products';
import styles from './PLPContainer.module.css';

interface PLPContainerProps {
  initialProducts: Product[];
}

export default function PLPContainer({ initialProducts }: PLPContainerProps) {
  // Primary state: filter sidebar visibility (Default: true)
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Sorting state (Default: RECOMMENDED)
  const [selectedSort, setSelectedSort] = useState<SortOption>('RECOMMENDED');

  // Filter criteria
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [selectedIdealFor, setSelectedIdealFor] = useState<string[]>([]);

  // Wishlist state: Card 3 is favorited by default in reference design
  const [wishlistIds, setWishlistIds] = useState<Set<number>>(() => {
    const initialSet = new Set<number>();
    initialProducts.forEach((p) => {
      if (p.initialFavorited) {
        initialSet.add(p.id);
      }
    });
    return initialSet;
  });

  // Mobile drawer states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Toggle wishlist item
  function handleToggleWishlist(id: number) {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let filtered = [...initialProducts];

    // Filter by customizable
    if (isCustomizable) {
      filtered = filtered.filter((p) => p.isCustomizable);
    }

    // Filter by Ideal For
    if (selectedIdealFor.length > 0) {
      filtered = filtered.filter((p) =>
        p.idealFor.some((item) => selectedIdealFor.includes(item))
      );
    }

    // Sort
    return sortProducts(filtered, selectedSort);
  }, [initialProducts, isCustomizable, selectedIdealFor, selectedSort]);

  return (
    <div className={styles.pageWrapper}>
      {/* Main Header */}
      <Header
        onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Navigation */}
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />

      <main id="main-content">
        {/* Hero Section with H1 */}
        <Hero />

        {/* Product Toolbar */}
        <ProductToolbar
          itemCount="3425 ITEMS"
          isFilterVisible={isFilterVisible}
          onToggleFilter={() => setIsFilterVisible((prev) => !prev)}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          onMobileFilterOpen={() => setIsMobileFilterOpen(true)}
        />

        {/* Content Section: Sidebar + Product Grid */}
        <div className={styles.mainContentContainer}>
          <div className={styles.contentLayout}>
            {/* Filter Sidebar on Desktop */}
            {isFilterVisible && (
              <FilterSidebar
                isCustomizable={isCustomizable}
                onCustomizableChange={setIsCustomizable}
                selectedIdealFor={selectedIdealFor}
                onIdealForChange={setSelectedIdealFor}
              />
            )}

            {/* Mobile Filter Drawer */}
            <FilterSidebar
              isCustomizable={isCustomizable}
              onCustomizableChange={setIsCustomizable}
              selectedIdealFor={selectedIdealFor}
              onIdealForChange={setSelectedIdealFor}
              isMobileOpen={isMobileFilterOpen}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />

            {/* Product Grid Area */}
            <section
              className={styles.gridSection}
              aria-label="Products"
            >
              <ProductGrid
                products={processedProducts}
                isFilterVisible={isFilterVisible}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
