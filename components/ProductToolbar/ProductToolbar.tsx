'use client';

import React from 'react';
import SortDropdown from '../SortDropdown/SortDropdown';
import { SortOption } from '@/lib/products';
import styles from './ProductToolbar.module.css';

interface ProductToolbarProps {
  itemCount?: string;
  isFilterVisible: boolean;
  onToggleFilter: () => void;
  selectedSort: SortOption;
  onSortChange: (option: SortOption) => void;
  onMobileFilterOpen?: () => void;
}

export default function ProductToolbar({
  itemCount = '3425 ITEMS',
  isFilterVisible,
  onToggleFilter,
  selectedSort,
  onSortChange,
  onMobileFilterOpen,
}: ProductToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.container}>
        {/* Left: Item Count & Filter Toggle */}
        <div className={styles.leftGroup}>
          <span className={styles.itemCount}>{itemCount}</span>

          {/* Desktop Filter Toggle */}
          <button
            type="button"
            className={styles.filterToggleDesktop}
            onClick={onToggleFilter}
            aria-label={isFilterVisible ? 'Hide filter sidebar' : 'Show filter sidebar'}
          >
            <svg
              className={`${styles.arrowIcon} ${isFilterVisible ? '' : styles.arrowRotated}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {isFilterVisible ? (
                <polyline points="15 18 9 12 15 6" />
              ) : (
                <polyline points="9 18 15 12 9 6" />
              )}
            </svg>
            <span className={styles.toggleText}>
              {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
            </span>
          </button>

          {/* Mobile Filter Button */}
          <button
            type="button"
            className={styles.filterToggleMobile}
            onClick={onMobileFilterOpen || onToggleFilter}
            aria-label="Open filter options"
          >
            <span className={styles.toggleText}>FILTER</span>
          </button>
        </div>

        {/* Right: Sort Dropdown */}
        <div className={styles.rightGroup}>
          <SortDropdown
            selectedSort={selectedSort}
            onSortChange={onSortChange}
          />
        </div>
      </div>
    </div>
  );
}
