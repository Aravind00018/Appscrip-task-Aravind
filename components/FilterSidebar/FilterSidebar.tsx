'use client';

import React from 'react';
import FilterSection from './FilterSection';
import styles from './FilterSidebar.module.css';

interface FilterSidebarProps {
  isCustomizable: boolean;
  onCustomizableChange: (val: boolean) => void;
  selectedIdealFor: string[];
  onIdealForChange: (selected: string[]) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  defaultExpandedIdealFor?: boolean;
}

export default function FilterSidebar({
  isCustomizable,
  onCustomizableChange,
  selectedIdealFor,
  onIdealForChange,
  isMobileOpen = false,
  onCloseMobile,
  defaultExpandedIdealFor = false,
}: FilterSidebarProps) {
  const idealForOptions = ['Men', 'Women', 'Baby & Kids'];

  function handleIdealForToggle(option: string) {
    if (selectedIdealFor.includes(option)) {
      onIdealForChange(selectedIdealFor.filter((item) => item !== option));
    } else {
      onIdealForChange([...selectedIdealFor, option]);
    }
  }

  function handleUnselectAll() {
    onIdealForChange([]);
  }

  const sidebarContent = (
    <div className={styles.sidebarContent}>
      {/* Mobile Drawer Header */}
      {isMobileOpen && (
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>FILTERS</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onCloseMobile}
            aria-label="Close filters"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Customizable Checkbox */}
      <div className={styles.customizableRow}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={isCustomizable}
            onChange={(e) => onCustomizableChange(e.target.checked)}
          />
          <span className={styles.customizableText}>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* 1. IDEAL FOR */}
      <FilterSection
        title="IDEAL FOR"
        defaultExpanded={defaultExpandedIdealFor}
        valueSummary={selectedIdealFor.length > 0 ? selectedIdealFor.join(', ') : 'All'}
      >
        <div className={styles.filterOptionsList}>
          <button
            type="button"
            className={styles.unselectButton}
            onClick={handleUnselectAll}
          >
            Unselect all
          </button>

          {idealForOptions.map((option) => (
            <label key={option} className={styles.optionLabel}>
              <input
                type="checkbox"
                className={styles.checkboxInput}
                checked={selectedIdealFor.includes(option)}
                onChange={() => handleIdealForToggle(option)}
              />
              <span className={styles.optionText}>{option}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 2. OCCASION */}
      <FilterSection title="OCCASION" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Casual', 'Formal', 'Party', 'Sport'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 3. WORK */}
      <FilterSection title="WORK" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Handmade', 'Machine Made', 'Artisanal'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 4. FABRIC */}
      <FilterSection title="FABRIC" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Cotton', 'Leather', 'Linen', 'Wool', 'Canvas'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 5. SEGMENT */}
      <FilterSection title="SEGMENT" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Luxury', 'Regular', 'Premium'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 6. SUITABLE FOR */}
      <FilterSection title="SUITABLE FOR" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['All Weather', 'Summer', 'Winter'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 7. RAW MATERIALS */}
      <FilterSection title="RAW MATERIALS" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Organic Yarn', 'Vegetable Tanned Leather', 'Recycled Fabric'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* 8. PATTERN */}
      <FilterSection title="PATTERN" valueSummary="All">
        <div className={styles.filterOptionsList}>
          {['Solid', 'Striped', 'Embroidered', 'Woven'].map((item) => (
            <label key={item} className={styles.optionLabel}>
              <input type="checkbox" className={styles.checkboxInput} />
              <span className={styles.optionText}>{item}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={styles.desktopSidebar} aria-label="Product Filters">
        {sidebarContent}
      </aside>

      {/* Mobile Filter Drawer */}
      {isMobileOpen && (
        <div className={styles.mobileOverlay} onClick={onCloseMobile}>
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Filter options"
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
