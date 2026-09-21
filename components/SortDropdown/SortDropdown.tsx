'use client';

import React, { useState, useRef, useEffect, useId } from 'react';
import { SortOption, SORT_OPTIONS } from '@/lib/products';
import styles from './SortDropdown.module.css';

interface SortDropdownProps {
  selectedSort: SortOption;
  onSortChange: (option: SortOption) => void;
  isOpenInitial?: boolean;
}

export default function SortDropdown({
  selectedSort,
  onSortChange,
  isOpenInitial = false,
}: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(isOpenInitial);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard accessibility
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  function handleSelect(option: SortOption) {
    onSortChange(option);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        className={styles.triggerButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
      >
        <span className={styles.selectedLabel}>{selectedSort}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          className={styles.menu}
          role="listbox"
          aria-label="Sort options"
        >
          {SORT_OPTIONS.map((option) => {
            const isSelected = option === selectedSort;
            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                className={`${styles.menuItem} ${isSelected ? styles.selectedItem : ''}`}
                onClick={() => handleSelect(option)}
              >
                {isSelected && (
                  <svg
                    className={styles.checkIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                <span className={styles.itemText}>{option}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
